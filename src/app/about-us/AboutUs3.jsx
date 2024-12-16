'use client';
import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { FaChartLine } from "react-icons/fa6";
import { FaCalendarCheck } from "react-icons/fa";
import { LuSmilePlus } from "react-icons/lu";
import { IoShareSocialOutline } from "react-icons/io5";

export default function AboutUs3() {
    const { ref, inView } = useInView({ triggerOnce: true });
    const [counts, setCounts] = useState({ trained: 0, classes: 0, satisfaction: 0, community: 0 });

    useEffect(() => {
        if (inView) {
            const targetCounts = { trained: 1000, classes: 100, satisfaction: 95, community: 1500 };
            const duration = 3000; // Длительность анимации в миллисекундах
            const startTime = performance.now();

            const animate = (time) => {
                const elapsed = time - startTime;
                const progress = Math.min(elapsed / duration, 1); // Прогресс от 0 до 1
                const easedProgress = 1 - Math.pow(1 - progress, 3); // Ease-out функция

                setCounts({
                    trained: Math.floor(targetCounts.trained * easedProgress),
                    classes: Math.floor(targetCounts.classes * easedProgress),
                    satisfaction: Math.floor(targetCounts.satisfaction * easedProgress),
                    community: Math.floor(targetCounts.community * easedProgress),
                });

                if (progress < 1) {
                    requestAnimationFrame(animate);
                }
            };

            requestAnimationFrame(animate);
        }
    }, [inView]);

    return (
        <div className="aboutus3" ref={ref}>
            <div className="aboutus3-blok">
                <div className="aboutus3-blok__section aboutus3-blok__section-1">
                    <div><FaChartLine className='aboutus3__icon' /><h1>{counts.trained}</h1></div>
                    <p><span>Successfully</span> Trained</p>
                </div>
                <div className="aboutus3-blok__section aboutus3-blok__section-2">
                    <div><FaCalendarCheck className='aboutus3__icon' /><h1>{counts.classes}</h1></div>
                    <p><span>Classes</span> Completed</p>
                </div>
                <div className="aboutus3-blok__section aboutus3-blok__section-3">
                    <div><LuSmilePlus className='aboutus3__icon' /><h1>{counts.satisfaction}%</h1></div>
                    <p><span>Satisfaction</span> Rate</p>
                </div>
                <div className="aboutus3-blok__section aboutus3-blok__section-4">
                    <div><IoShareSocialOutline className='aboutus3__icon' /><h1>{counts.community}</h1></div>
                    <p><span>Students</span> Community</p>
                </div>
            </div>
        </div>
    );
};