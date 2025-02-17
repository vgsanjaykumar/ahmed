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
        <section id="about" className="top-container-1 bg-gray-100 ">
            <div className="py-2 ">
                <div className="mb-10">
                    <h2 className="title-text">Why choose us?</h2>
                </div>
                <div className="  ">

                    <div className="grid grid-cols-5 place-items-center  items-center  gap-6 text-center ">

                        {why.map((why) =>
                            <div >
                                <img src={why.img} alt="" className="bg-blue-500 rounded-full object-cover mb-5 h-[50%] md:h-full" />
                                <h2>{why.name}</h2>
                            </div>
                        )}








                    </div>
                </div>
            </div>
        </section>

    );
};

export default Why