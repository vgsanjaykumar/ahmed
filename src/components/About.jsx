import React from "react";

export const About = () => {
    return (
        <section className="top-container-1">
          <div id="about" className="py-2 bg-gray-50">
                <div className="">
                    <h2 className="title-text">About us</h2>
                </div>
            <div className="flex justify-center md:justify-between items-center  px-0 lg:px-4 ">
                
                <div className="grid grid-cols-1 md:grid-cols-2  items-center">
                    <div className="">
                        <h2 className="md:text-lg lg:text-2xl text-xl font-bold text-gray-800 mb-4">Ahmed Paint Traders</h2>
                        <h3 className="md:text-sm lg:text-2xl text-xl font-bold text-gray-800 mb-4"> Exporter / Supplier / Retailer Of Paint</h3>
                        <p className="text-gray-600 leading-relaxed max-md:text-sm">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos, totam itaque ullam nihil deserunt, ad iusto vel dolor eos dolorum,
                         aliquid non. Natus hic laboriosam ipsa voluptates ipsam ullam expedita!
                        </p>
                    </div>
                     <div className="flex justify-center h-[60%]">
                        <img
                            src="/ahmed/ahmed outside.jpg"
                            alt="About Us"
                            className="w-full max-h-max max-w-md rounded-lg shadow-lg object-center hover:scale-110  duration-700 delay-100"
                        />
                    </div>
                </div>
            </div>
        </div>
        </section>

    );
};

export default About;
