
'use client';
import Avatar from '@mui/material/Avatar';
import { TypingDots } from './TypingDots';
import { SuggestionButtons } from './SuggestionButtons';


export function MessageList({ messages, isTyping, messagesEndRef ,setInput, sendMessage }) {
  return (
    <div className="flex-1 overflow-y-auto px-4 py-3 space-y-2 bg-gray-50">
      {messages.map((msg, index) => (
        <div
          key={index}
          className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}
        >

          {
            msg.from !== 'user' && 
            
            <Avatar
              alt={msg.from === 'user' ? 'You' : 'RecoBot'}
              // src='https://img.freepik.com/free-vector/chatbot-chat-message-vectorart_78370-4104.jpg?w=740'
              // src='https://sdmntprwestus.oaiusercontent.com/files/00000000-2b74-6230-ad6c-73fc65335d32/raw?se=2025-04-11T09%3A35%3A24Z&sp=r&sv=2024-08-04&sr=b&scid=59bf0b2b-06d8-5f0d-83d9-6e6f3b80ec19&skoid=e872f19f-7b7f-4feb-9998-20052dec61d6&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-04-11T08%3A50%3A35Z&ske=2025-04-12T08%3A50%3A35Z&sks=b&skv=2024-08-04&sig=gtMvDTQ5Fa2DK4Q7z1/RbdnVLvuGHIHc24iP7O72wvc%3D'
              src='https://sdmntprwestus.oaiusercontent.com/files/00000000-8004-6230-b994-d46a59ac1efa/raw?se=2025-04-11T10%3A35%3A21Z&sp=r&sv=2024-08-04&sr=b&scid=5a4b8776-90b3-5c87-aa59-2af165a36619&skoid=e872f19f-7b7f-4feb-9998-20052dec61d6&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-04-10T21%3A32%3A03Z&ske=2025-04-11T21%3A32%3A03Z&sks=b&skv=2024-08-04&sig=prudycF57Ub%2B1w7qSRsZl2nZ3LdcNdrUpwTaR6mT6SU%3D'
              
              sx={{ width: 32, height: 32 }}
            /> 
          }

          <div
            className={`rounded-xl px-4 py-2 max-w-[80%] text-sm shadow-sm ${
              msg.from === 'user'
                ? 'bg-blue-100 text-gray-800'
                : 'bg-white border border-gray-200 text-gray-800'
            }`}
          >
            {msg.text}
          </div>
        </div>
      ))}


       {/* Suggestions */}
                  {messages.length === 2 && !isTyping && (
                    <SuggestionButtons
                      onSelect={(suggestion) => {
                        setInput(suggestion);
                        setTimeout(() => {
                          sendMessage(suggestion);
                        }, 100);
                      }}
                    />
                  )}

      {/* Typing animation */}
      {isTyping && (
        <TypingDots />
      )}

      {/* Always keep scroll at the bottom */}
      <div ref={messagesEndRef} />
    </div>
  );
}
