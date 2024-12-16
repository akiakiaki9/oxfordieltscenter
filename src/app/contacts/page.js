'use client'
import React from 'react';
import ContactsComp from './ContactsComp';
import Title from '../components/title/title';
import Navbar from '../components/navbar/NavbarComp';
import Footer from '../components/footer/footer';

export async function generateMetadata() {
    return {
        title: 'Contact Us - Oxford IELTS Center',
        description: 'Get in touch with Oxford IELTS Center. We are here to help you with IELTS and CEFR preparation. Reach out for more information on our courses.',
        keywords: 'contact, Oxford IELTS Center, IELTS preparation, CEFR preparation, English language courses, contact us, Bukhara, language learning, get in touch',
        robots: 'index, follow',
        canonical: 'https://oxfordieltscenter.uz/contact',
        openGraph: {
            title: 'Contact Us - Oxford IELTS Center',
            description: 'Contact Oxford IELTS Center to learn more about our IELTS and CEFR preparation services. We are ready to assist you in your language learning journey.',
            url: 'https://oxfordieltscenter.uz/contact',
            type: 'website',
            locale: 'en_US',
        },
        twitter: {
            card: 'summary_large_image',
            title: 'Contact Us - Oxford IELTS Center',
            description: 'Get in touch with Oxford IELTS Center to find out how we can help you prepare for IELTS and CEFR exams.',
        },
    };
}

export default function Contacts() {
    return (
        <div>
            <Navbar />
            <Title />
            <ContactsComp />
            <Footer />
        </div>
    );
};