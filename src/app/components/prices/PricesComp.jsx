'use client'
import Link from 'next/link';
import React from 'react'
import { FaRegCircleCheck } from "react-icons/fa6";
import { FaRegCircleXmark } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { FaBook } from "react-icons/fa";

export default function PricesComp() {
    return (
        <div className='prices' id='prices'>
            <div className="prices__header">
                <FaBook className='prices__header__icon' />
                <p>PRICING TABLE</p>
            </div>
            <h1 className='prices-h1'>Our Membership Price Plan</h1>
            <div className="prices-blok">
                <div className="prices-blok__section-1">
                    <h2>IELTS</h2>
                    <div className="prices-blok__section-1__header">
                        <h1>700 000 UZS</h1>
                        <p>/PER MONTHLY</p>
                    </div>
                    <div className="prices-blok__section-1__container">
                        <div className="prices-blok__section-1__container-part">
                            <FaRegCircleCheck className='prices__open-icon' />
                            <p>Practice tests</p>
                        </div>
                        <div className="prices-blok__section-1__container-part">
                            <FaRegCircleCheck className='prices__open-icon' />
                            <p>Based materials</p>
                        </div>
                        <div className="prices-blok__section-1__container-part">
                            <FaRegCircleXmark className='prices__close-icon' />
                            <p>Private sessions</p>
                        </div>
                    </div>
                    <div className="prices-blok__section-1__footer">
                        <Link href="/contacts"><button className='prices__button-1'>CHOOSE THE PLAN <FaArrowRight className='prices__button__icon' /></button></Link>
                    </div>
                </div>
                <div className="prices-blok__section-2">
                    <h2>CEFR</h2>
                    <div className="prices-blok__section-1__header">
                        <h1>700 000 UZS</h1>
                        <p>/PER MONTHLY</p>
                    </div>
                    <div className="prices-blok__section-1__container">
                        <div className="prices-blok__section-1__container-part">
                            <FaRegCircleCheck className='prices__open-icon' />
                            <p>Practice tests</p>
                        </div>
                        <div className="prices-blok__section-1__container-part">
                            <FaRegCircleCheck className='prices__open-icon' />
                            <p>Based materials</p>
                        </div>
                        <div className="prices-blok__section-1__container-part">
                            <FaRegCircleXmark className='prices__close-icon' />
                            <p>Private sessions</p>
                        </div>
                    </div>
                    <div className="prices-blok__section-1__footer">
                        <Link href="/contacts"><button className='prices__button-2'>CHOOSE THE PLAN <FaArrowRight className='prices__button__icon' /></button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
};