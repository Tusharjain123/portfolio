import SvgComponent from "../svg/backgroundImage"
import SVGComponentLeft from "../svg/backImgleft"
import SVGComponentLeft2 from "../svg/backImg2"
import SVGComponentRight1 from "../svg/backImgRight1"
import SVGComponentRight2 from "../svg/backImgRight2"
import "../styles/svg.css"


const Svg = () => {
    return <div className="backImages">
            <div className="left">
                <SVGComponentLeft />
                <SVGComponentLeft2 />
            </div>
            <SvgComponent />
            <div className="right">
                <SVGComponentRight1 />
                <SVGComponentRight2 />
            </div>
        </div>
}

export default Svg