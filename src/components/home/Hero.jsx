import React from 'react';

const Hero = () => {
    return (
        <div className="relative bg-red-100 bg-cover bg-center h-screen flex items-center ">

            <img 
                src="/RKImages/RAMYA.jpg"
                alt="hero" 
                className="hidden object-cover lg:block w-full h-full  p-4 rounded " />
            
    
            <img
                src="/RKImages/RAMYA MOBILE.jpg"
                alt="RK"
                className='block lg:hidden w-screen h-screen object-cover p-4 rounded'/>
        

            <div className="absolute inset-0 flex flex-col justify-start lg:justify-end lg:items-start items-center p-4 lg:p-20">
                <div className="text-center lg:text-left">
                    <h1 className="text-white text-3xl md:text-3xl pt-12 lg:text-6xl font-bold">You deserve valuable price in<span className="block">market</span></h1>
                </div>
                <div className="flex flex-row float-start lg:flex-row gap-4 lg:gap-6 -mt-1 lg:mt-8 p-6 ">
                    <button className="bg-yellow-300 text-amber-900 font-bold py-2 px-4 -ml-5 rounded-xl hover:bg-red-500 hover:text-white">
                        Sell Gold
                    </button>
                    <button className="bg-opacity-30 backdrop-blur-sm border border-white text-white font-bold py-2 px-4 rounded-xl hover:bg-red-500">
                        Know more
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
