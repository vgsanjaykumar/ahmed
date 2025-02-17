import About from "./components/About"
import Contact from "./components/Contact"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Whatsnew from "./components/Whatsnew"
import Areas from "./components/Areas"
import Interiors from "./components/Interiors"
import ProductSection from "./components/Products"
import WhatsApp from "./components/Whatapp"
import Why from "./components/Whychooseus"
import Project from "./components/Projects"





function App() {
  return (
    <>
      <div >
        <div className="h-[400px] md:h-[600px] lg:h-[800px] relative">
          <div className="bg-black\">
            <img src="/ahmed hero 1.jpg " alt="bg"
              className="absolute right-0 top-0 h-[400px] md:h-[600px] lg:h-[800px] w-full    opacity-50 z-[-1]"
            /></div>
          <Navbar />
          <Hero />
        </div>
        <Whatsnew />
        <About />
        <Why/>
        <Interiors />
        <Project />
        <Areas />
        <ProductSection />
        <WhatsApp />
        <Contact />

       

        <Footer />
      </div>

    </>
  )
}

export default App
