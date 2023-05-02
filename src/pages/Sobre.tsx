import Hero from "../components/Hero/Hero";
import Menu from "../components/Menu/Menu";
;
import fotoCapa from '../assets/fotoCapa.png';
import AboutHero from "../components/AboutHero/AboutHero";

export default function Sobre() {
  return (
    <div>
      <Menu/>
      <Hero />
      <AboutHero
        subHero={fotoCapa}
        titulo="Sobre mim"
      />
    </div>
  )
}
