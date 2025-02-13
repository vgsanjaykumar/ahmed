import React from "react";

export const About = () => {
    return (
        <section className="top-container-1 ">
          <div id="about" className="py-2 ">
                <div className="">
                    <h2 className="title-text">About us</h2>
                </div>
            <div className="flex justify-center md:justify-between items-center  px-2 lg:px-4 ">
                
                <div className="grid grid-cols-1 md:grid-cols-2  items-center">
                    <div className="">
                        <h2 className="md:text-lg lg:text-2xl text-xl font-bold text-gray-800 mb-4">Ahmed Paint Traders</h2>
                        <h3 className="md:text-sm lg:text-xl text-xl font-bold text-gray-500 mb-4"> Exporter / Supplier / Retailer Of Paint</h3>
                        <p className="text-gray-400 leading-relaxed max-md:text-sm">
                     Ahmed Paint Traders is a trusted Asian Paints Dealer in Karaikudi,Tamil Nadu,
                     offering a wide range of premium paints,coatings,and related products. 
                     They specialize in interior and exterior paints,wood finishes,waterproofing 
                     solutions, and painting accessories from leading brands,with a focus on Asian Paints products.
                              </p>
                              <p className="text-gray-400 leading-relaxed max-md:text-sm mt-4">
                     As a trusted paint trader,they cater to both retail and wholesale customers,
                     including homeowners,contractors,and businesses.With a commitment to quality
                    and customer satisfaction,Ahmed Paint Traders provides expert advice,ensuring 
                    you get the best products for your painting needs.
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
