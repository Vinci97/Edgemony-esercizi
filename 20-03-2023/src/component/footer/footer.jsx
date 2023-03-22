import style from "./index.module.scss"
import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
const Footer = () => {
    return (
      <div className={style.Footer}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, itaque!</p>
        <h1>Lorem ipsum dolor sit amet.</h1>
        <div className={style.social}> 
            <a  href="https://www.instagram.com/">
                <FaInstagram className={style.logoSocial}/>
            </a>
            <a href="https://it-it.facebook.com/">
                <FaFacebook className={style.logoSocial}/>
            </a>
            <a href="https://twitter.com/">
                <FaTwitter className={style.logoSocial}/>
            </a>
        </div>
      </div>
    );
  };
  
  export default Footer;