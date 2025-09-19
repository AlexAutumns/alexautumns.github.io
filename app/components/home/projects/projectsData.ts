export type Project = {
    title: string;
    year: string;
    role: string;
    images: string[]; // 1 or more images
    description?: string[]; // paragraphs
    bulletPoints?: string[]; // optional bullet points
};

export const featuredProjects: Project[] = [
    {
        title: "Portfolio Website",
        year: "2025",
        role: "Developer",
        images: [
            "/images/projects/portfolio-1.png",
            "/images/projects/portfolio-2.png",
        ],
        description: [
            "This is a portfolio website built to showcase projects and skills.",
            "It uses React, Tailwind, and TypeScript for a modern web experience.",
        ],
        bulletPoints: [
            "Responsive design",
            "Dark mode support",
            "Animated sections",
        ],
    },
    {
        title: "E-commerce App",
        year: "2024",
        role: "Backend Developer",
        images: ["/images/projects/ecommerce-1.png"],
        description: [
            "An online shopping app with secure payment integration.",
        ],
        bulletPoints: [
            "REST API built with Spring Boot",
            "JWT authentication",
            "MySQL database",
        ],
    },
];
