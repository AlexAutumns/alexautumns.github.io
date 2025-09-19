import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-950 text-gray-100 py-8 w-full bg-gradient-to-t from-orange-600/15 to-transparent">
            <div className="container mx-auto flex flex-col md:flex-row items-end justify-between p-4 mt-6 h-[10em] ">
                {/* Copyright / Name */}
                <div className="mb-4 md:mb-0 text-center md:text-left">
                    <p>
                        &copy; {new Date().getFullYear()} Akia Hans. All rights
                        reserved.
                    </p>
                </div>

                {/* Contact icons */}
                <div className="flex space-x-6 text-2xl">
                    <a
                        href="https://www.linkedin.com/in/akia-hans-79a82b291"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-500 transition-colors"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="https://github.com/AlexAutumns"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-400 transition-colors"
                        aria-label="GitHub"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="mailto:akiahans2021@gmail.com"
                        className="hover:text-red-500 transition-colors"
                        aria-label="Email"
                    >
                        <FaEnvelope />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
