import React from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaUser, FaWhatsapp } from "react-icons/fa";
import { FaLocationDot, FaPhone } from "react-icons/fa6";

import { BiMessage } from "react-icons/bi";

export const Contact = () => {
  return (
    <section id="about" className="top-container-1 ">
      <div className="py-2 ">
        <motion.div
          className=""
          initial={{ scale: 1, opacity: 0 }}
          whileInView={{ scale: 1.1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <div className="mb-8">
            <h2 className="title-text mb-10">Contact us</h2>
          </div>
          <div className="flex justify-center md:justify-between items-center  px-2 lg:px-4 ">

            <div className="grid grid-cols-1 md:grid-cols-2  items-center">
              <div className="flex justify-center h-[%] md:h-[100%]">

                <img
                  src="/ahmed/contact ahmed.png"
                  alt="About Us"
                  className="w-full max-h-max max-w-md rounded-lg  delay-400 object-center md:mb-0 mb-6 "
                />


              </div>

              <div className="">
                <div className="flex">
                  <FaUser className="text-[#8a8de1] md:text-lg lg:text-xl text-xl mr-3" />
                  <h2 className="md:text-lg lg:text-2xl text-xl  text-gray-500 mb-4">Ahamed Irfan</h2>
                </div>
                <div className="flex">
                  <FaLocationDot className="text-[#8a8de1] md:text-lg lg:text-2xl text-4xl mr-3" />
                  <h2 className="md:text-lg lg:text-xl text-xl  text-gray-500  mb-4">325,M.a.quddush Complex,Sekkalai Road,, KARAIKUDI, Tamil Nadu - 630001, India</h2>
                </div>
                <div className="flex">
                  <FaPhone className="text-[#8a8de1] md:text-lg lg:text-2xl text-xl mr-3" />
                  <h2 className="md:text-lg lg:text-2xl text-xl f text-gray-500  mb-4">91+9874561230</h2>
                </div>
                <div className="flex md:mt-4 md:justify-start justify-center text-[#8a8de1] ">
                  <FaWhatsapp className=" md:text-lg lg:text-2xl text-xl mr-3 hover:text-4xl duration-700 delay-400" />
                  <FaInstagram className="md:text-lg lg:text-2xl text-xl mr-3 hover:text-4xl duration-700 delay-400" />
                  <BiMessage className="md:text-lg lg:text-2xl text-xl mr-3 hover:text-4xl duration-700 delay-400" />
                  <FaFacebook className="md:text-lg lg:text-2xl text-xl mr-3 hover:text-4xl duration-700 delay-400" />

                </div>


              </div>
            </div>

          </div>

        </motion.div>
      </div>

    </section>

  );
};

export default Contact;
