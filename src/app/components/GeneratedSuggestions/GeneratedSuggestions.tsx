import { ITale } from 'src/app/page';
import Image from 'next/image';
import Tale1 from '@/images/tale1.png';
import Tale2 from '@/images/tale2.png';
import Tale3 from '@/images/tale3.png';

const SUGGESTIONS_ENDPOINT = '/api/suggestion';

interface GeneratedSuggestionsProps {
  onTaleSuggestion: (tale: ITale) => void;
}

export default function GeneratedSuggestions({
  onTaleSuggestion,
}: GeneratedSuggestionsProps) {
  const handleTaleSuggestion = async (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    const response = await fetch(
      `${SUGGESTIONS_ENDPOINT}/${event.currentTarget.id}`,
    );
    const tale: ITale = await response.json();
    if (tale.statusCode === 200) {
      onTaleSuggestion(tale);
    }
  };

  return (
    <div>
      <p className="mb-4">...Or try already pre-generated ones!</p>
      <ul className="place-items-center sm:gap-4 grid h-auto grid-cols-3 gap-2">
        <li>
          <button
            id="tale-1"
            onClick={handleTaleSuggestion}
            className="scale-hover relative"
          >
            <span className="top-1/2 -translate-y-2/4 -translate-x-2/4 absolute w-full font-semibold text-white">
              The princess and her 3 cats
            </span>
            <Image
              alt="A princess with her three cats"
              src={Tale1}
              className="rounded-2xl shadow-gray-600 shadow-lg"
              priority
            />
          </button>
        </li>
        <li>
          <button
            id="tale-2"
            onClick={handleTaleSuggestion}
            className="scale-hover relative"
          >
            <span className="top-1/2 -translate-y-2/4 -translate-x-2/4 absolute w-full font-semibold text-white">
              A boy called Midudev
            </span>
            <Image
              alt="A boy running in the wild"
              src={Tale2}
              className="rounded-2xl shadow-gray-600 shadow-lg"
              priority
            />
          </button>
        </li>
        <li>
          <button
            id="tale-3"
            onClick={handleTaleSuggestion}
            className="scale-hover"
          >
            <span className="top-1/2 -translate-y-2/4 -translate-x-2/4 absolute w-full font-semibold text-white">
              The pirate and his parrot
            </span>
            <Image
              alt="A pirate and his parrot"
              src={Tale3}
              className="rounded-2xl shadow-gray-600 shadow-lg"
              priority
            />
          </button>
        </li>
      </ul>
    </div>
  );
}
