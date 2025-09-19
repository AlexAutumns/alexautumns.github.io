import React from "react";
import FeaturedProjectCard from "./FeaturedProjectCard";
import { featuredProjects } from "./projectsData";

const FeaturedProjects = () => {
    return (
        <section className="py-12 bg-gray-950 px-4 md:px-12 w-full h-screen overflow-hidden">
            <h2 className="text-4xl font-bold text-center text-gray-100 mb-12">
                Featured Projects
            </h2>

            <div className="flex flex-col overflow-hidden">
                {featuredProjects.map((project, index) => (
                    <FeaturedProjectCard key={index} project={project} />
                ))}
            </div>
        </section>
    );
};

export default FeaturedProjects;
