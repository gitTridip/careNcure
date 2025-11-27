import React from 'react'
import '../App.css';
import footer_logo from '../assets/footer_logo.png';
import { ImFacebook } from "react-icons/im";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className='footer-container'>
            <img src={footer_logo} alt='footer-logo' className='footer-logo' />
            <div className='footer-container-section'>
                <div className='footer-section-icons'>
                    <ImFacebook className='footer-icons' />
                    <FaInstagram className='footer-icons' />
                    <FaXTwitter className='footer-icons' />
                </div>
                <span>Developed By Coders &copy;</span>
            </div>
        </div>
    )
}

export default Footer