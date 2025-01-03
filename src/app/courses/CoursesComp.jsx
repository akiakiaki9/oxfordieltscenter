'use client'
import axios from 'axios'
import Link from 'next/link';
import React from 'react'
import { FaStar, FaRegStar } from "react-icons/fa";
import { GoCodeReview } from "react-icons/go";
import { IoEyeSharp } from "react-icons/io5";
import { FaStarHalfAlt } from "react-icons/fa";

export default async function CoursesComp() {
    let data = null;
    let hasError = false;

    try {
        const res = await axios.get('https://oxfordstudycenter-production.up.railway.app/en/api/courses/');
        if (res.status >= 200 && res.status < 300) {
            data = res.data;
        } else {
            hasError = true;
        }
    } catch (error) {
        hasError = true;
    }

    const avgRating = 4.5;

    return (
        <div className='courses'>
            <div className="courses-blok">
                {hasError || !data || data.length === 0 ? (
                    <div className='courses-blok'>
                        <div className='courses-blok__section'>
                            <div className="courses-blok__section-img"><Link href={`/`}><img src="/images/course.png" alt={`Oxford IELTS Center IELTS`} /></Link></div>
                            <div className="courses-blok__section__xz">
                                <div className="courses-blok__section__header">
                                    <div className="courses-blok__section__header__header">
                                        {[...Array(5)].map((_, index) => (
                                            index + 1 <= 4 ? (
                                                <FaStar key={index} className='courses-blok__section__header__icon' />
                                            ) : (
                                                <FaRegStar key={index} className='courses-blok__section__header__icon' />
                                            )
                                        ))}
                                    </div>
                                    <p>(4.00)</p>
                                </div>
                                <Link href={``}><h2>Courses on IELTS</h2></Link>
                                <hr />
                                <div className="courses-blok__section__footer">
                                    <div className="courses-blok__section__footer-part">
                                        <FaStar className='courses-blok__section__footer__icon' />
                                        <p>Grades 15</p>
                                    </div>
                                    <div className="courses-blok__section__footer-part">
                                        <GoCodeReview className='courses-blok__section__footer__icon' />
                                        <p>Reviews 50</p>
                                    </div>
                                    <div className="courses-blok__section__footer-part">
                                        <IoEyeSharp className='courses-blok__section__footer__icon' />
                                        <p>Views 500</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    data.map(item => (
                        <div className='courses-blok__section' key={item.id}>
                            <div className="courses-blok__section-img"><Link href={`/courses/${item.id}`}><img src={item.image} alt={`Oxford IELTS Center ${item.name}`} /></Link></div>
                            <div className="courses-blok__section__xz">
                                <div className="courses-blok__section__header">
                                    <div className="courses-blok__section__header__header">
                                        {[...Array(5)].map((_, index) => {
                                            const starIndex = index + 1;
                                            if (starIndex <= Math.floor(item.rating)) {
                                                return <FaStar key={index} className='courses-blok__section__header__icon' />;
                                            } else if (starIndex === Math.floor(item.rating) + 1 && item.rating % 1 !== 0) {
                                                return <FaStarHalfAlt key={index} className='courses-blok__section__header__icon' />;
                                            } else {
                                                return <FaRegStar key={index} className='courses-blok__section__header__icon' />;
                                            }
                                        })}
                                    </div>
                                    <p>({item.rating ? item.rating.toFixed(1) : '0.0'})</p>
                                </div>
                                <Link href={`/courses/${item.id}`}><h2>Courses on {item.name}</h2></Link>
                                <hr />
                                <div className="courses-blok__section__footer">
                                    <div className="courses-blok__section__footer-part">
                                        <FaStar className='courses-blok__section__footer__icon' />
                                        <p>Grades {item?.grades_count || 0}</p>
                                    </div>
                                    <div className="courses-blok__section__footer-part">
                                        <GoCodeReview className='courses-blok__section__footer__icon' />
                                        <p>Reviews {item?.reviews_count || 0}</p>
                                    </div>
                                    <div className="courses-blok__section__footer-part">
                                        <IoEyeSharp className='courses-blok__section__footer__icon' />
                                        <p>Views {item?.views_count || 0}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};