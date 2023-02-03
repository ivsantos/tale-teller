interface InputSuggestionsProps {
  onInputSuggestion: (input: string) => void;
}

export default function InputSuggestions({
  onInputSuggestion,
}: InputSuggestionsProps) {
  const handleInputSuggestion = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    const suggestion = event.currentTarget.innerHTML.split('...')[0].trim();
    onInputSuggestion(suggestion);
  };

  return (
    <div className="mb-6">
      <p className="mb-4">You can try one of the following...</p>
      <ul className="place-items-center grid gap-5">
        <li className="flex w-full">
          <button
            onClick={handleInputSuggestion}
            className="input-suggestion bg-stars text-shadow-suggestion"
          >
            Once upon a time, in a land far away, there lived a king and a
            queen, who...
          </button>
        </li>
        <li className="flex w-full">
          <button
            onClick={handleInputSuggestion}
            className="input-suggestion bg-tavern text-shadow-suggestion"
          >
            Long ago, in a tavern full of orcs and burglars...
          </button>
        </li>
        <li className="flex w-full">
          <button
            onClick={handleInputSuggestion}
            className="input-suggestion bg-cat text-shadow-suggestion"
          >
            There was a time where a princess with her cat named Logan...
          </button>
        </li>
      </ul>
    </div>
  );
}
