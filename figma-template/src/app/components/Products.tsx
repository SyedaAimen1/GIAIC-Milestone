import { CiShoppingCart } from "react-icons/ci";
import Image from "next/image"


const Product=()=>{
  return(

<div className=" bg-gray-100">    
<div>
<div className="w-full sm:h-full  md:h-[400px] flex justify-center items-center mt-5  ">
    <div className="w-[80%] h-full">
        {/*heading*/}
        <div>
             <h2 className="font-semibold text-[25px] font-mono text-slate-700 mt-4">Our Products</h2>
        </div>
         {/*products containers*/}
        <div className="  flex sm:flex-col md:flex-row justify-between mt-7">
            <div>
            <div className=" w-[200px] h-[200px] ">
                <Image src={"/images/product1.png"} alt="product" width={200} height={100}></Image>
            </div>
            {/*image title*/}
              <div className="flex flex-col">
               <div className=" flex justify-between mt-2 "> 
              <span className=" text-teal-200"> Library Stool Chair  </span>
              <CiShoppingCart className=" text-white bg-teal-400 w-6 h-6 rounded-sm sm:mr-32" />
              </div>
              <span className=" font-bold">$20</span>
              </div>
            </div>
            <div>
            <div className=" w-[200px] h-[200px] ">
                <Image src={"/images/product2.png"} alt="product" width={200} height={100}></Image>
            </div>
              {/*image title*/}
              <div className="flex flex-col">
               <div className=" flex justify-between mt-2 "> 
              <span className=" text-teal-200"> Library Stool Chair  </span>
              <CiShoppingCart className=" text-white bg-gray-400 w-6 h-6 rounded-sm sm:mr-32" />
              </div>
              <span className=" font-bold">$20</span>
              </div>
            </div>
           <div>
           <div className=" w-[200px] h-[200px] ">
                <Image src={"/images/image.png"} alt="product" width={200} height={100}></Image>
           </div>
              {/*image title*/}
               <div className="flex flex-col">
               <div className=" flex justify-between mt-2 "> 
              <span className=" text-teal-200"> Library Stool Chair  </span>
              <CiShoppingCart className=" text-white bg-gray-400 w-6 h-6 rounded-sm sm:mr-32" />
              </div>
              <span className=" font-bold">$20</span>
              </div>
           </div>

                 <div>
                    <div className=" w-[200px] h-[200px] ">
                     <Image src={"/images/product3.png"} alt="product" width={200} height={100}></Image>
                    </div>
                     {/*image title*/}
                      <div className="flex flex-col">
                       <div className=" flex justify-between mt-2 "> 
                       <span className=" text-teal-200"> Library Stool Chair  </span>
                       <CiShoppingCart className=" text-white bg-gray-400 w-6 h-6 rounded-sm sm:mr-32" />
                       </div>
                      <span className=" font-bold">$20</span>
                       </div>
                    </div>
                </div>
           </div>
        </div>

        <div className="w-full sm:h-full md:h-[400px] flex justify-center items-center mt-12 ">
    <div className="w-[80%] h-full  ">
        {/*products containers*/}
        <div className="  flex sm:flex-col md:flex-row justify-between mt-7">
            <div>
            <div className=" w-[200px] h-[200px] ">
                <Image src={"/images/product0.png"} alt="product" width={200} height={100}></Image>
            </div>
            {/*image title*/}
              <div className="flex flex-col">
               <div className=" flex  justify-between mt-2 "> 
              <span className=" text-teal-200"> Library Stool Chair  </span>
              <CiShoppingCart className=" text-white bg-teal-400 w-6 h-6 rounded-sm sm:mr-32" />
              </div>
              <span className=" font-bold">$20</span>
              </div>
            </div>
            <div>
            <div className=" w-[200px] h-[200px] ">
                <Image src={"/images/product4.png"} alt="product" width={200} height={100}></Image>
            </div>
              {/*image title*/}
              <div className="flex flex-col">
               <div className=" flex justify-between mt-2 "> 
              <span className=" text-teal-200"> Library Stool Chair  </span>
              <CiShoppingCart className=" text-white bg-gray-400 w-6 h-6 rounded-sm sm:mr-32" />
              </div>
              <span className=" font-bold">$20</span>
              </div>
            </div>
           <div>
           <div className=" w-[200px] h-[200px] ">
                <Image src={"/images/product5.png"} alt="product" width={200} height={100}></Image>
           </div>
              {/*image title*/}
               <div className="flex flex-col">
               <div className=" flex justify-between mt-2 "> 
              <span className=" text-teal-200"> Library Stool Chair  </span>
              <CiShoppingCart className=" text-white bg-gray-400 w-6 h-6 rounded-sm sm:mr-32" />
              </div>
              <span className=" font-bold">$20</span>
              </div>
           </div>

                 <div>
                    <div className=" w-[200px] h-[200px] ">
                     <Image src={"/images/product6.png"} alt="product" width={200} height={100}></Image>
                    </div>
                     {/*image title*/}
                      <div className="flex flex-col">
                       <div className=" flex justify-between mt-2 "> 
                       <span className=" text-teal-200"> Library Stool Chair  </span>
                       <CiShoppingCart className=" text-white bg-gray-400 w-6 h-6 rounded-sm sm:mr-32" />
                       </div>
                      <span className=" font-bold">$20</span>
                       </div>
                    </div>
                </div>
           </div>
        </div>
     </div>
</div>
 )
}
export default Product;