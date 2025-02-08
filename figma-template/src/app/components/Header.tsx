import Image from "next/image"
import Link from "next/link";

function Header(){
return(
       <div className="w-full h-[80px] flex justify-center items-center sm:border-none md:border-b-2 bg-gray-100">
           <div className="w-[80%] h-full flex sm:flex-col md:flex-row justify-between items-start md:items-center ">
               <div>
                  <Image src="/images/Logo.png" alt="logo" width={180} height={100} />
               </div> 
                 <div className="flex sm:gap-x-2 md:gap-x-7 justify-between items-center " >
                     <Link className="navbar" href={"/"}>Home</Link>
                     <Link  className="navbar " href={"/"}>Shop</Link>
                     <Link className="navbar " href={"/"}>Products</Link>
                     <Link className="navbar " href={"/"}>About </Link>
                   </div>  
            </div>
       </div>
      )
};  
export default Header
   
    

