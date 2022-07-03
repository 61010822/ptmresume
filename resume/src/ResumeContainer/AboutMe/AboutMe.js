import React from 'react';
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from '../../utilities/ScrollService';
import Animations from "../../utilities/Animations";
import './AboutMe.css'


export default function AboutMe(props) {
    let fadeInScreenHandler = (screen) => {
        if(screen.fadeInScreen !== props.id)
            return
        Animations.animations.fadeInScreen(props.id)
    }

    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler)
    const SCREEN_CONSTANTS = {
        description: "My nickname is Pink. I was born in Ratchaburi on 1 January 2000. I have experience in web development in the field of frontend development. I really enjoy learning about coding knowledge, and have growth mindset. I want to be a part of the organization that provides me a challenging job which helps me achieve personal as well as organizational goals",
        highlighs: {
            bullets:[
                "Curiosity and Inquisitiveness",
                "A passion for knowledge",
                "A positive attitude",
                "Great teammate",
                "Enthusiastic",
                "Patience"
            ],
            heading: "Here are Few Highlighs: "
        }
    }
    const renderHighlight = () => {
        return(
            SCREEN_CONSTANTS.highlighs.bullets.map((value,i) => (
                <div className="highlight" key={i}>
                    <div className="highlight-blob"></div>
                    <span>{value}</span>
                </div>
            ))
        )
    }
    return(
        <div className="about-me-container screen-container fade-in" id={props.id || ""}>
            <div className="about-me-parent">
                <ScreenHeading title={'About Me'} subHeading={'Why Choose Me?'}/>
                <div className="about-me-card">
                    <div className="about-me-profile"></div>
                    <div className="about-me-details">
                        <span className="about-me-description">{SCREEN_CONSTANTS.description}</span>
                        <div className="about-me-highlights">
                            <div className="highlight-heading">
                                <span>{SCREEN_CONSTANTS.highlighs.heading}</span>
                            </div>
                            {renderHighlight()}
                        </div>
                        <div className="about-me-options">
                            <button className="btn primary-btn"
                                    onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
                            >
                                {""}
                                Hire Me{" "}
                            </button>
                            <a href="Resume_Pittimon.pdf" download="Pittimon Resume">
                                <button className="btn highlighted-btn">Get Resume</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
