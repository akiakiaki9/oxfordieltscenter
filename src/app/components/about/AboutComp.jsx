"use client"
import Link from 'next/link';
import React from 'react'
import { FaBook } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";

export default function AboutComp() {
    return (
        <div className='about'>
            <div className="about-blok">
                <div className="about-blok__section-1">
                    <img src="/images/about-home.png" alt="Oxford IELTS Center About us" />
                </div>
                <div className="about-blok__section-2">
                    <div className="about-blok__section-2__header">
                        <FaBook className='about-blok__section-2__header__icon' />
                        <p>MORE ABOUT OUR COMPANY</p>
                    </div>
                    <h1>Learn About Oxford IELTS Center</h1>
                    <p className='about-blok__section-2-p1'>Effectively tailor learning materials to students’ needs to achieve high results in IELTS and CEFR exams. Rapidly implement standardised teaching methods, delivering maximum value to students. Focus on individual learners’ needs with flexible and innovative learning solutions.
                    </p>
                    <div className="about-blok__section-2__container">
                        <div className="about-blok__section-2__container-part">
                            <img src="/images/about-icon1.svg" alt="Oxford IETLS Center About us" />
                            <h2>Competitive Rates</h2>
                        </div>
                        <div className="about-blok__section-2__container-part">
                            <img src="/images/about-icon2.svg" alt="Oxford IETLS Center About us" />
                            <h2>Competitive Rates</h2>
                        </div>
                    </div>
                    <p className='about-blok__section-2-p2'>Join us on our journey as we continue to innovate & shape the future of education.</p>
                    <div className="about-blok__section-2__buttons">
                        <Link href="/about-us">
                            <button className='about-blok__section-2__button about-blok__section-2__button-1'>
                                LEARN MORE <FaArrowRight className='about-blok__section-2__buttons__icon' />
                            </button>
                        </Link>
                        <Link href="/contacts">
                            <button className='about-blok__section-2__button about-blok__section-2__button-2'>
                                CONTACTS US <FaArrowRight className='about-blok__section-2__buttons__icon' />
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
};