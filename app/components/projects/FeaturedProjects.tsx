import React, { useEffect, useState } from "react";
import FeaturedProjectCard from "./FeaturedProjectCard";
import { featuredProjects } from "./projectsData";
import useEmblaCarousel from "embla-carousel-react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const FeaturedProjects = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: "center",
        containScroll: "trimSnaps",
        dragFree: false,
    });

    const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
    const [nextBtnDisabled, setNextBtnDisabled] = useState(true);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const scrollPrev = () => emblaApi?.scrollPrev();
    const scrollNext = () => emblaApi?.scrollNext();

    const onSelect = () => {
        if (!emblaApi) return;
        setPrevBtnDisabled(!emblaApi.canScrollPrev());
        setNextBtnDisabled(!emblaApi.canScrollNext());
        setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        emblaApi.on("select", onSelect);
    }, [emblaApi]);

    return (
        <section className="py-12 bg-gray-950 w-full overflow-hidden">
            <h2 className="text-4xl font-bold text-center text-gray-100 mb-12">
                Featured Projects
            </h2>

            <div className="relative w-[95%] mx-auto">
                {/* Navigation Arrows */}
                <button
                    onClick={scrollPrev}
                    disabled={prevBtnDisabled}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800/50 text-white p-3 rounded-full hover:bg-gray-800 disabled:opacity-30"
                >
                    <FaArrowLeft />
                </button>
                <button
                    onClick={scrollNext}
                    disabled={nextBtnDisabled}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800/50 text-white p-3 rounded-full hover:bg-gray-800 disabled:opacity-30"
                >
                    <FaArrowRight />
                </button>

                {/* Embla viewport */}
                <div ref={emblaRef} className="overflow-hidden">
                    <div className="flex">
                        {featuredProjects.map((project, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 w-full px-2"
                            >
                                <FeaturedProjectCard project={project} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Pagination Dots */}
                <div className="flex justify-center mt-6 gap-2">
                    {featuredProjects.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => emblaApi?.scrollTo(index)}
                            className={`w-3 h-3 rounded-full transition-colors ${
                                selectedIndex === index
                                    ? "bg-orange-200"
                                    : "bg-gray-500"
                            }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedProjects;
