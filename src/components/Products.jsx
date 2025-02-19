import { useState } from "react";
import { motion } from "framer-motion";
import { BsWhatsapp } from "react-icons/bs";
import products from "./Constants/Products.json";

const ProductSection = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [selectedMainCategory, setSelectedMainCategory] = useState("Interior");
    const [selectedSubCategory, setSelectedSubCategory] = useState("R1");

    const categorySubCategories = {
        Interior: ["R1", "R2", "R3"],
        c2: ["R1", "R2", "R3", "R4", "R5"],
        c3: ["R1", "R2", "R3"],
        wood: ["R1", "R2", "R3"]
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
                    <div className="flex justify-center md:gap-4 gap-2 mb-2">
                        {Object.keys(categorySubCategories).map((cat) => (
                            <button
                                key={cat}
                                className={`fontmobile md:text-lg button-all ${selectedMainCategory === cat
                                        ? "bg-[#0A3981] text-white"
                                        : "bg-[#0A3981] text-gray-700 bg-opacity-5"
                                    }`}
                                onClick={() => handleMainCategoryBtn(cat)}
                            >
                                {cat === "c2"
                                    ? "Exterior"
                                    : cat === "c3"
                                        ? "Waterproof"
                                        : cat === "wood"
                                            ? "Wood Paint"
                                            : cat}
                            </button>
                        ))}
                    </div>
                    <motion.div
                        id="product-scroll-container"
                        className="mt-4 md:mt-6 max-w-5xl mx-auto h-[16rem] sm:h-[26rem] own-bg overflow-y-auto bg-white p-4 rounded-lg border-y-2"
                        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                    >
                        <div className="flex justify-start mx-6 md:gap-4 gap-2">
                            {categorySubCategories[selectedMainCategory].map((subCat) => (
                                <button
                                    key={subCat}
                                    className={`fontmobile md:text-lg ${selectedSubCategory === subCat
                                            ? "text-white underline"
                                            : "text-white"
                                        }`}
                                    onClick={() => handleSubCategoryBtn(subCat)}
                                >
                                    {subCat}
                                </button>
                            ))}
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 mx-3 md:mx-5 my-5">
                            {getProductList().map((product) => (
                                <div
                                    key={product.id}
                                    className="flex items-center my-box bg-gray-50 p-1 md:p-3 rounded-lg shadow-sm hover:shadow-md transition cursor-pointer"
                                    onClick={() => setSelectedProduct(product)}
                                >
                                    <img
                                        src={product.img}
                                        alt={product.name}
                                        className="w-10 h-10 sm:w-10 sm:h-10 object-cover rounded-lg shadow-md border border-gray-300"
                                    />
                                    <div className="ml-4">
                                        <h4 className="fontmobile sm:text-md font-semibold text-gray-800">
                                            {product.name}
                                        </h4>
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
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Perspiciatis magni molestias.
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
