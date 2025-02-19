import { useState } from "react";
import { motion } from "framer-motion";
import { BsWhatsapp } from "react-icons/bs";
import products from "./Product.json";

const ProductSection = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [selectedMainCategory, setSelectedMainCategory] = useState("Interior");
    const [selectedSubCategory, setSelectedSubCategory] = useState("royal");

    const categorySubCategories = {
        Interior: ["royal", "Apcolite", "Economy"],
        Exterior: ["ultima", "Apex", "Ace"],
        WaterProofing: ["Exterior", "Interior", "Terrace & Tanks Products", "Cracks & Joints Products", "Bathroom Products", "Tiling Products"],
        WoodPaint : ["Gloss", "Matt", "High gloss","Satin"],
        UnderCoat :["Exterior primer","Interior primer","Putty"],
        Birla : ["White-cement","Wall-care",]
    };

    const handleMainCategoryBtn = (category) => {
        setSelectedMainCategory(category);
        setSelectedSubCategory(categorySubCategories[category][0]);
    };

    const handleSubCategoryBtn = (subCat) => {
        setSelectedSubCategory(subCat);
    };

    const getProductList = () => {
        return products[selectedMainCategory]?.[selectedSubCategory] || [];
    };

    return (
        <div id="products" className="top-container-1">
            {!selectedProduct ? (
                <>
                    <div className="text-center mt-6">
                        <h2 className="title-text md:text-2xl font-bold text-gray-700 text-center mb-2">
                            Our Products
                        </h2>
                        <p className="mx-auto text-gray-400 fontmobile md:text-lg text-center md:mb-10 mb-3">
                            One stop solution for all you need to keep your living space intact.
                        </p>
                    </div>
                    <div className="grid grid-cols-4 md:flex justify-center md:gap-4 gap-2 mb-2">
                        {Object.keys(categorySubCategories).map((cat) => (
                            <button
                                key={cat}
                                className={`fontmobile md:text-lg  button-all overflow-hidden  ${selectedMainCategory === cat
                                        ? "bg-[#0A3981] text-white"
                                        : "bg-[#0A3981] text-gray-700 bg-opacity-5"
                                    }`}
                                onClick={() => handleMainCategoryBtn(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                    <motion.div
                        id="product-scroll-container"
                        className="mt-4 md:mt-6 max-w-7xl mx-auto h-[16rem] sm:h-[26rem] own-bg overflow-y-auto bg-white p-4 rounded-lg border-y-2"
                        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                    >
                        <div className="flex justify-start flex-wrap md:mx-6 mx-2 md:gap-4 gap-2">
                            {categorySubCategories[selectedMainCategory].map((subCat) => (
                                <button
                                    key={subCat}
                                    className={`fontmobile rounded-lg px-1 md:px-3 md:py-1 md:my-3 md:mb-5  md:text-lg text-left ${selectedSubCategory === subCat
                                            ? "text-yellow-100 bg-black bg-opacity-60 "
                                            : "text-[#000000] bg-yellow-100 bg-opacity-80"
                                        }`}
                                    onClick={() => handleSubCategoryBtn(subCat)}
                                >
                                    {subCat}
                                </button>
                            ))}
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-7 mx-3 md:mx-5 my-5">
                            {getProductList().map((product) => (
                                <div
                                    key={product.id}
                                    className="flex items-center h-auto max-md:h-10 my-box bg-gray-50 p-1 md:p-3 hover:translate-y-[-2px] rounded-lg shadow-sm  transition cursor-pointer"
                                    onClick={() => setSelectedProduct(product)}
                                >
                                    <img
                                        src={product.img}
                                        alt={product.name}
                                        className="w-7 h-7 sm:w-10 sm:h-10 object-cover rounded-lg shadow-md border border-gray-300"
                                    />
                                    <div className="ml-4">
                                        <h4 className=" text-[8px] leading-3 md:text-[14px] font-semibold text-gray-800">
                                            {product.name}
                                        </h4>
                                        <p className="text-[6px] leading-none mt-1 md:mt-2 md:text-[10px] text-gray-600">{product.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </>
            ) : (
                <div className="min-h-[550px] flex justify-center items-center backdrop-blur-xl py-8 sm:py-0">
                    <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                            <div className="flex md:justify-center sm:block">
                                <img
                                    src={selectedProduct.img}
                                    alt={selectedProduct.name}
                                    className="w-32 h-32 sm:w-[350px] sm:h-[300px] object-cover rounded-lg drop-shadow-[0px_4px_6px_rgba(0,0,0,0.1)]"
                                />
                            </div>
                            <div className="flex flex-col justify-center gap-4 max-md:gap-2">
                                <h1 className="lg:text-4xl text-lg font-bold">
                                    {selectedProduct.name}
                                </h1>
                                <div className="fontmobile sm:text-md">
                                    <p>
                                    {selectedProduct.description}
                                    </p>
                                </div>
                                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                                    <button className="bg-green-500 text-white py-2 px-4 sm:px-6 rounded-full hover:bg-green-600 transition items-center">
                                        <a
                                            href={`https://wa.me/91+9600417117?text=hello ${selectedProduct.name}`}
                                            target="2_blank"
                                            className="flex"
                                        >
                                            <BsWhatsapp className="mr-2 h-6" /> Buy
                                        </a>
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
