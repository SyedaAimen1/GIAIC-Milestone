import React from 'react';
import Image from 'next/image';

function  Hero (){
return (
    <div>
<div className='w-full sm:h-full md:h-[450px] bg-gray-100 flex justify-center mt-7'> 
    <div className=' sm:w-full md:w-[80%] h-full flex justify-between'>
         < div className='flex items-center justify-center '>
             <div >
                <div className="text-[15px] font-light ">
                 <h1> WELCOME TO CHAIRY </h1>
                </div>
                 <div>
                  <p className ='font-bold sm:text-[34px] md:text-[38px]' >Best Furniture <br/> Collection For Your<br/> Interior</p>
                  <button className='font-light text-white bg-teal-400 py-2 px-4 rounded' > Shop Now </button>
                </div>
              </div>
          </div> 
                <div>
                <Image src={"/images/hero.png"}  width={300} height={400} alt='chair' className='mr-28'>
                </Image>
           </div>
         </div>
    </div>
          <div className='sm:mr-6'>
            <Image src={"/images/Feature.png"}  width={1200} height={300} alt='fe'>
                </Image>
           </div>
</div>
)
};
export default Hero;




