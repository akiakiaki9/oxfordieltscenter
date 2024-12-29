'use client';
import axios from 'axios';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Cookies from 'js-cookie';

export default function SignupComp() {
    const [formData, setFormData] = useState({
        email: '',
        name: '',
        password: '',
        confirmPassword: '',
        confirmationCode: '',
    });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [step, setStep] = useState(1);
    const router = useRouter();

    // Обработка изменений в инпутах
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Шаг 1: Отправка email
    const handleEmailSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await axios.post('https://oxfordstudycenter-production.up.railway.app/api/users/signup/',
                { email: formData.email },
                { headers: { 'Content-Type': 'application/json' } });

            // Сохранение токенов в cookies
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

        // Если accessToken отсутствует, пытаемся обновить его с помощью refreshToken
        if (!accessToken) {
            if (!refreshToken) {
                setError('Error token');
                setIsLoading(false);
                return;
            }

            try {
                const refreshResponse = await axios.post('https://oxfordstudycenter-production.up.railway.app/api/login/refresh/', {
                    refresh: refreshToken
                }, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });

                // Сохраняем новый access token
                Cookies.set('access', refreshResponse.data.access, { path: '/' });
                setIsLoading(false);
                return; // После обновления токенов, выходим из функции, чтобы пользователь не отправил форму повторно
            } catch (refreshError) {
                console.error('Error refreshing token:', refreshError.response?.data || refreshError.message);
                setError('Failed to refresh access token.');
                setIsLoading(false);
                return;
            }
        }

        try {
            const response = await axios.post('https://oxfordstudycenter-production.up.railway.app/api/users/verify/', {
                email: formData.email,
                code: formData.confirmationCode,
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

        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match.');
            return;
        }

        const accessToken = Cookies.get('access');
        const refreshToken = Cookies.get('refresh');
        setIsLoading(true);

        if (!accessToken) {
            if (!refreshToken) {
                setError('Error token');
                setIsLoading(false);
                return;
            }

            try {
                const refreshResponse = await axios.post('https://oxfordstudycenter-production.up.railway.app/api/login/refresh/', {
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
            const response = await axios.put('https://oxfordstudycenter-production.up.railway.app/api/users/change-user/', {
                email: formData.email,
                fullname: formData.name,
                password: formData.password,
                confirm_password: formData.confirmPassword
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
            router.push('/')
            alert('You\'ve successfully registered!');
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
                            <h1>Registration</h1>
                            <p>Enter your email to confirm</p>
                        </div>
                        {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
                        <div className="register-form__section">
                            <label>Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className='register__button-email'
                                required
                            />
                        </div>
                        <div className="register-form__section">
                            <button type="submit" disabled={isLoading}>{isLoading ? 'Loading...' : 'Send Confirmation Code'}</button>
                        </div>
                        <div className="register-form__section">
                            <p>Already have an account? <Link href="/auth/login">Login</Link></p>
                        </div>
                    </form>
                )}
                {step === 2 && (
                    <form onSubmit={handleConfirmationSubmit}>
                        <div className="register-header">
                            <h1>Enter Confirmation Code</h1>
                            <p>Confirmation code has been sent to your email</p>
                        </div>
                        {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
                        <div className="register-form__section">
                            <label>Confirmation Code</label>
                            <input
                                type="text"
                                name="confirmationCode"
                                value={formData.confirmationCode}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="register-form__section">
                            <button type="submit" disabled={isLoading}>{isLoading ? 'Loading...' : 'Verify Code'}</button>
                        </div>
                    </form>
                )}
                {step === 3 && (
                    <form onSubmit={handleSubmit}>
                        <div className="register-header">
                            <h1>Registration</h1>
                            <p>Fill in all fields to register</p>
                        </div>
                        {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
                        <div className="register-form__section">
                            <label>Full Name</label>
                            <input
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                type="text"
                                required
                            />
                        </div>
                        <div className="register-form__section">
                            <label>Password</label>
                            <input
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                type="password"
                                required
                            />
                        </div>
                        <div className="register-form__section">
                            <label>Confirm Password</label>
                            <input
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                type="password"
                                required
                            />
                        </div>
                        <div className="register-form__section">
                            <button type="submit" disabled={isLoading}>{isLoading ? 'Loading...' : 'Submit'}</button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
};