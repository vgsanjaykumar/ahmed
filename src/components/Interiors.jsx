import React from "react";
import { BsArrowRight } from "react-icons/bs";
const inte = [
    {
        Name: "Home interior ",
        img: "/home 2 int.jpg"
    },
    {
        Name: "Living room interior ",
        img: "/living room.jpg"
    },

    {
        Name: "Bedroom interior ",
        img: "/bedroom int.jpg"
    },
    {
        Name: " kitchen interior",
        img: "/kic int.jpeg"
    }

]
export const Interiors = () => {
    return (
        <section id="explore" className="top-container-1">
            <div className="">
                <div className="">
                    <h2 className="title-text font-bold mx-auto text-gray-700  text-center mb-4">Explore our room makeover services</h2>
                    <p className="mx-auto text-gray-400  fontmobile  mb-3">Get hassle-free project management and execution when it comes to building your dream home with a tailor-made service.</p>
                </div>
                <div className="flex justify-center flex-col gap-6 md:justify-between items-center  px-0 lg:px-4 ">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 items-center">
                        {inte.map((inte) => (
                            <a href="#products">
                                <div className="flex justify-center relative hover:-translate-y-4 duration-500 delay-200  h-[80%]  ">
                                    <img
                                        src={inte.img}
                                        alt="About Us"
                                        className="w-full  max-w-md rounded-lg shadow-lg object-center relative  "
                                    />
                                    <div className="absolute top-0 left-0 right-0 bottom-0  rounded-lg  text-white    hover:bg-[#000000a1] opacity-0 hover:opacity-[100%] duration-500 delay-150 ">
                                        <p className="absolute top-[68%] lg:top-[75%] md:top-[75%]  left-2 right-0 md:text-2xl text-[10px]">{inte.Name}</p>
                                        <div className="absolute  top-[76%] lg:top-[76%] md:top-[78%] md:left-[85%]  left-[85%] right-0 text-white font-bold md:text-2xl text-[10px]">
                                            <a href="#whatapp">    <BsArrowRight /> </a>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>

                </div>
            </div>
        </section>

    );
};

export default Interiors;
