 
 import Image from "next/image";
 
  
 const Categories=()=>
 {
return(
<div className="w-full sm:h-full md:h-[500px] flex justify-center items-center mt-14  bg-gray-100 ">
    <div className="w-[80%] h-full  ">
        {/*heading*/}
        <div>
             <h2 className="font-semibold text-[22px] font-mono text-slate-700 mt-4">Top Categories</h2>
        </div>
         {/*products containers*/}
        <div className="flex sm:flex-col md:flex-row justify-between mt-9">
            <div>
                <div>
                <Image src={"/images/category.png"} alt="product" width={300} height={200}></Image>
                </div>
            </div>
                <div>
                    <div >
                     <Image src={"/images/category1.png"} alt="product" width={300} height={200}></Image>
                      </div>
                        
                 </div>
                      <div>
                           <div>
                            <Image src={"/images/category2.png"} alt="product" width={300} height={200}></Image>
                            </div>
           
                        </div>

         </div>
    </div>
</div>
)
 }
 export default Categories;