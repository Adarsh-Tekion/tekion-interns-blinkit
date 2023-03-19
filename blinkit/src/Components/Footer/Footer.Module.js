import React from 'react'
import './Footer.Module.css';
import facebookImg from '../../images/facebook.png';
import twitterImg from '../../images/twitter.png';
import InstaImg from '../../images/instagram.png';
import linkedImg from '../../images/linkedin.png';
import playstoreImg from '../../images/playstore.png';
import appstoreImg from '../../images/appstore.png';
import Image from '../Img_Btn_Wrapper/Image.js';

export default function Footer() {
  return (
    <footer className= "flex align-center justify-center">
         <p className="flex">© 2018 Blinkit Commerce Pvt Ltd (formerly known as Grofers India Pvt. Ltd), 2016-2023</p>
         <div className="footer-download-source flex">
            <p className="download-text flex"><strong>Download App</strong></p>
            <div className="footer-store-img flex justify-center align-center">
            <Image source = {playstoreImg} alternate = "" styles = ""/>
            <Image source = {appstoreImg} alternate = "" styles = ""/>
            </div>
         </div>
         <div className="footer-social-media flex align-center justify-center">  
         <Image source = {facebookImg} alternate = "" styles = ""/>
         <Image source = {twitterImg} alternate = "" styles = ""/>
         <Image source = {InstaImg} alternate = "" styles = ""/>
         <Image source = {linkedImg} alternate = "" styles = ""/>         
            </div>
      </footer>
  )
}
