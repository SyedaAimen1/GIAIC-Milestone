import "../styles/text.css"
import Image from "next/image";



function TextAbout(){
return(
<main>
      <div className="main-text">
        <div className="text-cont">
           <div>
            <Image src={"/images/bg3.jpg"} alt="bg" width={800}height={400} className="image-about"></Image>
          </div>
          <div>
            <h1 className="title-cont">My Projects</h1>
           <div className="para-main">
                <div className="para-cont">
                    <h2 className="heading">E-commerce Webpage</h2>
                    <p className="more-desc-cont">An e-commerce website is a virtual store where customers can buy and sell products and services online. E-commerce websites allow businesses to process orders, 
                      manage shipping, and provide customer service.</p>
                    <h2 className="heading">ATM Machine</h2>
                    <p className="more-desc-cont">An automated teller machine program (ATM ) is a program that allows users to simulate the functionality of an automated teller machine (ATM). ATMs are electronic banking devices that allow customers
                       to perform financial transactions without the need for a bank representatives.</p>
                </div>
                <div className="para-cont">
                    <h2 className="heading">Currency Convertor</h2>
                    <p className="more-desc-cont">A currency converter is an online tool that allows users to convert one currency into another based on current exchange rates. It provides real-time calculations for various global currencies
                      , making it easy to check the value of one currency in terms of another.Many converters also offer historical exchange rates for reference.</p>
                    <h2 className="heading">Cli Calculator</h2>
                    <p className="more-desc-cont">A CLI (Command Line Interface) calculator is a tool that allows users to perform arithmetic calculations directly in a terminal or command prompt.
                       Command-Line Calculator (CLiCalculator) provides the most fluid interface. </p>
                </div>
         </div>
      </div>
   </div>
  </div>
</main>

)
}
export default  TextAbout;