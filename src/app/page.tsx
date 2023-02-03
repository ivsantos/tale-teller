'use client';

import { cohereResponse, generateResponse } from 'cohere-ai/dist/models';

import Form from './components/Form/Form';
import Suggestions from './components/Suggestions/Suggestions';
import Tale from './components/Tale/Tale';
import { useState } from 'react';

export interface ITale extends cohereResponse<generateResponse> {
  isSuggestion?: boolean;
}

const TALE_ENDPOINT = '/api/tale';

export default function HomePage() {
  const [tale, setTale] = useState<ITale>();
  const [input, setInput] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleGenerate = async (
    event: React.SyntheticEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();
    setLoading(true);
    setTale(undefined);
    if (!input) {
      setLoading(false);
      setError('error');
      return;
    }
    const response = await fetch(`${TALE_ENDPOINT}?input=${input}`);
    const tale: ITale = await response.json();
    if (tale.statusCode === 200) {
      setLoading(false);
      setTale(tale);
    }
  };

  /** Handler for the input */
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTale(undefined);
    setError('');
    setInput(event.target.value);
  };

  /** On clicking an input suggestion */
  const onInputSuggestion = (input: string) => {
    setTale(undefined);
    setError('');
    setInput(input);
  };

  /** On clicking a pre-generated tale suggestion */
  const onTaleSelection = (selection: string) => {
    setInput(selection);
    setLoading(true);
    setTale(undefined);
    setError('');
  };

  /** On pre-generated tale suggestion resolves */
  const onTaleSuggestion = (tale: ITale) => {
    setLoading(false);
    setTale(tale);
  };

  return (
    <main className="lg:max-w-3xl max-w-xl mx-auto my-0">
      <Form
        onSubmit={handleGenerate}
        onInputChange={handleInputChange}
        input={input}
        error={error}
        loading={loading}
      />
      <Tale tale={tale} input={input}>
        <Suggestions
          onInputSuggestion={onInputSuggestion}
          onTaleSuggestion={onTaleSuggestion}
          onTaleSelection={onTaleSelection}
        />
      </Tale>
    </main>
  );
}
