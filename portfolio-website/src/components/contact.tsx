import "../styles/contact.css"
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaRegAddressCard } from "react-icons/fa6";




function Contact(){

return(
<main className="contact-main">
    <div className="contact-desc">
      <h1 className="head-contact">Leave a Message</h1>
      <ul className="list-con">
      <FaPhoneAlt /> <li className="list-det">PHONE:0305165780 </li>
      <MdEmail />  <li className="list-det">EMAIL: syedaaimen24@gmail.com</li>
      <FaRegAddressCard /> <li className="list-det">ADDRESS:karachi ,Pakistan</li>
      </ul>
      </div>
        <div className="form-cont">
         <form action={""} className="form">
            <input type="text" placeholder="Enter Your Name"></input>
            <input type="text" placeholder="abc@gmail.com"></input>
            <input type="text" placeholder="Enter Your Message" className="msg"></input>
         </form>
         <button className="button-contact">SUBMIT</button>
   </div>
</main>

)

}
export default  Contact;