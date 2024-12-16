import React from 'react'
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";

import Link from 'next/link';

export default function FooterComp() {
    return (
        <div className='footer'>
            <div className="footer-blok">
                <div className="footer-blok__section-1">
                    <Link href="/"><img src="/images/oxfordlogo.png" alt="Oxford IELTS Center Logo" /></Link>
                    {/* <p>We continually improve our educational programs so that communities can find inspiring and rewarding paths to personal and professional growth.</p> */}
                    <h2>FOLLOW US ON:</h2>
                    <div className="footer-blok__section-1__container">
                        <a href="https://t.me/oxford_bukhara"><FaTelegramPlane className='footer-blok__section-1__container__icon' /></a>
                        <a href="https://www.instagram.com/oxford_bukhara?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="><FaInstagram className='footer-blok__section-1__container__icon' /></a>
                        <a href=""><FaFacebookF className='footer-blok__section-1__container__icon' /></a>
                        <a href=""><FaXTwitter className='footer-blok__section-1__container__icon' /></a>
                    </div>
                </div>
                <div className="footer-blok__section-2">
                    <div className="footer-blok__section-2-part">
                        <h2>Quick Links</h2>
                        <div className="footer__line"></div>
                        <Link href='/team'><GoDotFill className='footer-blok__section-2__icon' /><p>Our Team</p></Link>
                        <a href="#prices"><GoDotFill className='footer-blok__section-2__icon' /><p>Prices</p></a>
                        <Link href='/contacts'><GoDotFill className='footer-blok__section-2__icon' /><p>Send a message</p></Link>
                    </div>
                    <div className="footer-blok__section-2-part">
                        <h2>Resources</h2>
                        <div className="footer__line"></div>
                        <Link href='/contacts'><GoDotFill /><p>Location</p></Link>
                        <Link href='/contacts#yandex'><GoDotFill /><p>Call A Taxi</p></Link>
                        <Link href='/contacts'><GoDotFill /><p>Contact Me</p></Link>
                    </div>
                </div>
                <div className="footer-blok__section-3">
                    <h2>Get in touch!</h2>
                    <div className="footer__line"></div>
                    <p>We offer a variety of programs adapted to modern educational standards.</p>
                    <div className="footer-blok__section-3__container">
                        <FaLocationDot className='footer-blok__section-3__icon' />
                        <p>Uzbekistan, Bukhara, Mustaqillik 19</p>
                    </div>
                    {/* <div className="footer-blok__section-3__container">
                        <MdOutlineMail className='footer-blok__section-3__icon' />
                        <a href="mailto:oxfordieltscenter">oxfordieltscenter@gmail.com</a>
                    </div> */}
                    <div className="footer-blok__section-3__container">
                        <BsFillTelephoneFill className='footer-blok__section-3__icon' />
                        <a href="tel:+998770047766">+998 77 004-77-66</a>
                    </div>
                </div>
            </div>
            <div className="footer-footer">
                <div className="footer-footer-blok">
                    <p>Copyright © 2024 <span>Oxford IELTS Center</span> All Rights Reserved.</p>
                </div>
            </div>
        </div>
    )
};