'use client'
import Link from 'next/link'
import React from 'react'
import { FaArrowRight } from "react-icons/fa";

export default function YandexHome() {
    return (
        <div className='yandexhome'>
            <div className="yandexhome-blok">
                <h1>Call a Taxi</h1>
                <p>Order a taxi to us and make your journey more convenient</p>
                <Link href='/contacts'><button>Move <FaArrowRight className='yandexhome__icon' /></button></Link>
            </div>
        </div>
    )
};