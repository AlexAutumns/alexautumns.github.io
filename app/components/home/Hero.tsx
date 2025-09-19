import React from "react";
import JapaneseAutumnLeaves from "../../../assets/videos/Japanese-Autumn-Leaves.mp4";

const Hero = () => {
    const infoBlocks = [
        { label: "Full Name", value: "Akia Hans S. Carreon" },
        { label: "Current Role", value: "College Student" },
        // { label: "Location", value: "United Arab Emirates" },
        { label: "Focus", value: "Creating Experiences" },
        // add more blocks here if needed
    ];

    return (
        <div className="relative w-full h-screen overflow-hidden">
            {/* Background video */}
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                src={JapaneseAutumnLeaves}
                autoPlay
                loop
                muted
                playsInline
            />

            {/* Gradient overlay for smooth transition */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-gray-950"></div>

            {/* Hero name */}
            <div className="relative z-10 flex items-center justify-center h-full">
                <h1 className="text-red-600 text-[11em] font-bold drop-shadow-lg drop-shadow-orange-400 animate-fade-in font-rocknroll-one">
                    AKI
                </h1>
            </div>

            {/* Info blocks in bottom-left */}
            <div className="absolute bottom-6 left-6 z-10 grid grid-rows-1 grid-cols-3 gap-4">
                {infoBlocks.map((block, index) => (
                    <div
                        key={index}
                        className="p-4 rounded-lg text-gray-200 shadow-md backdrop-blur-sm"
                    >
                        <p className="text-[0.5em] md:text-base font-medium">
                            {block.label}
                        </p>
                        <p className="text-md md:text-md font-bold text-orange-100">
                            {block.value}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Hero;
