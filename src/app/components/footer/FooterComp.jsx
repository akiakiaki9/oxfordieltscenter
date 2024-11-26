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
                    <p>Continually optimize backward manufactured products whereas communities negotiate life compelling alignments</p>
                    <h2>FOLLOW US ON:</h2>
                    <div className="footer-blok__section-1__container">
                        <a href=""><FaTelegramPlane className='footer-blok__section-1__container__icon' /></a>
                        <a href=""><FaInstagram className='footer-blok__section-1__container__icon' /></a>
                        <a href=""><FaFacebookF className='footer-blok__section-1__container__icon' /></a>
                        <a href=""><FaXTwitter className='footer-blok__section-1__container__icon' /></a>
                    </div>
                </div>
                <div className="footer-blok__section-2">
                    <div className="footer-blok__section-2-part">
                        <h2>Quick Links</h2>
                        <div className="footer__line"></div>
                        <Link href=''><GoDotFill className='footer-blok__section-2__icon' /><p>Our Team</p></Link>
                        <Link href=''><GoDotFill className='footer-blok__section-2__icon' /><p>Art Of OIC</p></Link>
                        <Link href=''><GoDotFill className='footer-blok__section-2__icon' /><p>Send a message</p></Link>
                        <Link href=''><GoDotFill className='footer-blok__section-2__icon' /><p>Whats up?</p></Link>
                        <Link href=''><GoDotFill className='footer-blok__section-2__icon' /><p>Prices</p></Link>
                        <Link href=''><GoDotFill className='footer-blok__section-2__icon' /><p>Log In</p></Link>
                    </div>
                    <div className="footer-blok__section-2-part">
                        <h2>Resources</h2>
                        <div className="footer__line"></div>
                        <Link href=''><GoDotFill /><p>Location</p></Link>
                        <Link href=''><GoDotFill /><p>Discounts</p></Link>
                        <Link href=''><GoDotFill /><p>Call A Taxi</p></Link>
                        <Link href=''><GoDotFill /><p>Contact Me</p></Link>
                        <Link href=''><GoDotFill /><p>Partners</p></Link>
                        <Link href=''><GoDotFill /><p>How to SignUp?</p></Link>
                    </div>
                </div>
                <div className="footer-blok__section-3">
                    <h2>Get in touch!</h2>
                    <div className="footer__line"></div>
                    <p>Fusce varius, dolor tempor interdum tristiquei bibendum service life.</p>
                    <div className="footer-blok__section-3__container">
                        <FaLocationDot className='footer-blok__section-3__icon' />
                        <p>Uzbekistan, Bukhara, Mustaqillik 19</p>
                    </div>
                    <div className="footer-blok__section-3__container">
                        <MdOutlineMail className='footer-blok__section-3__icon' />
                        <a href="mailto:oxfordieltscenter">oxfordieltscenter@gmail.com</a>
                    </div>
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