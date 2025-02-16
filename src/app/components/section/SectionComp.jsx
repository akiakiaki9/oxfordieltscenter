"use client"
import Link from 'next/link';
import React from 'react'
import { FaBook } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

export default function SectionComp() {
    return (
        <div className='section'>
            <div className="section-blok">
                <div className="section-blok__header">
                    <FaBook className='section-blok__header__icon' />
                    <p>Ready to start learning with us?</p>
                </div>
                <h1 className='section__h1-1'>Join Our <span>Courses</span> Faster</h1>
                <h1 className='section__h1-2'>Topics by Education Category</h1>
                <p className='section-blok__p'>Access the best Oxford IELTS Center courses for you. Learn and improve your English skills</p>
                <div className="section-blok__container">
                    <Link href="/contacts">
                        <button className='section-blok__container-button-1'>
                            JOIN WITH US <FaArrowRight className='section-blok__container__icon' />
                        </button>
                    </Link>
                    <Link href="/team">
                        <button className='section-blok__container-button-2'>
                            OUR TEAM <FaArrowRight className='section-blok__container__icon' />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
};