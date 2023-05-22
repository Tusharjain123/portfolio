import About from "../../components/about"
import Background from "../../components/background"
import Experience from "../../components/experience"
import Navbar from "../../components/navbar"
import Svg from "../../components/svg"


export default function Home(){
  return <>
    <Navbar/>
    <Svg/>
    <Background/>
    <About/>
    <Experience/>
  </>
}