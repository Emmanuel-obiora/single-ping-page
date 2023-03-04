import React from 'react'
import './Footer.css'
import {RiFacebookFill} from 'react-icons/ri'
import {AiOutlineTwitter} from 'react-icons/ai'
import {IoLogoInstagram} from 'react-icons/io'

const Footer = () => {
    return (
        <footer>
            <div className="socials">
                <RiFacebookFill className="social-col" />
                <AiOutlineTwitter className="social-col" />
                <IoLogoInstagram className='social-col' />
            </div>
            <p className="attribution">&copy; Copyright Ping. All rights reserved.</p>

            <p className="attribution">
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge" rel='noreferrer' target="_blank">Frontend Mentor</a>. 
                Coded by <a href="https://emmanuel-obiora.github.io/portfolio-about-me-/src" rel='noreferrer' target="_blank">Obiora Emmanuel</a>.
            </p>
        </footer>
    )
}

export default Footer
