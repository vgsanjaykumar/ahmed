import React from "react";
import data from "./Projects.json"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export const Product = () => {
    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 2000,
        focusOnSelect: true,


        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,


                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            }
        ]
    };
    return (
        <section className="  top-container-1  ">
            <div className="  mx-auto px-8 md:px-16 lg:px-24 ">

                <div className="   ">
                    <h2 className="title-text font-bold  text-gray-600  mb-5">our top project</h2>
                </div>



                <Slider {...settings}>
                    {data.map((d, index) => (

                        <div
                            key={index}
                            className="flex flex-col items-center  rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group transform hover:-translate-y-2"
                        >

                            <div className=" px-6  w-50 h-25 md:h-50 lg:h-60  flex object-fill items-center justify-center rounded-full mb-1 transition-all duration-300">
                                <img src={d.icon} className=" h-40 w-80"/>
                            </div>

                            <div className="text-center ">
                                <h3 className="fontmobile  p-0 md:p-5 md:text-lg font-bold text-gray-800 mb-2  hover:text-[#FFF200]">
                                    {d.name}
                                </h3>
                                <p className="text-gray-600 md:text-sm fontmobile md:px-6 px-0 mb-1 md:mb-6 ">{d.text}</p>
                            </div>
                        </div>

                    ))
                    }

                </Slider>
            </div>


        </section>

    );
};

export default Product;
