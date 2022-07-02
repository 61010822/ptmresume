import React from 'react';
import Typical from 'react-typical';
import './Profile.css'
import ScrollService from '../../../utilities/ScrollService'

export default function Profile() {
    return (
        <div className="profile-container">
            <div className="profile-parent">
                <div className="profile-details">
                    <div className="colz">
                        <div className="colz-icon">
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
                    </div>
                    <div className="profile-details-name">
                        <span className="primary-text">
                            {" "}
                            Hello, I'M <span className="highlighted-text">Pink</span>
                    </span>
                    </div>
                    <div className="profile-details-role">
                        <span className="primary-text">
                            <h1>
                                {" "}
                            <Typical
                            loop={Infinity}
                            steps={[
                                "Active Dev 🚩",
                                1000,
                                "Frontend Developer 💻",
                                1000,
                                "React.js Dev 🌐 ",
                                1000,
                                "Vue.js Dev 🧨",
                                1000,
                                "Pittimon 🐱",
                                1000,
                            ]}
                            />
                            </h1>
                            <span className="profile-role-tagline">
                                Building web applications with front end operations.
                            </span>
                        </span>
                    </div>
                    <div className="profile-options">
                        <button className="btn primary-btn"
                                onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
                        >
                            {""}
                            Hire Me{" "}
                        </button>
                        <a href="/resume-ebb/public#" download="Pittimon Resume">
                            <button className="btn highlighted-btn">Get Resume</button>
                        </a>
                    </div>
                </div>
                <div className="profile-picture">
                    <div className="profile-picture-background"></div>
                </div>
            </div>
        </div>
    )
}
