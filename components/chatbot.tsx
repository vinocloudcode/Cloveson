'use client';

import type React from 'react';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BotMessageSquare, X, Send, Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export function AiChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome to Cloves INC',
      text: "👋 Hi there! I'm your Business assistant. How can I help you today?",
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const handleSendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!message.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: message,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setMessage('');
    setIsTyping(true);

    // Simulate bot response with common college-related queries
    setTimeout(() => {
      let botResponse =
        "I'm not sure how to help with that. Can you try asking about products, quality standards, bulk orders, or technical specifications?";

      const lowerCaseMessage = message.toLowerCase();

      // Product-related queries
      if (
        lowerCaseMessage.includes('product') ||
        lowerCaseMessage.includes('catalog')
      ) {
        botResponse =
          'We offer autoclave liners (high-temp plastic, textile, jute/hessian, woven plastic), industrial packaging (bulk bags, poly-woven bags, mesh bags, multiwall sacks), natural/synthetic fabrics, and commercial textiles. Visit /products for full details or request a sample!';
      } else if (
        lowerCaseMessage.includes('autoclave') ||
        lowerCaseMessage.includes('liner')
      ) {
        botResponse =
          'Our autoclave liners withstand up to 140°C, protect carts from melting waste, and include eco-friendly options like textile liners. Jute liners are popular in Australia. Need specs or pricing?';
      } else if (
        lowerCaseMessage.includes('packaging') ||
        lowerCaseMessage.includes('bag')
      ) {
        botResponse =
          'We offer bulk bags (up to 1 ton), tear-resistant poly-woven bags, breathable mesh bags, and protective multiwall paper sacks. Custom sizes available. Want a quote?';
      }

      // Quality & certifications
      if (
        lowerCaseMessage.includes('quality') ||
        lowerCaseMessage.includes('eco') ||
        lowerCaseMessage.includes('environment') ||
        lowerCaseMessage.includes('green') ||
        lowerCaseMessage.includes('certification') ||
        lowerCaseMessage.includes('iso') ||
        lowerCaseMessage.includes('fda')
      ) {
        botResponse =
          'We are committed to quality practices and environmental responsibility. Our products are designed with eco-friendly materials and processes. Quality documents available on request.';
      }

      // Company info
      if (
        lowerCaseMessage.includes('founder') ||
        lowerCaseMessage.includes('harsha')
      ) {
        botResponse =
          'Harsha Soundararajan, our founder, brings 10+ years of expertise in waste management and packaging from companies like McCain Foods and Cleanaway. Learn more at /about-us.';
      } else if (
        lowerCaseMessage.includes('global') ||
        lowerCaseMessage.includes('presence')
      ) {
        botResponse =
          'We operate in North America, Europe, Asia, and Australia. Our regional teams customize solutions to meet local needs and ensure fast delivery.';
      }

      // B2B services
      if (
        lowerCaseMessage.includes('bulk') ||
        lowerCaseMessage.includes('order') ||
        lowerCaseMessage.includes('quote')
      ) {
        botResponse =
          'Request a bulk order quote via /request-quote or email harsha.soundararajan@hotmail.com. Lead times: 2-4 weeks for standard orders, 6-8 weeks for customized solutions.';
      } else if (
        lowerCaseMessage.includes('sample') ||
        lowerCaseMessage.includes('test')
      ) {
        botResponse =
          'Need samples? Fill out our sample request form at /request-sample with your address and product preferences.';
      }

      // Contact
      if (
        lowerCaseMessage.includes('contact') ||
        lowerCaseMessage.includes('email') ||
        lowerCaseMessage.includes('phone')
      ) {
        botResponse =
          'Reach us at +91 7339555309 (WhatsApp/Call) or harsha.soundararajan@hotmail.com. Office hours: Mon-Fri, 9 AM - 6 PM IST.';
      }

      // Default fallback
      if (
        botResponse ===
        "I'm not sure how to help with that. Can you try asking about products, quality standards, bulk orders, or technical specifications?"
      ) {
        botResponse =
          "Try asking about specific products (e.g., 'jute liners'), quality standards, bulk orders, or technical specifications. Need help? Just say 'Contact me!'";
      }

      const botMessageObj: Message = {
        id: Date.now().toString(),
        text: botResponse,
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prevMessages) => [...prevMessages, botMessageObj]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <>
      {/* Chat toggle button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="h-12 w-12 rounded-full bg-[#39b54b] p-3 text-white shadow-lg hover:bg-[#39b54b]"
          aria-label={isOpen ? 'Close chat' : 'Open chat'}
        >
          {isOpen ? (
            <X className="h-8 w-8" />
          ) : (
            <BotMessageSquare className="h-8 w-8" />
          )}
        </Button>
      </motion.div>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 flex w-96 max-w-[calc(100vw-2rem)] flex-col rounded-2xl bg-white shadow-xl dark:bg-gray-800"
          >
            {/* Chat  flex-col rounded-2xl bg-white shadow-xl dark:bg-gray-800"
          >
            {/* Chat header */}
            <div className="flex items-center justify-between rounded-t-2xl bg-[#39b54b] p-4 text-white">
              <div className="flex items-center">
                <Bot className="mr-2 h-6 w-6" />
                <div>
                  <h3 className="font-bold">Cloves Assistant</h3>
                  <p className="text-xs text-orange-100">
                    Online | Typically replies instantly
                  </p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-full text-white hover:bg-[#39b54b]"
                onClick={() => setIsOpen(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            {/* Chat messages */}
            <div
              className="flex flex-1 flex-col overflow-y-auto p-4 chat-window"
              style={{ maxHeight: '350px' }}
            >
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`mb-4 max-w-[80%] rounded-2xl p-3 ${
                    msg.sender === 'user'
                      ? 'ml-auto bg-[#39b54b] text-white'
                      : 'mr-auto bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
                  }`}
                >
                  <p className="text-sm">{msg.text}</p>
                  <p className="mt-1 text-right text-xs opacity-70">
                    {msg.timestamp.toLocaleTimeString([], {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </p>
                </div>
              ))}

              {isTyping && (
                <div className="mr-auto mb-4 flex max-w-[80%] items-center rounded-2xl bg-gray-100 p-3 text-gray-800 dark:bg-gray-700 dark:text-gray-200">
                  <div className="flex space-x-1">
                    <motion.div
                      className="h-2 w-2 rounded-full bg-gray-500"
                      animate={{ y: [0, -5, 0] }}
                      transition={{
                        duration: 0.5,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: 'loop',
                      }}
                    />
                    <motion.div
                      className="h-2 w-2 rounded-full bg-gray-500"
                      animate={{ y: [0, -5, 0] }}
                      transition={{
                        duration: 0.5,
                        delay: 0.1,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: 'loop',
                      }}
                    />
                    <motion.div
                      className="h-2 w-2 rounded-full bg-gray-500"
                      animate={{ y: [0, -5, 0] }}
                      transition={{
                        duration: 0.5,
                        delay: 0.2,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: 'loop',
                      }}
                    />
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Chat input */}
            <form
              onSubmit={handleSendMessage}
              className="border-t p-3 dark:border-gray-700"
            >
              <div className="flex items-center rounded-full border bg-gray-50 px-4 py-2 dark:border-gray-600 dark:bg-gray-700">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 bg-transparent text-sm focus:outline-none dark:text-white"
                />
                <Button
                  type="submit"
                  disabled={!message.trim()}
                  size="icon"
                  className="ml-2 h-8 w-8 rounded-full bg-[#39b54b] p-0 text-white hover:bg-[#39b54b] disabled:bg-green-200"
                >
                  <Send className="h-4 w-4 text-black" />
                </Button>
              </div>
              <p className="mt-2 text-center text-xs text-gray-500 dark:text-gray-400">
                Ask about Products,company, bulk orders, or anything else!
              </p>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
