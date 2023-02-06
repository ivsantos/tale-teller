import { ITale } from 'src/app/page';
import Image from 'next/image';
import Tale1 from '@/images/tale1.png';
import Tale2 from '@/images/tale2.png';
import Tale3 from '@/images/tale3.png';

const SUGGESTIONS_ENDPOINT = '/api/suggestion';

interface GeneratedSuggestionsProps {
  onTaleSuggestion: (tale: ITale) => void;
  onTaleSelection: (selection: string) => void;
}

export default function GeneratedSuggestions({
  onTaleSuggestion,
  onTaleSelection,
}: GeneratedSuggestionsProps) {
  const handleTaleSuggestion = async (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    onTaleSelection(event.currentTarget.textContent || '');
    const response = await fetch(
      `${SUGGESTIONS_ENDPOINT}/${event.currentTarget.id}`,
    );
    const tale: ITale = await response.json();
    if (tale.statusCode === 200) {
      onTaleSuggestion(tale);
    }
  };

  return (
    <div className="mb-6">
      <p className="mb-4 font-medium">...Or try already pre-generated ones!</p>
      <ul className="place-items-center sm:gap-4 grid-cols-suggestions grid h-auto gap-2">
        <li>
          <button
            id="tale-1"
            onClick={handleTaleSuggestion}
            className="scale-hover relative"
          >
            <span className="generated-suggestion">
              The princess and her cats
            </span>
            <Image
              alt="A princess with her three cats"
              src={Tale1}
              className="rounded-2xl shadow-gray-600 shadow-lg"
            />
          </button>
        </li>
        <li>
          <button
            id="tale-2"
            onClick={handleTaleSuggestion}
            className="scale-hover relative"
          >
            <span className="generated-suggestion">A boy called Midudev</span>
            <Image
              alt="A boy running in the wild"
              src={Tale2}
              className="rounded-2xl shadow-gray-600 shadow-lg"
            />
          </button>
        </li>
        <li>
          <button
            id="tale-3"
            onClick={handleTaleSuggestion}
            className="scale-hover"
          >
            <span className="generated-suggestion">
              The pirate and his parrot
            </span>
            <Image
              alt="A pirate and his parrot"
              src={Tale3}
              className="rounded-2xl shadow-gray-600 shadow-lg"
            />
          </button>
        </li>
      </ul>
    </div>
  );
}
