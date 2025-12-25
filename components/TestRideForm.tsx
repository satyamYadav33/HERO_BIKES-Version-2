
import React, { useState } from 'react';
import { BIKES, DEALERS } from '../constants';
import { Send, MapPin, Phone, Calendar, Clock } from 'lucide-react';

const TestRideForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left Column: Form */}
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 uppercase tracking-tighter">
              Book a <span className="text-red-600">Test Ride</span>
            </h2>
            <p className="text-gray-600 text-lg mb-10">
              Fill in the details below and our representative will reach out to schedule your ride.
            </p>

            {submitted ? (
              <div className="bg-green-100 border-2 border-green-200 text-green-700 p-8 rounded-2xl flex flex-col items-center text-center">
                <div className="bg-green-500 text-white p-3 rounded-full mb-4">
                  <Send className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Success!</h3>
                <p>Your request has been sent. We'll call you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-black text-gray-400 uppercase tracking-widest">Full Name</label>
                  <input required type="text" className="w-full bg-white border border-gray-200 p-4 rounded-xl focus:ring-2 focus:ring-red-600 outline-none transition-all" placeholder="Enter your name" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-black text-gray-400 uppercase tracking-widest">Phone Number</label>
                  <input required type="tel" className="w-full bg-white border border-gray-200 p-4 rounded-xl focus:ring-2 focus:ring-red-600 outline-none transition-all" placeholder="+91 XXX XXX XXXX" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-black text-gray-400 uppercase tracking-widest">Select Bike</label>
                  <select required className="w-full bg-white border border-gray-200 p-4 rounded-xl focus:ring-2 focus:ring-red-600 outline-none transition-all">
                    {BIKES.map(bike => <option key={bike.id} value={bike.id}>{bike.name}</option>)}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-black text-gray-400 uppercase tracking-widest">Preferred Dealer</label>
                  <select required className="w-full bg-white border border-gray-200 p-4 rounded-xl focus:ring-2 focus:ring-red-600 outline-none transition-all">
                    {DEALERS.map(dealer => <option key={dealer.id} value={dealer.id}>{dealer.name}</option>)}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-black text-gray-400 uppercase tracking-widest flex items-center">
                    <Calendar className="w-4 h-4 mr-2" /> Preferred Date
                  </label>
                  <input required type="date" className="w-full bg-white border border-gray-200 p-4 rounded-xl focus:ring-2 focus:ring-red-600 outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-black text-gray-400 uppercase tracking-widest flex items-center">
                    <Clock className="w-4 h-4 mr-2" /> Preferred Time
                  </label>
                  <input required type="time" className="w-full bg-white border border-gray-200 p-4 rounded-xl focus:ring-2 focus:ring-red-600 outline-none transition-all" />
                </div>
                <button type="submit" className="md:col-span-2 bg-red-600 text-white p-5 rounded-xl font-black uppercase text-xl shadow-xl shadow-red-500/20 hover:bg-red-700 transition-all flex justify-center items-center gap-2 transform active:scale-95">
                  Confirm Booking <Send className="w-6 h-6" />
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Dealers */}
          <div className="lg:w-1/3">
            <h3 className="text-2xl font-black text-gray-900 mb-8 uppercase">Top Dealers Nearby</h3>
            <div className="space-y-6">
              {DEALERS.map(dealer => (
                <div key={dealer.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-red-200 transition-colors group">
                  <h4 className="text-xl font-bold mb-3 group-hover:text-red-600 transition-colors">{dealer.name}</h4>
                  <div className="space-y-3">
                    <div className="flex items-start text-gray-600">
                      <MapPin className="w-5 h-5 mr-3 text-red-600 shrink-0" />
                      <span className="text-sm leading-relaxed">{dealer.address}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Phone className="w-5 h-5 mr-3 text-red-600" />
                      <a href={`tel:${dealer.phone}`} className="text-sm font-bold hover:underline">{dealer.phone}</a>
                    </div>
                  </div>
                  <button className="mt-6 w-full py-2 bg-gray-900 text-white rounded-lg text-xs font-black uppercase tracking-widest hover:bg-red-600 transition-colors">
                    View on Map
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestRideForm;
