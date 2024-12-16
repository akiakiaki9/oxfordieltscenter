import React from 'react'
import { FaBook } from "react-icons/fa";
import { ABOUTUS } from '../utils/aboutus';
import { FaCheckCircle } from "react-icons/fa";
import Link from 'next/link';
import { FaArrowRight } from "react-icons/fa6";
import AboutUs3 from './AboutUs3';
import AboutUs4 from './AboutUs4';

export default function AboutUs() {
    return (
        <>
            <div className='aboutus'>
                <div className="aboutus-blok">
                    <div className="aboutus-blok__header">
                        <FaBook className='aboutus-blok__header__icon' />
                        <p>WHAT WE DO</p>
                    </div>
                    <h1>Offline Education Tailored to You</h1>
                    <div className="aboutus-blok__container">
                        {ABOUTUS.map(item => (
                            <div className="aboutus-blok__container__section" key={item.id}>
                                <div className="aboutus-blok__container-img"><img src={item.image} alt="Oxford IELTS Center About Us" /></div>
                                <h2>{item.title}</h2>
                                <p>{item.subtitle}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="aboutus2">
                <div className="aboutus2-blok">
                    <div className="aboutus2-blok__section-1">
                        <img src="/images/aboutus2.png" alt="Oxford IELTS Center" />
                    </div>
                    <div className="aboutus2-blok__section-2">
                        <div className="aboutus2-blok__section-2__header">
                            <FaBook className='aboutus-blok__section-2__header__icon' />
                            <p>ABOUT OUR UNIVERSITY</p>
                        </div>
                        <h1 className='aboutus2-blok__section-2-h1-1'>Welcome to Oxford IELTS Center</h1>
                        <p className='aboutus2-blok__section-2-p-1'>Collaboratively streamline tailored learning strategies by adopting student-centered approaches, effectively empowering learners to excel. Drive skill-building and readiness for global opportunities through innovative, resource-rich educational methods.
                        </p>
                        <div className="aboutus2-blok__section-2__container-1">
                            <div className="aboutus2-blok__section-2__container-1-part">
                                <img src="/images/aboutus2-icon1.svg" alt="Oxford IELTS Center Icon" />
                                <div className="aboutus2-blok__section-2__container-1-part__div">
                                    <h3>Practical Education</h3>
                                    <p>With flexible courses</p>
                                </div>
                            </div>
                            <div className="aboutus2-blok__section-2__container-1-part">
                                <img src="/images/aboutus2-icon2.svg" alt="Oxford IELTS Center Icon" />
                                <div className="aboutus2-blok__section-2__container-1-part__div">
                                    <h3>Advenced Learing</h3>
                                    <p>Study flexibly offline</p>
                                </div>
                            </div>
                        </div>
                        <div className="aboutus2-blok__section-2__container-2">
                            <div className="aboutus2-blok__section-2__container-2-part">
                                <img src="/images/aboutus2-2.png" alt="Oxford IELTS Center" />
                            </div>
                            <div className="aboutus2-blok__section-2__container-2-part">
                                <div className="aboutus2-blok__section-2__container-2-part__div">
                                    <FaCheckCircle className='aboutus2-blok__section-2__container-2-part__div__icon' />
                                    <p>Get access to our best courses</p>
                                </div>
                                <div className="aboutus2-blok__section-2__container-2-part__div">
                                    <FaCheckCircle className='aboutus2-blok__section-2__container-2-part__div__icon' />
                                    <p>Popular methods to learn now</p>
                                </div>
                                <div className="aboutus2-blok__section-2__container-2-part__div">
                                    <FaCheckCircle className='aboutus2-blok__section-2__container-2-part__div__icon' />
                                    <p>Find the right instructor for you</p>
                                </div>
                            </div>
                        </div>
                        <a href='https://t.me/oxford_bukhara'>
                            <button>ABOUT MORE <FaArrowRight className='aboutus2___icon' /></button>
                        </a>
                    </div>
                </div>
            </div>
            <AboutUs3 />
            <AboutUs4 />
        </>
    )
};