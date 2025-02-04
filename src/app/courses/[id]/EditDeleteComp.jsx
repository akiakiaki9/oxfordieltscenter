'use client'
import axios from 'axios';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { MdEdit, MdDelete } from "react-icons/md";

export default function EditDeleteComp({ data, review }) {

    const [reviews, setReviews] = useState([]);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [reviewToDelete, setReviewToDelete] = useState(null);
    const [showEditModal, setShowEditModal] = useState(false);
    const [reviewToEdit, setReviewToEdit] = useState(null);
    const [editText, setEditText] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();
    const [successfully, setSuccessfully] = useState('')

    const handleDelete = (reviewId) => {
        setShowDeleteModal(true);
        setReviewToDelete(reviewId);
    };

    const confirmDelete = async () => {
        const accessToken = Cookies.get('access');
        const refreshToken = Cookies.get('refresh');
        if (!accessToken) {
            if (!refreshToken) {
                setError('You need to login!');
                return;
            }
            try {
                const refreshResponse = await axios.post('http://127.0.0.1:8000/api/login/refresh/', {
                    refresh: refreshToken
                }, {
                    headers: { 'Content-Type': 'application/json' }
                });

                Cookies.set('access', refreshResponse.data.access, { path: '/' });
                return;
            } catch (refreshError) {
                // console.error('Error refreshing token:', refreshError.response?.data || refreshError.message);
                router('/auth/login')
                return;
            }
        }

        try {
            await axios.delete(
                `https://oxfordstudycenter-production.up.railway.app/en/api/review/delete/${reviewToDelete}/`,
                {
                    headers: { Authorization: `Bearer ${accessToken}` },
                }
            );

            setReviews((prevReviews) => prevReviews.filter((review) => review.id !== reviewToDelete));
            setSuccessfully('Review deleted successfully.');
        } catch (error) {
            // console.error('Error deleting review:', error);
            setError('Error deleting review.');
        }
        setShowDeleteModal(false);
    };

    const cancelDelete = () => {
        setShowDeleteModal(false);
        setReviewToDelete(null);
    };

    const openEditModal = (review) => {
        setReviewToEdit(review);
        setEditText(review.comment);
        setShowEditModal(true);
    };

    const handleEditSave = async () => {
        const accessToken = Cookies.get('access');
        const refreshToken = Cookies.get('refresh');

        if (!accessToken) {
            if (!refreshToken) {
                setMessage('Error token');
                return;
            }

            try {
                const refreshResponse = await axios.post('https://oxfordstudycenter-production.up.railway.app/en/api/login/refresh/', {
                    refresh: refreshToken
                }, {
                    headers: { 'Content-Type': 'application/json' }
                });

                Cookies.set('access', refreshResponse.data.access, { path: '/' });
                await handleEditSave();
            } catch (refreshError) {
                // console.error('Error refreshing token:', refreshError.response?.data || refreshError.message);
                router.push('/auth/login')
                return;
            }
        }

        try {
            const response = await axios.patch(
                `http://127.0.0.1:8000/api/review/update/${reviewToEdit.id}/`,
                {
                    course: data.id,
                    comment: editText
                },
                {
                    headers: { Authorization: `Bearer ${accessToken}` },
                }
            );

            setReviews((prevReviews) =>
                prevReviews.map((review) =>
                    review.id === reviewToEdit.id ? { ...review, comment: response.data.comment } : review
                )
            );
            setShowEditModal(false);
            setSuccessfully('Review updated successfully.');
        } catch (error) {
            // console.error('Error editing review:', error);
            setError('Error updating review.');
            router.push('/auth/login/')
        }
    };

    const cancelEdit = () => {
        setShowEditModal(false);
        setReviewToEdit(null);
        setEditText('');
    };

    return (
        <div>
            {successfully && <p className='successfully'>{successfully}</p>}
            {error && <p className='error'>{error}</p>}
            <MdEdit className='coursesdet__reviews__footer__container__button' onClick={() => openEditModal(review)} />
            <MdDelete className='coursesdet__reviews__footer__container__button' onClick={() => handleDelete(review.id)} />
            {showDeleteModal && (
                <div className="modal">
                    <div className="modal-content">
                        <h3>Do you want to delete this review?</h3>
                        <div className='modal-content__container'>
                            <button className='modal-buttons__button-1' onClick={confirmDelete}>Yes</button>
                            <button className='modal-buttons__button-2' onClick={cancelDelete}>No</button>
                        </div>
                    </div>
                </div>
            )}
            {showEditModal && (
                <div className="modal">
                    <div className="modal-content">
                        <h3>Edit your review</h3>
                        <textarea
                            value={editText}
                            onChange={(e) => setEditText(e.target.value)}
                        />
                        <div className='modal-content__container'>
                            <button className='modal-buttons__button-1' onClick={handleEditSave}>Save</button>
                            <button className='modal-buttons__button-2' onClick={cancelEdit}>Cancel</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
};