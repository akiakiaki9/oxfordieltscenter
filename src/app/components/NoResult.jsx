'use client'
import React from 'react'
import { FaRegFaceFrownOpen } from "react-icons/fa6";

export default function NoResult() {
    return (
        <div className="no-result">
            <p>No result</p>
            <FaRegFaceFrownOpen className='no-result__icon' />
        </div>
    )
};