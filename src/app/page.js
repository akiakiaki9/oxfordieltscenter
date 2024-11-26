import About from "./components/about/about";
import Header from "./components/header/header";
import Partners from "./components/partners/partners";
import Section from "./components/section/section";
import Services from "./components/services/services";


export default function Home() {
  return (
    <div>
      <Header />
      <Partners />
      <Services />
      <About />
      <Section />
    </div>
  );
}
