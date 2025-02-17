import { useState } from "react";

const WhatsApp = () => {
    const [formData, setFormData] = useState({
        name: "",
        number: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const sendWhatsAppMessage = () => {
        const { name, number, email, message } = formData;

        if (!name || !number || !email || !message) {
            alert("Please fill in all fields before sending the message.");
            return;
        }

        const url = `https://wa.me/919600417117?text=${encodeURIComponent(
            `Name of Customer: ${name}\nMobile Number: ${number}\nEmail: ${email}\nMessage: ${message}`
        )}`;

        window.open(url, "_blank");
    };

    return (
        <section className="top-container-1 " id="whatapp">
            <h2 className="text-center  title-text  md:text-2xl font-bold  text-gray-700 md:mb-5 mb-0   ">Get An Expert Advice</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-6">
                <div className="flex justify-center ">
                    <img src="/Untitled design (3).png" alt="" className=" rounded-lg  object-contain h-[90%] w-[90%]" />

                </div>
                <div className="flex justify-center flex-col text-white font-semibold">

                    <div className="flex mb-4 ">
                        <label className="fontmobile md:text-xl font-bold  text-gray-700 w-1/2 ">Name:</label>
                        <input
                            type="text"
                            name="name"
                            className="w-full   rounded bg-[#0A3981] border border-gray-400 focus:outline-none focus:border-white"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="flex mb-4">
                        <label className=" fontmobile md:text-xl font-bold  text-gray-700 w-1/2 ">Mobile Number:</label>
                        <input
                            type="tel"
                            name="number"

                            className="w-full  rounded bg-[#0A3981] border border-gray-400 focus:outline-none focus:border-white"
                            value={formData.number}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4 flex">
                        <label className="fontmobile md:text-xl font-bold  text-gray-700 w-1/2 ">Email:</label>
                        <input
                            type="email"
                            name="email"
                            className="w-full  rounded bg-[#0A3981] border border-gray-400 focus:outline-none focus:border-white"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="flex mb-4 ">
                        <label className="fontmobile md:text-xl font-bold  text-gray-700 w-1/2 ">Message:</label>
                        <textarea
                            name="message"
                            className="w-full  rounded bg-[#0A3981] border border-gray-400 focus:outline-none focus:border-white"
                            value={formData.message}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="text-center ">
                        <button className="bg-green-400 fontmobile md:text-lg text-white font-bold md:inline transform transition-transform duration-300 hover:scale-110  md:px-6 md:py-2 px-2 py-0 rounded-full" onClick={sendWhatsAppMessage}>
                            send inquiry
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default WhatsApp;
