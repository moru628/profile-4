import React from 'react'
import './about.css'
import CV from '../../assets/Moru Wang.pdf'
import Info from './info'

const About = () => {
  return (
    <section className="about section" id="about">
        <h2 className="section_title">About Me</h2>
        <span className="section_subtitle">My introduction</span>

        <div className="about_container container grid">
            <div className="about_data">
                <Info />
                <p className="about_description">
                    I am a graduated student of Trinity College Dublin with strong passion on UI/UX design. I've worked on many group projects during my studing. I always rely on surveys to understand the user requirements and translate them into effective web and mobile interface designs. I am a quick learner and outgoing communicator, focused on creating impactful designs that meet user's needs.
                </p>

                <div className="about_button_container">
                    <a download="" href={CV} className="button button--flex about_button">
                        Download CV
                        <i className="uil uil-file-download-alt button_icon"></i>
                    </a>
                </div>

            </div>
        </div>
    </section>
  )
}

export default About