import React from "react";
import { BsArrowRight} from "react-icons/bs";
const area =[
    {
    Name:"Interiors",
    img:"/interiors.png"
    },
     {
    Name:"Exteriors",
    img:"/exteriors.png"
    },
     {
    Name:"Wallpaper",
    img:"/wallpapers.png"
    },
     {
    Name:"WoodFinishes",
    img:"/wood-finishes.png"
    },
     {
    Name:"Waterproofing",
    img:"/waterproofing.png"
    },
     {
    Name:"Emulsions",
    img:"/emulsions.png"
    }
    
]
export const Areas = () => {
    return (
        <section  className=" top-container-1">
          <div className="">
                <div className="">
                    <h2 className="text-2xl md:text-4xl font-bold mx-auto text-gray-700  text-center mb-2">Areas of expertise</h2>
                    <p className="mx-auto text-gray-400   text-center md:mb-16 mb-8">One stop solution for all you need to keep your living space intact.</p>
                </div>
            <div className="flex justify-center flex-col gap-6 md:justify-between items-center  px-0 lg:px-4 ">
                 <div className="grid grid-cols-2 lg:grid-cols-4  gap-5 items-center">
                    {area.map((area) => (
                    <a href="#products">
                      <div className="flex justify-center relative hover:-translate-y-4 duration-500 delay-200 mb-5 ">
                        <img
                            src={area.img}
                            alt="About Us"
                            className="w-full max-h-max max-w-md rounded-lg shadow-lg object-center  "
                        />
                        <p className="absolute top-[70%] md:top-[80%] lg:top-[80%] left-5 right-0  text-white semi-font-bold  md:text-2xl text-[10px]">{area.Name}</p>
                        <div className="absolute  top-[76%] lg:top-[80%] md:top-[80%] md:left-[85%]  left-[80%] right-0 text-white font-bold md:text-2xl text-sm">
                            <BsArrowRight />
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

export default Areas;
