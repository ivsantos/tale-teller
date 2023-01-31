import GeneratedSuggestions from '../GeneratedSuggestions/GeneratedSuggestions';
import { ITale } from 'src/app/page';
import InputSuggestions from '../InputSuggestions/InputSuggestions';

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
    </div>
  );
}
