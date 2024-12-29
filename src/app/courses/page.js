import React from 'react';
import CoursesComp from './CoursesComp';
import Navbar from '../components/navbar/NavbarComp';
import Title from '../components/title/title';
import Footer from '../components/footer/footer';

export async function generateMetadata() {
    return {
        title: 'Courses - Oxford IELTS Center',
        description: 'Explore the various IELTS and CEFR preparation courses offered at Oxford IELTS Center. Choose the right course for your needs and start your language learning journey today.',
        keywords: 'IELTS courses, CEFR courses, English language learning, language school, English preparation, Bukhara, Oxford IELTS Center courses, IELTS exam preparation',
        robots: 'index, follow',
        canonical: 'https://oxfordieltscenter.uz/courses',
        openGraph: {
            title: 'Courses - Oxford IELTS Center',
            description: 'Find the perfect IELTS and CEFR preparation course at Oxford IELTS Center. Our expert instructors will guide you through every step of your exam preparation.',
            url: 'https://oxfordieltscenter.uz/courses',
            type: 'website',
            locale: 'en_US',
        },
        twitter: {
            card: 'summary_large_image',
            title: 'Courses - Oxford IELTS Center',
            description: 'Explore the range of IELTS and CEFR preparation courses available at Oxford IELTS Center and take the first step towards mastering the English language.',
        },
    };
}

export default function Courses() {
    return (
        <div>
            <Navbar />
            <Title />
            <CoursesComp />
            <Footer />
        </div>
    );
};