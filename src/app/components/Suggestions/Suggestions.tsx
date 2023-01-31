import GeneratedSuggestions from '../GeneratedSuggestions/GeneratedSuggestions';
import InputSuggestions from '../InputSuggestions/InputSuggestions';
import { Tale } from '../Tale/Tale';

interface SuggestionProps {
  onInputSuggestion: (input: string) => void;
  onTaleSuggestion: (tale: Tale) => void;
}

export default function Suggestions({
  onInputSuggestion,
  onTaleSuggestion,
}: SuggestionProps) {
  return (
    <div className="m-4">
      <InputSuggestions onInputSuggestion={onInputSuggestion} />
      <GeneratedSuggestions onTaleSuggestion={onTaleSuggestion} />
    </div>
  );
}
