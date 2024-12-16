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
import './styles/testimonials.css'
import './styles/prices.css'
import './styles/team.css'
import './styles/auth.css'
import './styles/register.css'
import './styles/courses.css'
import './styles/coursesdet.css'
import './styles/noresult.css'
import './styles/yandex.css'
import './styles/yandexhome.css'

import Script from 'next/script'

export const metadata = {
  title: "Oxford IELTS Center",
  description: "An educational center specializing in IELTS and CEFR preparation",
  keywords: "IELTS, CEFR, English language, exam preparation, Bukhara, English courses, IELTS preparation, CEFR levels, study English, language school, Bukhara IELTS center, IELTS courses, English exams, English language learning, academic English",
  robots: "index, follow",
  canonical: "https://oxfordieltscenter.uz/",
  openGraph: {
    title: "Oxford IELTS Center - IELTS and CEFR Preparation",
    description: "Prepare for your IELTS and CEFR exams with professional training at Oxford IELTS Center. Enroll today to improve your English proficiency.",
    url: "https://oxfordieltscenter.uz/",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Oxford IELTS Center - Prepare for IELTS and CEFR Exams",
    description: "Join Oxford IELTS Center for expert training and exam preparation to excel in IELTS and CEFR exams.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/images/oxfordlogo.png" />
      </head>
      <body>
          {children}
      </body>
    </html>
  );
};