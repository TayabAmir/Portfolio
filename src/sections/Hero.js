// sections/Hero.js
import { Download, User } from 'lucide-react';

export default function Hero({ setIsMenuOpen }) {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };
  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center py-20">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6">
              <img
                src="/Muhammad_Tayyab.png"
                alt="Muhammad Tayyab"
                className="w-full h-full object-cover rounded-full shadow-md"
              />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Muhammad <span className="text-blue-600">Tayyab</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-2">
            Full Stack Developer
          </p>
          <p className="text-lg text-blue-600 mb-8">
            Competitive Programmer
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/Resume.pdf"
              download
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Download size={20} />
              Download Resume
            </a>
            <button
              onClick={() => scrollToSection('contact')}
              className="border-2 border-blue-600 cursor-pointer text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-colors duration-200"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
