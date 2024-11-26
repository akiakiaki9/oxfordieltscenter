'use client';
import React, { useState, useEffect, act } from 'react';
import { FaTimes } from 'react-icons/fa';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { RiMenu3Fill } from "react-icons/ri";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const pathname = usePathname();
    const [activePage, setActivePage] = useState(pathname);

    useEffect(() => {
        setActivePage(pathname);
    }, [pathname]);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleLinkClick = (path) => {
        setIsOpen(false);
    };

    return (
        <nav className={`navbar ${isSticky ? 'sticky' : ''}`}>
            <div className="brand">
                <Link href="/" style={{ textDecoration: 'none' }}>
                    <img className="navbar-brand" src="/images/oxfordlogo.png" alt="Oxford IELTS Center Logo" />
                </Link>
            </div>
            <div className={`menu-icon ${isOpen ? 'hidden' : ''}`} onClick={toggleMenu}>
                <RiMenu3Fill />
            </div>
            <div className={`menu-links ${isOpen ? 'active' : ''}`}>
                <div className="close-icon" onClick={toggleMenu}>
                    <FaTimes />
                </div>
                <Link href="/" onClick={() => handleLinkClick('/')} style={{ color: activePage === '/' ? 'var(--main-color)' : '' }}>
                    Home
                </Link>
                <Link href="/menu" onClick={() => handleLinkClick('/team')} style={{ color: activePage === '/menu' ? 'var(--main-color)' : '' }}>
                    Team
                </Link>
                <Link href="/about-us" onClick={() => handleLinkClick('/about-us')} style={{ color: activePage === '/about-us' ? 'var(--main-color)' : '' }}>
                    About Us
                </Link>
                <Link href="/contacts" onClick={() => handleLinkClick('/contacts')} style={{ color: activePage === '/contacts' ? 'var(--main-color)' : '' }}>
                    Contacts
                </Link>
                <Link href="/news" onClick={() => handleLinkClick('/news')} style={{ color: activePage === '/news' ? 'var(--main-color)' : '' }}>
                    News
                </Link>
                <Link href="/auth/login">
                    <button className="book-button" onClick={() => handleLinkClick('/auth/login')}
                        style={{ backgroundColor: activePage === '/auth/login' ? 'var(--main-color)' : '', color: activePage === '/auth/login' ? '#fff' : '' }}
                    >
                        Log In
                    </button>
                </Link>
            </div>
            {isOpen && <div className="overlay" onClick={toggleMenu} />}
        </nav>
    );
};