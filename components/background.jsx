import "../styles/background.css"
import Image from "next/image"


export default function Background() {
    const select = ["Full-Stack Web Developer", "Frontend Developer", "Backend Developer", "DevOps Engineer", "React-Native Developer"]

    return <>
        <div className="container_">
            <div className="heading">
                <h1 className="headone">HI, I'M</h1>
                <h1>TUSHAR JAIN</h1>
            <div className="content">
                A <span className="animate">{select.map((ele) => { return<h2 key={ele.id}>{ele}</h2>})}</span>
            </div>
            </div>
        </div>
    </>
}