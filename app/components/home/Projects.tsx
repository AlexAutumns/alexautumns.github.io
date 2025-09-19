import React from "react";

import FeaturedProjects from "./projects/FeaturedProjects";

const Projects = () => {
    return (
        <div className="w-full flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-950 py-12 px-4 md:px-12">
            <FeaturedProjects />
        </div>
    );
};

export default Projects;
