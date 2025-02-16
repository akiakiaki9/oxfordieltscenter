import React from 'react'
import Title from '../components/title/title'
import AboutUs from './AboutUs'
import Navbar from '../components/navbar/NavbarComp'
import FooterComp from '../components/footer/FooterComp'

export async function generateMetadata() {
    return {
        title: 'About Us - Oxford IELTS Center',
        description: 'Learn more about Oxford IELTS Center. Our mission is to provide top-quality IELTS and CEFR preparation for students in Bukhara and beyond.',
        keywords: 'Oxford IELTS Center, About us, IELTS preparation, CEFR preparation, English language school, Bukhara, English courses, language learning',
        robots: 'index, follow',
        canonical: 'https://oxfordieltscenter.uz/about',
        openGraph: {
            title: 'About Us - Oxford IELTS Center',
            description: 'Discover the mission and vision of Oxford IELTS Center. We are dedicated to helping students succeed in IELTS and CEFR exams with expert preparation.',
            url: 'https://oxfordieltscenter.uz/about',
            type: 'website',
            locale: 'en_US',
        },
        twitter: {
            card: 'summary_large_image',
            title: 'About Us - Oxford IELTS Center',
            description: 'Get to know the team and values behind Oxford IELTS Center, dedicated to providing exceptional IELTS and CEFR exam preparation.',
        },
    };
};

export default function aboutus() {
    return (
        <div>
            <Navbar />
            <Title />
            <AboutUs />
            <FooterComp />
        </div>
    )
};