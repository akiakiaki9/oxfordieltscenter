'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { FaArrowRight } from "react-icons/fa";

export default function HeaderComp() {
    const [studentsCount, setStudentsCount] = useState(0);

    useEffect(() => {
        const targetCount = 2000;
        const duration = 3000; // Длительность анимации в миллисекундах
        const startTime = performance.now();

        const animate = (time) => {
            const elapsed = time - startTime;
            const progress = Math.min(elapsed / duration, 1); // Прогресс от 0 до 1
            const easedProgress = 1 - Math.pow(1 - progress, 3); // Ease-out функция

            setStudentsCount(Math.floor(targetCount * easedProgress));

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, []);
    return (
        <div className='header' style={{ minHeight: '100vh' }}>
            <div className="header-blok">
                <h1 className='header__h1-2'>Oxford IELTS Center</h1>
                <h1 className='header__h1-1'>Unlock The Power Of Learning</h1>
                <p>More than {studentsCount} students trained</p>
                <Link href="/contacts">
                    <button className='header__button'>Admission Now <FaArrowRight className='header__icon' /></button>
                </Link>
            </div>
        </div>
    )
};