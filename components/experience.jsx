import "../styles/experience.css"
import experience from "../config/experience.json"


const Box = () => {
    return <div className="box lefty">
        <div className="data">
            <h1>Full-Stack Developer</h1>
            <p>BODHI</p>
        </div>
    </div>
}

const Experience = () => {
    let direction = "";
    return < >
    <div className="experience">
        <h1>Experience</h1>
        <div className="verticalLine">
        <Box/>
        </div>
    </div>
    </>
}

export default Experience