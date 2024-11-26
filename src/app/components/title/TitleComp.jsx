'use client'
import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link';
import { FaArrowRight } from "react-icons/fa6";

export default function TitleComp() {

    const pathname = usePathname();
    const componentName = pathname ? pathname.replace('/', '') || 'Home' : '';

    return (
        <div className='pagename'>
            <div className="pagename-blok">
                <h1>{componentName}</h1>
                <div className='pagename-blok__section'>
                    <Link className='pagename-parent' href="/">Home</Link>
                    <p className='pagename-drop'><FaArrowRight className='pagename-icon' /></p>
                    <p className='pagename-child'>{componentName}</p>
                </div>
            </div>
        </div>
    )
};