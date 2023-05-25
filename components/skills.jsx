import "../styles/skills.css"
import Image from "next/image"
import skills from "../config/skills.json"

const SkillsCard = (props) =>{
    return <>
        <div className="card">
            <div className="icon">
               <Image src={props.path} width={100} height={100}/>
            </div>
            <div className="name">
                {props.name}
            </div>
        </div>
    </>
}


const Skills = () => {
    return <>
    <div className="headi">
        <p>My Skills</p>
        <div>Technologies</div>
    </div>
    <div className="skills">
         {skills.map((ele) => {
           return <SkillsCard name={ele.name} path={ele.icon}/>
         }) }
    </div>
    </>
}

export default Skills