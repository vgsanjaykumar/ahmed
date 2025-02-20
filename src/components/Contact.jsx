import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaFacebook, FaInstagram,  FaUser, FaWhatsapp } from "react-icons/fa";
import { FaLocationDot,  } from "react-icons/fa6";
import { MdVerifiedUser } from "react-icons/md";
import { BiPhoneCall, BiPhoneIncoming } from "react-icons/bi";

export const Contact = () => {
  return (
    <section id="contact" className="top-container-1 ">
      <div className="py-2 xl:top-container-1 ">
        <motion.div
          className=""
          initial={{ scale: 1, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <div className="md:mb-0 mb-4 mt-8 ">
            <h2 className="title-text">Contact us</h2>
          </div>
          <div className="">

            <div className="grid grid-cols-1 md:grid-cols-2     ">

              <div className=" justify-center flex flex-col md:pl-6 pl-0   w-full items-start">
                <div className="flex uppercase w-full ">
                  <FaUser className="text-[#0A3981] md:text-lg lg:text-xl fontmobile mr-3 h-5" />
                  <h2 className="md:text-lg lg:text-xl fontmobile  text-gray-500 mb-4">Ahmed Irfan</h2>
                </div>
                <div className="flex uppercase">
                  <FaLocationDot className="text-[#0A3981] md:text-lg lg:text-2xl text-sm mr-2 h-4" />
                  <h2 className="md:text-lg lg:text-xl fontmobile  text-gray-500  mb-4">Sekkalai Road,<br/>near FIVE LAMPS,Karaikudi,<br/>Tamil Nadu 630001</h2>
                </div>
                <div className="flex uppercase">
                  <BiPhoneIncoming className="text-[#0A3981] md:text-lg lg:text-2xl fontmobile mr-3 h-5" />
                  <a href="tel:919751944100"><h2 className="md:text-lg lg:text-xl fontmobile  text-gray-500  mb-4">91+ 9751944100</h2></a>
                </div>
                <div className="flex uppercase">
                  <BiPhoneCall className="text-[#0A3981] md:text-lg lg:text-2xl fontmobile mr-3 h-5" />
                  <a href="tel:04565-238474"><h2 className="md:text-lg lg:text-xl fontmobile  text-gray-500  mb-4">04565-238474</h2></a>
                </div>
                <div className="flex">
                  <MdVerifiedUser className="text-[#0A3981] md:text-lg lg:text-2xl fontmobile mr-3 h-5" />
                  <h2 className="md:text-lg lg:text-xl fontmobile  text-gray-500  mb-4">33AAEPH3394N1ZH</h2>
                </div>
                <div className="flex  md:justify-start justify-center md:ml-1  text-[#0A3981] ">
                  <a href="https://wa.me/919751944100?text=hello " target="2_blank"><FaWhatsapp className=" md:text-lg lg:text-2xl text-xl mr-3 hover:text-4xl duration-700 delay-400" /></a>
                  <a href="mailto:ahmedpaints@gmail.com" target="2_blank">  <FaEnvelope className="md:text-lg lg:text-2xl text-xl mr-3 hover:text-4xl duration-700 delay-400" /></a>
                  <a href="" target="2_blank"> <FaInstagram className="md:text-lg lg:text-2xl text-xl mr-3 hover:text-4xl duration-700 delay-400" /></a>
                  <a href="https://www.facebook.com/ahmedpaintskkdi/" target="2_blank"> <FaFacebook className="md:text-lg lg:text-2xl text-xl mr-3 hover:text-4xl duration-700 delay-400" /></a>

                </div>


              </div>
              <div className=" items-center md:h-full h-[60%] w-[80%] ml-5 md:ml-0 ">

                <img
                  src="/contact us.png"
                  alt="About Us"
                  className="w-full  rounded-lg  delay-400 object-center  mb-4 "
                />


              </div>


            </div>

          </div>

        </motion.div>
      </div>

    </section>

  );
};

export default Contact;
