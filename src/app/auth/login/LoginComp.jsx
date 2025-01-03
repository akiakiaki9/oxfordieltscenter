'use client';
import axios from 'axios';
import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

export default function LoginComp() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setIsLoading(true);

        try {
            const response = await axios.post(
                `https://oxfordstudycenter-production.up.railway.app/en/api/users/login/`, {
                email: formData.email,
                password: formData.password
            }, {
                headers: { 'Content-Type': 'application/json' }
            }
            );

            if (response.status === 200) {

                Cookies.set('access', response.data.access, { path: '/' });
                Cookies.set('refresh', response.data.refresh, { path: '/' });
                Cookies.set('userId', response.data.user_id, { path: '/' });
                alert('Login successful!');
                router.push('/');
            }
        } catch (err) {
            // console.error('Error during login:', err.response?.data || err.message);
            setError('Incorrect email or password!');
        } finally {
            setIsLoading(false);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div className="registration">
            <div className="auth">
                <Link href="/">
                    <img src="/images/oxfordlogo.png" alt="Oxford IELTS Center Logo" />
                </Link>
            </div>
            <div className="register">
                <form onSubmit={handleSubmit}>
                    <div className="register-header">
                        <h1>Authorization</h1>
                        <p>Please enter your login details</p>
                    </div>
                    {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
                    <div className="register-form__section">
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="register-form__section">
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="register-form__section">
                        <button type="submit" disabled={isLoading}>{isLoading ? 'Loading...' : 'Submit'}</button>
                    </div>
                    <div className="register-form__section">
                        <p>
                            Not registered yet? <Link href="/auth/signup">Sign Up</Link>
                        </p>
                        <p>
                            Forgot password? <Link href="/auth/forgot-password">Reset</Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};