'use client';

import { cohereResponse, generateResponse } from 'cohere-ai/dist/models';

import Form from './components/Form/Form';
import Suggestions from './components/Suggestions/Suggestions';
import Tale from './components/Tale/Tale';
import generate from './lib/tale';
import { useState } from 'react';

export interface ITale extends cohereResponse<generateResponse> {
  isSuggestion?: boolean;
}

export default function HomePage() {
  const [tale, setTale] = useState<ITale>();
  const [input, setInput] = useState<string>('');
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const handleGenerate = async (
    event: React.SyntheticEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();
    if (!input) {
      setLoading(false);
      setError(true);
      return;
    }
    const response = await generate(input);
    if (response) {
      setLoading(false);
      setTale(tale);
    }
  };

  const resetState = (state: string) => {
    setTale(undefined);
    setError(false);
    setInput(state);
  };

  /** Handler for the input */
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    resetState(event.target.value);
  };

  /** On clicking an input suggestion */
  const onInputSuggestion = (input: string) => {
    resetState(input);
  };

  /** On clicking a pre-generated tale suggestion */
  const onTaleSelection = (selection: string) => {
    resetState(selection);
    setLoading(true);
  };

  /** On pre-generated tale suggestion resolves */
  const onTaleSuggestion = (tale: ITale) => {
    setTale(tale);
    setLoading(false);
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
