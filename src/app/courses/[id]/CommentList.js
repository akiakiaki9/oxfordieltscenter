'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { FaStar, FaRegStar, FaThumbsUp } from 'react-icons/fa';
import { FaStarHalfAlt } from "react-icons/fa";
import { useRouter } from 'next/navigation';
import EditDeleteComp from './EditDeleteComp';

export default function CommentList({ data }) {
    const [reviews, setReviews] = useState([]);
    const [message, setMessage] = useState('');
    const avgRating = data?.rating || 0;
    const currentUserID = Cookies.get('userId');
    const router = useRouter();

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        // Получаем часы и минуты
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        // Получаем день, месяц и год
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');  // Месяцы с 0, поэтому добавляем 1
        const year = date.getFullYear();

        return `${hours}:${minutes} ${day}.${month}.${year}`;
    };

    useEffect(() => {
        if (data?.reviews?.results) {
            const sortedReviews = [...data.reviews.results].sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
            setReviews(sortedReviews);
        } else {
            setReviews([{
                id: 1,
                author: 'John Doe',
                date: new Date().toISOString(),
                rating: data.rating || 0,
                comment: 'No reviews yet. Be the first to leave a review!',
                likes: 0,
                replies: [],
            }]);
        }
    }, [data]);

    const handleLike = async (reviewId) => {
        const accessToken = Cookies.get('access');
        const refreshToken = Cookies.get('refresh');
        if (!accessToken) {
            if (!refreshToken) {
                setMessage('You need to login!');
                return;
            }
            try {
                const refreshResponse = await axios.post('https://oxfordstudycenter-production.up.railway.app/api/login/refresh/', {
                    refresh: refreshToken
                }, { headers: { 'Content-Type': 'application/json' } });

                Cookies.set('access', refreshResponse.data.access, { path: '/' });
                return;
            } catch (refreshError) {
                console.error('Error refreshing token:', refreshError.response?.data || refreshError.message);
                router('/auth/login');
                return;
            }
        }

        try {
            const response = await axios.post(`https://oxfordstudycenter-production.up.railway.app/api/review/${reviewId}/like/`,
                { headers: { Authorization: `Bearer ${accessToken}` } });
            // Вызов функции для обновления отзывов
            setReviews((prevReviews) => updatedReviews(prevReviews, reviewId, response.data));
        } catch (error) {
            console.error('Error liking review:', error.response?.data || error.message);
            setMessage('Failed to like the review');
        }
    };

    // Функция для обновления отзывов
    const updatedReviews = (prevReviews, reviewId, data) => {
        return prevReviews.map((review) =>
            review.id === reviewId
                ? { ...review, is_user_liked: data.is_user_liked, likes_count: data.likes }
                : review
        );
    };

    return (
        <div className="coursesdet-blok__layout">
            {message && <div className="message" style={{ textAlign: 'center', color: 'red' }}>{message}</div>}
            <div className="coursesdet-blok__secttion-1__footer__part-1">
                {[...Array(5)].map((_, index) => {
                    const starIndex = index + 1;
                    if (starIndex <= Math.floor(avgRating)) {
                        return <FaStar key={index} className='courses-blok__section__header__icon' />;
                    } else if (starIndex === Math.floor(avgRating) + 1 && avgRating % 1 !== 0) {
                        return <FaStarHalfAlt key={index} className='courses-blok__section__header__icon' />;
                    } else {
                        return <FaRegStar key={index} className='courses-blok__section__header__icon' />;
                    }
                })}
                <p>({data.rating})</p>
            </div>

            {reviews.map((review) => (
                <div key={review.id} className="coursesdet__reviews">
                    {(review.rating || review.comment) && (
                        <>
                            {review.rating !== undefined && (
                                <div className="coursesdet__reviews__rating">
                                    {[...Array(5)].map((_, index) => (
                                        index < review.rating
                                            ? <FaStar key={index} className="coursesdet__reviews__rating__icon" />
                                            : <FaRegStar key={index} className="coursesdet__reviews__rating__icon" />
                                    ))}
                                </div>
                            )}

                            <div className="coursesdet__reviews__header">
                                <div className="coursesdet__reviews__header__part-1">
                                    <img className="coursesdet__reviews__img" src="/images/user.jpg" alt="User" />
                                    <h4>{review.author?.fullname || 'Unknown'}</h4>
                                </div>
                                <div className="coursesdet__reviews__header__part-2">
                                    <p>{formatDate(review.created_at)}</p>
                                </div>
                            </div>

                            {review.comment && (
                                <div className="coursesdet__reviews__section">
                                    <p>{review.comment}</p>
                                </div>
                            )}

                            <div className="coursesdet__reviews__footer">
                                <div className="coursesdet__reviews__footer__container">
                                    {/* <div>
                                        <FaThumbsUp
                                            onClick={() => handleLike(review.id)}
                                            className={review.is_user_liked ? 'liked' : ''}
                                        />
                                        <p className="coursesdet__reviews__footer__like-count">
                                            {review.likes_count || 0}
                                        </p>
                                    </div> */}
                                    {review.author.id === currentUserID && (
                                        <EditDeleteComp review={review} data={data} />
                                    )}
                                </div>
                            </div>
                        </>
                    )}
                </div>
            ))}
        </div>
    );
};