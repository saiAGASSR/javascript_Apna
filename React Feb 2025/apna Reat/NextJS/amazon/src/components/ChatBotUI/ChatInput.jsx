'use client';
import { SendHorizonal } from 'lucide-react'; // Optional: icon for send button



export function ChatInput({ input, setInput, sendMessage, isTyping }) {
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="border-t border-gray-200 bg-white px-3 py-2 flex items-center gap-2">
      <textarea
        rows={1}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyPress}
        placeholder={isTyping ? 'Bot is typing...' : 'Type your message...'}
        className="flex-1 resize-none rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={isTyping}
      />
      <button
        onClick={() => sendMessage()}
        disabled={!input.trim() || isTyping}
        className={`p-2 rounded-full transition ${
          !input.trim() || isTyping
            ? 'bg-gray-300 text-white cursor-not-allowed'
            : 'bg-blue-600 hover:bg-blue-700 text-white'
        }`}
      >
        <SendHorizonal className="w-4 h-4" />
      </button>
    </div>
  );
}
