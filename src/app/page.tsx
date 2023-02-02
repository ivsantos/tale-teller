'use client';

import { cohereResponse, generateResponse } from 'cohere-ai/dist/models';

import Form from './components/Form/Form';
import Suggestions from './components/Suggestions/Suggestions';
import Tale from './components/Tale/Tale';
import { useState } from 'react';

export interface ITale extends cohereResponse<generateResponse> {
  isSuggestion?: boolean;
}

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
    if (!input) {
      setLoading(false);
      setError('error');
    }
    const response = await fetch(`/api/tale?input=${input}`);
    const tale: ITale = await response.json();
    if (tale.statusCode === 200) {
      setLoading(false);
      setTale(tale);
    }
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

  const onTaleSuggestion = (tale: ITale) => {
    setLoading(false);
    setTale(tale);
  };

  const onTaleSelection = (selection: string) => {
    setInput(selection);
    setLoading(true);
    setTale(undefined);
    setError('');
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
