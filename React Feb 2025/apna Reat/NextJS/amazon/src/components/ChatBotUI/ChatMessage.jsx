export function ChatMessage({ from, text }) {
  const isUser = from === 'user';

  return (
    <div className={`flex items-start ${isUser ? 'justify-end' : 'justify-start'}`}>
      {!isUser && (
        <Avatar
          alt="RecoBot"
          src="https://img.freepik.com/free-vector/chatbot-chat-message-vectorart_78370-4104.jpg?t=st=1744355807~exp=1744359407~hmac=f5a1a11c12f04b281c4204c7a1cb9dfec81e8d755ea375e5f0891b6099362c81&w=740"
          sx={{ width: 32, height: 32, marginRight: 8 }}
        />
      )}
      <div
        className={`max-w-[75%] px-4 py-2 rounded-xl text-sm whitespace-pre-wrap ${
          isUser
            ? 'bg-blue-500 text-white self-end ml-auto'
            : 'bg-gray-200 text-gray-900 self-start mr-auto'
        }`}
      >
        {text}
      </div>
      {isUser && (
        <Avatar
          alt="You"
          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
          sx={{ width: 32, height: 32, marginLeft: 8 }}
        />
      )}
    </div>
  );
}
