import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BsWhatsapp } from "react-icons/bs";

const products = [
    { id: 1, name: "Paint", img: "/products/paintbox.png", description: "" },
    { id: 2, name: "Asian Paints Royale Aspira", img: "/products/royal aspira.png", description: "" },
    { id: 3, name: "Asian Enterior Paint", img: "/interiors.png", description: "specially for exteriors" },
    { id: 4, name: "Product 4", img: "/kic int.jpeg", description: "Description of Product 4" },
    { id: 5, name: "Asian Emulsion Paint", img: "/products/royal.png", description: "Royal luxuary emulsion" },
    { id: 6, name: "Product 6", img: "/waterproofing.png", description: "Description of Product 6" },
    { id: 7, name: "Spray Paints", img: "/products/spray paints.png", description: "" },
    { id: 8, name: "Product 8", img: "/exteriors.png", description: "Description of Product 2" },
    { id: 9, name: "Asian Water Proof Paints", img: "/products/waterproof.png", description: "Description of Product 3" },
    { id: 10, name: "Product 10", img: "/waterproofing.png", description: "Description of Product 4" },
    { id: 11, name: "Product 11", img: "products/asian paints.png", description: "Description of Product 5" },
    { id: 12, name: "Product 12", img: "/new product.png", description: "Description of Product 6" },
    { id: 13, name: "Paint", img: "/products/paintbox.png", description: "" },
    { id: 14, name: "Asian Paints Royale Aspira", img: "/products/royal aspira.png", description: "" },
    { id: 15, name: "Asian Enterior Paint", img: "/interiors.png", description: "specially for exteriors" },
    { id: 16, name: "Product 4", img: "/kic int.jpeg", description: "Description of Product 4" },
    { id: 17, name: "Asian Emulsion Paint", img: "/products/royal.png", description: "Royal luxuary emulsion" },
    { id: 18, name: "Product 6", img: "/waterproofing.png", description: "Description of Product 6" },
    { id: 19, name: "Spray Paints", img: "/products/spray paints.png", description: "" },
    { id: 20, name: "Product 8", img: "/exteriors.png", description: "Description of Product 2" },
    { id: 21, name: "Asian Water Proof Paints", img: "/products/waterproof.png", description: "Description of Product 3" },
    { id: 22, name: "Product 10", img: "/waterproofing.png", description: "Description of Product 4" },
    { id: 23, name: "Product 11", img: "products/asian paints.png", description: "Description of Product 5" },
    { id: 24, name: "Product 12", img: "/new product.png", description: "Description of Product 6" },
];

const ProductSection = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    
    return (
        <div id="products" className="max-w-6xl mx-auto px-4 relative sm:px-6 md:px-[90px] lg:px-[80px]  ">
            {!selectedProduct ? (
                <>
                <img src="boy.png" className="absolute left-[-96px] lg:-left-[35px] md:-left-[10px] -z-10 bottom-[100px]   lg:h-48  md:h-40  xs:hidden md:block"></img>
                    <div className="text-center mt-6">
                        <h2 className="text-2xl md:text-4xl font-bold mx-auto text-gray-700  text-center mb-2">Our Products</h2>
                        <p className="mx-auto text-gray-400   text-center md:mb-16 mb-8">One stop solution for all you need to keep your living space intact.</p>
                    </div>
                    <motion.div
                        id="product-scroll-container"
                        className="mt-6 max-w-5xl mx-auto h-[22rem] sm:h-[26rem] own-bg overflow-y-auto bg-white p-4 rounded-lg border-y-2 "
                        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7  mx-5 my-5">
                            {products.map((product) => (
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
                                        <p className="text-xs sm:text-sm text-gray-600">{product.description}</p>
                                    </div>
                                </div>
                            ))}
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
                                            <a href="https://wa.me/91+9600417117?text=hello how can help you" target="2_blank " className="flex"><BsWhatsapp className="mr-2 h-6" /> Buy</a>
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