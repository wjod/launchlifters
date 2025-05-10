import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, Send, X, Bot } from 'lucide-react';
import TextareaAutosize from 'react-textarea-autosize';

interface AiChatWidgetProps {
  className?: string;
}

export default function AiChatWidget({ className }: AiChatWidgetProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Array<{ type: 'user' | 'ai'; content: string }>>([
    { type: 'ai', content: "Hi! I'm your AI growth assistant. I can help you understand our services, pricing, and how we can help scale your business. What would you like to know?" }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const generateAIResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('pricing') || lowerMessage.includes('cost')) {
      return "Our pricing varies by service, but typically starts at $2,997/month for our core services. Each package includes 24/7 support, dedicated account management, and comprehensive reporting. Would you like to know about specific service pricing?";
    }
    
    if (lowerMessage.includes('services') || lowerMessage.includes('offer')) {
      return "We offer a full suite of growth services including:\n\n• Paid Advertising\n• Email & SMS Marketing\n• Branding & Creative\n• Social Media Management\n• SEO & Content\n• Landing Pages & Funnels\n\nEach service is data-driven and focused on ROI. Which service interests you most?";
    }
    
    if (lowerMessage.includes('results') || lowerMessage.includes('case studies')) {
      return "We've achieved impressive results for our clients:\n\n• 348% average ROAS\n• 47% CPA reduction\n• 115+ satisfied clients\n• 7+ years of experience\n\nCheck out our case studies section to see detailed success stories. Would you like me to share a specific case study?";
    }

    if (lowerMessage.includes('contact') || lowerMessage.includes('talk') || lowerMessage.includes('call')) {
      return "You can schedule a free 30-minute strategy call with our team. During the call, we'll:\n\n• Analyze your current marketing\n• Identify growth opportunities\n• Create a custom action plan\n• Answer all your questions\n\nWould you like me to help you schedule a call?";
    }

    if (lowerMessage.includes('how') && lowerMessage.includes('work')) {
      return "Our data-driven approach follows three key phases:\n\n1. Analysis & Strategy\n• Deep-dive into your data\n• Market opportunity analysis\n• Custom strategy development\n\n2. Implementation\n• Campaign setup and launch\n• Creative development\n• Technical optimization\n\n3. Optimization & Scale\n• Daily performance monitoring\n• A/B testing\n• ROI optimization\n\nWould you like to know more about any specific phase?";
    }

    return "I can help you understand:\n\n• Our services and approach\n• Pricing and packages\n• Case studies and results\n• How to get started\n\nWhat specific aspect would you like to learn more about?";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    // Add user message
    setMessages(prev => [...prev, { type: 'user', content: message }]);
    setMessage('');
    setIsTyping(true);

    // Generate AI response
    setTimeout(() => {
      const aiResponse = generateAIResponse(message);
      setMessages(prev => [...prev, { type: 'ai', content: aiResponse }]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div className={`fixed bottom-4 right-4 z-50 ${className}`}>
      {isOpen ? (
        <div className="bg-dark-800 border border-dark-600 rounded-2xl w-[380px] shadow-2xl transform-gpu transition-all duration-300 scale-100 opacity-100">
          {/* Header */}
          <div className="p-4 border-b border-dark-600 flex items-center justify-between bg-dark-700/50 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center bg-electric-500/10 rounded-xl">
                <Bot className="w-5 h-5 text-electric-500" />
              </div>
              <div>
                <h3 className="font-semibold text-light-900">AI Growth Assistant</h3>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-electric-500 rounded-full"></div>
                  <p className="text-sm text-light-600">Always online</p>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-light-600 hover:text-light-900 transition-colors p-2 hover:bg-dark-600 rounded-lg"
              aria-label="Close chat"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="h-[400px] overflow-y-auto p-4 space-y-4 bg-dark-800/50 backdrop-blur-sm">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl p-4 ${
                    msg.type === 'user'
                      ? 'bg-electric-500 text-light-900'
                      : 'bg-dark-700 text-light-900'
                  }`}
                  style={{ whiteSpace: 'pre-line' }}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-dark-700 rounded-2xl p-4">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-electric-500 rounded-full animate-bounce"></span>
                    <span className="w-2 h-2 bg-electric-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                    <span className="w-2 h-2 bg-electric-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="p-4 border-t border-dark-600 bg-dark-700/50 backdrop-blur-sm">
            <div className="flex gap-2">
              <TextareaAutosize
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSubmit(e);
                  }
                }}
                placeholder="Ask about our services, pricing, or results..."
                className="flex-1 bg-dark-700 border border-dark-600 rounded-xl p-3 text-light-900 placeholder-light-600 resize-none focus:outline-none focus:border-electric-500 min-h-[44px] max-h-[120px]"
                maxRows={4}
              />
              <button
                type="submit"
                className={`bg-electric-500 text-light-900 rounded-xl p-3 transition-all duration-200 ${
                  message.trim() 
                    ? 'hover:bg-electric-600 cursor-pointer' 
                    : 'opacity-50 cursor-not-allowed'
                }`}
                disabled={!message.trim()}
              >
                <Send size={20} />
              </button>
            </div>
          </form>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-electric-500 hover:bg-electric-600 text-light-900 rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-105 flex items-center gap-2 pr-6"
          aria-label="Open AI chat"
        >
          <Bot className="w-6 h-6" />
          <span className="font-medium">Chat with AI</span>
        </button>
      )}
    </div>
  );
}