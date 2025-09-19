import React from "react";

// Video import
import JapaneseAutumnLeaves from "../../../assets/videos/Japanese-Autumn-Leaves.mp4";

const Hero = () => {
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

            {/* Overlay content */}
            <div className="relative z-10 flex items-center justify-center h-full">
                <h1 className="text-red-600 text-[11em] font-bold drop-shadow-lg drop-shadow-orange-400 animate-fade-in font-rocknroll-one ">
                    AKI
                </h1>
            </div>
        </div>
    );
};

export default Hero;
