export function SuggestionButtons({ onSelect }) {
    const suggestions = [
      'Recommend me a movie',
      'What’s trending?',
      'Top picks for me',
      'Something for the weekend',
      'Family-friendly shows'
    ];
  
    return (
      <div className="flex flex-wrap justify-center gap-2 px-4 py-2">
        {suggestions.map((text, index) => (
          <button
            key={index}
            onClick={() => onSelect(text)}
            className="border border-grey-500 text-violet-700 text-sm px-3 py-1 rounded-full hover:bg-blue-100 transition"

          >
            {text}
          </button>
        ))}
      </div>
    );
  }
  