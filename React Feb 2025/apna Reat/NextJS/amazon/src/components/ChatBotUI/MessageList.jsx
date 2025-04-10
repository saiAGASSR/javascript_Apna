// components/MessageList.jsx
import { ChatMessage } from './ChatMessage';
import { TypingDots } from './TypingDots';

export function MessageList({ messages, isTyping, messagesEndRef }) {
  return (
    <div className="flex-1 overflow-y-auto p-3 space-y-2 bg-gray-50">
      {messages.map((msg, index) => (
        <ChatMessage key={index} from={msg.from} text={msg.text} />
      ))}
      {isTyping && <TypingDots />}
      <div ref={messagesEndRef} />
    </div>
  );
}