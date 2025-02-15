import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaFacebook, FaInstagram, FaUser, FaWhatsapp } from "react-icons/fa";
import { FaLocationDot, FaPhone } from "react-icons/fa6";

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
          <div className="md:mb-8 md:mt-5 mt-6">
            <h2 className="title-text ">Contact us</h2>
          </div>
          <div className="flex justify-center md:justify-between items-center  px-2 lg:px-4 ">

            <div className="grid grid-cols-1 md:grid-cols-2  items-center mb-10">
              <div className="flex justify-center h-[65%]  md:h-[75%]">

                <img
                  src="/contact ahmed.png"
                  alt="About Us"
                  className="w-full max-h-max max-w-md rounded-lg  delay-400 object-center  "
                />


              </div>

              <div className="mb-10">
                <div className="flex">
                  <FaUser className="text-[#8a8de1] md:text-lg lg:text-xl text-xl mr-3" />
                  <h2 className="md:text-lg lg:text-2xl text-sm  text-gray-500 mb-4">Ahamed Irfan</h2>
                </div>
                <div className="flex">
                  <FaLocationDot className="text-[#8a8de1] md:text-lg lg:text-2xl text-4xl mr-3" />
                  <h2 className="md:text-lg lg:text-xl text-sm  text-gray-500  mb-4">325,M.a.quddush Complex,Sekkalai Road,KARAIKUDI,Tamil Nadu - 630001,India</h2>
                </div>
                <div className="flex">
                  <FaPhone className="text-[#8a8de1] md:text-lg lg:text-2xl text-xl mr-3" />
                  <h2 className="md:text-lg lg:text-2xl text-sm f text-gray-500  mb-4">91+9874561230</h2>
                </div>
                <div className="flex md:mt-4 md:justify-start justify-center text-[#8a8de1] ">
                  <a href="https://wa.me/91+9600417117?text=hello how can help you" target="2_blank"><FaWhatsapp className=" md:text-lg lg:text-2xl text-xl mr-3 hover:text-4xl duration-700 delay-400" /></a>
                  <a href="mailto:sanjaykumarvgs@gmail.com" target="2_blank">  <FaEnvelope className="md:text-lg lg:text-2xl text-xl mr-3 hover:text-4xl duration-700 delay-400" /></a>
                  <a href="" target="2_blank"> <FaInstagram className="md:text-lg lg:text-2xl text-xl mr-3 hover:text-4xl duration-700 delay-400" /></a>
                  <a href="https://www.facebook.com/ahmedpaintskkdi/" target="2_blank"> <FaFacebook className="md:text-lg lg:text-2xl text-xl mr-3 hover:text-4xl duration-700 delay-400" /></a>

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
