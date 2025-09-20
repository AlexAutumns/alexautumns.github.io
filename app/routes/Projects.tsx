import type { Route } from "./+types/home";
import React from "react";

// COMPONENTS
import FeaturedProjects from "~/components/projects/FeaturedProjects";
import Archive from "~/components/projects/Archives";

const projects = () => {
    return (
        <main className="w-screen min-h-screen flex flex-col items-center justify-start space-y-15">
            <h1 className="text-[4em] font-bold text-white mt-10 mb-5">
                Projects
            </h1>
            <FeaturedProjects />
            <Archive />
        </main>
    );
};

export default projects;
