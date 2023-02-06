'use client';

import { cohereResponse, generateResponse } from 'cohere-ai/dist/models';

import Container from './components/Container/Container';
import Form from '@/components/Form/Form';
import Suggestions from '@/components/Suggestions/Suggestions';
import generate from '@/lib/tale';
import { useState } from 'react';

export interface ITale extends cohereResponse<generateResponse> {}

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
    setLoading(true);
    setTale(undefined);
    const response = await generate(input);
    if (response?.statusCode === 200) {
      setLoading(false);
      setTale(response);
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
    <main>
      <Form
        onSubmit={handleGenerate}
        onInputChange={handleInputChange}
        input={input}
        error={error}
        loading={loading}
      />
      <Container tale={tale} input={input}>
        <Suggestions
          onInputSuggestion={onInputSuggestion}
          onTaleSuggestion={onTaleSuggestion}
          onTaleSelection={onTaleSelection}
        />
      </Container>
    </main>
  );
}
