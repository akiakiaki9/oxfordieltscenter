import './styles/styles.css'
import './styles/navbar.css'
import './styles/header.css'
import './styles/footer.css'
import './styles/partners.css'
import './styles/title.css'
import './styles/contacts.css'
import './styles/services.css'
import './styles/about.css'
import './styles/aboutus.css'
import './styles/section.css'

import { FaTelegram } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* <Navbar />
        {children}
        <Footer /> */}
        <div className='home'>
          <div className='home-blok'>
            <h1>Oxford IELTS Center</h1>
            <div className="home-blok__container">
              <p>сайт на разработке</p>
              <div className="loading-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <div className="home-footer">
              <div className='home-footer-icon'>
                <a href="https://t.me/oxford_bukhara"><FaTelegram className='home-footer-icon__icon' /></a>
              </div>
              <div className='home-footer-icon'>
                <a href="https://www.instagram.com/oxford_bukhara?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="><FaInstagram className='home-footer-icon__icon' /></a>
              </div>
            </div>

          </div>
        </div>
      </body>
    </html>
  );
};