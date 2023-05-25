import "../styles/experience.css"
import experience from "../config/experience.json"
import Image from "next/image"


const Box = (props) => {
    return props.title != "My Resume" ? <div className={`box ${props.direction}`}>
        <div className="conten">
            <h1>{props.title}</h1>
            <p>{props.company_name}</p>
            <p>{props.date}</p>
        </div>
    </div>
        :
        <div className={`resume ${props.direction}`}>
            <div className="conten">
                <a href="https://drive.google.com/file/d/1BmI1jdXu-cMzNKAzdVheB9FHXVViFyqZ/view?usp=share_link" target="_blank"> <button> {props.title}  <Image src={props.company_name} width={25} height={10} /></button></a>
              
            </div>
        </div>
}

const Experience = () => {
    let direction = "";
    return <div className="allExperience" >
        <div className="experience">
            <p>WHAT I'VE DONE SO FAR</p>
            <h1>Work Experience</h1>
            <div className="verticalLine">
                {experience.map((ele) => {
                    direction = direction === "box lefty" ? "boxy righty" : "box lefty";
                    return <Box key={ele.title} title={ele.title} company_name={ele.company_name} date={ele.date} direction={direction} />
                })}
            </div>
        </div>
    </div>
}

export default Experience