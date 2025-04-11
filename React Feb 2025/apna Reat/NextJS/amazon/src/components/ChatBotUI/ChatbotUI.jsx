'use client';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageList } from './MessageList';
import { ChatInput } from './ChatInput';
import { SuggestionButtons } from './SuggestionButtons';
import { X } from 'lucide-react'; // for modern close icon

export default function ChatbotUI() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: 'bot', text: (
      <>
        <div>
          <span className="font-bold text-base">
            Hi, I am Maya ❤️
          </span>
          <br />
          <span className="text-sm text-gray-600">
            I am here to help you get your movie recommendations.
          </span>
        </div>
      </>
    ) },
    { from: 'bot', text: 'Hi!  How can I assist you today?' },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const fetchBotResponse = async (userInput) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return `You said: "${userInput}".`;
  };

  const sendMessage = async (messageText = input) => {
    if (!messageText.trim()) return;

    const newMessage = { from: 'user', text: messageText };
    setMessages((prev) => [...prev, newMessage]);
    setInput('');

    setIsTyping(true);
    const botReply = await fetchBotResponse(messageText);
    setIsTyping(false);

    setMessages((prev) => [...prev, { from: 'bot', text: botReply }]);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  return (
    <>
      {/* Floating button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-4 right-4 bg-gradient-to-br from-blue-600 to-indigo-600 text-white p-3 rounded-full shadow-xl hover:from-blue-700 hover:to-indigo-700 z-50"
          >
            💬
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-0 right-0 md:bottom-4 md:right-4 w-full md:w-80 h-full md:max-h-[80vh] bg-white rounded-none md:rounded-2xl shadow-lg flex flex-col overflow-hidden border border-gray-200 z-50"
          >

            {/* Header */}
            <div className="bg-gradient-to-br from-white to-blue-600 text-black p-4 flex justify-between items-center">
              <div className="flex flex-col">
                <span className="text-base md:text-lg font-semibold leading-tight">
                  Reco Bot
                </span>
                <span className="text-xs text-black/80">
                  Your ChatGPT-powered assistant
                </span>
              </div>

              <button onClick={() => setIsOpen(false)} className="text-white hover:text-gray-200 transition">
                <X className="w-5 h-5" />
              </button>
            </div>


            {/* Messages */}
            <MessageList
              messages={messages}
              isTyping={isTyping}
              messagesEndRef={messagesEndRef}
              setInput={setInput}
              sendMessage={sendMessage}
            />

           

            {/* Input */}
            <ChatInput
              input={input}
              setInput={setInput}
              sendMessage={sendMessage}
              isTyping={isTyping}
            />

            {/* Footer Note */}
            <p className="text-xs text-gray-400 text-center p-2 border-t border-gray-200 bg-white">
              ⚠️ AI chat may produce inaccurate results. Don't share personal info.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
