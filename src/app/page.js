import AboutUs3 from "./about-us/AboutUs3";
import About from "./components/about/about";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Navbar from "./components/navbar/NavbarComp";
import Partners from "./components/partners/partners";
import Prices from "./components/prices/prices";
import Section from "./components/section/section";
import Services from "./components/services/services";
import Testimonials from "./components/testimonials/testimonials";
import YandexHome from "./components/YandexHome";


export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Partners />
      <Services />
      <Section />
      <Prices />
      <AboutUs3 />
      <Testimonials />
      <YandexHome />
      <Footer />
    </div>
  );
};