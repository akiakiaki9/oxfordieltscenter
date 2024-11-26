import React from 'react'
import { MdOutlineArrowRightAlt } from "react-icons/md";

export default function HeaderComp() {
    return (
        <div className='header' style={{minHeight: '100vh'}}>
            <div className="header-blok">
                <h1 className='header__h1-1'>Unlock The Power Of Learning</h1>
                <h1 className='header__h1-2'>Oxford IELTS Center</h1>
                <p>Admission going on, hurry to enroll now</p>
                <button>ADMISSION NOW <MdOutlineArrowRightAlt /></button>
            </div>
        </div>
    )
};