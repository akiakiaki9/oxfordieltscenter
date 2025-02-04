'use client'
import axios from 'axios';
import Link from 'next/link';
import React from 'react'
import { FaBook } from "react-icons/fa";
import { GiBlackBook } from "react-icons/gi";
import { FaLongArrowAltRight } from "react-icons/fa";

export default async function ServicesComp() {
    let data = null;
    let hasError = false;

    try {
        const res = await axios.get('http://127.0.0.1:8000/en/api/courses/');
        if (res.status >= 200 && res.status < 300) {
            data = res.data; // Используем res.data для получения данных
        } else {
            hasError = true;
        }
    } catch (error) {
        hasError = true; // Обрабатываем ошибки запроса
    }

    return (
        <div className='services'>
            <div className="services-blok">
                <div className="services-blok__header">
                    <FaBook className='services-blok__header__icon' />
                    <p>OUR SERVICES</p>
                </div>
                <h1>Our Creative Education Services</h1>
                <div className="services-blok__section">
                    <div className="services-blok__section__container">
                        {hasError || !data || data.length === 0 ? (
                            <>
                                <div className="services-blok__section__container-part">
                                    <div className="services-icon"><FaBook className='services__icon' /></div>
                                    <h2>No Data Available</h2>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis, voluptatibus adipisci architecto eos at vitae.</p>
                                    <div className="services-img">
                                        <img src="/images/nodata.jpg" alt="No Data" />
                                        <Link href="/courses" className="services-overlay">
                                            <div className="services-overlay-icon"><FaLongArrowAltRight className='services-overlay__icon' /></div>
                                        </Link>
                                    </div>
                                </div>
                                <div className="services-blok__section__container-part">
                                    <div className="services-icon"><GiBlackBook className='services__icon' /></div>
                                    <h2>No Data Available</h2>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis, voluptatibus adipisci architecto eos at vitae.</p>
                                    <div className="services-img">
                                        <img src="/images/nodata.jpg" alt="No Data" />
                                        <Link href="/courses" className="services-overlay">
                                            <div className="services-overlay-icon"><FaLongArrowAltRight className='services-overlay__icon' /></div>
                                        </Link>
                                    </div>
                                </div>
                            </>
                        ) : (
                            data.map(course => (
                                <div className="services-blok__section__container-part" key={course.id}>
                                    <div className="services-icon"><GiBlackBook className='services__icon' /></div>
                                    <h2>{course.name}</h2>
                                    <p>{course.description}</p>
                                    <div className="services-img">
                                        <img src={course.image} alt={`Oxford IELTS Center ${course.name}`} />
                                        <Link href={`/courses/${course.id}`} className="services-overlay">
                                            <div className="services-overlay-icon"><FaLongArrowAltRight className='services-overlay__icon' /></div>
                                        </Link>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
};