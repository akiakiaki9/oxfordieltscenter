'use client';
import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import Link from 'next/link';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

export default function AddFeedback({ data }) {
    const [hoverRating, setHoverRating] = useState(0);
    const [review, setReview] = useState('');
    const [message, setMessage] = useState('');
    const [successfully, setSuccessfully] = useState(null);
    const [currentRating, setCurrentRating] = useState(null);
    const router = useRouter();

    const handleRating = async (selectedRating) => {
        const accessToken = Cookies.get('access');
        const refreshToken = Cookies.get('refresh');

        if (!accessToken) {
            if (!refreshToken) {
                setMessage('You need to login!');
                router.push('/auth/login/');
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

                Cookies.set('access', refreshResponse.data.access, { path: '/' });
                return;
            } catch (refreshError) {
                console.error('Error refreshing token:', refreshError.response?.data || refreshError.message);
                setMessage('Failed to refresh access token.');
                router.push('/auth/login');
                return;
            }
        }

        try {
            const response = await axios.post('https://oxfordstudycenter-production.up.railway.app/api/rating/', {
                course: data.id,
                rating: selectedRating
            }, {
                headers: { Authorization: `Bearer ${accessToken}` },
            });

            if (response.status === 201) {
                setSuccessfully('Rating submitted successfully!');
                setCurrentRating(selectedRating); // Устанавливаем текущий рейтинг только после успешного ответа
            }
        } catch (error) {
            if (error.response?.status === 400) {
                try {
                    const updateResponse = await axios.put('https://oxfordstudycenter-production.up.railway.app/api/rating/', {
                        course: data.id,
                        rating: selectedRating
                    }, {
                        headers: { Authorization: `Bearer ${accessToken}` },
                    });

                    if (updateResponse.status === 200) {
                        setSuccessfully('Rating updated successfully!');
                        setCurrentRating(selectedRating); // Устанавливаем текущий рейтинг только после успешного ответа 
                    }
                } catch (updateError) {
                    console.error('Error putting rating:', updateError.response?.data?.message || updateError.message);
                    setMessage('Error putting rating');
                }
            } else {
                console.error('Error submitting rating:', error.response?.data?.message || error.message);
                setMessage('Error submitting rating');
            }
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const accessToken = Cookies.get('access');
        const refreshToken = Cookies.get('refresh');

        if (!accessToken) {
            if (!refreshToken) {
                setMessage('You need to login!');
                router.push('/auth/login/');
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

                Cookies.set('access', refreshResponse.data.access, { path: '/' });
                return;
            } catch (refreshError) {
                console.error('Error refreshing token:', refreshError.response?.data || refreshError.message);
                setMessage('Failed to refresh access token.');
                router.push('/auth/login');
                return;
            }
        }

        try {
            const response = await axios.post('https://oxfordstudycenter-production.up.railway.app/api/review/create/', {
                course: data.id,
                comment: review,
                author: Cookies.get('userId')
            }, {
                headers: { Authorization: `Bearer ${accessToken}` },
            });

            if (response.status === 201) {
                setReview('');
                setSuccessfully('Review submitted successfully!');
            }

        } catch (error) {
            console.error('Error creating review: ' + error.response?.data?.message || error.message);
            setMessage('Error creating review');
            router.push('/auth/login/')
        }
    };

    return (
        <form className='coursesdet-blok__section-2-form' onSubmit={handleSubmit}>
            <h3 className='coursesdet-blok__section-2-form-h3'>Rate The Course</h3>
            <div className='feedback'>
                <div className="coursesdet-blok__section-2__form__part-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <FaStar
                            key={star}
                            className={`coursesdet-blok__section-2__form__star ${star <= (hoverRating || currentRating) ? 'active' : ''}`}
                            onMouseEnter={() => setHoverRating(star)}
                            onMouseLeave={() => setHoverRating(0)}
                            onClick={() => {
                                setCurrentRating(star); // Обновляем UI немедленно
                                handleRating(star); // Передаём актуальный рейтинг в API
                            }}
                        />
                    ))}
                </div>
                <div className="coursesdet-blok__section-2__form__part-2">
                    <textarea
                        value={review}
                        onChange={(e) => setReview(e.target.value)}
                        placeholder="Write a review..."
                        disabled={!Cookies.get('access')}
                        minLength={5}
                        maxLength={500}
                    />
                    <button type="submit">Submit Review</button>
                    {message && (
                        <p style={{ fontSize: '85%', textAlign: 'center', marginTop: '5px' }}>
                            <Link style={{ color: 'red' }} href="/auth/login">{message}</Link>
                        </p>
                    )}
                    {successfully && (
                        <p style={{ fontSize: '85%', textAlign: 'center', marginTop: '5px', color: 'green' }}>
                            {successfully}
                        </p>
                    )}
                </div>
            </div>
        </form>
    );
};