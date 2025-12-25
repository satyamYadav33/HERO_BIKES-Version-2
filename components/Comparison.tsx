
import React from 'react';
import { Bike } from '../types';
import { X, Trash2 } from 'lucide-react';

interface ComparisonProps {
  selectedBikes: Bike[];
  onRemove: (id: string) => void;
  onClear: () => void;
}

const Comparison: React.FC<ComparisonProps> = ({ selectedBikes, onRemove, onClear }) => {
  if (selectedBikes.length === 0) return null;

  return (
    <section id="comparison" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">COMPARE <span className="text-red-600">MODELS</span></h2>
            <p className="text-gray-600 text-lg">Pick up to 3 bikes to compare specs side-by-side and find your perfect match.</p>
          </div>
          <button 
            onClick={onClear}
            className="flex items-center text-gray-400 hover:text-red-600 font-bold uppercase text-sm tracking-widest transition-colors"
          >
            <Trash2 className="w-4 h-4 mr-2" />
            Clear Comparison
          </button>
        </div>

        <div className="overflow-x-auto custom-scrollbar">
          <table className="w-full border-collapse min-w-[600px]">
            <thead>
              <tr className="border-b-2 border-gray-100">
                <th className="p-6 text-left text-gray-400 font-black uppercase text-xs tracking-widest w-1/4">Feature</th>
                {selectedBikes.map(bike => (
                  <th key={bike.id} className="p-6 text-center w-1/4 relative">
                    <button 
                      onClick={() => onRemove(bike.id)}
                      className="absolute top-2 right-2 p-1 bg-gray-100 rounded-full hover:bg-red-100 hover:text-red-600 transition-colors"
                    >
                      <X size={14} />
                    </button>
                    <img src={bike.image} alt={bike.name} className="w-24 h-24 object-contain mx-auto mb-4" />
                    <span className="block text-xl font-black text-gray-900">{bike.name}</span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="text-lg">
              <tr className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                <td className="p-6 font-bold text-gray-400 text-sm uppercase">Price</td>
                {selectedBikes.map(bike => <td key={bike.id} className="p-6 text-center font-black text-red-600">{bike.price}</td>)}
              </tr>
              <tr className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                <td className="p-6 font-bold text-gray-400 text-sm uppercase">Engine</td>
                {selectedBikes.map(bike => <td key={bike.id} className="p-6 text-center text-gray-700 font-semibold">{bike.engine}</td>)}
              </tr>
              <tr className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                <td className="p-6 font-bold text-gray-400 text-sm uppercase">Max Power</td>
                {selectedBikes.map(bike => <td key={bike.id} className="p-6 text-center text-gray-700 font-semibold">{bike.power}</td>)}
              </tr>
              <tr className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                <td className="p-6 font-bold text-gray-400 text-sm uppercase">Efficiency</td>
                {selectedBikes.map(bike => <td key={bike.id} className="p-6 text-center text-gray-700 font-semibold">{bike.mileage}</td>)}
              </tr>
              <tr className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                <td className="p-6 font-bold text-gray-400 text-sm uppercase">Category</td>
                {selectedBikes.map(bike => (
                  <td key={bike.id} className="p-6 text-center">
                    <span className="inline-block bg-gray-900 text-white text-xs px-3 py-1 rounded-full uppercase font-black">{bike.category}</span>
                  </td>
                ))}
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="p-6 font-bold text-gray-400 text-sm uppercase align-top">Key Tech</td>
                {selectedBikes.map(bike => (
                  <td key={bike.id} className="p-6 text-center align-top">
                    <ul className="text-sm text-gray-600 space-y-1">
                      {bike.features.map((f, i) => <li key={i}>• {f}</li>)}
                    </ul>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
