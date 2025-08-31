import AboutUs3 from "./about-us/AboutUs3";
import AboutComp from "./components/about/AboutComp";
import FooterComp from "./components/footer/FooterComp";
import HeaderComp from "./components/header/HeaderComp";
import NavbarComp from "./components/navbar/NavbarComp";
import PartnersComp from "./components/partners/PartnersComp";
import PricesComp from "./components/prices/PricesComp";
import SectionComp from "./components/section/SectionComp";
import TestimonialsComp from "./components/testimonials/TestimonialsComp";
import YandexHome from "./components/YandexHome";
import Error404 from "./Error404";


export default function Home() {
  return (
    <div>
      <NavbarComp />
      <HeaderComp />
      <AboutComp />
      <PartnersComp />
      <SectionComp />
      <PricesComp />
      <AboutUs3 />
      <TestimonialsComp />
      <YandexHome />
      <FooterComp />
      {/* <Error404 /> */}
    </div>
  );
};