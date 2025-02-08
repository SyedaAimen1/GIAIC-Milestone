import "../styles/hero.css";
import Image from "next/image";
import Link from "next/link";

function Hero(){
return(
<div className="hero-boxes">
  <div className="hero-boxes-container">
  <div>
     {/*right side*/}
        <Image 
        src={"/images/profile.jpg"} 
        width={300} 
        height={300} 
        alt="me"
        className="hero-image"/>
    </div>
        {/*left side*/}
     <div className="hero-right-div">
          <h2 className="hero-text">  A Novice Learner <br/> In  Web Development...</h2>
            <p className="desc-hero">I am doing generative A.I Metaverse 3.0 from Governor house. i have done bachelor from D.J in Microbiology, Biochemistry & Chemistry. I am thrive to do 
               new projects and learn new things by solving hurdles without thinking about my comfort zone.</p>
             <div>
            <button className="hero-button" > <Link  href={"/contact"}> Hire Me</Link> </button>
             </div>
       </div>
       </div>
</div>
)
}
export default Hero