import "../styles/footer.css";
import React from "react";
import Link from "next/link";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";


function Footer(){
   return(
       <main>
         <div className="footer-main">
             <div className="head-footer"> 
               <div className="cont-foot">
                <div className="text-about">
                    <h1 className="name-footer">About Me</h1>
                    <ul className="para-footer">
                      <li></li> I am Bachelor in Arts.
                      <li></li> Doing Generative A.I, Web 3, and Metaverse Tech From Governor House.
                    
                    </ul>
                   <div className="react-icons-container">
                        <div className="react-icons"><FaFacebookSquare/> </div>
                        <div className="react-icons" ><FaInstagramSquare /> </div>
                        <div className="react-icons"><FaTwitter />  </div>
                        <div className="react-icons"><FaLinkedin /> </div>
                        </div>   
                     </div>
                   <div>
                           <div>
                           <h3 className="links-title"> Links</h3>
                           <ul className="links-footer">
                            <li className="links-footer">
                            <Link className="links-footer" href={"/"}> Home</Link>  
                            </li>
                           <li className="links-footer" >
                           <Link className="links-footer" href={"/about"}> About</Link>
                             </li>
                           <li className="links-footer">
                           <Link className="links-footer" href={"/contact"}> Connect with Me</Link>
                           </li>
                           </ul> 
                        </div>
                        <div>
                           <h3 className="links-title">Newsletter</h3>
                             <div>
                              <input type="text" placeholder="Your Email" className="footer-input" ></input>
                              <button className="footer-button"> Subscribe </button> 
                            </div>
                           </div>
                        </div>
                       </div>
                    </div>

                   <hr/>
                </div>
                <div className="text-copy">
                   <p>© Copyright Syeda Aimen 2024 Design by Styleyourweb </p>
                </div> 
                
  </main>
 )  
}
export default Footer;
