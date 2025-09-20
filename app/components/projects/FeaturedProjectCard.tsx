import React, { useEffect, useState } from "react";
import type { Project } from "./projectsData";
import { FaArrowUp, FaArrowDown, FaExternalLinkAlt } from "react-icons/fa";
import useEmblaCarousel from "embla-carousel-react";

type Props = {
    project: Project;
};

const FeaturedProjectCard = ({ project }: Props) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        axis: "y", // vertical carousel
    });
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [zoomed, setZoomed] = useState(true);

    const scrollPrev = () => emblaApi?.scrollPrev();
    const scrollNext = () => emblaApi?.scrollNext();
    const scrollTo = (index: number) => emblaApi?.scrollTo(index);

    useEffect(() => {
        if (!emblaApi) return;

        const onSelect = () => {
            setSelectedIndex(emblaApi.selectedScrollSnap());
        };

        emblaApi.on("select", onSelect);
        onSelect();
    }, [emblaApi]);

    return (
        <div className="flex flex-col md:flex-row bg-gray-900 text-gray-100 rounded-xl shadow-lg overflow-hidden min-h-[80vh] max-h-[80vh] border-r-4 border-orange-300">
            {/* Image Carousel (vertical) */}
            <div className="relative w-full md:w-[60%] flex">
                {/* Embla viewport */}
                <div ref={emblaRef} className="overflow-hidden flex-1">
                    <div className="flex flex-col h-full">
                        {project.images?.map((img, idx) => (
                            <div
                                key={idx}
                                className="flex-shrink-0 w-full h-full flex items-center justify-center overflow-hidden rounded-lg"
                            >
                                <img
                                    src={img}
                                    alt={`${project.title} screenshot ${idx + 1}`}
                                    onClick={() => setZoomed(!zoomed)}
                                    className={`cursor-pointer transition-all duration-500 ease-in-out rounded-lg ${
                                        zoomed
                                            ? "w-full h-full object-cover scale-105"
                                            : "max-h-full max-w-full object-contain"
                                    }`}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Controls (overlay right side) */}
                {project.images && project.images.length > 1 && (
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 flex flex-col items-center gap-2">
                        <button
                            onClick={scrollPrev}
                            className="text-orange-300"
                        >
                            <FaArrowUp size={16} />
                        </button>
                        <div className="flex flex-col gap-1">
                            {project.images.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => scrollTo(idx)}
                                    className={`w-2 h-2 rounded-full transition-all ${
                                        selectedIndex === idx
                                            ? "bg-orange-200 scale-110"
                                            : "bg-gray-500"
                                    }`}
                                />
                            ))}
                        </div>
                        <button
                            onClick={scrollNext}
                            className="text-orange-300"
                        >
                            <FaArrowDown size={16} />
                        </button>
                    </div>
                )}
            </div>

            {/* Details */}
            <div className="w-full md:w-[40%] p-8 flex flex-col gap-6 relative">
                {/* Role left, Year right */}
                <div className="flex justify-between items-center text-gray-400 text-xs md:text-sm">
                    <span>{project.role}</span>
                    <span>{project.year}</span>
                </div>

                {/* Title (link if url exists) */}
                {project.url ? (
                    <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-4xl md:text-5xl font-bold hover:text-orange-300 transition-colors duration-300"
                    >
                        {project.title}
                    </a>
                ) : (
                    <h2 className="text-4xl md:text-5xl font-bold">
                        {project.title}
                    </h2>
                )}

                {/* Description & bullet points */}
                <div className="flex flex-col gap-4 overflow-y-auto">
                    {project.description?.map((para, idx) => (
                        <p
                            key={idx}
                            className="text-gray-200 text-base md:text-md"
                        >
                            {para}
                        </p>
                    ))}

                    {project.bulletPoints && (
                        <ul className="list-disc list-inside text-gray-200 text-base md:text-md">
                            {project.bulletPoints.map((point, idx) => (
                                <li key={idx}>{point}</li>
                            ))}
                        </ul>
                    )}
                </div>

                {/* URL Button */}
                {project.url && (
                    <div className="mt-auto flex justify-end">
                        <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-[0.8em] bg-orange-100 hover:bg-orange-300 text-black hover:text-gray-800 px-4 py-2 rounded-md transition-colors duration-300"
                        >
                            View Project <FaExternalLinkAlt />
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
};

export default FeaturedProjectCard;
