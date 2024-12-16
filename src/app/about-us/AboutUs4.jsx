'use client'
import Link from 'next/link';
import React from 'react'
import { FaBook } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

export default function AboutUs4() {
    return (
        <div className='aboutus4'>
            <div className="aboutus4-blok">
                <div className="aboutus4-blok__section aboutus4-blok__section-1">
                    <div className="aboutus4-blok__section__header">
                        <FaBook className='aboutus4__icon1' />
                        <p>Courses IELTS</p>
                    </div>
                    <h1>Learn, Grow, Succeed with our Courses</h1>
                    <Link href="/contacts"><button>JOIN WITH US<FaArrowRight className='aboutus4__icon2' /></button></Link>
                </div>
                <div className="aboutus4-blok__section aboutus4-blok__section-2">
                    <div className="aboutus4-blok__section__header">
                        <FaBook className='aboutus4__icon1' />
                        <p>Courses CEFR</p>
                    </div>
                    <h1>Get The Best Courses & Upgrade Your Skills</h1>
                    <Link href="/contacts"><button>EXPLORE COURSES<FaArrowRight className='aboutus4__icon2' /></button></Link>
                </div>
            </div>
        </div>
    )
};