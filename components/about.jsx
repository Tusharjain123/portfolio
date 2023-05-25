import "../styles/about.css"
import Image from "next/image"
import Skills from "./skills"

export default function About() {
    return <>
            <h1 className="head">
                About Me
            </h1>
        <div className="about">
            <div className="aboutmyself">
                <p> Hi, I'm a software professional who works to achieve software that empowers people, not just businesses. I aim to deliver scalable applications and hence, insist over writing the sleek & efficient code while maintaining agreement on code-maintenance.
                    <br/><br/>
                    I will be graduating with a B.Tech in ECE from   <a href="https://www.iiitdmj.ac.in/">IIITDM, Jabalpur</a> in May 2025. When I'm not building software, I like to explore the world and experience the nature!</p>
                <div>
                    <div className="frame">
                        <Image src="/frontend.png" width={400} height={500} alt="Tushar Jain"/>
                    </div>                    
                </div>
            </div>
            <Skills/>
        </div>
    </>
}