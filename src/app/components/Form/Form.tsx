import Image from 'next/image';
import WandIcon from '@/images/wand.png';

interface FormProps {
  onSubmit: (event: React.SyntheticEvent<HTMLFormElement>) => void;
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  input: string;
  error: boolean;
  loading: boolean;
}

export default function Form({
  onSubmit,
  input,
  onInputChange,
  error,
  loading,
}: FormProps) {
  return (
    <form
      onSubmit={onSubmit}
      className="lg:max-w-md sm:px-0 max-w-sm px-4 mx-auto mb-10"
    >
      <label className="font-bold" htmlFor="ai-input">
        Please, tell me a story!
      </label>
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
          type="submit"
          className="gap-2 relative inline-flex items-center justify-center p-0.5 font-medium text-white rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 active:scale-105"
        >
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md bg-opacity-0 w-full flex justify-evenly items-center gap-4">
            {loading ? <span>Loading...</span> : <span>Generate!</span>}
            <Image
              className={`${loading ? 'animate-wandwave' : ''}`}
              alt="An icon of a magical wand"
              src={WandIcon}
              width={32}
              priority
            />
          </span>
        </button>
      </div>
    </form>
  );
}
