import React, { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, User, Code, GraduationCap, Award } from 'lucide-react';

const About = () => {

    const [currentSlide, setCurrentSlide] = useState(0);
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);

    const slides = [
        {
            title: "Full Stack Developer",
            content: (
                <>
                    I am skilled in the <span className="tech-term bg-blue-100 text-blue-700 px-1 rounded">MERN stack</span> and building full-stack web apps using <span className="tech-term bg-blue-100 text-blue-700 px-1 rounded">Next.js</span> and <span className="tech-term bg-blue-100 text-blue-700 px-1 rounded">TypeScript</span>. Familiar with designing scalable systems using <span className="tech-term bg-blue-100 text-blue-700 px-1 rounded">Microservices</span> architecture and containerization tools like <span className="tech-term bg-blue-100 text-blue-700 px-1 rounded">Docker</span>. Comfortable working with <span className="tech-term bg-blue-100 text-blue-700 px-1 rounded">RESTful APIs</span>, backend development, and database management in academic and personal projects.

                </>
            )
        },
        {
            title: "Technical Expertise",
            content: (
                <>
                    "Strong foundation in <span className="tech-term bg-blue-100 text-blue-700 px-1 rounded">Object-Oriented Programming</span> and real-world software design. Proficient in <span className="tech-term bg-blue-100 text-blue-700 px-1 rounded">C++</span> and <span className="tech-term bg-blue-100 text-blue-700 px-1 rounded">JavaScript</span> with deep experience in <span className="tech-term bg-blue-100 text-blue-700 px-1 rounded">Competitive Programming</span> and algorithmic problem-solving. Consistently secured top positions in national-level coding competitions."
                </>
            )
        },
        {
            title: "Education",
            content: (<>
                "Currently pursuing a BS in <span className="tech-term bg-blue-100 text-blue-700 px-1 rounded">Computer Science</span> at <span className="tech-term bg-blue-100 text-blue-700 px-1 rounded">UET Lahore</span>, I'm seeking opportunities to contribute to impactful software projects and continue pushing the boundaries of what I can build."
            </>
            )
        }
    ];

    // Minimum swipe distance (in px)
    const minSwipeDistance = 50;

    const onTouchStart = (e) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;

        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe) {
            nextSlide();
        } else if (isRightSwipe) {
            prevSlide();
        }
    };

    // Auto-advance slides
    // useEffect(() => {
    //     const timer = setInterval(() => {
    //         setCurrentSlide((prev) => (prev + 1) % slides.length);
    //     }, 4000);

    //     return () => clearInterval(timer);
    // }, [slides.length]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    // Achievements data
    const achievements = [
        {
            title: "Digital Pakistan Speed Programming",
            position: "Top 25 Nationally",
            description: "Qualified for finals among 1400+ teams nationwide and competed with Top 50 teams in final round and secured position in Top 25",
            date: "Jul 2025"
        },
        {
            title: "PUCON'25 Programming Contest",
            position: "Runner-Up",
            description: "Secured 2nd place out of 130+ teams by competing in 2 rounds.",
            date: "May 2025"
        },
        {
            title: "Code Rush'25 Programming Contest",
            position: "2nd Runner-Up",
            description: "Secured 3rd position out of 130+ teams by competing in 2 rounds.",
            date: "May 2025"
        },
        {
            title: "Logiz Blitz'25 Speed Programming",
            position: "Winner",
            description: "Secured 1st place by solving complex coding problems",
            date: "May 2025"
        },
        {
            title: "SOFTEC'25 Programming Competition",
            position: "2nd Runner-Up",
            description: "170 Programming teams ' hours of coding and secured 3rd position.",
            date: "April 2025"
        },
        {
            title: "UTS 5.0 Coding Competition",
            position: "Runner-Up",
            description: "Secured 2nd place by solving challenging algorithmic problems under time constraints.",
            date: "January 2025"
        },
        {
            title: "CodeX Programming Contest",
            position: "2nd Runner-Up",
            description: "Achieved 3rd place, solving 5/6 problems, demonstrating strong problem-solving skills.",
            date: "January 2025"
        },
        {
            title: "ACM Coding Contest",
            position: "Winner",
            description: "1st place in complex coding challenges",
            date: "Dec 2024"
        },
        {
            title: "Speed Coding at MechTech’24",
            position: "Runner-Up",
            description: "Earned 2nd place for writing optimized code under time pressure.",
            date: "January 2024"
        },
    ];


    // Skills data
    const skills = {
        "Frontend": ["React.js", "Next.js", "JavaScript", "TypeScript", "HTML/CSS", "Redux"],
        "Backend": ["Node.js", "Express.js", "REST APIs", "Microservices"],
        "Databases": ["MongoDB", "MySQL", "SQL"],
        "DevOps": ["Docker", "Kubernetes", "CI/CD"],
        "Languages": ["C++", "JavaScript", "TypeScript", "C#"]
    };

    return (
        <section id="about" className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 max-w-5xl mx-auto px-4">
                    <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-12">
                        About Me
                    </h2>

                    <div className="text-center mb-16 max-w-5xl mx-auto px-4">
                        {/* Slider Container */}
                        <div
                            className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100"
                            onTouchStart={onTouchStart}
                            onTouchMove={onTouchMove}
                            onTouchEnd={onTouchEnd}
                        >
                            {/* Slides */}
                            <div className="relative h-80 sm:h-72 md:h-64">
                                {slides.map((slide, index) => (
                                    <div
                                        key={index}
                                        className={`absolute inset-0 transition-all duration-700 ease-in-out transform ${index === currentSlide
                                            ? 'opacity-100 translate-x-0 scale-100'
                                            : index < currentSlide
                                                ? 'opacity-0 -translate-x-full scale-95'
                                                : 'opacity-0 translate-x-full scale-95'
                                            }`}
                                    >
                                        <div className="h-full flex flex-col justify-center items-center p-6 sm:p-8 md:p-12">
                                            {/* Title */}
                                            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-4 sm:mb-6 text-center">
                                                {slide.title}
                                            </h3>

                                            {/* Content */}
                                            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto text-justify hyphens-auto" style={{ textAlignLast: 'center' }}>
                                                {slide.content}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Desktop Navigation Arrows - Hidden on Mobile */}
                            <button
                                onClick={prevSlide}
                                className="hidden md:flex absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg items-center justify-center text-gray-600 hover:text-blue-600 hover:bg-white transition-all duration-200 hover:scale-110"
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>

                            <button
                                onClick={nextSlide}
                                className="hidden md:flex absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg items-center justify-center text-gray-600 hover:text-blue-600 hover:bg-white transition-all duration-200 hover:scale-110"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>

                            {/* Progress Bar */}
                            <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-200">
                                <div
                                    className="h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-0 ease-linear"
                                    style={{
                                        width: `${((currentSlide + 1) / slides.length) * 100}%`,
                                    }}
                                />
                            </div>
                        </div>

                        {/* Slide Counter */}
                        <div className="mt-6 text-sm text-gray-500 font-medium">
                            {currentSlide + 1} of {slides.length}
                        </div>
                    </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    <div className="text-center bg-blue-50 p-6 rounded-lg">
                        <div className="text-3xl font-bold text-blue-600 mb-2">10+</div>
                        <div className="text-gray-700">Full-Stack and Academic Projects</div>

                    </div>
                    <div className="text-center bg-blue-50 p-6 rounded-lg">
                        <div className="text-3xl font-bold text-blue-600 mb-2">700+ Problems</div>
                        <div className="text-gray-700">Across Coding Platforms</div>
                    </div>
                    <div className="text-center bg-blue-50 p-6 rounded-lg">
                        <div className="text-3xl font-bold text-blue-600 mb-2">8+</div>
                        <div className="text-gray-700">Competition Wins</div>
                    </div>

                </div>

                {/* Skills */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Technical Skills</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {Object.entries(skills).map(([category, skillList]) => (
                            <div key={category} className="bg-gray-50 p-6 rounded-lg">
                                <h4 className="text-lg font-semibold text-blue-600 mb-4">{category}</h4>
                                <div className="flex flex-wrap gap-2">
                                    {skillList.map((skill) => (
                                        <span key={skill} className="bg-white text-gray-700 px-3 py-1 rounded-full text-sm border">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Achievements */}
                <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Achievements</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {achievements.map((achievement, index) => (
                            <div key={index} className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-lg border border-blue-100">
                                <div className="flex items-center mb-3">
                                    <Award className="text-blue-600 mr-2" size={20} />
                                    <span className="text-sm text-blue-600 font-medium">{achievement.date}</span>
                                </div>
                                <h4 className="text-lg font-semibold text-gray-900 mb-2">{achievement.title}</h4>
                                <p className="text-blue-600 font-medium mb-2">{achievement.position}</p>
                                <p className="text-gray-600 text-sm">{achievement.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About