import "../styles/background.css"
import Image from "next/image"


export default function Background() {
    const select = ["Full-Stack Web Developer", "Frontend Developer", "Backend Developer", "DevOps Engineer", "React-Native Developer"]

    return <>
        <div className="container_">
            <div className="heading">
                <h1 className="headone">HI, I'M</h1>
                <h1>TUSHAR JAIN</h1>
                <h2>I build things that inspire.</h2>
                <div className="content">
                    I'm <span className="animate">{select.map((ele) => { return <h2 key={ele.id}>{ele}</h2> })}</span>
                </div>   
                <p>Currently, I'm focused on learning DevOps.</p>
            </div>
            <div className="mine">
                <Image src="/mine.png" width={300} height= {300}/>
            </div>
        </div>
    </>
}