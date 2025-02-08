import Image from 'next/image';
 export default function Headertop(){
    return(


<div className="text-white text-[14px] sm:w-full  text-left md:px-30 sm:px-20  bg-blue-900">
                 free shipping on all orders over $50 

<div className="flex justify-end items-center sm:w-[80px] md:w-full pr-8 ">
            <div className="flex space-x-6">
               <Image src="/images/ENG.png" alt="image3" width={30} height={50}/>
               <Image src="/images/Faqs.png" alt="image2" width={30} height={50}/>
               <Image src="/images/need.png" alt="image1" width={50} height={20}/>
            </div>
 </div>
 </div>
   )
}




