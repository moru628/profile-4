import React from "react";
import './social.css'

const Social = () => {
    return(
        <div className="home_social">
            <a href="https://github.com/moru628/NOMNOM.git" className="home_social-icon" target="_blank" rel="noopener noreferrer">
                <i class="uil uil-github"></i>
            </a>
            <button href="#" className="home_social-icon" target="_blank">
                <i class="uil uil-laughing"></i>
            </button>
            <button href="#" className="home_social-icon" target="_blank">
                <i class="uil uil-smile-beam"></i>
            </button>
            <a href="https://github.com/moru628/plandi" className="home_social-icon" target="_blank" rel="noopener noreferrer">
                <i class="uil uil-github"></i>
            </a>
        </div>
    )
}

export default Social