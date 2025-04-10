// components/TypingDots.jsx
export function TypingDots() {
    return (
      <div className="bg-gray-200 text-gray-900 px-4 py-2 rounded-xl text-sm self-start mr-auto flex gap-1 items-center">
        <span className="inline-block w-2 h-2 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.4s]"></span>
        <span className="inline-block w-2 h-2 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.2s]"></span>
        <span className="inline-block w-2 h-2 bg-blue-500 rounded-full animate-bounce"></span>
      </div>
    );
  }