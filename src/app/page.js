import About from "../../components/about"
import Background from "../../components/background"
import Contact from "../../components/contact"
import Experience from "../../components/experience"
import Navbar from "../../components/navbar"
import Svg from "../../components/svg"
import Projects from "../../components/projects"
import Info from "../../components/contactInfo"


export default function Home(){
  return <>
    <Navbar/>
    <Info/>
    <div className="svgBack">
    <Svg/>
    </div>
    <Background/>
    <About/>
    <Experience/>
    <Projects/>
    <Contact/>
  </>
}