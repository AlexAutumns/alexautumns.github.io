import React from "react";
import { skills } from "./skills/skills";
import type { Skill } from "./skills/skills";

const Skills = () => {
    return (
        <div className="w-full overflow-hidden py-6 relative">
            <h2 className="text-4xl font-bold text-center mb-15">My Skills</h2>

            {/* Marquee container */}
            <div className="flex animate-marquee gap-16">
                {[...skills, ...skills].map((skill: Skill, index: number) => (
                    <div
                        key={`${skill.name}-${index}`}
                        className="inline-flex flex-col items-center justify-center cursor-pointer min-w-[150px] mx-8 group"
                    >
                        <img
                            src={skill.icon}
                            alt={skill.name}
                            className="w-30 h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 mb-2 transition-transform duration-300 group-hover:scale-110"
                        />
                        <p className="text-center text-orange-100 text-base md:text-lg font-medium transition-opacity duration-300 opacity-0 group-hover:opacity-100 mt-4">
                            {skill.name}
                        </p>
                    </div>
                ))}
            </div>

            {/* Edge fade overlays */}
            <div className="absolute left-0 top-0 h-full w-25 bg-gradient-to-r from-gray-100 dark:from-gray-950 pointer-events-none"></div>
            <div className="absolute right-0 top-0 h-full w-25 bg-gradient-to-l from-gray-100 dark:from-gray-950 pointer-events-none"></div>
        </div>
    );
};

export default Skills;
