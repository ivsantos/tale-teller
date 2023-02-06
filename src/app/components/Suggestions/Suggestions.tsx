import GeneratedSuggestions from '@/components/GeneratedSuggestions/GeneratedSuggestions';
import { ITale } from 'src/app/page';
import InputSuggestions from '@/components/InputSuggestions/InputSuggestions';
import Link from 'next/link';

interface SuggestionProps {
  onInputSuggestion: (input: string) => void;
  onTaleSuggestion: (tale: ITale) => void;
  onTaleSelection: (selection: string) => void;
}

export default function Suggestions({
  onInputSuggestion,
  onTaleSuggestion,
  onTaleSelection,
}: SuggestionProps) {
  return (
    <div className="m-4">
      <InputSuggestions onInputSuggestion={onInputSuggestion} />
      <GeneratedSuggestions
        onTaleSuggestion={onTaleSuggestion}
        onTaleSelection={onTaleSelection}
      />
      <p>
        You can also view all ✨{' '}
        <code className="text-blue-700">
          <Link
            href="https://discord.gg/midudev"
            aria-label="Midudev discord server"
            rel="noopener noreferrer"
            target="_blank"
          >
            community
          </Link>
        </code>{' '}
        ✨ generated tales in our{' '}
        <Link href="/shelf" className="underline">
          shelf.
        </Link>
      </p>
    </div>
  );
}
