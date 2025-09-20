import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const BackToTop = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShow(window.scrollY > window.innerHeight / 2);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-6 right-[48.5%] z-50 p-3 rounded-full bg-orange-400 text-white shadow-lg transition-opacity duration-300 ${
                show ? "opacity-100" : "opacity-0 pointer-events-none"
            } hover:bg-orange-500`}
        >
            <FaArrowUp />
        </button>
    );
};

export default BackToTop;
