
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import BikeCard from './components/BikeCard';
import Comparison from './components/Comparison';
import TestRideForm from './components/TestRideForm';
import AIBikeFinder from './components/AIBikeFinder';
import { BIKES, FEATURES, TESTIMONIALS } from './constants';
import { Bike } from './types';
import { Star, ChevronRight, Bike as BikeIcon, Globe, ShieldCheck, HeartHandshake } from 'lucide-react';

const App: React.FC = () => {
  const [comparedBikes, setComparedBikes] = useState<Bike[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Commuter', 'Premium', 'Sports', 'Electric'];
  const filteredBikes = activeCategory === 'All' 
    ? BIKES 
    : BIKES.filter(b => b.category === activeCategory);

  const toggleCompare = (bike: Bike) => {
    if (comparedBikes.find(b => b.id === bike.id)) {
      setComparedBikes(prev => prev.filter(b => b.id !== bike.id));
    } else if (comparedBikes.length < 3) {
      setComparedBikes(prev => [...prev, bike]);
    }
  };

  return (
    <div className="relative min-h-screen">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <HeroBanner />

        {/* Bike Models Section */}
        <section id="models" className="py-24 bg-white overflow-hidden">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-4 uppercase tracking-tighter">Our <span className="text-red-600">Lineup</span></h2>
              <p className="text-gray-500 max-w-2xl mx-auto text-lg mb-10">Discover the perfect companion for your journey, from fuel-efficient commuters to exhilarating sports bikes.</p>
              
              <div className="flex flex-wrap justify-center gap-3 mb-12">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-8 py-3 rounded-full text-sm font-black uppercase tracking-widest transition-all ${activeCategory === cat ? 'bg-red-600 text-white shadow-xl' : 'bg-gray-100 text-gray-400 hover:bg-gray-200'}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {filteredBikes.map(bike => (
                <BikeCard 
                  key={bike.id} 
                  bike={bike} 
                  onCompare={toggleCompare} 
                  isCompared={comparedBikes.some(b => b.id === bike.id)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Section (Sticky Preview) */}
        {comparedBikes.length > 0 && (
          <div className="fixed bottom-0 left-0 right-0 z-[60] bg-gray-900 text-white p-4 shadow-2xl flex items-center justify-between container mx-auto rounded-t-3xl border-t border-white/10 backdrop-blur-md bg-opacity-95">
            <div className="flex items-center gap-4">
              <span className="font-black uppercase text-xs tracking-widest text-red-500">Comparison Ready:</span>
              <div className="flex -space-x-3">
                {comparedBikes.map(b => (
                  <div key={b.id} className="w-10 h-10 rounded-full bg-white border-2 border-red-600 overflow-hidden shadow-lg">
                    <img src={b.image} alt={b.name} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>
            <div className="flex gap-4">
               <button onClick={() => setComparedBikes([])} className="text-xs uppercase font-bold text-gray-400 hover:text-white underline">Reset</button>
               <a href="#comparison" className="bg-red-600 px-6 py-3 rounded-full font-black uppercase text-xs hover:bg-red-700 transition-all flex items-center gap-2">Compare Now <ChevronRight size={14} /></a>
            </div>
          </div>
        )}

        <Comparison 
          selectedBikes={comparedBikes} 
          onRemove={(id) => setComparedBikes(prev => prev.filter(b => b.id !== id))} 
          onClear={() => setComparedBikes([])}
        />

        {/* Features Highlight */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {FEATURES.map((feature, idx) => (
                <div key={idx} className="group p-8 bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all border border-gray-100">
                  <div className="mb-6 transform group-hover:scale-110 transition-transform">{feature.icon}</div>
                  <h3 className="text-xl font-black text-gray-900 mb-3 uppercase">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 relative overflow-hidden bg-white">
          <div className="container mx-auto px-4 md:px-8 flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative">
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-red-100 rounded-full blur-3xl opacity-50"></div>
              <img 
                src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&q=80&w=800" 
                alt="Hero Legacy" 
                className="rounded-3xl shadow-2xl relative z-10 w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-red-600 text-white p-8 rounded-3xl z-20 shadow-xl hidden md:block">
                <span className="block text-4xl font-black leading-none">40+</span>
                <span className="text-xs font-bold uppercase tracking-widest">Years of Trust</span>
              </div>
            </div>
            <div className="lg:w-1/2">
              <span className="text-red-600 font-black uppercase tracking-widest text-xs mb-4 block">Our Story</span>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 uppercase tracking-tighter">Driving the <span className="text-red-600">Mobility</span> of Tomorrow</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Hero MotoCorp is the world's largest manufacturer of two-wheelers. For decades, we have defined the pulse of India's mobility, delivering vehicles that combine durability, cutting-edge tech, and unmatched fuel efficiency.
              </p>
              <div className="grid grid-cols-2 gap-8 mb-10">
                <div className="flex items-start gap-4">
                  <div className="bg-red-50 p-2 rounded-lg text-red-600"><Globe size={24} /></div>
                  <div>
                    <h4 className="font-bold text-gray-900">Global Reach</h4>
                    <p className="text-sm text-gray-500">Operating in 40+ countries.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-red-50 p-2 rounded-lg text-red-600"><ShieldCheck size={24} /></div>
                  <div>
                    <h4 className="font-bold text-gray-900">Safety First</h4>
                    <p className="text-sm text-gray-500">Advanced braking systems.</p>
                  </div>
                </div>
              </div>
              <button className="flex items-center text-red-600 font-black uppercase tracking-widest group">
                Learn more about our legacy <ChevronRight className="ml-2 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 bg-gray-900 text-white">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-center text-4xl font-black uppercase tracking-tighter mb-16">What Our <span className="text-red-600">Riders</span> Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {TESTIMONIALS.map(t => (
                <div key={t.id} className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl relative">
                  <div className="flex gap-1 mb-6">
                    {[...Array(t.rating)].map((_, i) => <Star key={i} size={16} fill="#ef4444" color="#ef4444" />)}
                  </div>
                  <p className="text-lg mb-8 italic text-gray-300">"{t.content}"</p>
                  <div className="flex items-center gap-4">
                    <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover border-2 border-red-600" />
                    <div>
                      <h4 className="font-bold">{t.name}</h4>
                      <p className="text-xs text-red-500 uppercase font-black">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact / Test Ride Form */}
        <TestRideForm />
      </main>

      <footer className="bg-gray-900 text-gray-400 py-20 border-t border-white/5">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-8">
                <div className="bg-red-600 p-1.5 rounded-lg">
                  <BikeIcon className="text-white w-6 h-6" />
                </div>
                <span className="text-2xl font-black tracking-tighter text-white">HERO<span className="text-red-600">BIKES</span></span>
              </div>
              <p className="text-sm max-w-sm mb-8 leading-relaxed">
                Empowering millions with the joy of mobility. Join the world's largest community of riders. Innovation, quality, and performance are at the heart of everything we do.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-red-600 transition-colors">
                  <span className="sr-only">Facebook</span>
                  <HeartHandshake size={20} className="text-white" />
                </a>
                {/* Social icons placeholders */}
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center cursor-pointer hover:bg-red-600">F</div>
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center cursor-pointer hover:bg-red-600">X</div>
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center cursor-pointer hover:bg-red-600">I</div>
              </div>
            </div>
            <div>
              <h4 className="text-white font-black uppercase mb-6 text-sm tracking-widest">Quick Links</h4>
              <ul className="space-y-4 text-sm">
                <li><a href="#models" className="hover:text-red-500 transition-colors">Bikes & Scooters</a></li>
                <li><a href="#" className="hover:text-red-500 transition-colors">Electric (Vida)</a></li>
                <li><a href="#contact" className="hover:text-red-500 transition-colors">Locate Dealer</a></li>
                <li><a href="#" className="hover:text-red-500 transition-colors">Book Service</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-black uppercase mb-6 text-sm tracking-widest">Support</h4>
              <ul className="space-y-4 text-sm">
                <li><a href="#" className="hover:text-red-500 transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-red-500 transition-colors">Roadside Assistance</a></li>
                <li><a href="#" className="hover:text-red-500 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-red-500 transition-colors">Terms of Use</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between gap-4 text-xs font-bold uppercase tracking-widest">
            <p>© 2024 Hero MotoCorp Ltd. All rights reserved.</p>
            <p>Designed with ❤️ for riders across India</p>
          </div>
        </div>
      </footer>

      {/* Floating AI Consultant */}
      <AIBikeFinder />
    </div>
  );
};

export default App;
