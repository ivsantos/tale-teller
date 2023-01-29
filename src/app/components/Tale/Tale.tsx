'use client';

import { cohereResponse, generateResponse } from 'cohere-ai/dist/models';

import { useState } from 'react';

interface Tale extends cohereResponse<generateResponse> {}

export default function Tale() {
  const [input, setInput] = useState<string>('Once upon a time');
  const [tale, setTale] = useState<Tale>();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const handleGenerate = async () => {
    const response = await fetch(`/api/tale?input=${input}`);
    const tale: Tale = await response.json();
    setTale(tale);
  };

  return (
    <>
      <div className="w-80 grid grid-flow-col gap-4 mx-auto my-0">
        <input
          className="p-2 border-2 border-gray-300 rounded-md"
          placeholder="Once upon a time..."
          type="text"
          onChange={handleInputChange}
        />
        <button
          className="bg-neutral-600 hover:bg-neutral-800 p-4 text-white rounded-lg"
          onClick={handleGenerate}
        >
          Generate!
        </button>
      </div>
      {tale && (
        <article className="mx-8 px-2 mt-8 text-center whitespace-pre-line lg:mx-[unset] border-x-2 border-x-gray-200 border-dashed italic">
          <h2>Title of the tale</h2>
          <p>{tale.body.generations[0].text}</p>
        </article>
      )}
    </>
  );
}
