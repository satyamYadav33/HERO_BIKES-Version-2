
import React from 'react';
import { Bike, Testimonial, Dealer } from './types';
import { Zap, Shield, Settings, Activity } from 'lucide-react';

export const BIKES: Bike[] = [
  {
    id: 'splendor-plus',
    name: 'Splendor Plus',
    tagline: 'The Legendary Performance',
    price: '₹75,441',
    engine: '97.2cc',
    mileage: '70 kmpl',
    power: '8.02 PS',
    image: 'https://images.unsplash.com/photo-1558981403-c5f91cbba527?auto=format&fit=crop&q=80&w=800',
    category: 'Commuter',
    features: ['i3S Technology', 'High Fuel Efficiency', 'Legendary Reliability']
  },
  {
    id: 'karizma-xmr',
    name: 'Karizma XMR',
    tagline: 'Ride the Legend',
    price: '₹1,79,900',
    engine: '210cc',
    mileage: '32 kmpl',
    power: '25.5 PS',
    image: 'https://images.unsplash.com/photo-1622185135505-2d795003994a?auto=format&fit=crop&q=80&w=800',
    category: 'Sports',
    features: ['Liquid Cooled DOHC Engine', 'Dual Channel ABS', 'Full LED Lighting']
  },
  {
    id: 'xpulse-200-4v',
    name: 'XPulse 200 4V',
    tagline: 'Adventure Ready',
    price: '₹1,44,776',
    engine: '199.6cc',
    mileage: '40 kmpl',
    power: '19.1 PS',
    image: 'https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?auto=format&fit=crop&q=80&w=800',
    category: 'Premium',
    features: ['Off-road suspension', 'Turn-by-turn Navigation', 'Oil Cooled Engine']
  },
  {
    id: 'vida-v1',
    name: 'Vida V1',
    tagline: 'The Future is Here',
    price: '₹1,25,900',
    engine: 'Electric',
    mileage: '165 km (Range)',
    power: '6.0 kW (Peak)',
    image: 'https://images.unsplash.com/photo-1606233454371-5589c3127815?auto=format&fit=crop&q=80&w=800',
    category: 'Electric',
    features: ['Removable Battery', 'Fast Charging', 'Smart Connected Features']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Arun Kumar',
    role: 'Daily Commuter',
    content: 'The Splendor Plus has been my faithful companion for 5 years. Hero means trust!',
    rating: 5,
    avatar: 'https://picsum.photos/seed/arun/100/100'
  },
  {
    id: 2,
    name: 'Sonia Sharma',
    role: 'Adventure Enthusiast',
    content: 'The XPulse handles trails like a dream. Unbeatable value for money in the off-road segment.',
    rating: 4,
    avatar: 'https://picsum.photos/seed/sonia/100/100'
  },
  {
    id: 3,
    name: 'Rahul V.',
    role: 'College Student',
    content: 'Karizma XMR is a head-turner. The performance at this price point is insane.',
    rating: 5,
    avatar: 'https://picsum.photos/seed/rahul/100/100'
  }
];

export const FEATURES = [
  { icon: <Zap className="w-8 h-8 text-red-600" />, title: 'Advanced Performance', desc: 'Cutting-edge engine technology for maximum power and efficiency.' },
  { icon: <Shield className="w-8 h-8 text-red-600" />, title: 'Unmatched Safety', desc: 'Dual-channel ABS and robust chassis for complete peace of mind.' },
  { icon: <Settings className="w-8 h-8 text-red-600" />, title: 'Smart Connectivity', desc: 'Bluetooth navigation and real-time bike diagnostics at your fingertips.' },
  { icon: <Activity className="w-8 h-8 text-red-600" />, title: 'Eco-Friendly Tech', desc: 'i3S technology to save fuel and reduce carbon emissions in traffic.' }
];

export const DEALERS: Dealer[] = [
  { id: 1, name: 'Metro Hero - Downtown', address: '123 MG Road, Bengaluru', phone: '+91 9876543210', coords: { lat: 12.9716, lng: 77.5946 } },
  { id: 2, name: 'Royal Hero Motors', address: '456 Linking Road, Mumbai', phone: '+91 9876543211', coords: { lat: 19.0760, lng: 72.8777 } },
  { id: 3, name: 'Capital City Hero', address: '789 Connaught Place, Delhi', phone: '+91 9876543212', coords: { lat: 28.6139, lng: 77.2090 } }
];
