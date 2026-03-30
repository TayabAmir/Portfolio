"use client"
import React, { useState, useEffect } from 'react';
import Hero from '@/sections/Hero';
import NavigationBar from './components/navbar';
import About from '@/sections/About';
import Projects from '@/sections/Projects';
import Contact from '@/sections/Contact';
import Footer from './components/Footer';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
            <NavigationBar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} scrolled={scrolled} />
            <div className='mt-5'>
              <Hero setIsMenuOpen={setIsMenuOpen} />
            </div>
            <About />
            <Projects />
            <Contact/>
            <Footer/>
        </div>
    );
}
