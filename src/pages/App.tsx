import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import ListCards from "../components/ListCards/ListCards";
import Menu from "../components/Menu/Menu";

function App() {
  return (
    <>

      <Menu />
      <main>
        <Hero/>
        <ListCards />
      </main>
      <Footer />
    </>
  )
}

export default App
