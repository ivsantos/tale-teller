import { useCallback, useEffect, useState } from 'react';

interface UseCoverPredictionProps {
  input: string;
}

interface IPrediction {
  completed_at: Date;
  created_at: Date;
  error: string | null;
  id: string;
  input: Input;
  logs: string;
  metrics: Metrics;
  output: string[];
  started_at: Date;
  status: 'starting' | 'processing' | 'succeeded' | 'failed' | 'canceled';
  urls: Urls;
  version: string;
  webhook_completed: string | null;
}

interface Input {
  prompt: string;
}

interface Metrics {
  predict_time: number;
}

interface Urls {
  get: string;
  cancel: string;
}

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export default function useCoverPrediction({ input }: UseCoverPredictionProps) {
  const [prediction, setPrediction] = useState<IPrediction | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>('un error');

  const handleGetPrediction = useCallback(async () => {
    const prompt = `mdjrny-v4 style a highly detailed matte painting of ${input} by studio ghibli, makoto shinkai, by artgerm, by wlop, by greg rutkowski, volumetric lighting, octane render, 4 k resolution, trending on artstation, masterpiece`;
    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt }),
    };
    const response = await fetch(`/api/cover?prompt=${prompt}`, config);
    let predicted = await response.json();
    setPrediction(predicted);

    while (
      predicted?.status !== 'succeeded' &&
      predicted?.status !== 'failed'
    ) {
      await sleep(2000);
      const response = await fetch(`/api/cover/${predicted.id}`);
      predicted = await response.json();
      if (response.status !== 200) {
        setLoading(false);
        return setError(predicted.detail);
      }
      setPrediction(predicted);
    }
  }, [input]);

  useEffect(() => {
    handleGetPrediction();
  }, [handleGetPrediction]);

  useEffect(() => {
    if (
      prediction?.status === 'starting' ||
      prediction?.status === 'processing'
    ) {
      setLoading(true);
    }
  }, [prediction]);

  return { prediction, loading, error };
}
