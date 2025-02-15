import React from "react";
import { motion } from "framer-motion";

export const Whatsnew = () => {
  return (
    <section id="WN" className="top-container-1 py-10">
      <div  className="container mx-auto px-4">
        <div className=" mb-10 text-center">
          <h2 className="title-text text-3xl font-bold text-gray-800">What's New</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div
            className="flex justify-center"
            initial={{ scale: 1, opacity: 0 }}
            whileInView={{ scale: 1.1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <img
              src="/new product.png"
              alt="New Product"
              className="w-full max-w-xl rounded-lg shadow-lg"
            />
          </motion.div>

          <div>
            <p className="text-gray-600 leading-relaxed text-lg">
              Now Available: <b>Asian Paints Royale Glitz Luxury Emulsion</b> is an ultra-sheen interior paint that provides a rich, luxurious finish to your walls. 
              It also offers unmatched stain repellency to keep your walls beautiful. Experience <b>Luxury with Teflon™</b>, combining the best of décor and performance worlds.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Whatsnew;
