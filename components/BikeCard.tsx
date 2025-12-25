
import React from 'react';
import { Bike } from '../types';
import { Fuel, Gauge, Zap, ChevronRight, PlusCircle, CheckCircle2 } from 'lucide-react';

interface BikeCardProps {
  bike: Bike;
  onCompare: (bike: Bike) => void;
  isCompared: boolean;
}

const BikeCard: React.FC<BikeCardProps> = ({ bike, onCompare, isCompared }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col group">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img 
          src={bike.image} 
          alt={bike.name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full shadow-sm">
          <span className="text-xs font-bold text-red-600 uppercase tracking-tighter">{bike.category}</span>
        </div>
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-2xl font-black text-gray-900 group-hover:text-red-600 transition-colors">{bike.name}</h3>
          <p className="text-lg font-bold text-gray-900">{bike.price}</p>
        </div>
        <p className="text-gray-500 text-sm mb-6">{bike.tagline}</p>
        
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="flex flex-col items-center text-center p-2 rounded-xl bg-gray-50 border border-gray-100">
            <Gauge className="w-5 h-5 text-red-600 mb-1" />
            <span className="text-[10px] uppercase font-bold text-gray-400">Engine</span>
            <span className="text-xs font-bold text-gray-900">{bike.engine}</span>
          </div>
          <div className="flex flex-col items-center text-center p-2 rounded-xl bg-gray-50 border border-gray-100">
            <Fuel className="w-5 h-5 text-red-600 mb-1" />
            <span className="text-[10px] uppercase font-bold text-gray-400">Mileage</span>
            <span className="text-xs font-bold text-gray-900">{bike.mileage}</span>
          </div>
          <div className="flex flex-col items-center text-center p-2 rounded-xl bg-gray-50 border border-gray-100">
            <Zap className="w-5 h-5 text-red-600 mb-1" />
            <span className="text-[10px] uppercase font-bold text-gray-400">Power</span>
            <span className="text-xs font-bold text-gray-900">{bike.power}</span>
          </div>
        </div>

        <div className="flex gap-2">
          <button 
            className="flex-grow flex items-center justify-center bg-gray-900 text-white px-4 py-3 rounded-xl font-bold text-sm hover:bg-red-600 transition-colors group/btn"
          >
            Details
            <ChevronRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
          </button>
          <button 
            onClick={() => onCompare(bike)}
            disabled={isCompared}
            className={`flex items-center justify-center w-12 h-12 rounded-xl border-2 transition-all ${isCompared ? 'bg-green-50 border-green-200 text-green-600' : 'border-gray-200 text-gray-400 hover:border-red-600 hover:text-red-600'}`}
          >
            {isCompared ? <CheckCircle2 className="w-6 h-6" /> : <PlusCircle className="w-6 h-6" />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BikeCard;
