import React from 'react'
import { Menu, X, Download, ExternalLink, Github, Linkedin, Mail, Phone, MapPin, Code, Award, User, Briefcase } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Me</h2>
                    <p className="text-xl text-gray-600">
                        Let's discuss opportunities and collaborate on exciting projects
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Contact Info */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="bg-blue-100 p-3 rounded-lg">
                                <Mail className="text-blue-600" size={24} />
                            </div>
                            <div>
                                <p className="font-medium text-gray-900">Email</p>
                                <p className="text-gray-600">amirtayyab8@gmail.com</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="bg-blue-100 p-3 rounded-lg">
                                <Phone className="text-blue-600" size={24} />
                            </div>
                            <div>
                                <p className="font-medium text-gray-900">Phone</p>
                                <p className="text-gray-600">+92-3360845675</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="bg-blue-100 p-3 rounded-lg">
                                <MapPin className="text-blue-600" size={24} />
                            </div>
                            <div>
                                <p className="font-medium text-gray-900">Location</p>
                                <p className="text-gray-600">Lahore, Punjab, Pakistan</p>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="pt-6">
                            <p className="font-medium text-gray-900 mb-4">Connect with me:</p>
                            <div className="flex gap-4">
                                <a href="https://linkedin.com/in/tayyab0" className="bg-blue-100 p-3 rounded-lg hover:bg-blue-200 transition-colors duration-200">
                                    <Linkedin className="text-blue-600" size={24} />
                                </a>
                                <a href="https://github.com/TayabAmir/" className="bg-blue-100 p-3 rounded-lg hover:bg-blue-200 transition-colors duration-200">
                                    <Github className="text-blue-600" size={24} />
                                </a>
                                <a href="https://leetcode.com/u/TayabAmir/" className="bg-blue-100 p-3 rounded-lg hover:bg-blue-200 transition-colors duration-200">
                                    <Code className="text-blue-600" size={24} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Methods */}
                    <div className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Let's Connect</h3>
                        <div className="space-y-4">
                            <a
                                href="mailto:amirtayyab8@gmail.com"
                                className="block bg-blue-600 text-white text-center py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                            >
                                Send Email
                            </a>
                            <a
                                href="tel:+923360845675"
                                className="block bg-green-600 text-white text-center py-3 px-4 rounded-lg hover:bg-green-700 transition-colors duration-200"
                            >
                                Call Now
                            </a>
                            <div className="text-center text-gray-600 text-sm pt-2">
                                Or connect with me on social platforms
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Contact