import React, { useState, useRef, useEffect } from 'react';
import { Bot, X, Send, Sparkles, MapPin, Utensils, Calendar, Navigation, ArrowRight } from 'lucide-react';
import { ChatMessage } from '../types';

export const StatusAIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputVal, setInputVal] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome-msg',
      sender: 'assistant',
      text: 'Welcome to Status Mall Concierge. I am Status AI. How may I elevate your visit today?',
      timestamp: 'Just now',
      suggestions: [
        'Where is Zara?',
        'Best restaurants?',
        'What events are today?',
        'How do I reach the mall?',
        'Show me fashion stores.',
      ],
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const handleSend = (textToSend?: string) => {
    const query = textToSend || inputVal;
    if (!query.trim()) return;

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: query,
      timestamp: 'Now',
    };

    setMessages((prev) => [...prev, userMessage]);
    if (!textToSend) setInputVal('');

    // Generate intelligent luxury mall assistant responses
    setTimeout(() => {
      const lower = query.toLowerCase();
      let responseText = '';
      let actionLink: ChatMessage['actionLink'];
      let suggestions: string[] = [];

      if (lower.includes('zara')) {
        responseText =
          'ZARA is located on Level 1, along Fashion Boulevard at Unit 104. Open until 11:00 PM today. Featuring womenswear, menswear, and the new Atelier drop.';
        actionLink = { text: 'View on Floor Directory', sectionId: 'visit' };
        suggestions = ['Best restaurants?', 'Show me fashion stores.'];
      } else if (lower.includes('restaurant') || lower.includes('dining') || lower.includes('food')) {
        responseText =
          'For an exquisite dinner, Lumina Sky Lounge & Grill on Rooftop Level 4 offers panoramic skyline steaks. For intimate dining, Sakura Japanese Omakase on Level 3 serves 18-course wild bluefin flown fresh from Tokyo.';
        actionLink = { text: 'Explore Dining Terraces', sectionId: 'dining' };
        suggestions = ['Book a table', 'Cafés in the mall'];
      } else if (lower.includes('event') || lower.includes('happening') || lower.includes('today')) {
        responseText =
          'Today we have the Celestial Kinetic Light Installation at the Rooftop Skydeck (Sunset – 11 PM), and this Friday is our Live Twilight Jazz Symphony at the Central Glass Atrium (7:30 PM).';
        actionLink = { text: 'View Calendar & RSVP', sectionId: 'events' };
        suggestions = ['Weekend fashion sale', 'Where is Zara?'];
      } else if (lower.includes('reach') || lower.includes('direction') || lower.includes('metro') || lower.includes('parking')) {
        responseText =
          'Status Mall is directly connected via air-conditioned skybridge to Metro Central Station. For motorists, enter via Grand Boulevard to access our 2,000+ smart parking bays with EV superchargers and complimentary valet.';
        actionLink = { text: 'Get Directions & Parking Info', sectionId: 'visit' };
        suggestions = ['Parking fees', 'Mall opening hours'];
      } else if (lower.includes('fashion') || lower.includes('store') || lower.includes('shops')) {
        responseText =
          'Our premier fashion collection includes ZARA, Gucci (Grand Rotunda), H&M Home & Apparel, Nike Rise, and Levi’s Tailor Shop across Levels G, 1, and 2.';
        actionLink = { text: 'Browse Retail Catalog', sectionId: 'shops' };
        suggestions = ['Exclusive offers', 'Where is Zara?'];
      } else {
        responseText = `Certainly! Status Mall is at your service. You can explore our 120+ boutiques, 25+ fine dining establishments, or contact our VIP Concierge Desk on Level G for bespoke assistance.`;
        suggestions = ['Where is Zara?', 'Best restaurants?', 'What events are today?'];
      }

      const assistantMsg: ChatMessage = {
        id: `assistant-${Date.now()}`,
        sender: 'assistant',
        text: responseText,
        timestamp: 'Now',
        suggestions,
        actionLink,
      };

      setMessages((prev) => [...prev, assistantMsg]);
    }, 600);
  };

  const handleScrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <div id="status-ai-assistant-wrapper" className="fixed bottom-6 right-6 z-40">
      {/* 1. CLOSED FLOATING BUBBLE */}
      {!isOpen && (
        <div className="flex items-center gap-3">
          {/* Glass text bubble prompt */}
          <button
            onClick={() => setIsOpen(true)}
            className="hidden sm:flex flex-col items-start px-3.5 py-2 rounded-2xl bg-[#09132c]/85 backdrop-blur-xl border border-sky-400/30 shadow-[0_10px_30px_rgba(0,0,0,0.5)] text-left hover:border-sky-400 transition-all group cursor-pointer"
          >
            <span className="text-[10px] uppercase tracking-wider text-slate-400 font-medium">
              Need help?
            </span>
            <span className="text-xs font-bold text-sky-300 group-hover:text-white transition-colors flex items-center gap-1">
              Ask Status AI <ArrowRight className="w-3 h-3 text-sky-400" />
            </span>
          </button>

          {/* Floating Robot / Glass Bubble Icon */}
          <button
            id="status-ai-trigger-bubble"
            onClick={() => setIsOpen(true)}
            className="relative w-14 h-14 rounded-full bg-gradient-to-tr from-sky-500 via-blue-600 to-indigo-600 border border-sky-300/40 p-0.5 shadow-[0_0_25px_rgba(56,189,248,0.5)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center cursor-pointer group"
            aria-label="Open Status AI Concierge"
          >
            {/* Ambient Pulse Ring */}
            <span className="absolute -inset-1 rounded-full bg-sky-400/30 animate-pulse pointer-events-none" />

            <div className="w-full h-full rounded-full bg-slate-950/40 backdrop-blur-sm flex items-center justify-center text-white">
              <Bot className="w-7 h-7 text-sky-200 group-hover:rotate-12 transition-transform" />
            </div>

            {/* Online Green Beacon */}
            <span className="absolute top-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-slate-950 shadow-[0_0_8px_#34d399]" />
          </button>
        </div>
      )}

      {/* 2. OPEN MODERN CHAT PANEL */}
      {isOpen && (
        <div
          id="status-ai-chat-panel"
          className="w-[92vw] sm:w-[380px] h-[520px] rounded-3xl bg-[#060c1d]/95 backdrop-blur-2xl border border-sky-400/30 shadow-[0_20px_60px_rgba(0,0,0,0.8)] flex flex-col overflow-hidden animate-in zoom-in-95 duration-200"
        >
          {/* Header */}
          <div className="px-5 py-4 bg-gradient-to-r from-sky-950/70 via-slate-900/80 to-blue-950/70 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-sky-500/20 border border-sky-400/40 flex items-center justify-center text-sky-300 shadow-[0_0_12px_rgba(56,189,248,0.3)]">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-serif font-bold text-sm tracking-wider text-white">
                    STATUS AI
                  </span>
                  <span className="px-1.5 py-0.2 rounded-full bg-sky-500/20 text-[9px] text-sky-300 uppercase font-semibold">
                    Concierge
                  </span>
                </div>
                <span className="text-[10px] text-emerald-400 flex items-center gap-1 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Live Mall Assistant
                </span>
              </div>
            </div>

            <button
              id="status-ai-close-btn"
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close Assistant"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5 scrollbar-thin">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${
                  msg.sender === 'user' ? 'items-end' : 'items-start'
                }`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-xs sm:text-[13px] leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-slate-950 font-medium rounded-tr-none shadow-md'
                      : 'bg-white/5 border border-white/10 text-slate-200 rounded-tl-none backdrop-blur-md'
                  }`}
                >
                  <p>{msg.text}</p>

                  {/* Optional Action Button Link */}
                  {msg.actionLink && (
                    <button
                      onClick={() => handleScrollToSection(msg.actionLink!.sectionId)}
                      className="mt-2.5 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/20 hover:bg-sky-500/30 text-sky-300 hover:text-white text-[11px] font-semibold border border-sky-400/30 transition-colors"
                    >
                      <span>{msg.actionLink.text}</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  )}
                </div>

                {/* Suggestions Chips below assistant response */}
                {msg.suggestions && msg.suggestions.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {msg.suggestions.map((sug, i) => (
                      <button
                        key={i}
                        onClick={() => handleSend(sug)}
                        className="px-2.5 py-1 rounded-full bg-white/5 hover:bg-sky-500/20 border border-white/10 hover:border-sky-400/40 text-[10px] text-slate-300 hover:text-sky-200 transition-all text-left"
                      >
                        {sug}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Questions Row */}
          <div className="px-4 py-2 border-t border-white/5 bg-slate-950/40 flex items-center gap-2 overflow-x-auto scrollbar-none text-[10px] text-slate-400">
            <span className="font-semibold text-sky-400 flex items-center gap-1 flex-shrink-0">
              <Sparkles className="w-3 h-3" /> Suggested:
            </span>
            <button
              onClick={() => handleSend('Where is Zara?')}
              className="flex-shrink-0 hover:text-white transition-colors"
            >
              Zara
            </button>
            <span>•</span>
            <button
              onClick={() => handleSend('Best restaurants?')}
              className="flex-shrink-0 hover:text-white transition-colors"
            >
              Restaurants
            </button>
            <span>•</span>
            <button
              onClick={() => handleSend('What events are today?')}
              className="flex-shrink-0 hover:text-white transition-colors"
            >
              Events
            </button>
            <span>•</span>
            <button
              onClick={() => handleSend('How do I reach the mall?')}
              className="flex-shrink-0 hover:text-white transition-colors"
            >
              Directions
            </button>
          </div>

          {/* Input Box */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 bg-slate-950/80 border-t border-white/10 flex items-center gap-2"
          >
            <input
              id="status-ai-input"
              type="text"
              placeholder="Ask about stores, dining, valet, events..."
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-sky-400"
            />
            <button
              type="submit"
              disabled={!inputVal.trim()}
              className="w-8 h-8 rounded-full bg-sky-500 disabled:opacity-40 hover:bg-sky-400 text-slate-950 flex items-center justify-center transition-all cursor-pointer"
              aria-label="Send query to Status AI"
            >
              <Send className="w-3.5 h-3.5 ml-0.5" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};
