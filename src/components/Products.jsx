import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BsWhatsapp } from "react-icons/bs";
import products from "./Constants/products";



const ProductSection = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [c1, setc1] = useState(true);
    const [c2, setc2] = useState(false);
    const [c3, setc3] = useState(false);
    const [c4, setc4] = useState(false);

    const handleProductButton = (category) => {
        setc1(category === "c1");
        setc2(category === "c2");
        setc3(category === "c3");
        setc4(category === "c4");
    };
    
    return (
        <div id="products" className="max-w-6xl mx-auto px-4 relative sm:px-6 md:px-[90px] lg:px-[80px]  ">
            {!selectedProduct ? (
                <>
                    <img src="boy.png" className="absolute left-[-96px] lg:-left-[35px] md:-left-[10px] -z-10 bottom-[100px]   lg:h-48  md:h-40  xs:hidden md:block"></img>
                    <div className="text-center mt-6">
                        <h2 className="text-2xl md:text-4xl font-bold mx-auto text-gray-700  text-center mb-2">Our Products</h2>
                        <p className="mx-auto text-gray-400   text-center md:mb-16 mb-8">One stop solution for all you need to keep your living space intact.</p>
                    </div>
                    <button className="button-all" onClick={() => handleProductButton("c1")}>c1</button>
<button className="button-all" onClick={() => handleProductButton("c2")}>c2</button>
<button className="button-all" onClick={() => handleProductButton("c3")}>c3</button>
<button className="button-all" onClick={() => handleProductButton("c4")}>c4</button>

                    <motion.div
                        id="product-scroll-container"
                        className="mt-6 max-w-5xl mx-auto h-[22rem] sm:h-[26rem] own-bg overflow-y-auto bg-white p-4 rounded-lg border-y-2 "
                        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7  mx-5 my-5">
                            <>
                            {(c1 ? products.c1 : c2 ? products.c2 : c3 ? products.c3 : products.c4).map((product) => (
                                <div
                                    key={product.id}
                                    className="flex items-center my-box bg-gray-50 p-3 rounded-lg shadow-sm hover:shadow-md transition cursor-pointer"
                                    onClick={() => setSelectedProduct(product)}
                                >
                                    <img
                                        src={product.img}
                                        alt={product.name}
                                        className="w-10 h-10 sm:w-10 sm:h-10 object-cover rounded-lg shadow-md border border-gray-300"
                                    />
                                    <div className="ml-4">
                                        <h4 className="text-sm sm:text-md font-semibold text-gray-800">{product.name}</h4>

                                    </div>
                                </div>
                            )
                            
                        )}
                            
                            </>
                        </div>
                    </motion.div>
                </>
            ) : (
                <div className="min-h-[550px] flex justify-center items-center backdrop-blur-xl py-8 sm:py-0">
                    <div className="">
                        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                            <div className="flex md:justify-center sm:block ">
                                <img
                                    src={selectedProduct.img}
                                    alt={selectedProduct.name}
                                    className="w-32 h-32 sm:w-[350px] sm:h-[300px] object-cover rounded-lg drop-shadow-[0px_4px_6px_rgba(0,0,0,0.1)]"
                                />
                            </div>

                            <div className="flex flex-col justify-center gap-4 max-md:gap-2">
                                <h1 className="lg:text-4xl text-lg font-bold">{selectedProduct.name}</h1>
                                <p className="text-sm text-gray-500 tracking-wide ">
                                    {selectedProduct.description}
                                </p>

                                <div className="text-sm sm:text-md">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis magni molestias.</p>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">

                                    <button
                                        className="bg-green-500 text-white py-2 px-4 sm:px-6 rounded-full hover:bg-green-600 transition  items-center"
                                    >
                                        <a href={`https://wa.me/91+9600417117?text=hello ${selectedProduct.name} `} target="2_blank " className="flex"><BsWhatsapp className="mr-2 h-6" /> Buy</a>
                                    </button>
                                    <button
                                        className="bg-blue-500 text-white py-2 px-4 sm:px-6 rounded-full hover:bg-blue-600 transition"
                                        onClick={() => setSelectedProduct(null)}
                                    >
                                        Back to Products
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductSection;