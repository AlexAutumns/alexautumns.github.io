import React, { useState } from "react";
import type { Project } from "./projectsData";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

type Props = {
    project: Project;
};

const FeaturedProjectCard = ({ project }: Props) => {
    const [activeImageIndex, setActiveImageIndex] = useState(0);
    const [expanded, setExpanded] = useState(false);

    const handleNext = () => {
        setActiveImageIndex((prev) => (prev + 1) % project.images.length);
    };

    const handlePrev = () => {
        setActiveImageIndex(
            (prev) => (prev - 1 + project.images.length) % project.images.length
        );
    };

    return (
        <div className="flex flex-col md:flex-row bg-gray-900 text-gray-100 rounded-lg shadow-lg overflow-hidden mb-12 min-h-screen">
            {/* Image/Gallery */}
            <div className="relative w-full md:w-3/4 h-96 md:h-auto">
                <img
                    src={project.images[activeImageIndex]}
                    alt={`${project.title} screenshot`}
                    className={`w-full h-full object-cover cursor-pointer transition-transform duration-300 ${
                        expanded ? "scale-105" : ""
                    }`}
                    onClick={() => setExpanded(!expanded)}
                />
                {project.images.length > 1 && expanded && (
                    <div className="absolute inset-0 flex justify-between items-center px-4">
                        <button
                            onClick={handlePrev}
                            className="bg-gray-800/50 text-white p-3 rounded-full hover:bg-gray-800"
                        >
                            <FaArrowLeft />
                        </button>
                        <button
                            onClick={handleNext}
                            className="bg-gray-800/50 text-white p-3 rounded-full hover:bg-gray-800"
                        >
                            <FaArrowRight />
                        </button>
                    </div>
                )}
            </div>

            {/* Details */}
            <div className="w-full md:w-1/4 p-8 flex flex-col justify-center gap-6">
                <div className="flex items-center gap-4 text-gray-400 text-sm md:text-base">
                    <span>{project.year}</span>
                    <span>| {project.role}</span>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold">
                    {project.title}
                </h2>

                {/* Paragraph description */}
                {project.description &&
                    project.description.map((para, idx) => (
                        <p
                            key={idx}
                            className="text-gray-200 text-base md:text-lg"
                        >
                            {para}
                        </p>
                    ))}

                {/* Bullet points */}
                {project.bulletPoints && (
                    <ul className="list-disc list-inside text-gray-200 text-base md:text-lg">
                        {project.bulletPoints.map((point, idx) => (
                            <li key={idx}>{point}</li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default FeaturedProjectCard;
