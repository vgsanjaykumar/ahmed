import React from "react";


export const Why = () => {

    const why = [
        {
            name: "Trained Professional",
            img: "/why/Trained Professional.png"
        },
        {
            name: "Technical site evaluation",
            img: "/why/Technical site evaluation.png"
        },
        {
            name: "Personalized Colour",
            img: "/why/Personalized Colour Consultation.png"
        },
        {
            name: "Safety Protocol",
            img: "/why/Stringent Safety Protocol.png"
        },
        {
            name: "Mechanized Tools",
            img: "/why/Mechanized Tools.png"
        }
    ]
    return (
        <section id="about" className=" px-5 md:mb-20 bg-gray-100   ">
            <div className="pt-[1px] ">
                <div className="mb-2">
                    <h2 className="title-text mt-4">Why choose us?</h2>
                </div>
                <div className=" bg-gray-100 ">

                    <div className="grid grid-cols-5 place-items-center  justify-center items-center  gap-2 md:gap-4  ">

                        {why.map((why) =>
                            <div >
                                <img src={why.img} alt="" className="bg-[#0A3981] rounded-full object-cover p-[2px] mb-2 h-[80%] w-[80%] md:h-[60%] md:w-[60%]" />
                                <h2 className="text-[6px] uppercase md:text-sm mb-6  ">{why.name}</h2>
                            </div>
                        )}








                    </div>
                </div>
            </div>
        </section>

    );
};

export default Why