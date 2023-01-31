import Image from 'next/image';
import WandIcon from '@/images/wand.png';

interface FormProps {
  onSubmit: (event: React.SyntheticEvent<HTMLFormElement>) => void;
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  input: string;
  error: string;
}

export default function Form({
  onSubmit,
  input,
  onInputChange,
  error,
}: FormProps) {
  return (
    <form
      onSubmit={onSubmit}
      className="lg:max-w-md sm:px-0 max-w-sm px-4 mx-auto mb-10"
    >
      <label htmlFor="ai-input">Please, tell me a story!</label>
      <div className="grid-cols-form grid grid-flow-col gap-4">
        <input
          className={`w-full p-2 border-2 rounded-md ${
            error ? 'error' : 'border-gray-300'
          }`}
          type="text"
          id="ai-input"
          name="ai-input"
          placeholder="Once upon a time..."
          value={input}
          onChange={onInputChange}
        />
        <button
          className="flex items-center justify-center p-4 bg-white rounded-lg"
          type="submit"
        >
          <span>Generate!</span>
          <Image
            className="inline"
            alt="An icon of a magical wand"
            src={WandIcon}
            width={32}
          />
        </button>
      </div>
    </form>
  );
}
