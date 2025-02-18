import React from "react";
import { BsWhatsapp } from "react-icons/bs";

const Hero = () => {
    return (
        <div className=" bg-[#080808ac]  ">
            <div className=" h-[400px] md:h-[600px] lg:h-[800px] flex justify-center items-center ">
                <div className="gap-4  bg-[#00000028] rounded-2xl w-full h-50  ">
                    <div className="text-white  text-center mt-7 ">
                        <h1 className="xl:text-4xl md:text-2xl  uppercase font-bold text-sm  ">
                            Ahmed paint<span className="text-[#7AB2D3]"> traders</span>
                        </h1>
                        <p className="mt-5 px-8 xl:text-sm md:text-base fontmobile uppercase  text-slate-300">
                           Sekkalai Rd, near FIVE LAMPS, Karaikudi, Tamil Nadu 630001
                        </p>
                        <button
                            className=" bg-white rounded-full border-white text-green-500 mt-5 mb-5  mobilefont px-2 py-1 md:py-2 md:px-4 "
                        >

                            <a href="https://wa.me/91+9600417117?text=hello I need buliding products and cement !" target="_blank"><BsWhatsapp className="inline-block max-md:text-base text-2xl hover:scale-110 duration-500 delay-200 mr-2 "/>Whatapp</a> 
                        </button>
                    </div>
                    <div></div>
                </div>
            </div>

            <div className="absolute bottom-0 z-30 right-0 w-full bg-gradient-to-b from-transparent from-10% to-primary to-90% h-[20px] sm:h-[50px] md:[60px]"></div>
        </div>
    );
};

export default Hero;
