import { useCallback, useEffect, useState } from 'react';

interface UseCoverPredictionProps {
  input: string;
  customCover?: string;
  onCover: (coverURI: string) => void;
}

export default function useCoverPrediction({
  input,
  customCover,
  onCover,
}: UseCoverPredictionProps) {
  const [prediction, setPrediction] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const getCoverPrediction = useCallback(async () => {
    setLoading(true);
    const prompt = `mdjrny-v4 style a highly detailed matte painting of ${input} by studio ghibli, makoto shinkai, by artgerm, by wlop, by greg rutkowski, volumetric lighting, octane render, 4 k resolution, trending on artstation, masterpiece`;
    const coverConfig = { height: 256 };
    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt, coverConfig }),
    };
    const response = await fetch(`/api/cover`, config);
    if (response.status !== 200) {
      setLoading(false);
      const error = await response.json();
      return setError(error.detail);
    }
    let predicted = (await response.json()) as string[];
    setLoading(false);
    const coverURI = predicted.at(-1);
    setPrediction(coverURI);

    if (coverURI) {
      onCover(coverURI);
    }
  }, [input, onCover]);

  useEffect(() => {
    customCover ? setPrediction(customCover) : getCoverPrediction();
  }, [getCoverPrediction, customCover]);

  return { prediction, loading, error };
}
