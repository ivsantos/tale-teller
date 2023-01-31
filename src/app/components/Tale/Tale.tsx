'use client';

import { cohereResponse, generateResponse } from 'cohere-ai/dist/models';
import { useRef, useState } from 'react';

import DownImage from '@/images/down.png';
import Form from '../Form/Form';
import Image from 'next/image';
import Suggestions from '@/components/Suggestions/Suggestions';
import useConfetti from '@/hooks/useConfetti/useConfetti';

export interface Tale extends cohereResponse<generateResponse> {
  isSuggestion?: boolean;
}

export default function Tale() {
  const [input, setInput] = useState<string>('');
  const [tale, setTale] = useState<Tale>();
  const [error, setError] = useState<string>('');
  const ref = useRef<HTMLElement>(null);

  const handleGenerate = async (
    event: React.SyntheticEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();
    if (!input) {
      setError('error');
    }
    const response = await fetch(`/api/tale?input=${input}`);
    const tale: Tale = await response.json();
    if (tale.statusCode === 200) {
      setTale(tale);
    }
  };

  const handleScroll = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setError('');
    setInput(event.target.value);
  };

  const onInputSuggestion = (input: string) => {
    setTale(undefined);
    setError('');
    setInput(input);
  };

  const onTaleSuggestion = (tale: Tale) => {
    setTale(tale);
  };

  useConfetti({ tale, action: handleScroll });

  return (
    <>
      <Form
        onSubmit={handleGenerate}
        onInputChange={handleInputChange}
        input={input}
        error={error}
      />
      {tale && (
        <div className="place-content-center grid mb-4">
          <button onClick={handleScroll}>
            <Image
              className="animate-bounce"
              alt="Go down"
              src={DownImage}
              width={64}
              height={64}
            />
          </button>
        </div>
      )}
      <Suggestions
        onInputSuggestion={onInputSuggestion}
        onTaleSuggestion={onTaleSuggestion}
      />
      {tale && (
        <section ref={ref} className="place-items-center grid gap-6 mt-16">
          <article className="mx-8 px-2 mt-8 text-center whitespace-pre-line lg:mx-[unset] border-x-2 border-x-gray-500 border-dashed italic">
            <p>{tale.body?.generations?.[0]?.text}</p>
          </article>
        </section>
      )}
    </>
  );
}
