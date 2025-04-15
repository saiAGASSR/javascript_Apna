export function SuggestionButtons({ suggestions , istyping , setInput ,sendMessage }) {

  return (
    <div className="flex flex-wrap justify-center gap-2 px-4 py-2 mt-10">
              {suggestions.map((s, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setInput(s);
                    sendMessage(s);
                  }}
                  className="border border-grey-500 text-violet-700 text-sm px-3 py-1 rounded-full hover:bg-blue-100 transition"
                  disabled={istyping}
                >
                  {s}
                </button>
              ))}
            </div>
  );
}
