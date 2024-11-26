'use client'
import axios from 'axios';
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function SignupComp() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [error, setError] = useState(null)
    const [confirmationCode, setConfirmationCode] = useState('')
    const router = useRouter();
    const [step, setStep] = useState(1);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:8000/auth/register', { ...formData });
            alert(`You've successfully registered!`);
            window.location.href = '/auth/login';
        } catch (error) {
            console.error('Registration error:', error.response?.data || error.message);
            alert('Registration error!');
        }
    };

    const handleCodeSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://127.0.0.1:8000/auth/verify-code', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: formData.email, code: confirmationCode }),
            });

            if (response.ok) {
                alert('Confirmation was successful');
                router.push('/')
            } else {
                const result = await response.json();
                setError(`Error: ${result.message}`);
            }
        } catch (err) {
            setError('Server error. Try it letter.')
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }

    return (
        <div className='register'>
            {step === 1 && (
                <form onSubmit={handleSubmit}>
                    <h1>Registration</h1>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <div className="register-form__section">
                        <label>Full Name</label>
                        <input value={formData.name} onChange={handleChange} type="text" required />
                    </div>
                    <div className="register-form__section">
                        <label>Email</label>
                        <input value={formData.email} onChange={handleChange} type="email" required />
                    </div>
                    <div className="register-form__section">
                        <label>Password</label>
                        <input value={formData.password} onChange={handleChange} type="password" required />
                    </div>
                    <div className="register-form__section">
                        <label >Confirm Password</label>
                        <input value={formData.confirmPassword} onChange={handleChange} type="password" required />
                    </div>
                    <div className="register-form__section">
                        <button type='submit'>Submit</button>
                    </div>
                    <div className="register-form__section">
                        <p>Already have an account? <Link href="/auth/login">Login</Link></p>
                    </div>
                </form>
            )}

            {step === 2 && (
                <form onSubmit={handleCodeSubmit}>
                    <h2>A confirmation code has been sent to your email.</h2>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <div className="register-form__section">
                        <label>Confirm Code</label>
                        <input type="text" value={confirmationCode} onChange={(e) => setConfirmationCode(e.target.value)} required />
                    </div>
                    <div className="register-form__section">
                        <button type='submit'>Submit</button>
                    </div>
                    <div className="register-form__section"></div>
                </form>
            )}
        </div>
    )
};