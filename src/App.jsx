import About from "./components/About"
import Contact from "./components/Contact"
import Navbar from "./components/Navbar"
import Product from "./components/Product"
import JsonData from "./components/Constants/Product.json"
import Footer from "./components/Footer"
import { Services } from "./components/Services"
import Hero from "./components/Hero"
import Dealership from "./components/Dealarship"
import Awards from "./components/Awards"


function App() {

  return (
    <>
    <div >
    <div className="h-[400px] md:h-[600px] lg:h-[800px] relative">
      <div className="bg-black\">
        <img src="/ahmed/ahmed hero 1.jpg " alt="bg"
          className="absolute right-0 top-0 h-[400px] md:h-[600px] lg:h-[800px] w-full    opacity-50 z-[-1]"
        /></div>
        <Navbar />
        <Hero />
      </div>
          <About />
          <Product data={JsonData.Products}/>
          <Dealership/>
          <Awards/>
          <Contact phone={JsonData.phone} />
          
          <Footer/>
    </div>
    
    </>
  )
}

export default App
