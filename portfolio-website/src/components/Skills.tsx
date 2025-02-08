import "../styles/skills.css" 
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa6";
import { SiJavascript } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiGooglemarketingplatform } from "react-icons/si";


function Skills(){
return(
<main className="main-skill">
  <div className="skill-cont">
    {/*top div*/}
    <div className="top-div">
        <h2 className="title">My Skills</h2>
    </div>
 {/*bottom div*/}
   <div className="boxes-cont">
       <div className="box"><FaHtml5 className=" skills-icons1" />
        <h3 className="desc-box"> Web Development </h3>
        </div>
       <div className="box"><FaCss3Alt  className=" skills-icons2" />
       <h3 className="desc-box"> UI/UX designs </h3></div>
       <div className="box">
       <SiJavascript  className=" skills-icons3" />
       <h3 className="desc-box"> Java Script </h3>
       </div>
       <div className="box">
       <SiTypescript  className=" skills-icons4" />
       <h3 className="desc-box"> Type Script </h3>
       </div>
       <div className="box">
       <FaReact  className=" skills-icons5" />
       <h3 className="desc-box"> React Framework </h3>
       </div>
       <div className="box">
       <SiGooglemarketingplatform  className=" skills-icons6" />
       <h3 className="desc-box"> Social Media Marketing </h3>
       </div>
   </div>
</div>
        
</main>
)

}
export default Skills;