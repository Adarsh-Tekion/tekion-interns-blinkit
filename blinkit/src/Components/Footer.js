import React from 'react'
import '../App.css';

export default function Footer() {
  return (
    <footer className= "flex align-center justify-center">
         <p className="flex">© 2018 Blinkit Commerce Pvt Ltd (formerly known as Grofers India Pvt. Ltd), 2016-2023</p>
         <div className="footer-download-source flex">
            <p className="download-text flex"><strong>Download App</strong></p>
            <div className="footer-store-img flex justify-center align-center">
               <img src={require("../images/playstore.png")} alt=""/>       
               <img src={require("../images/appstore.png")} alt=""/>         
            </div>
         </div>
         <div className="footer-social-media flex align-center justify-center">     
            <img src={require("../images/facebook.png")} alt=""/>       
            <img src={require("../images/twitter.png")} alt=""/>       
            <img src={require("../images/instagram.png")} alt=""/>      
            <img src={require("../images/linkedin.png")} alt=""/>             
         </div>
      </footer>
  )
}
