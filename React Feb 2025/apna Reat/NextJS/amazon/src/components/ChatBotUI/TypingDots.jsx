// components/TypingDots.jsx
export function TypingDots() {
    return (
      <div className="flex justify-start">
          <div className="flex items-center gap-1 px-4 py-2 bg-white border border-gray-200 rounded-xl shadow-sm">
            <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></span>
            <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></span>
            <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
          </div>
      </div>
    );
  }