import Image from 'next/image';
import { Tale } from '../Tale/Tale';
import Tale1 from '@/images/tale1.png';
import Tale2 from '@/images/tale2.png';
import Tale3 from '@/images/tale3.png';

interface SuggestionProps {
  onInputSuggestion: (input: string) => void;
  onTaleSuggestion: (tale: Tale) => void;
}

export default function Suggestions({
  onInputSuggestion,
  onTaleSuggestion,
}: SuggestionProps) {
  const handleInputSuggestion = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    const suggestion = event.currentTarget.innerHTML.split('...')[0].trim();
    onInputSuggestion(suggestion);
  };

  const handleTaleSuggestion = async (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    const response = await fetch(
      `/api/suggestion?tale=${event.currentTarget.id}`,
    );
    const tale: Tale = await response.json();
    if (tale.statusCode === 200) {
      onTaleSuggestion(tale);
    }
  };

  return (
    <div className="m-4">
      <div className="mb-4">
        <p className="mb-4">You can try one of the following...</p>
        <ul className="place-items-center grid gap-5">
          <li>
            <button
              onClick={handleInputSuggestion}
              className="suggestion bg-stars"
            >
              Once upon a time, in a land far away, there lived a king and a
              queen, who...
            </button>
          </li>
          <li>
            <button
              onClick={handleInputSuggestion}
              className="suggestion bg-tavern"
            >
              Long ago, in a tavern full of orcs and burglars...
            </button>
          </li>
          <li>
            <button
              onClick={handleInputSuggestion}
              className="suggestion bg-cat"
            >
              There was a time where a princess with her cat named Logan...
            </button>
          </li>
        </ul>
      </div>
      <div>
        <p className="mb-4">...Or try already pre-generated ones!</p>
        <div className="place-items-center sm:gap-4 grid h-auto grid-cols-3 gap-2">
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
        </div>
      </div>
    </div>
  );
}
