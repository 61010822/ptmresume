import React, {useEffect, useState} from 'react';
import './Resume.css'
import ScrollService from '../../utilities/ScrollService'
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import Animations from "../../utilities/Animations";


export default function Resume(props) {
    const [selectedBulletIndex, setSelectedBulletIndex] = useState(0)
    const [carousalOffsetStyle, setCarousalOffSetStyle] = useState({})

    let fadeInScreenHandler = (screen) => {
        if(screen.fadeInScreen !== props.id)
            return
        Animations.animations.fadeInScreen(props.id)
    }

    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler)

    const ResumeHeading = (props) => {
        return(
            <div className="resume-heading">
                <div className="resume-main-heading">
                    <div className="heading-bullet"></div>
                        <span>{props.heading ? props.heading : ''} {props.link ? (<a className="icon-project" rel="noreferrer" target="_blank" href={props.link}><i className="fa fa-folder-open-o"/></a>) : ''}</span>
                        {props.fromDate && props.toDate ? (
                            <div className="heading-date">
                                {props.fromDate + "-" + props.toDate}
                            </div>
                        ) : (
                            props.fromDate ? (
                                    <div className="heading-solo-date">
                                        {props.fromDate}
                                    </div>
                            ) : (<div></div>)
                        )}
                    </div>
                    <div className="resume-sub-heading">
                        <span>{props.subHeading ? props.subHeading : ''}</span>
                    </div>
                    <div className="resume-heading-description">
                        <span>{props.description ? props.description : ''}</span>
                    </div>
            </div>
        )
    }

    const resumeBullets = [
        {label: "Education", logoSrc: "education.svg"},
        {label: "Work History", logoSrc: "work-history.svg"},
        {label: "Programming Skills", logoSrc: "programming-skills.svg"},
        {label: "Projects", logoSrc: "projects.svg"},
        {label: "Interests", logoSrc: "interests.svg"}
    ];

    const programmingSkillDetails = [
        {skill: "JavaScript", logo: "javascript.svg"},
        {skill: "React JS", logo: "reactjs.svg"},
        {skill: "Ant Design", logo: "antdesign.svg"},
        {skill: "Vuetify", logo: "vuetify.svg"},
        {skill: "Firebase", logo: "firebase.svg"},
        {skill: "Vue JS", logo: "vuejs.svg"},
        {skill: "HTML", logo: "html.svg"},
        {skill: "CSS", logo: "css.svg"}
    ]

    const projectDetails = [
        {
            title: "Personal Website",
            duration: {fromDate: "2022"},
            description: "Technologies Used: React JS, Express",
            subHeading: "A personal website to showcase all my details and projects at one place"
        },
        {
            title: "Restaurant Reservations Website",
            duration: {fromDate: "2022"},
            description: "Technologies Used: Vue JS, Vuetify, Firebase, Axios",
            subHeading: "A reservations website to reserve your restaurant",
            link: "https://reservation-1137b.web.app/"
        },
        {
            title: "Dechosanpe Website",
            duration: {fromDate: "2020"},
            description: "Technologies Used: React JS, Antdesign, Firebase",
            subHeading: "A dechosanpe website to review cosmetic",
            link: "https://dechosanpe.web.app"
        }
    ];

    const resumeDetails = [
        <div className="resume-screen-container" key="education">
            <ResumeHeading heading={"King Mongkut's Institute of Technology  (GPA: 3.2)"} subHeading={"Bachelor of Engineering, Major Information Engineering "} fromDate={"2018"} toDate={"2022"}/>
            <ResumeHeading heading={"Benjamarachutit Ratchaburi School"} subHeading={"Major Mathematics-Science"} fromDate={"2015"} toDate={"2018"}/>
        </div>,
        <div className="resume-screen-container" key="work-experience">
            <ResumeHeading heading={"Internship"} subHeading={"at SILKSPAN INSURANCE BROKERAGE COMPANY Ltd."} fromDate={"2021"} />
            <div className="experience-description">
                <span className="resume-description-text">
                    Frontend Developer
                </span>
            </div>
            <div className="experience-description">
                <span className="resume-description-text">
                    - Developed an incentiveaivepenalty website with vue.js
                </span>

                <br/>
                <span className="resume-description-text">
                    - Developed a changepremiumregist website use .net with junior developer team
                </span>
                <br/>
                <span className="resume-description-text">
                    - Create reusable components demotablevuejs with vue.js
                </span>
                <br/>
                <span className="resume-description-text">
                    - Developed a recievesaluklung website use .net with junior developer team
                </span>
            </div>
        </div>,
        <div className="resume-screen-container programming-skills-container" key="programming-skills">
                {programmingSkillDetails.map((skill, i) => (
                <div className="skill-parent" key={i}>
                    <div className="heading-bullet"></div>
                    <span>{skill.skill}</span>
                    <div className="skill-logo-img">
                        <img alt="no internet connection" className="skill-img" src={require(`../../assets/Resume/${skill.logo}`)}/>
                    </div>
                </div>
                ))}
        </div>,
        <div className="resume-screen-container" key="projects">
            {projectDetails.map((projectDetails,i) =>(
                <ResumeHeading
                    key={i}
                    heading={projectDetails.title}
                    subHeading={projectDetails.subHeading}
                    description={projectDetails.description}
                    fromDate={projectDetails.duration.fromDate}
                    toDate={projectDetails.duration.toDate}
                    link={projectDetails.link}
                />
            ))}
        </div>,
        <div className="resume-screen-container" key="interests">
            <ResumeHeading
                heading="Gaming"
                description="Apart from a code writer, I also love to play a game."
            />
            <ResumeHeading
                heading="Music"
                description="When I'm listening to music, with my headphones on, it shuts out the rest of the world, and takes me to another place."
            />
            <ResumeHeading
                heading="Chilling at bar"
                description="Ballmer Peak Theory : programmers will gain superior coding abilities if they have a blood-alcohol concentration between 0.129% and 0.138%. "
            />
        </div>
    ];

    const handleCarousal = (index) => {
        let offsetHeight = 360;
        let newCarousalOffset = {
            style: {transform: "translateY(" + index * offsetHeight * -1 + "px)" },
        };
        setCarousalOffSetStyle(newCarousalOffset);
        setSelectedBulletIndex(index);
    }

    const getBullets = () => {
        return resumeBullets.map((bullet, index) => (
            <div
                onClick={() => handleCarousal(index)}
                className={index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"}
                key={index}
            >
                <img className="bullet-logo"
                     src={require(`../../assets/Resume/${bullet.logoSrc}`)}
                     alt="no internet"
                />
                <span className="bullet-label">{bullet.label}</span>
            </div>
        ))
    }

    const getResumeScreen = () => {
        return(
            <div
                style={carousalOffsetStyle.style}
                className="resume-details-carousal"
            >
                {resumeDetails.map((ResumeDetails) => ResumeDetails)}
            </div>
        )
    };

    useEffect(() => {
        return () => {
            fadeInSubscription.unsubscribe();
        };
    },[fadeInSubscription])



    return(
        <div className="resume-container screen-container fade-in" id={props.id || ""}>
            <div className="resume-content">
                <ScreenHeading title={'Resume'} subHeading={'My Formal Bio Details'}/>
                <div className="resume-card">
                    <div className="resume-bullets">
                        <div className="bullet-container">
                            <div className="bullet-icons"></div>
                                <div className="bullets">{getBullets()}</div>
                            </div>
                        </div>
                        <div className="resume-bullet-details">{getResumeScreen()}</div>
                    </div>
                </div>
            </div>
    )
}
