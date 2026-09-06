import React, { useState, useRef, useEffect } from 'react';
import { Bot, X, Send, Sparkles, MapPin, Clock, Phone, Car, ArrowRight, ExternalLink } from 'lucide-react';
import { ChatMessage } from '../types';
import { MALL_INFO } from '../data/mallData';

export const StatusAIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputVal, setInputVal] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome-msg',
      sender: 'assistant',
      text: 'Welcome to STATUS MALL Concierge. I am Status AI. How may I assist your visit today? Ask about our location, opening hours, parking, contacts, or tenant directory.',
      timestamp: 'Just now',
      suggestions: [
        'Where is Status Mall?',
        'What are the opening hours?',
        'Is there parking?',
        'How do I contact Status Mall?',
        'Give me directions'
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

    // Generate accurate luxury mall assistant responses strictly from confirmed mall data
    setTimeout(() => {
      const lower = query.toLowerCase();
      let responseText = '';
      let actionLink: ChatMessage['actionLink'];
      let suggestions: string[] = [];

      // 1. Location / Address Queries
      if (
        lower.includes('where is') ||
        lower.includes('address') ||
        lower.includes('location') ||
        lower.includes('situated') ||
        lower.includes('kottappalla') ||
        lower.includes('edathanattukara')
      ) {
        responseText = `STATUS MALL is located at:\n${MALL_INFO.address.fullFormatted}`;
        actionLink = {
          text: 'OPEN IN GOOGLE MAPS →',
          url: MALL_INFO.location.googleMapsUrl,
        };
        suggestions = ['What are the opening hours?', 'Is there parking?', 'How do I contact Status Mall?'];
      }
      // 2. Directions / Maps
      else if (
        lower.includes('direction') ||
        lower.includes('how do i reach') ||
        lower.includes('route') ||
        lower.includes('navigate') ||
        lower.includes('google map') ||
        lower.includes('get there')
      ) {
        responseText = `STATUS MALL is situated on Melattur Road at Kottappalla, Alanallur-III, Edathanattukara, Palakkad District, Kerala - 678601. You can access live turn-by-turn navigation via Google Maps.`;
        actionLink = {
          text: 'OPEN IN GOOGLE MAPS →',
          url: MALL_INFO.location.googleMapsUrl,
        };
        suggestions = ['Is there parking?', 'What are the opening hours?', 'How do I contact Status Mall?'];
      }
      // 3. Operating Hours Queries
      else if (
        lower.includes('hour') ||
        lower.includes('open') ||
        lower.includes('close') ||
        lower.includes('time') ||
        lower.includes('timing') ||
        lower.includes('schedule')
      ) {
        responseText = `STATUS MALL is open daily from ${MALL_INFO.operatingHours.display}. We are open 7 days a week for shopping, dining, and family entertainment.`;
        actionLink = { text: 'Plan Your Visit', sectionId: 'visit' };
        suggestions = ['Where is Status Mall?', 'Is there parking?', 'How do I contact Status Mall?'];
      }
      // 4. Parking Queries
      else if (
        lower.includes('parking') ||
        lower.includes('park') ||
        lower.includes('vehicle') ||
        lower.includes('car')
      ) {
        responseText = `${MALL_INFO.parking.summary} ${MALL_INFO.parking.visitorWording}`;
        actionLink = { text: 'View Visit Details', sectionId: 'visit' };
        suggestions = ['What are the opening hours?', 'Give me directions', 'How do I contact Status Mall?'];
      }
      // 5. Contact / Phone Queries
      else if (
        lower.includes('contact') ||
        lower.includes('phone') ||
        lower.includes('call') ||
        lower.includes('number') ||
        lower.includes('reach') ||
        lower.includes('telephone')
      ) {
        responseText = `You can reach the official STATUS MALL primary lines at:\n• ${MALL_INFO.contacts[0]}\n• ${MALL_INFO.contacts[1]}\nBoth lines are official primary contacts.`;
        actionLink = { text: 'View Contact Information', sectionId: 'visit' };
        suggestions = ['Where is Status Mall?', 'What are the opening hours?', 'Is there parking?'];
      }
      // 6. Bridal / Jewellery Queries
      else if (
        lower.includes('bridal') ||
        lower.includes('jewellery') ||
        lower.includes('jewelry') ||
        lower.includes('gold') ||
        lower.includes('diamond') ||
        lower.includes('hayaz') ||
        lower.includes('rayyan')
      ) {
        responseText =
          'Hayaz Gold & Diamonds is on the Ground Floor and focuses on gold, diamonds, jewellery, and bridal needs. Rayyan Fancy & Gift is also on the Ground Floor, offering bridal rental jewellery, accessories, and gifts.';
        actionLink = { text: 'View Jewellery in Directory', sectionId: 'shops' };
        suggestions = ['Show me Ground Floor stores', 'Where is Status Mall?'];
      }
      // 7. Dining / Bell Pepper Queries
      else if (
        lower.includes('bell pepper') ||
        lower.includes('dining') ||
        lower.includes('restaurant') ||
        lower.includes('food') ||
        lower.includes('eat')
      ) {
        responseText =
          'Bell Pepper Restaurant is a coming-soon flagship restaurant planned for the Second Floor food court.';
        actionLink = { text: 'View Dining Section', sectionId: 'dining' };
        suggestions = ['Where can kids play?', 'What are the opening hours?'];
      }
      // 8. Kids Playzone Queries
      else if (
        lower.includes('kids') ||
        lower.includes('play') ||
        lower.includes('family') ||
        lower.includes('child')
      ) {
        responseText =
          'Kids Playzone is located on the Second Floor, featuring dedicated indoor slides, interactive zones, and soft play spaces for children.';
        actionLink = { text: 'Explore Kids Playzone', sectionId: 'shops' };
        suggestions = ['Is there parking?', 'What are the opening hours?'];
      }
      // 9. Beauty / Cosmetics Queries
      else if (
        lower.includes('beauty') ||
        lower.includes('skincare') ||
        lower.includes('cosmetic') ||
        lower.includes('big zee')
      ) {
        responseText =
          'Big Zee is on the Ground Floor and offers skincare, beauty essentials, and cosmetic gift kits.';
        actionLink = { text: 'View Big Zee in Directory', sectionId: 'shops' };
        suggestions = ['Where can I find bridal jewellery?', 'Show me Ground Floor stores'];
      }
      // 10. Fashion Queries
      else if (
        lower.includes('fashion') ||
        lower.includes('dress') ||
        lower.includes('clothes') ||
        lower.includes('eid') ||
        lower.includes('faaza') ||
        lower.includes('zuqa')
      ) {
        responseText =
          'Faaza is a premium fashion brand showroom on the Ground Floor. Zuqa Boutique is also on the Ground Floor, specializing in lifestyle, Eid collections, and designer dresses.';
        actionLink = { text: 'View Fashion Boutiques', sectionId: 'shops' };
        suggestions = ['Where can I find bridal jewellery?', 'Where is Status Mall?'];
      }
      // 11. Home Decor / svgStoroot Queries
      else if (
        lower.includes('svgstoroot') ||
        lower.includes('light') ||
        lower.includes('decor') ||
        lower.includes('sustainable')
      ) {
        responseText =
          'svgStoroot is on the Ground Floor, providing handcrafted sustainable lights, eco-friendly home decor, and gifts.';
        actionLink = { text: 'View svgStoroot', sectionId: 'shops' };
        suggestions = ['Show me Ground Floor stores', 'Where is Status Mall?'];
      }
      // 12. Conference Hall Queries
      else if (
        lower.includes('conference') ||
        lower.includes('meeting') ||
        lower.includes('commercial') ||
        lower.includes('hall') ||
        lower.includes('event space')
      ) {
        responseText =
          'Conference Hall is on the Second Floor, offering available commercial space for business meetings, community gatherings, and local events.';
        actionLink = { text: 'View Conference Hall', sectionId: 'shops' };
        suggestions = ['How do I contact Status Mall?', 'Where is Status Mall?'];
      }
      // 13. Floor Directory Queries
      else if (lower.includes('ground floor')) {
        responseText =
          'Ground Floor features Faaza (fashion showroom), Zuqa Boutique (designer lifestyle), Hayaz Gold & Diamonds (jewellery), svgStoroot (handcrafted lights & decor), Big Zee (beauty & skincare), Rayyan Fancy & Gift (bridal rental jewellery), and Anchor Spaces (coming soon hypermarket & bridal studios).';
        actionLink = { text: 'View Ground Floor Directory', sectionId: 'shops' };
        suggestions = ['Show me Second Floor', 'What are the opening hours?'];
      } else if (lower.includes('second floor')) {
        responseText =
          'Second Floor features Bell Pepper Restaurant (coming-soon flagship food court restaurant), Kids Playzone (indoor family amusement), and Conference Hall (available commercial event space).';
        actionLink = { text: 'View Second Floor Directory', sectionId: 'shops' };
        suggestions = ['Where can kids play?', 'Is Bell Pepper open?'];
      }
      // General Fallback
      else {
        responseText =
          `STATUS MALL is located on Melattur Road, Kottappalla, Edathanattukara. Open daily 9:00 AM — 10:00 PM with dedicated on-site vehicle parking. We feature 10 confirmed tenants across the Ground Floor and Second Floor. How may I assist your visit?`;
        suggestions = [
          'Where is Status Mall?',
          'What are the opening hours?',
          'Is there parking?',
          'How do I contact Status Mall?',
          'Give me directions'
        ];
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
    }, 450);
  };

  const handleScrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Trigger Button */}
      {!isOpen && (
        <button
          id="status-ai-trigger-btn"
          onClick={() => setIsOpen(true)}
          className="group relative flex items-center gap-3 px-5 py-3.5 rounded-full bg-gradient-to-r from-slate-900 to-[#070e22] text-white border border-[#e2c17d]/40 shadow-[0_10px_35px_rgba(0,0,0,0.6)] hover:shadow-[0_10px_40px_rgba(226,193,125,0.25)] hover:border-[#e2c17d] transition-all duration-300 cursor-pointer"
          aria-label="Open Status AI Assistant"
        >
          <div className="relative">
            <div className="w-8 h-8 rounded-full bg-[#e2c17d]/15 flex items-center justify-center border border-[#e2c17d]/40">
              <Bot className="w-4 h-4 text-[#e2c17d]" />
            </div>
            <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-slate-950 animate-pulse" />
          </div>
          <div className="text-left">
            <span className="text-[10px] uppercase tracking-widest text-[#e2c17d] font-bold block">
              STATUS AI
            </span>
            <span className="text-xs font-semibold text-slate-200 group-hover:text-white">
              Concierge Assistant
            </span>
          </div>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div
          id="status-ai-window"
          className="w-[92vw] sm:w-[380px] h-[520px] max-h-[85vh] rounded-3xl bg-[#070e22]/95 backdrop-blur-2xl border border-white/15 shadow-[0_25px_60px_rgba(0,0,0,0.85)] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        >
          {/* Header */}
          <div className="p-4 border-b border-white/10 bg-slate-950/60 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#e2c17d]/20 border border-[#e2c17d]/40 flex items-center justify-center text-[#e2c17d]">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-1.5">
                  <span>STATUS AI</span>
                  <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-[#e2c17d]/20 text-[#e2c17d]">
                    OFFICIAL
                  </span>
                </h3>
                <p className="text-[10px] text-slate-400">
                  Concierge • 9:00 AM – 10:00 PM
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="w-7 h-7 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close Status AI Assistant"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages Container */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3.5 text-xs">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${
                  msg.sender === 'user' ? 'items-end' : 'items-start'
                }`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-xs sm:text-[13px] leading-relaxed whitespace-pre-line ${
                    msg.sender === 'user'
                      ? 'bg-gradient-to-r from-[#e2c17d] to-[#d4af37] text-slate-950 font-medium rounded-tr-none shadow-md'
                      : 'bg-white/5 border border-white/10 text-slate-200 rounded-tl-none backdrop-blur-md'
                  }`}
                >
                  <p>{msg.text}</p>

                  {/* Optional Action Button Link */}
                  {msg.actionLink && (
                    <div className="mt-2.5">
                      {msg.actionLink.url ? (
                        <a
                          href={msg.actionLink.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e2c17d]/20 hover:bg-[#e2c17d]/30 text-[#e2c17d] hover:text-white text-[11px] font-bold border border-[#e2c17d]/40 transition-colors cursor-pointer"
                        >
                          <span>{msg.actionLink.text}</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      ) : (
                        <button
                          type="button"
                          onClick={() => handleScrollToSection(msg.actionLink!.sectionId || 'visit')}
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/20 hover:bg-sky-500/30 text-sky-300 hover:text-white text-[11px] font-semibold border border-sky-400/30 transition-colors cursor-pointer"
                        >
                          <span>{msg.actionLink.text}</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      )}
                    </div>
                  )}
                </div>

                {/* Suggestions Chips below assistant response */}
                {msg.suggestions && msg.suggestions.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {msg.suggestions.map((sug, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => handleSend(sug)}
                        className="px-2.5 py-1 rounded-full bg-white/5 hover:bg-[#e2c17d]/20 border border-white/10 hover:border-[#e2c17d]/40 text-[10px] text-slate-300 hover:text-[#e2c17d] transition-all text-left cursor-pointer"
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
            <span className="font-semibold text-[#e2c17d] flex items-center gap-1 flex-shrink-0">
              <Sparkles className="w-3 h-3" /> Quick:
            </span>
            <button
              type="button"
              onClick={() => handleSend('Where is Status Mall?')}
              className="flex-shrink-0 hover:text-white transition-colors cursor-pointer"
            >
              Location
            </button>
            <span>•</span>
            <button
              type="button"
              onClick={() => handleSend('What are the opening hours?')}
              className="flex-shrink-0 hover:text-white transition-colors cursor-pointer"
            >
              Hours
            </button>
            <span>•</span>
            <button
              type="button"
              onClick={() => handleSend('Is there parking?')}
              className="flex-shrink-0 hover:text-white transition-colors cursor-pointer"
            >
              Parking
            </button>
            <span>•</span>
            <button
              type="button"
              onClick={() => handleSend('How do I contact Status Mall?')}
              className="flex-shrink-0 hover:text-white transition-colors cursor-pointer"
            >
              Contacts
            </button>
            <span>•</span>
            <button
              type="button"
              onClick={() => handleSend('Give me directions')}
              className="flex-shrink-0 hover:text-white transition-colors cursor-pointer"
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
              placeholder="Ask about location, hours, parking, stores..."
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-[#e2c17d]"
            />
            <button
              type="submit"
              disabled={!inputVal.trim()}
              className="w-8 h-8 rounded-full bg-[#e2c17d] disabled:opacity-40 hover:bg-[#f0d499] text-slate-950 flex items-center justify-center transition-all cursor-pointer"
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
