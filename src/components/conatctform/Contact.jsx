import style from "../../CSS/Contact.module.css";
import linkedin from "../../../src/resources/linkedin.png";
import github from "../../../src/resources/github.png";
import insta from "../../../src/resources/insta.png";
import { useState } from "react";
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set  } from "firebase/database";


const Contact = () => {
    let [name, setName] = useState("");
    let [email, setEmail] = useState("");
    let [message, setMessage] = useState("");
    const nameChangeHandler = (e) => {
        setName(e.target.value);
    }
    const emailChangeHandler = (e) => {
        setEmail(e.target.value);
    }
    const messageChangeHandler = (e) => {
        setMessage(e.target.value);
    }
    var firebaseConfig = {
        apiKey: "AIzaSyB9pcJ-AVbXxKXPJ_sredOiwcffFRtxAXw",
        authDomain: "portfolio-99e39.firebaseapp.com",
        databaseURL: "https://portfolio-99e39-default-rtdb.firebaseio.com",
        projectId: "portfolio-99e39",
        storageBucket: "portfolio-99e39.appspot.com",
        messagingSenderId: "845584493595",
        appId: "1:845584493595:web:0e2b7b98c5b2ffb6f95cbe",
        measurementId: "G-ZL4S0WCSDH"
      };
      const app = initializeApp(firebaseConfig);

// Get a reference to the database service
const db = getDatabase(app);

   
    const clickHandler = (e) => {
        
        if (name.trim() !== "" && email.trim() !== "" && email.trim().includes('@') && email.trim().includes('.') && message.trim() !== "") {
            try {
                set(ref(db, 'contactForm/' + name), {
                    "username": name,
                    "email": email,
                    "message":message
                });
                alert("Reached to Me")
           }
            catch (err) {
                alert(err);
           }
            
        } else {
            alert("Please write a valid input");
        }
    }
    return (
        <div data-aos="fade-up" className={style.contactsection}>
            <div className={style.head}>const contactMe;</div>
            <div className={style.row}>
                <div className={style.details}>
                   
                    <h2>Find me here</h2>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235527.99959755832!2d75.72513511242511!3d22.723595083911356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcad1b410ddb%3A0x96ec4da356240f4!2z4KSH4KSo4KWN4KSm4KWM4KSwLCDgpK7gpKfgpY3gpK8g4KSq4KWN4KSw4KSm4KWH4KS2!5e0!3m2!1shi!2sin!4v1635579838739!5m2!1shi!2sin" width="300" height="400" style={{border:0}} allowFullScreen="" loading="lazy"></iframe>
                </div>
                <div className={style.form}>
                <h2>Connect with me on</h2>
                    <div className={style.row}>
                    <div className={style.imgbox}>
                        <a href="https://www.linkedin.com/in/rishi-gupta-027298204" rel="noreferrer" target="_blank">
                            <img src={linkedin} alt="li" className={style.icons} />
                            </a>
                    </div>
                    <div className={style.imgbox}>
                        <a href="https://github.com/rishigupta1109" rel="noreferrer" target="_blank">
                            <img src={github} alt="gi" className={style.icons} />
                            </a>
                    </div>
                    <div className={style.imgbox}>
                        <a href="https://www.instagram.com/rishi_gupta__11/" rel="noreferrer" target="_blank">
                            <img src={insta} alt="ii" className={style.icons} />
                            </a>
                    </div>
                    </div>
                    <h2>Drop me a message</h2>
                    <div className={style.column}>
                    <div className={style.row}>
                        <h3>let name= </h3> <input value={name} onChange={nameChangeHandler} type="text" name="name" id="name" />
                    </div>
                    <div className={style.row}>
                    <h3>let email= </h3> <input value={email} onChange={emailChangeHandler} type="text" name="email" id="email" />
                    </div>
                    <div className={style.row}>
                        <h3>let message= </h3> <textarea value={message} rows={5} cols={20} onChange={messageChangeHandler} name="message" id="message" ></textarea>
                        </div>
                        </div>
                    <a target="_blank" className={style.NeonBtn} onClick={clickHandler} >Drop message<span></span><span></span><span></span><span></span></a>
                </div>
            </div>
        </div>
    );
}
export default Contact;