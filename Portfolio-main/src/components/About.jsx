import React from 'react';
import stackImage from '../assets/about/priyanshu-avatar.png';
import { aboutContent } from '../data/portfolioData';

// Tech stack SVG icons rendered inline for crisp rendering
const ReactIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-16 h-16 md:w-20 md:h-20 animate-[spin_15s_linear_infinite]" viewBox="0 0 128 128">
      <g fill="none" stroke="#00d8ff" strokeWidth="6" transform="translate(10, 10)">
        <ellipse cx="54" cy="54" rx="16" ry="46" transform="rotate(30 54 54)" />
        <ellipse cx="54" cy="54" rx="16" ry="46" transform="rotate(90 54 54)" />
        <ellipse cx="54" cy="54" rx="16" ry="46" transform="rotate(150 54 54)" />
        <circle cx="54" cy="54" r="7" fill="#00d8ff" />
      </g>
    </svg>
    <span className="text-xs font-bold text-white/70 uppercase tracking-wider">ReactJS</span>
  </div>
);

const PythonIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 128 128">
      <path fill="#3776AB" d="M64 5.922c-31.954 0-29.988 13.856-29.988 13.856h13.992s-.404-5.32 15.996-5.32c16.4 0 16.036 4.708 16.036 4.708s.162 12.756-11.458 12.756H48.423c-15.82 0-28.435 11.238-28.435 27.058v17.962s-1.892 15.996 13.882 15.996h8.1v-11.43h19.866c15.82 0 16.036-12.878 16.036-12.878V54.76h8.172c15.654 0 15.996-12.224 15.996-12.224S105.816 5.922 64 5.922zM52.012 14.88c2.474 0 4.478 2.004 4.478 4.478 0 2.474-2.004 4.478-4.478 4.478-2.474 0-4.478-2.004-4.478-4.478 0-2.474 2.004-4.478 4.478-4.478z"/>
      <path fill="#FFE873" d="M64 122.078c31.954 0 29.988-13.856 29.988-13.856H79.996s.404 5.32-15.996 5.32c-16.4 0-16.036-4.708-16.036-4.708s-.162-12.756 11.458-12.756h20.159c15.82 0 28.435-11.238 28.435-27.058V51.058s1.892-15.996-13.882-15.996h-8.1v11.43H46.162c-15.82 0-16.036 12.878-16.036 12.878v13.866h-8.172c-15.654 0-15.996 12.224-15.996 12.224s-3.726 36.618 38.09 36.618zM75.988 113.12c-2.474 0-4.478-2.004-4.478-4.478 0-2.474 2.004-4.478 4.478-4.478 2.474 0 4.478 2.004 4.478 4.478 0 2.474-2.004 4.478-4.478 4.478z"/>
    </svg>
    <span className="text-xs font-bold text-white/70 uppercase tracking-wider">Python</span>
  </div>
);

const AwsIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 128 128">
      <path fill="#FF9900" d="M83.4 86.8c-12.9 8.2-31.5 12.6-47.5 12.6-22.3 0-38.3-8.4-38.3-8.4s-3.5-2.2-1.6 1.4c9.3 17.6 30.6 24.3 49.3 24.3 15.6 0 35.1-4.7 44.5-12.1 3-2.3 1.1-6.1-6.4-7.8z"/>
      <path fill="#FF9900" d="M109.1 82.2c-5.8 4.6-9.6 10.7-9.6 10.7s-.6.7.1.6c6-.4 21.2-2.9 22.3-4.5 1.1-1.6 1.5-10.4-2.2-13.8-3.7-3.4-11.8 1.4-11.8 1.4s-.8.6-.2 1.2c2.8 2.8 4.9 6.2 1.4 4.4z"/>
      <path fill="#FFFFFF" d="M38.8 62.4c.1-.8.6-1.5 1.4-1.5H45c.8 0 1.4.6 1.5 1.4 1 5.3 4.1 14.5 11.5 14.5 6.6 0 9.8-7 9.8-13.2 0-11-8.5-14.7-16.1-18-9-3.9-19-8.4-19-21.5C32.7 11.8 43.6 2 56.6 2c12.2 0 22.3 8.3 23.9 19.3.1.8-.4 1.5-1.2 1.5h-4.8c-.8 0-1.4-.6-1.5-1.4-1.2-6.5-5.9-12-16.4-12-8.5 0-11.4 5.4-11.4 10.2 0 9.4 7.2 12.7 14.9 16 9.8 4.2 20.2 9.1 20.2 23.4 0 14.2-11.3 25-23.7 25-15.6.1-23.9-10.3-25-21.1zm22.4 12.6c0 .6-.5 1.1-1.1 1.1H48.5V60.7h11.6c.6 0 1.1.5 1.1 1.1v13.2z" className="hidden" />
    </svg>
    <span className="text-xs font-bold text-white/70 uppercase tracking-wider">AWS</span>
  </div>
);

const About = () => {
  return (
    <section id="about" className="bg-[#ff2a2a] pt-20 pb-40 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start">
        
        {/* Left Side: ID Badge and Skills */}
        <div className="flex flex-col items-center w-full md:w-[350px] shrink-0 mt-12 md:mt-0">
          
          <div data-aos="drop-bounce" className="relative flex justify-center w-full">
            {/* Lanyard string */}
            <div className="absolute -top-32 left-1/2 w-3 h-40 bg-black transform -translate-x-1/2 shadow-inner z-0"></div>
            {/* Lanyard clip */}
            <div className="absolute -top-6 left-1/2 w-6 h-12 bg-gray-300 rounded border border-gray-400 transform -translate-x-1/2 z-10 shadow-[0_2px_10px_rgba(0,0,0,0.3)]"></div>
            
            {/* Badge Card */}
            <div className="bg-gray-900 w-full max-w-[280px] rounded-2xl p-3 shadow-[0_20px_40px_rgba(0,0,0,0.4)] relative z-20 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
              {/* Cutout Hole */}
              <div className="absolute -top-3 left-1/2 w-16 h-6 bg-gray-900 rounded-t-xl transform -translate-x-1/2 flex justify-center items-center">
                <div className="w-8 h-2 bg-black/30 rounded-full shadow-inner"></div>
              </div>
              {/* Image Container */}
              <div className="w-full aspect-[3/4] overflow-hidden rounded-xl bg-gray-800 border-2 border-transparent">
                <img 
                  src={stackImage} 
                  alt="Md Yusuf — Full Stack & Java Developer" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>

        </div>

        {/* Right Side: Info Content */}
        <div data-aos="fade-left" data-aos-delay="200" className="flex-1 text-white mt-8 md:mt-0 relative z-20">
          
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4">{aboutContent.heading}</h2>
          <p 
            className="text-lg font-bold mb-12 leading-relaxed max-w-3xl text-red-50"
            dangerouslySetInnerHTML={{ __html: aboutContent.bio }}
          />

          {/* Horizontal Skills Row */}
          <div className="flex items-center gap-10 mt-8">
            <div data-aos="zoom-in" data-aos-delay="300" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <ReactIcon />
            </div>
            <div data-aos="zoom-in" data-aos-delay="450" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <PythonIcon />
            </div>
            <div data-aos="zoom-in" data-aos-delay="600" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <AwsIcon />
            </div>
          </div>

        </div>
      </div>

      {/* Torn paper divider at bottom */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-30 transform translate-y-1">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      {/* Decorative stars */}
      <div className="absolute top-10 right-10 md:right-20 text-black opacity-30 animate-pulse">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
      <div className="absolute bottom-32 left-4 md:left-20 text-black opacity-30 animate-pulse" style={{ animationDelay: '1s' }}>
        <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
    </section>
  );
};

export default About;
