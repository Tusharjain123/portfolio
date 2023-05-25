"use client";
import "../styles/projects.css"
import projects from "../config/projects.json"
import Image from "next/image"
import { useEffect } from "react"

const Projectcard = (props) => {
    return <div className={`projectCard projectCard${props.id}`}>
        <div className="namee">
            {props.name}
        </div>
        <div className="button">
            <button>GitHub</button>
            <button>View Demo</button>
        </div>
    </div>
}



export default function Projects() {
    useEffect(()=>{
        const project = document.querySelector(".project")
        project.addEventListener("wheel", (e) => {
            e.preventDefault()
            project.scrollLeft += e.deltaY
        const leftButton = document.querySelector(".leftt")
        leftButton.addEventListener("click", ()=>{
            console.log("Hello")
        })
    })

    })

    return <div className="allProject">
    <p>Case Studies</p>
    <h1 className="header">Projects</h1>
        <div className="project">
        <Image className="leftt" src="/icons/backward.png" width={100} height={100}/>
        {projects.map((ele) => {
            return <div className="allProj">
                <Projectcard name={ele.name} github={ele.github} demo={ele.demo} id={ele.id} />
            </div>
        })}
        <Image className="rightt" src="/icons/forward.png" width={100} height={100} />
    </div>
    </div>
}