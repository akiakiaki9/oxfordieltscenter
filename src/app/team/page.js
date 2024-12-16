import Navbar from '../components/navbar/NavbarComp';
import Title from '../components/title/title';
import TeamComp from './TeamComp';
import Footer from '../components/footer/footer';

export function generateMetadata() {
    return {
        title: "Our Team - Oxford IELTS Center",
        description: "Meet the professional team at Oxford IELTS Center. Our experts help you prepare for IELTS and CEFR exams.",
        keywords: "team, Oxford IELTS Center, IELTS preparation, CEFR preparation, English language teachers, professional team",
        robots: "index, follow",
        canonical: "https://oxfordieltscenter.uz/team",
        openGraph: {
            title: "Our Team - Oxford IELTS Center",
            description: "Meet the expert instructors and staff at Oxford IELTS Center who are dedicated to your success in IELTS and CEFR exams.",
            url: "https://oxfordieltscenter.uz/team",
            type: "website",
            locale: "en_US",
        },
        twitter: {
            card: "summary_large_image",
            title: "Our Team - Oxford IELTS Center",
            description: "Learn more about the team at Oxford IELTS Center who will guide you through your IELTS and CEFR preparation.",
        },
    };
}

export default function Team() {
    return (
        <div>
            <Navbar />
            <Title />
            <TeamComp />
            <Footer />
        </div>
    );
};