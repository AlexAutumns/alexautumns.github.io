import type { Route } from "./+types/home";

// Import components

import Footer from "../components/Footer";

import Hero from "../components/home/Hero";
import Skills from "../components/home/Skills";
import Projects from "../components/home/Projects";

import React from "react";

const home = () => {
    return (
        <main className="w-full min-h-screen flex flex-col items-center justify-start space-y-6">
            <Hero />
            <Skills />
            <Projects />
        </main>
    );
};

export default home;
