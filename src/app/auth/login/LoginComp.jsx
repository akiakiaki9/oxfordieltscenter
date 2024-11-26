'use client'
import axios from 'axios'
import Link from 'next/link'
import React, { useState } from 'react'

export default function LoginComp() {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        try {
            const response = await axios.post(`http://127.0.0.1:8000/auth/login`, formData);

            if (response.status = 200) {
                const { token, userData } = response.data;

                localStorage.setItem('auth_token', token);
                window.location.href = '/';
            }
        } catch (err) {
            setError('Incorrect email or password!')
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div className='register'>
            <form onSubmit={handleSubmit}>
                <h1>Authorization</h1>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <div className="register-form__section">
                    <label>Email</label>
                    <input type="email" value={formData.email} onChange={handleChange} />
                </div>
                <div className="register-form__section">
                    <label>Password</label>
                    <input type="password" value={formData.password} onChange={handleChange} />
                </div>
                <div className="registration form__section">
                    <button type='submit'>Submit</button>
                </div>
                <div className="register-form__section">
                    <p>Not registered yet? <Link href="/auth/signup">Sign Up</Link></p>
                </div>
            </form>
        </div>
    )
};