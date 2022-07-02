import React, {useEffect, useState} from 'react';
import './ContactMe.css';
import ScrollService from '../../utilities/ScrollService';
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import Animations from "../../utilities/Animations";
import imgBack from '../../../src/images/mailz.jpeg';
import load1 from '../../../src/images/load2.gif';
import Typical from "react-typical";
import axios from 'axios'
import { toast } from 'react-toastify'


export default function ContactMe(props) {

    let fadeInScreenHandler = (screen) => {
        if(screen.fadeInScreen !== props.id)
            return
        Animations.animations.fadeInScreen(props.id)
    }

    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler)

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [banner, setBanner] = useState("")
    const [bool, setBool] = useState(false)

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleMessage = (e) => {
        setMessage(e.target.value)
    }

    const submitForm = async(e) => {
        e.preventDefault();
        try {
            let data = {
                name,
                email,
                message,
            };
            setBool(true)
            const res = await axios.post(`/contact`,data);
            if(name.length === 0 || email.length === 0 || message.length === 0) {
                setBanner(res.data.msg);
                toast.error(res.data.msg);
                setBool(false);
            } else if(res.status === 200) {
                setBanner(res.data.msg);
                toast.success(res.data.msg);
                setBool(false);

                setName("")
                setEmail("")
                setMessage("")
            }
        } catch (error) {
          console.log(error)
        }


    }

    return(
        <div className="main-container fade-in" id={props.id || ""}>
            <ScreenHeading
            subHeading={"Lets Keep In Touch"}
            title={"Contact Me"}/>
            <div className="central-form">
                <div className="col">
                    <h2 className="title">
                        <Typical
                            loop={Infinity}
                            steps={[
                                "Get In Touch 📧",
                                1000,
                            ]}
                        />
                    </h2>
                    <a target="_blank" href="https://github.com/61010822">
                        <i className="fa fa-github-square"></i>
                    </a>
                    <a target="_blank" href="https://www.linkedin.com/in/pittimon-rungrodpatomporn-9b8146244/">
                        <i className="fa fa-linkedin-square"></i>
                    </a>
                    <a target="_blank" href="https://www.instagram.com/iwxnnxcrychxmpxx/">
                        <i className="fa fa-instagram"></i>
                    </a>
                    <a target="_blank" href="tel:0917799819">
                        <i className="fa fa-phone-square"></i>
                    </a>
                </div>
                <div className="back-form">
                    <div className="img-back">
                        <h4>Send Your Email Here!</h4>
                        <img src={imgBack} alt="image not found"/>
                    </div>
                    <form onSubmit={submitForm}>
                        <p>{banner}</p>
                        <label htmlFor="Name">Name</label>
                        <input type="text" value={name} onChange={handleName}/>

                        <label htmlFor="Email">Email</label>
                        <input type="email" value={email} onChange={handleEmail}/>

                        <label htmlFor="message">Message</label>
                        <textarea type="text" value={message} onChange={handleMessage}/>

                        <div className="send-btn">
                            <button type="submit">
                                send<i className="fa fa-paper-plane"/>
                                {bool?(<b className="load">
                                    <img src={load1} alt="image not responding"/>
                                </b> ) : ("")}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
