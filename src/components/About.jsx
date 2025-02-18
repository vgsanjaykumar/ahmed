import React from "react";
import { motion } from "framer-motion";
import { FaBuilding } from "react-icons/fa";

export const About = () => {
    return (
        <section id="about" className="top-container-1 ">
            <div className="py-2 ">
                <div className="mb-6 ">
                    <h2 className="title-text">About us</h2>
                </div>

                <div className="flex max-md:flex-col-reverse gap-10  items-center">
                <div className="">
                        <div className="p-2 h-44 w-[16%] max-md:w-[40%] max-md:h-28 img-float mr-10 max-md:mr-3">
                        <motion.div
                            className="h-full "
                            initial={{ scale: 1, opacity: 0 }}
                            whileInView={{ scale: 1.2, opacity: 1 }}
                            transition={{ duration: 1.4, ease: "easeOut" }}
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            <img
                                src="/ahmed outside.jpg"
                                alt="About Us"
                                className=" h-full w-full rounded-lg shadow-xl "
                            />
                        </motion.div>
                    </div>
                    <h2 className="md:text-lg lg:text-2xl text-sm font-bold text-gray-800 mb-2 ">Ahmed Paint Traders</h2>

                        <div className=" text-gray-400 md:text-sm fontmobile flex md:font-semibold mb-2  " >
                            <FaBuilding className=" md:h-5 md:w-4 h-5 w-5  " /> <h1 className="ml-2">Year of Establishment 1990</h1>
                    </div>
                        
                        <p className="text-gray-400 leading-relaxed md:text-sm fontmobile md:truncated ">
                            Ahmed Paint Traders is a trusted Asian Paints Dealer in Karaikudi, Tamil Nadu,
                            offering a wide range of premium paints, coatings and related products.
                            They specialize in interior and exterior paints,wood finishes, waterproofing
                            solutions and painting accessories from leading brands,with a focus on Asian Paints products.
                            <br/>
                            As a trusted paint trader,they cater to both retail and wholesale customers,
                            including homeowners, contractors and businesses. With a commitment to quality
                            and customer satisfaction,Ahmed Paint Traders provides expert advice,ensuring
                            you get the best products for your painting needs.
                        </p>
                        
                        <p className="text-gray-400 leading-relaxed fontmobile md:text-sm mt-2">
                            
                        </p>
                    </div>
                
                    

                </div>
            </div>
        </section>
    );
};
export default About;