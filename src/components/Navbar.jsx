import React, { useState, useEffect } from "react";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 550);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section className="">
            <nav
                data-aos="fade-down"
                className={`${isScrolled ? "md:bg-[#0A3981]" : "bg-[rgba(255,242,0,0.0)]"
                    } p-2 fixed w-full z-50 transition-all duration-300`}
            >
                <div className={` h-10 xl:h-12  px ${isScrolled ? "text-[white]" : "text-white"}  hidden  md:block`}>
                    <ul className=" flex gap-10 justify-center py-2 font-bold text-lg xl:text-2xl  ">
                        <li><a href="/" className={` ${isScrolled ? "hover:text-[#009990]" : "hover:text-[#009990]"} our-font `}>Home</a></li>
                        <li><a href="#WN" className={` ${isScrolled ? "hover:text-[#009990]" : "hover:text-[#009990]"} our-font `}>Whats New</a></li>
                        <li><a href="#about" className={` ${isScrolled ? "hover:text-[#009990]" : "hover:text-[#009990]"} our-font `}>About</a></li>
                        <li><a href="#explore" className={` ${isScrolled ? "hover:text-[#009990]" : "hover:text-[#009990]"} our-font `}>Explore</a></li>
                        <li><a href="#products" className={` ${isScrolled ? "hover:text-[#009990]" : "hover:text-[#009990]"} our-font `}>Products</a></li>
                        <li><a href="#contact" className={` ${isScrolled ? "hover:text-[#009990]" : "hover:text-[#009990]"} our-font `}>Contacts</a></li>
                    </ul>
                </div>
                <span
                    className="text-xl mdl:hidden bg-[#00000048] w-10 h-10 inline-flex items-center justify-center text-white rounded-xl cursor-pointer"
                    onClick={() => setShowMenu(!showMenu)}
                >
                    <FiMenu />
                </span>

                {showMenu && (
                    <div
                        className="
                    z-50 w-[60%] md:w-[45%] md:hidden h-screen overflow-scroll absolute top-0 left-0 p-4 scrollbar-hide bg-[#009990]"
                    >
                        <div className="flex flex-col gap-8 py-12 relative">
                            <ul className="flex flex-col text- gap-4 pl-2 py-4">
                                <li><a href="/" onClick={() => setShowMenu(!showMenu)} className="text-white hover:text-gray-800 our-font">Home</a></li>
                                <li><a href="#WN" onClick={() => setShowMenu(!showMenu)} className="text-white hover:text-gray-800 our-font">whats New </a></li>
                                <li><a href="#about" onClick={() => setShowMenu(!showMenu)} className="text-white hover:text-gray-800 our-font">About</a></li>
                                <li><a href="#explore" onClick={() => setShowMenu(!showMenu)} className="text-white hover:text-gray-800 our-font">Explore</a></li>
                                <li><a href="#products" onClick={() => setShowMenu(!showMenu)} className="text-white hover:text-gray-800 our-font">Products</a></li>
                                <li><a href="#contact" onClick={() => setShowMenu(!showMenu)} className="text-white hover:text-gray-800 our-font">Contacts</a></li>
                            </ul>

                            <span
                                onClick={() => setShowMenu(!showMenu)}
                                className="
                    absolute top-2 right-4 text-black hover:text-designColor duration-300 text-xl cursor-pointer"
                            >
                                <MdClose />
                            </span>
                        </div>
                    </div>
                )}

            </nav>
        </section>
    );
};

export default Navbar;
