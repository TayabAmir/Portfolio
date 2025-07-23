"use client"
import React, { useState } from 'react';
import Hero from '@/sections/Hero';
import NavigationBar from './components/navbar';
import About from '@/sections/About';
import Projects from '@/sections/Projects';
import Contact from '@/sections/Contact';
import Footer from './components/Footer';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="min-h-screen bg-white">
            <NavigationBar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            <Hero setIsMenuOpen={setIsMenuOpen} />
            <About />
            <Projects />
            <Contact/>
            <Footer/>
        </div>
    );
}
