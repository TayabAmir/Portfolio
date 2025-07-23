import React from 'react'
import { Menu, X, Download, ExternalLink, Github, Linkedin, Mail, Phone, MapPin, Code, Award, User, Briefcase } from 'lucide-react';

const NavigationBar = ({ isMenuOpen, setIsMenuOpen }) => {
    const navItems = [
        { id: 'home', label: 'Home', icon: User },
        { id: 'about', label: 'About', icon: User },
        { id: 'projects', label: 'Projects', icon: Code },
        { id: 'contact', label: 'Contact', icon: Mail }
    ];
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMenuOpen(false);
    };
    return (
        <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-blue-100 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    <div className="text-2xl font-bold text-blue-600">
                        Muhammad Tayyab
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>

                    {/* Mobile menu button */}
                    <button
                        className="md:hidden text-gray-700"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden bg-white border-t border-blue-100">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className="block w-full text-left px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200"
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    )
}

export default NavigationBar