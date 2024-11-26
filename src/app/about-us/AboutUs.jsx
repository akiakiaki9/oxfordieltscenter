import React from 'react'
import { FaBook } from "react-icons/fa";
import { ABOUTUS } from '../utils/aboutus';
import { FaRegCheckCircle } from "react-icons/fa";
import Link from 'next/link';
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";

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
                        <div className="aboutus2-blok__section-1__part">
                            <img src="" alt="" />
                        </div>
                        <div className="aboutus2-blok__section-1__part">
                            <div className="aboutus2-blok__section-1__part__container">
                                <div></div>
                                <img src="" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="aboutus2-blok__section-2">
                        <div className="aboutus2-blok__section-2__header">
                            <FaBook className='aboutus-blok__header__icon' />
                            <p>About Our University</p>
                        </div>
                        <h1>Welcome to Edura University.</h1>
                        <p>Collaboratively simplify user friendly networks after principle centered coordinate effective methods
                            of empowerment distributed niche markets pursue market positioning web-readiness after resource sucking
                            applications.
                        </p>
                        <div className="aboutus2-blok__section-2__container-1">
                            <div className="aboutus2-blok__section-2__container-1-part">
                                <img src="" alt="" />
                                <div className="aboutus2-blok__section-2__container-1-part__div">
                                    <h1>Undergraduate Education</h1>
                                    <p>With flexible courses</p>
                                </div>
                            </div>
                            <div className="aboutus2-blok__section-2__container-1-part">
                                <img src="" alt="" />
                                <div className="aboutus2-blok__section-2__container-1-part__div">
                                    <h1>Postgraduate Education</h1>
                                    <p>Study flexibly online</p>
                                </div>
                            </div>
                        </div>
                        <div className="aboutus2-blok__section-2__container-2">
                            <div className="aboutus2-blok__section-2__container-2-part">
                                <img src="" alt="" />
                            </div>
                            <div className="aboutus2-blok__section-2__container-2-part">
                                <div className="aboutus2-blok__section-2__container-2-part__div">
                                    <FaRegCheckCircle className='aboutus2-blok__section-2__container-2-part__div__icon' />
                                    <p>Get access to 4,000+ of our top courses</p>
                                </div>
                                <div className="aboutus2-blok__section-2__container-2-part__div">
                                    <FaRegCheckCircle className='aboutus2-blok__section-2__container-2-part__div__icon' />
                                    <p>Get access to 4,000+ of our top courses</p>
                                </div>
                                <div className="aboutus2-blok__section-2__container-2-part__div">
                                    <FaRegCheckCircle className='aboutus2-blok__section-2__container-2-part__div__icon' />
                                    <p>Get access to 4,000+ of our top courses</p>
                                </div>
                            </div>
                        </div>
                        <Link href="/">
                            <button>ABOUT MORE <FaArrowRight /></button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
};