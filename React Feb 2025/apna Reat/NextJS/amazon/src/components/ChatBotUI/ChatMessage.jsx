// components/ChatMessage.jsx
export function ChatMessage({ from, text }) {
    const isUser = from === 'user';
    return (
      <div
        className={`max-w-[75%] px-4 py-2 rounded-xl text-sm whitespace-pre-wrap ${
          isUser
            ? 'bg-blue-500 text-white self-end ml-auto'
            : 'bg-gray-200 text-gray-900 self-start mr-auto'
        }`}
      >
        {text}
      </div>
    );
  }