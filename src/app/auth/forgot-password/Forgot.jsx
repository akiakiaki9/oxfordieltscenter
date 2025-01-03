'use client'
import axios from 'axios'
import Cookies from 'js-cookie'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

export default function ForgotComp() {
    const [step, setStep] = useState(1);
    const [email, setEmail] = useState('');
    const [confirmationCode, setConfirmationCode] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const router = useRouter();

    // шаг 1 отправка почты
    const handleEmailSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await axios.post('https://oxfordstudycenter-production.up.railway.app/en/api/users/forgot-password/',
                { email: email },
                { headers: { 'Content-Type': 'application/json' } });

            Cookies.set('access', response.data.access, { path: '/' });
            Cookies.set('refresh', response.data.refresh, { path: '/' });
            setStep(2);
        } catch (error) {
            console.error('Error sending email:', error.response?.data || error.message);
            setError('Failed to send confirmation code.');
        } finally {
            setIsLoading(false);
        }
    };

    // шаг 2 отправка кода подтверждения
    const handleConfirmationSubmit = async (e) => {
        e.preventDefault();

        const accessToken = Cookies.get('access');
        const refreshToken = Cookies.get('refresh');
        setIsLoading(true);

        if (!accessToken) {
            if (!refreshToken) {
                setError('You need to login');
                setIsLoading(false);
                return;
            }

            try {
                const refreshResponse = await axios.post('https://oxfordstudycenter-production.up.railway.app/en/api/login/refresh/', {
                    refresh: refreshToken
                }, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });

                Cookies.set('access', refreshResponse.data.access, { path: '/' });
                setIsLoading(false);
                return;
            } catch (refreshError) {
                console.error('Error refreshing token:', refreshError.response?.data || refreshError.message);
                setError('Failed to refresh access token.');
                setIsLoading(false);
                return;
            }
        }

        try {
            const response = await axios.post('https://oxfordstudycenter-production.up.railway.app/en/users/verify/', {
                email: email,
                code: confirmationCode,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`,
                }
            });

            if (response.data.success) {
                setStep(3);
            } else {
                setError('Invalid confirmation code.');
            }
        } catch (error) {
            console.error('Error verifying code:', error.response?.data || error.message);
            setError('Failed to verify confirmation code.');
        } finally {
            setIsLoading(false);
        }
    };

    // Шаг 3: Регистрация
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setError('Passwords do not match.');
            return;
        }

        const accessToken = Cookies.get('access');
        const refreshToken = Cookies.get('refresh');
        setIsLoading(true);

        if (!accessToken) {
            if (!refreshToken) {
                setError('You need to login');
                setIsLoading(false);
                return;
            }

            try {
                const refreshResponse = await axios.post('https://oxfordstudycenter-production.up.railway.app/en/api/login/refresh/', {
                    refresh: refreshToken
                },
                    {
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    });

                Cookies.set('access', refreshResponse.data.access, { path: '/' });
                setIsLoading(false);
                return;
            } catch (refreshError) {
                console.error('Error refreshing token:', refreshError.response?.data || refreshError.message);
                setError('Failed to refresh access token.');
                setIsLoading(false);
                return;
            }
        }

        try {
            const response = await axios.put('https://oxfordstudycenter-production.up.railway.app/en/api/users/reset-password/', {
                password: password,
                confirm_password: confirmPassword
            },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${accessToken}`
                    }
                });

            Cookies.set('access', response.data.access, { path: '/' });
            Cookies.set('refresh', response.data.refresh, { path: '/' });
            Cookies.set('userId', response.data.user_id, { path: '/' });
            router.push('/');
        } catch (error) {
            console.error('Registration error:', error.response?.data || error.message);
            setError('Registration error.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className='registration'>
            <div className="auth">
                <Link href="/"><img src="/images/oxfordlogo.png" alt="Oxford IELTS Center Logo" /></Link>
            </div>
            <div className="register">
                {step === 1 && (
                    <form onSubmit={handleEmailSubmit}>
                        <div className="register-header">
                            <h1>Reset Password</h1>
                            <p>Enter your email to reset password</p>
                        </div>
                        {error && <p className='message'>{error}</p>}
                        <div className="register-form__section">
                            <label>Email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="register-form__section">
                            <button type='submit' disabled={isLoading}>{isLoading ? 'Loading...' : 'Send Confirmation Code'}</button>
                        </div>
                    </form>
                )}
                {step === 2 && (
                    <form onSubmit={handleConfirmationSubmit}>
                        <div className="register-header">
                            <h1>Enter confirmation code</h1>
                            <p>Confirmation code has been sent to your email</p>
                        </div>
                        {error && <p className='message'>{error}</p>}
                        <div className="register-form__section">
                            <label>Confirmation Code</label>
                            <input
                                type="number"
                                name="code"
                                id="code"
                                value={confirmationCode}
                                onChange={(e) => setConfirmationCode(e.target.value)}
                                required
                            />
                        </div>
                        <div className="register-form__section">
                            <button type='submit' disabled={isLoading}>{isLoading ? 'Loading...' : 'Verify code'}</button>
                        </div>
                    </form>
                )}
                {step === 3 && (
                    <form onSubmit={handleSubmit}>
                        <div className="register-header">
                            <h1>Enter Your New Password</h1>
                            <p>Enter New Password</p>
                        </div>
                        {error && <p className='message'>{error}</p>}
                        <div className="register-form__section">
                            <label>Password</label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                minLength={8}
                            />
                        </div>
                        <div className="register-form__section">
                            <label>Confirm Password</label>
                            <input
                                type="password"
                                name="confirmPassword"
                                id="confirmPassword"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                                minLength={8}
                            />
                        </div>
                        <div className="register-form__section">
                            <button type='submit' disabled={isLoading}>{isLoading ? 'Loading...' : 'Submit'}</button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
};