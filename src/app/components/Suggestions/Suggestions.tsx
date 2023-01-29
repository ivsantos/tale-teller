interface SuggestionProps {
  onSuggestion: (suggestion: string) => void;
}

export default function Suggestions({ onSuggestion }: SuggestionProps) {
  const handleSuggestion = (event: React.MouseEvent<HTMLButtonElement>) => {
    const suggestion = event.currentTarget.innerHTML.split('...')[0].trim();
    onSuggestion(suggestion);
  };

  return (
    <div className="mx-4">
      <p className="mb-4">You can try one of the following...</p>
      <ul className="place-items-center grid gap-5">
        <li>
          <button onClick={handleSuggestion} className="suggestion">
            Once upon a time, in a land far away, there lived a king and a
            queen, who...
          </button>
        </li>
        <li>
          <button onClick={handleSuggestion} className="suggestion">
            Long ago, in a tavern full of orcs and burglars...
          </button>
        </li>
        <li>
          <button onClick={handleSuggestion} className="suggestion">
            There was a time where a princess with her cat named Logan...
          </button>
        </li>
      </ul>
    </div>
  );
}
