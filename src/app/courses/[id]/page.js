'use client'

import React, { useEffect, useState } from 'react'
import Navbar from '@/app/components/navbar/NavbarComp'
import Footer from '@/app/components/footer/footer'
import CoursesDetail from './CoursesDetail'
import Link from 'next/link'
import { FaArrowRight } from "react-icons/fa6";
import Loading from '@/app/components/Loading'
import FooterComp from '@/app/components/footer/FooterComp'

export default function Detail({ params }) {
    const { id } = React.use(params);

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`http://127.0.0.1:8000/api/courses/${id}`);
                if (res.ok) {
                    const json = await res.json();
                    setData(json);
                }
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [id]);

    if (loading) return <div><Loading /></div>;
    if (!data) return <p>Error loading data.</p>;

    // Проверка, если это массив курсов (например, для списка всех курсов)
    if (Array.isArray(data)) {
        return (
            <div>
                <Navbar />
                <div className='pagename'>
                    <div className="pagename-blok">
                        <h1>{data.name}</h1>
                        <div className='pagename-blok__section'>
                            <Link className='pagename-parent' href="/courses">COURSES</Link>
                            <p className='pagename-drop'><FaArrowRight className='pagename-icon' /></p>
                            <p className='pagename-child'>{data.name}</p>
                        </div>
                    </div>
                </div>
                <div>
                    {data.map(course => (
                        <div key={course.id}>
                            <h2>{course.name}</h2>
                            <img src={course.image} alt={course.name} />
                        </div>
                    ))}
                </div>
                <Footer />
            </div>
        );
    }

    // Если это объект с подробной информацией о курсе
    return (
        <div>
            <Navbar />
            <div className='pagename'>
                <div className="pagename-blok">
                    <h1>{data.name}</h1>
                    <div className='pagename-blok__section'>
                        <Link className='pagename-parent' href="/courses">COURSES</Link>
                        <p className='pagename-drop'><FaArrowRight className='pagename-icon' /></p>
                        <p className='pagename-child'>{data.name}</p>
                    </div>
                </div>
            </div>
            <CoursesDetail data={data} />
            <FooterComp />
        </div>
    )
};