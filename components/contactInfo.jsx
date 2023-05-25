import Image from "next/image"
import "../styles/social.css"

export default function Info() {
    return <>
        <div className="social">
            <div className="github">
                <a href="https://github.com/Tusharjain123">
                    <Image src="/icons/github1.png" width={32} height={50} />
                </a>
            </div>
            <div className="linkedin">
                <a href="https://www.linkedin.com/in/tushar-jain4">
                    <Image src="/icons/linkedin.png" width={30} height={50} />
                </a>
            </div>
            <div className="emailer">
                <a href="mailto:tusharwork4@gmail.com">
                    <Image src="/icons/email.png" width={30} height={50} />
                </a>
            </div>
            <div className="twitter">
                <a href="https://twitter.com/TusharJ84868317">
                    <Image src="/icons/twitter.png" width={30} height={50} />
                </a>
            </div>
        </div>
    </>
}