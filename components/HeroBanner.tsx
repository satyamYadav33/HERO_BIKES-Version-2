
import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const HeroBanner: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1440186347098-386b7459ad6b?auto=format&fit=crop&q=80&w=2000" 
          className="w-full h-full object-cover"
          alt="Hero Bike Banner"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 pt-20">
        <div className="max-w-3xl">
          <span className="inline-block bg-red-600 text-white text-xs font-black px-3 py-1 mb-6 rounded-sm uppercase tracking-widest animate-bounce">
            New Launch: Karizma XMR
          </span>
          <h1 className="text-5xl md:text-8xl font-black text-white leading-tight mb-6">
            RIDE THE <br />
            <span className="text-red-600">FUTURE</span> NOW.
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-10 font-light max-w-xl">
            Experience the perfect blend of legendary reliability and modern innovation. Join millions of riders across the globe.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#models" 
              className="flex items-center justify-center bg-red-600 text-white px-10 py-5 rounded-sm font-black uppercase tracking-tighter text-lg hover:bg-red-700 transition-all transform hover:scale-105 active:scale-95 group shadow-2xl"
            >
              Explore Models
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <button className="flex items-center justify-center border-2 border-white/30 text-white px-10 py-5 rounded-sm font-black uppercase tracking-tighter text-lg hover:bg-white/10 transition-all backdrop-blur-sm">
              <Play className="mr-2 fill-current" />
              Watch 360&deg; View
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-red-600 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
