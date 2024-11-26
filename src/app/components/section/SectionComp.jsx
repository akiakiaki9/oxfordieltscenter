import Link from 'next/link';
import React from 'react'
import { FaBook } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function SectionComp() {
    return (
        <div className='section'>
            <div className="section-blok">
                <div className="section-blok__header">
                    <FaBook className='section-blok__header__icon' />
                    <p>Are You Ready For This Offer</p>
                </div>
                <h1 className='section__h1-1'>40% Offer First <span>100 Student’s</span> For Featured</h1>
                <h1 className='section__h1-2'>Topics by Education Category</h1>
                <p className='section-blok__p'>Get unlimited access to 6,000+ of Udemy’s top courses for your team. Learn and improve skills
                    across business, tec, design, and more.
                </p>
                <div className="section-blok__container">
                    <Link href="/">
                        <button className='section-blok__container-button-1'>
                            JOIN WITH US <FaLongArrowAltRight className='section-blok__container__icon' />
                        </button>
                    </Link>
                    <Link href="/">
                        <button className='section-blok__container-button-2'>
                            BECOME A TEACHER <FaLongArrowAltRight className='section-blok__container__icon' />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
};