import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import MyIcon from "../../assets/images/Logo.png";

const Header = () => {
    const [show, setShow] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    // Navigation links inside the component
    const navLinks = [
        { label: "Home", href: location.pathname === "/" ? "#" : "/" },
        { label: "Projects", href: "/projects" },
        { label: "About", href: "/about" },
    ];

    useEffect(() => {
        if (location.pathname !== "/") {
            setShow(true); // always show on non-home pages
            return;
        }

        const handleScroll = () => {
            setShow(window.scrollY > window.innerHeight / 2);
        };

        const handleMouseMove = (e: MouseEvent) => {
            if (e.clientY < 50) {
                setShow(true); // show when hovering near top
            } else if (window.scrollY <= window.innerHeight / 2) {
                setShow(false); // hide again if not scrolled past half screen
            }
        };

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, [location.pathname]);

    const handleNavClick = (href: string) => {
        if (href === "#") {
            window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
            navigate(href);
        }
    };

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 pointer-events-auto
        transition-opacity duration-500
        ${show ? "opacity-100" : "opacity-0"}
        bg-gradient-to-b from-gray-950 to-transparent`}
        >
            <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo / Title */}
                <a
                    href="/"
                    className="flex items-center gap-3 text-white text-xl font-bold cursor-pointer hover:text-orange-400 transition-colors duration-300"
                    onClick={(e) => {
                        e.preventDefault();
                        if (location.pathname === "/") {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                        } else {
                            navigate("/");
                        }
                    }}
                >
                    <img src={MyIcon} alt="Logo" className="w-8 h-8" />
                    Akia Hans
                </a>

                {/* Navigation Links */}
                <ul className="flex gap-6 text-white">
                    {navLinks.map((item, idx) => (
                        <li
                            key={idx}
                            className="hover:text-orange-400 cursor-pointer transition-colors duration-300"
                        >
                            <button
                                onClick={() => handleNavClick(item.href)}
                                className="text-white"
                            >
                                {item.label}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
