// components/ChatInput.jsx
import { Send } from 'lucide-react';

export function ChatInput({ input, setInput, sendMessage, isTyping }) {
  return (
    <div className="flex items-center p-2 border-t bg-white">
      <input
        type="text"
        className="flex-1 px-3 py-2 border rounded-full text-sm outline-none focus:ring-2 focus:ring-blue-500"
        placeholder={isTyping ? 'Bot is Thinking...' : 'Type your message...'}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) =>!isTyping && e.key === 'Enter' && sendMessage()}
        disabled={isTyping}
      />
      <button
        onClick={sendMessage}
        className="ml-2 p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600"
        disabled={isTyping}
      >
        <Send  size={16} />
      </button>
      
    </div>

  );
}