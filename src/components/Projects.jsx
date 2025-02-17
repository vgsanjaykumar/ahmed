import React from "react";
import data from "./Projects.json"

export const Product = () => {
    return (
        <section className="top-container-1">
            <div className=" conatiner-serv  ">

                <div className=" Title-div ">
                    <h2 className="text-3xl font-bold txt-shadow text-gray-800 hover:text-[#FFF200] ">Dealership</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                    {data.map((d, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center bg-slate-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group transform hover:-translate-y-2"
                        >

                            <div className=" servies-img ">
                                <img src={d.icon} />
                            </div>

                            <div className="text-center p-5">
                                <h3 className="text-2xl font-bold text-gray-800 mb-10 hover:text-[#FFF200]">
                                    {d.name}
                                </h3>
                                <p className="text-gray-600 p text-sm ">{d.text}</p>
                            </div>
                        </div>
                    ))
                    }
                </div>
            </div>
        </section>

    );
};

export default Product;
