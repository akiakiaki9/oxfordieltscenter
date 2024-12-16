'use client'
import React, { useState } from 'react';
import { TEAM } from '../utils/team';
import { CiBookmarkCheck } from "react-icons/ci";
import { PiUsersLight } from "react-icons/pi";
import { FaTelegram } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import NoResult from '../components/NoResult';
import { IoSearchSharp } from "react-icons/io5";

export default function TeamComp() {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredTeam, setFilteredTeam] = useState(TEAM);

    const handleSearch = (event) => {
        const value = event.target.value.toLowerCase();
        setSearchTerm(value);

        // Фильтруем массив TEAM по имени, должности и количеству студентов
        const filtered = TEAM.filter(item =>
            item.name.toLowerCase().includes(value) ||
            item.job.toLowerCase().includes(value) ||
            item.students.toString().includes(value)
        );

        setFilteredTeam(filtered);
    };

    return (
        <div className='team'>
            <div className="team-header">
                <div className="team-header-blok">
                    <div className="team-header-blok__section">
                        <p>{filteredTeam.length} Employees</p>
                    </div>
                    <div className="team-header-blok__section">
                        <input
                            type="search"
                            placeholder="Search"
                            value={searchTerm}
                            onChange={handleSearch}
                        />
                        <IoSearchSharp className='team-header-blok__icon' />
                    </div>
                </div>
            </div>
            <div className="team-blok">
                {filteredTeam.length > 0 ? (
                    filteredTeam.map(item => (
                        <div className="team-blok__section" key={item.id}>
                            <div className="team-blok__section-img">
                                <img src={item.image} alt={`Oxford IELTS Center - ${item.name}`} />
                                <div className="team-blok__social-icons">
                                    <a href={item.telegram} target="_blank" rel="noopener noreferrer" className="icon telegram">
                                        <FaTelegram className='team-blok__social-icons__icon' />
                                    </a>
                                    <a href={item.instagram} target="_blank" rel="noopener noreferrer" className="icon instagram">
                                        <FaInstagramSquare className='team-blok__social-icons__icon' />
                                    </a>
                                </div>
                            </div>
                            <div className="team-blok__container">
                                <div className="team-blok__header">
                                    <h2>{item.name}</h2>
                                    <p>{item.job}</p>
                                </div>
                                <div className="team-blok__footer">
                                    <div className="team-blok__footer-section">
                                        <CiBookmarkCheck className='team-blok__footer__icon' />
                                        <p>{item.courses} Courses</p>
                                    </div>
                                    <div className="team-blok__footer-section__drop"></div>
                                    <div className="team-blok__footer-section">
                                        <PiUsersLight className='team-blok__footer__icon' />
                                        <p>Students {item.students}+</p>
                                    </div>
                                </div>
                                <div className="team-blok__social-icons-2">
                                    <a href={item.telegram} target="_blank" rel="noopener noreferrer" className="icon telegram">
                                        <FaTelegram className='team-blok__social-icons__icon' />
                                    </a>
                                    <a href={item.instagram} target="_blank" rel="noopener noreferrer" className="icon instagram">
                                        <FaInstagramSquare className='team-blok__social-icons__icon' />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div>
                        <NoResult />
                    </div>
                )}
            </div>
        </div>
    );
};