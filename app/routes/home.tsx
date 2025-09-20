import type { Route } from "./+types/home";

// Import components
import Hero from "../components/home/Hero";
import Skills from "../components/home/Skills";
import FeaturedProjects from "../components/projects/FeaturedProjects";
import Archive from "../components/projects/Archives";

import React from "react";

const home = () => {
    return (
        <main className="w-screen min-h-screen flex flex-col items-center justify-start space-y-15">
            <Hero />
            <Skills />
            <FeaturedProjects />
            <Archive />
        </main>
    );
};

export default home;
