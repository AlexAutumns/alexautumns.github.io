import placeholderImage from "../../../assets/images/placeholder.jpg";
import placeholderImageV from "../../../assets/images/placeholderV.jpg";

// IMAGE IMPORTS
import Portfolio1 from "../../../assets/images/projectImages/Portfolio1.png";

export type Project = {
    title: string;
    year: string;
    role: string;
    images?: string[]; // 1 or more images (optional for archive projects)
    description?: string[]; // paragraphs
    bulletPoints?: string[]; // optional bullet points
    url?: string; // optional URL for linking
};

export const featuredProjects: Project[] = [
    {
        title: "Portfolio Website",
        year: "2025",
        role: "Developer",
        images: [Portfolio1],
        description: [
            "This is a portfolio website built to showcase projects and skills.",
            "It uses React, Tailwind, and TypeScript for a modern web experience.",
        ],
        bulletPoints: [
            "Responsive design",
            "Dark mode support",
            "Animated sections",
        ],
        url: "https://github.com/AlexAutumns/alexautumns.github.io",
    },
];

export const archiveProjects: Project[] = [
    {
        title: "Portfolio Website",
        url: "https://github.com/AlexAutumns/alexautumns.github.io",
        year: "2023",
        images: [Portfolio1],
        role: "Developer",
    },
];
