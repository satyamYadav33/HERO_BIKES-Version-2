
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Bot, User, Loader2 } from 'lucide-react';
import { getBikeAdvice } from '../services/geminiService';

const AIBikeFinder: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; text: string }[]>([
    { role: 'bot', text: 'Hello! I am your Hero Bike Consultant. Tell me, what kind of rider are you? (e.g., "I need a bike for long daily commutes" or "I want something sporty")' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const botResponse = await getBikeAdvice(userMsg);
    setMessages(prev => [...prev, { role: 'bot', text: botResponse }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      {isOpen ? (
        <div className="bg-white w-[350px] md:w-[400px] h-[550px] rounded-3xl shadow-2xl border border-gray-100 flex flex-col overflow-hidden animate-slideUp">
          <div className="bg-red-600 p-6 text-white flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 p-2 rounded-xl">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-black leading-none uppercase text-lg tracking-tighter">Hero AI</h3>
                <span className="text-[10px] opacity-75 uppercase tracking-widest font-bold">Online Assistant</span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:rotate-90 transition-transform">
              <X size={24} />
            </button>
          </div>

          <div className="flex-grow overflow-y-auto p-6 space-y-4 custom-scrollbar">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-sm ${
                  m.role === 'user' 
                    ? 'bg-red-600 text-white rounded-tr-none' 
                    : 'bg-gray-100 text-gray-800 rounded-tl-none shadow-sm'
                }`}>
                  <div className="flex items-center gap-2 mb-1 opacity-50 text-[10px] font-bold uppercase tracking-wider">
                    {m.role === 'user' ? <User size={10} /> : <Bot size={10} />}
                    {m.role === 'user' ? 'You' : 'Hero AI'}
                  </div>
                  <p className="whitespace-pre-wrap leading-relaxed">{m.text}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 p-4 rounded-2xl rounded-tl-none shadow-sm flex items-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin text-red-600" />
                  <span className="text-xs font-bold text-gray-400 italic">Thinking...</span>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          <div className="p-4 border-t border-gray-100 bg-gray-50">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask me anything about Hero bikes..."
                className="flex-grow bg-white border border-gray-200 px-4 py-3 rounded-xl text-sm outline-none focus:ring-2 focus:ring-red-600 transition-all"
              />
              <button 
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className="bg-red-600 text-white p-3 rounded-xl hover:bg-red-700 transition-all disabled:opacity-50"
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-red-600 text-white p-5 rounded-full shadow-2xl hover:scale-110 transition-all group flex items-center gap-3"
        >
          <span className="font-bold text-sm tracking-tight hidden group-hover:block transition-all">Ask Hero AI</span>
          <MessageSquare size={28} />
        </button>
      )}
    </div>
  );
};

export default AIBikeFinder;
