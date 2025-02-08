
import Image from "next/image";
import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { BsSearch } from "react-icons/bs";

const Footer=()=>{
    return(
        <div>
    <div className="bg-white w-full text-gray-400 flex justify-center items-center sm:h-full  md:h-[350px] sm:mt-3 md:mt-10 ">
        <div className=" h-full sm:w-full md:w-[80%] lg:w-[100%] flex items-center mb-3">
            <div className="flex sm:flex-col md:flex-row  justify-between  md:space-x-12  mt-7  mr-4  ">
        <div className="sm:mt-5">
             <Image src="/images/Logo.png" alt="logo" width={150} height={100} /> 
          <ul className=" sm:mt-3">
            <li className="text-gray-400 text-[15px] ">Vivamus tristique odio sit amet velit semper,</li>
            <li className="text-gray-400 text-[15px]">eu posuere turpis interdum.</li>
            <li className="text-gray-400 text-[15px]">Cras egestas purus  </li>
          </ul>
                <div  className=" rounded-s-sm md:text-[14px] sm:text-[13px] flex justify-between items-center sm:space-x-1 md:space-x-1 sm:mt-4 ">

                    <div className="cursor-default  hover:bg-teal-100 hover:text-blue-300 text-gray-500"><FaFacebookSquare/>  </div>
                    <div  className="cursor-default hover:bg-teal-100 hover:text-blue-300 text-gray-500"><FaInstagramSquare /> </div>
                    <div className="cursor-default hover:bg-teal-100 hover:text-blue-300  text-gray-500"><FaTwitter />  </div>
                    <div className="cursor-default hover:bg-teal-100 hover:text-blue-300  text-gray-500"><FaLinkedin /> </div>
                    <div className="cursor-default hover:bg-teal-100 hover:text-blue-300  text-gray-500"><FaPinterest /> </div>
                    <div className="cursor-default hover:bg-teal-100 hover:text-blue-300  text-gray-500"><FaYoutube /> </div>
              </div>
         </div>
    
                    <div  className="sm:mt-2">
                  <ul>
                <h3>CATEGORY</h3>
                 < li className="text-black text-[15px] sm:mt-1 md:mt-4">Sofa</li>
                 <li className="text-black text-[15px]">Arm Chair</li>
                 <li className="text-black text-[15px]">Wing Chair</li>
                 <li className="text-black text-[15px]"> Desk Chair</li>
                 <li className="text-black text-[15px]">Wooden Chair</li>
                 <li className="text-black text-[15px]"> Park bench</li>
                </ul> 
                 </div>

                <div className="sm:mt-2">
                 <ul>
                <h3>SUPPORT</h3>   
                <li className="text-black text-[15px] sm:mt-1 md:mt-4">Help & Support</li>
                <li className="text-black text-[15px]">Tearms & Conditions</li>
                <li className="text-black text-[15px]">Privacy Policy</li>
                <li className="text-black text-[15px]">Help</li>
                </ul>  
                 </div>
                 <div className=" sm:mt-2">
                    <div>
                        <div>
                        <h3>NEWSLETTER</h3>
                        </div>
                        <div>
                        <div>
                        <input className="border-gray-100 border p-2 px-3 rounded-lg w-[85%] ml-4"
                         type="text"
                         placeholder="Your Email"
                        ></input>
                        <BsSearch className="text-[15px] absolute left-2 top-0 ml-3 mt-4" />
                         <div className="flex justify-items-start sm:text-left sm:mt-2">
                          <button className='font-light text-white bg-teal-400 py-2 px-5 rounded mb-[5px] ml-4 hover:underline' > Subscribe
                          </button> 
                         </div>
                         </div>
                         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> Nullam tincidunt erat enim.</p>
                        </div>
                        
                     </div>
               </div>
            </div>
     </div>
     <hr />
         </div>
         <div className=" sm:py-3 md:py-5 sm:w-full flex justify-center items-start md:items-center text-black font-light sm:mt-0 md:mt-1 text-[20px] ">
       <p> @ 2021-Blog-Designed & Develop by Zakirsoft</p>
     </div>
     
 </div>  
)
}
export default Footer;




 