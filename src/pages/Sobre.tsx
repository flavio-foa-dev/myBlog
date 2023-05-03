import Hero from "../components/Hero/Hero";
import Menu from "../components/Menu/Menu";
;
import fotoCapa from '../assets/fotoCapa.png';
import AboutHero from "../components/AboutHero/AboutHero";
import SobreMim from "../components/SobreMim/SobreMim";
import Footer from "../components/Footer/Footer";

export default function Sobre() {
  return (
    <div>
      <Menu/>
      <Hero />
      <AboutHero
        subHero={fotoCapa}
        titulo="Sobre mim"
      />
      <SobreMim/>
      <Footer />
    </div>
  )
}
