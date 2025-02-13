import React from "react";

export const Whatsnew = () => {
    return (
        <section className="top-container-1">
                    <div id="about" className="py-2 bg-gray-50">
                        <div className=" Title-div ">
                    <h2 className="title-text">Whats New</h2>
                </div>
            <div className="flex justify-center md:justify-between items-center py-2 ">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                
                    <div className="flex justify-center">
                        <img
                            src="/ahmed/new product.png"
                            alt="About Us"
                            className="w-full max-w-md rounded-lg shadow-lg hover:scale-110  duration-700 delay-100"
                        />
                    </div>
                    <div>
                        <p className="text-gray-600 leading-relaxed max-md:text-sm">Now Available Asian Paints Royale Glitz  Luxury Emulsion is an Ultra Sheen interior paint which provides a rich luxurious finish to your walls. 
                            It also offers unmatched stain repellency to keep the walls beautiful. It provides Luxury with Teflon™ : Combining the best of décor and performance worlds.
                        
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </section>

    );
};

export default Whatsnew;
