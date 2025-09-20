import React, { useState } from "react";
import Masonry from "react-masonry-css";
import { archiveProjects } from "./projectsData";

const ITEMS_PER_PAGE = 10;

const Archive = () => {
    const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

    const handleLoadMore = () => {
        setVisibleCount((prev) => prev + ITEMS_PER_PAGE);
    };

    const visibleProjects = archiveProjects.slice(0, visibleCount);

    const breakpointColumnsObj = {
        default: 5,
        1280: 3,
        1024: 2,
        640: 1,
    };

    return (
        <section className="py-12 bg-gray-950 px-4 md:px-12 min-h-[80vh]">
            <h2 className="text-4xl font-bold text-center text-gray-100 mb-12">
                Project Archive
            </h2>

            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="flex gap-6"
                columnClassName="flex flex-col gap-6"
            >
                {visibleProjects.map((project, index) => (
                    <a
                        key={index}
                        href={project.url ?? "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative bg-gray-800 rounded-lg overflow-hidden shadow-md cursor-pointer hover:scale-105 hover:shadow-lg transition-transform duration-300 w-full"
                    >
                        {project.images && project.images.length > 0 ? (
                            <>
                                <img
                                    src={project.images[0]}
                                    alt={project.title}
                                    className="w-full h-auto object-cover rounded-t-lg"
                                />
                                <div className="absolute bottom-0 left-0 w-full bg-black/40 p-4 flex items-center justify-center">
                                    <span className="text-gray-100 text-lg md:text-xl font-medium text-center break-words">
                                        {project.title}
                                    </span>
                                </div>
                            </>
                        ) : (
                            <div className="p-6 min-h-[140px] flex items-center justify-center">
                                <span className="text-gray-100 text-lg md:text-xl font-medium text-center break-words">
                                    {project.title}
                                </span>
                            </div>
                        )}
                    </a>
                ))}
            </Masonry>

            {visibleCount < archiveProjects.length && (
                <div className="flex justify-center mt-8">
                    <button
                        onClick={handleLoadMore}
                        className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-lg transition-colors duration-300"
                    >
                        Load More
                    </button>
                </div>
            )}
        </section>
    );
};

export default Archive;
