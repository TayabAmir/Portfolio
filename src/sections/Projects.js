import React from 'react'
import { Menu, X, Download, ExternalLink, Github, Linkedin, Mail, Phone, MapPin, Code, Award, User, Briefcase } from 'lucide-react';

const Projects = () => {

    // Projects data
    const projects = [
        {
            title: "Microservices Ticketing App",
            description: "A scalable ticketing application built with Node.js microservices, deployed on Kubernetes with Docker containerization.",
            technologies: ["Node.js", "Express.js", "Kubernetes", "Docker", "NATS", "MongoDB", "Next.js", "TypeScript"],
            github: "https://github.com/TayabAmir/Ticketing-App",
            demo: "#",
            category: "microservices"
        },
        {
            title: "Multivendor E-Shop Platform",
            description: "Full MERN stack E-Shop website with three roles i.e. customer, seller, and admin roles with chatting feature, featuring complete order management.",
            technologies: ["React", "Node.js", "MongoDB", "Redux", "Express", "socket.io", "Cloudinary", "Stripe"],
            github: "https://github.com/TayabAmir/E-Shop",
            demo: "#",
            category: "mern"
        },
        {
            title: "My Database",
            description: "SQL-like database engine in C++ with support for complex queries, file-based storage system and features like Indexing, ACL, Transactions etc.",
            technologies: ["C++", "SQL", "File Systems", "Regex"],
            github: "https://github.com/TayabAmir/My_Database",
            demo: "#",
            category: "cpp"
        },
        {
            title: "Reels Pro",
            description: "Developed a modern web app using Next.js and TypeScript that mimics the core functionality of Instagram Reels.",
            technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
            github: "http://github.com/TayabAmir/Reels_Pro",
            demo: "#",
            category: "web"
        },
        {
            title: "E-Commerce",
            description: "The E-Commerce site built using MERN stack. Features include user authentication, Redux for state management, and order processing.",
            technologies: ["React", "Node.js", "MongoDB", "Redux", "Express"],
            github: "https://github.com/TayabAmir/E-Shop",
            demo: "#",
            category: "mern"
        },
        {
            title: "Solitaire Game",
            description: "Card game implementation using data structures e.g. Linked Lists, Stack, Queues  and Fisher-Yates shuffle algorithm.",
            technologies: ["C++", "Data Structures", "Algorithms"],
            github: "https://github.com/TayabAmir/Solitaire-Game",
            demo: "#",
            category: "dsa"
        },
        {
            title: "Movie and Dramas Site",
            description: "A dynamic website for discovering movies and dramas using React.js, ensuring an interactive UI.",
            technologies: ["Javascript", "React.js", "Redux", "TMDB API"],
            github: "https://github.com/TayabAmir/Movix",
            demo: "https://movix-steel-gamma.vercel.app/",
            category: "frontend"
        },
        {
            title: "Mini Excel",
            description: "A business application using C# winforms applying OOP concepts e.g. Encapsulation, Inheritance, Polymorphism, and Abstraction.",
            technologies: ["Javascript", "React.js", "Redux", "TMDB API"],
            github: "https://github.com/TayabAmir/Business-Application",
            demo: "#",
            category: "frontend"
        },
        {
            title: "Social Media Addiction Predictor",
            description: "Built a machine learning-based web app using Python and Streamlit to predict social media addiction with integrate LLM. Trained multiple models, evaluated their performance, and selected the best one based on accuracy metrics.",
            technologies: ["Python", "Streamlit", "Scikit-learn", "Machine Learning"],
            github: "http://github.com/TayabAmir/AI_Final_Project", 
            demo: "https://addictionpredictor.streamlit.app/",
            category: "ml"
        },
        {
            title: "Tech Shop",
            description: "A business application using C# winforms applying OOP concepts e.g. Encapsulation, Inheritance, Polymorphism, and Abstraction.",
            technologies: ["Javascript", "React.js", "Redux", "TMDB API"],
            github: "https://github.com/TayabAmir/Business-Application",
            demo: "#",
            category: "oop"
        },
    ];

    return (
        <section id="projects" className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Projects</h2>
                    <p className="text-xl text-gray-600">
                        A showcase of my technical expertise and problem-solving abilities
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                                <p className="text-gray-600 mb-4">{project.description}</p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.map((tech) => (
                                        <span key={tech} className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-sm">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-4">
                                    <a
                                        href={project.github}
                                        className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
                                    >
                                        <Github size={16} />
                                        Code
                                    </a>
                                    {project.demo != "#" && <a
                                        href={project.demo}
                                        className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
                                    >
                                        <ExternalLink size={16} />
                                        Demo
                                    </a>}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>


    )
}

export default Projects