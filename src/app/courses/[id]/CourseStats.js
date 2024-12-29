'use client'
import React from 'react';
import { FaStar } from 'react-icons/fa'; // Импортируем FaRegStar
import { GoCodeReview } from 'react-icons/go';
import { IoEyeSharp } from 'react-icons/io5';
import AddFeedback from './AddFeedback';

export default function CourseStats({ data }) {

    return (
        <div className="coursesdet-blok__section-1">
            <div className="coursesdet-blok__section-1__img">
                <img
                    src={data.image || '/images/course.png'}
                    alt="Course"
                    onError={(e) => (e.target.src = '/images/course.png')}
                />
            </div>
            <div className="coursesdet-blok__section-1__container">
                <div className="coursesdet-blok__section-1__container-part">
                    <FaStar className="coursesdet-blok__section-1__container__icon" />
                    <p>Grades {data?.grades_count || 0}</p>
                </div>
                <div className="coursesdet-blok__section-1__container-part">
                    <GoCodeReview className="coursesdet-blok__section-1__container__icon" />
                    <p>Reviews {data?.reviews_count || 0}</p>
                </div>
                <div className="coursesdet-blok__section-1__container-part">
                    <IoEyeSharp className="coursesdet-blok__section-1__container__icon" />
                    <p>Views {data?.views_count || 0}</p>
                </div>
            </div>
            <AddFeedback data={data} />
        </div>
    );
};