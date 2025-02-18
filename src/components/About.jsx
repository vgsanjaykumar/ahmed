import React from "react";
import { motion } from "framer-motion";

export const About = () => {
    return (
        <section id="about" className="top-container-1 ">
        <div  className="py-2 ">
                <div className="mb-8 md:mb-0">
                    <h2 className="title-text">About us</h2>
                </div>
            <div className="    ">
                
                <div className="grid grid-cols-1 md:grid-cols-2  items-center">
                <div className="flex justify-center md:h-[60%] h-[60%] lg:h-[60%]">
                     <motion.div
            className="flex justify-center"
            initial={{ scale: 1, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.4, ease:"easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
          >
                        <img
                            src="/ahmed outside.jpg"
                            alt="About Us"
                            className="w-full max-md:w-[35%] max-w-md rounded-lg shadow-lg "
                        />
                        </motion.div>
                    </div>
                    <div className="">
                        <h2 className="md:text-lg lg:text-2xl text-sm font-bold text-gray-800 mb-2">Ahmed Paint Traders</h2>
                       
                            <p className="text-gray-400 leading-relaxed md:text-sm fontmobile">
                     Ahmed Paint Traders is a trusted Asian Paints Dealer in Karaikudi,Tamil Nadu,
                     offering a wide range of premium paints,coatings,and related products. 
                     They specialize in interior and exterior paints,wood finishes,waterproofing
                     solutions, and painting accessories from leading brands,with a focus on Asian Paints products.
                              </p>
                            <p className="text-gray-400 leading-relaxed fontmobile md:text-sm mt-2">
                     As a trusted paint trader,they cater to both retail and wholesale customers,
                     including homeowners,contractors,and businesses.With a commitment to quality
                    and customer satisfaction,Ahmed Paint Traders provides expert advice,ensuring 
                    you get the best products for your painting needs.
                              </p>
                    </div>
                     
                </div>
            </div>
        </div>
        </section>

    );
};

export default About;
