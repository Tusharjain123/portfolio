import "../styles/home.css"
import Link from "next/link"
import Image from "next/image"

export default function Navbar(){

    return <>
    <div className="containerr">
        <div className="logo">
            {/* <Image src="/1.png" width={100} height={60}></Image> */}
            {/* <div>TUSHAR</div>  */}
        </div>
        <ul>
            <li><Link href="/"> HOME</Link></li>
            <li><Link href="#about">ABOUT</Link></li>
            <li><Link href="/">PROJECTS</Link></li>
            <li><Link href="#experience">EXPERIENCE</Link></li>
        </ul>
    </div>
    </>
}