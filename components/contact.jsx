"use client";
import { useState } from "react"
import "../styles/contact.css"
import Image from "next/image";

export default function Contact (){
    let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
    const [data, setData] = useState({
        "name": "",
        "email": "",
        "msg": ""
    })

    const handleChange = (e) => {
        e.preventDefault()
        setData({...data, [e.target.name]: e.target.value})
    }

    const handleClick = async (e) => {
        e.preventDefault()
        const check = regex.test(email)
        if (check){
            const response = await fetch('/api/send', {
                method: "POST",
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify({name: data.name, email: data.email, msg: data.msg})
            })
        }
        else{
            return console.error();
        }
    }
    return <div className="email">
        <div className="emailContainer">
        <p>GET IN TOUCH</p>
        <h1>Contact me</h1>
            <form onSubmit={handleClick}>
            <div>
                <label htmlFor="name">Name: </label>
                <input name="name" type="text" id="name" onChange={handleChange} value={data.name} placeholder="What's Your Name?" required/>
            </div>
            <div>
                <label htmlFor="email">E-mail: </label>
                <input name="email" type="text" id="email" onChange={handleChange} value={data.email} placeholder="What's Your Email?" required/>
            </div>
            <div>
                <label htmlFor="msg">Message</label>
                <textarea name="msg" id="msg" cols="30" rows="10" onChange={handleChange} value={data.msg} placeholder="What's Your Message?" required/>
            </div>
            <button type="submit">Send Msg <Image src="/icons/send.png" width={29} height={20}/></button>
            </form>
        </div>
    </div>
}
