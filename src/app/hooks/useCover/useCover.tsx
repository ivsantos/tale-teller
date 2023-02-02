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

  // const MOCK_COVER = {
  //   completed_at: '2023-02-02T21:06:34.059945Z',
  //   created_at: '2023-02-02T21:06:15.255239Z',
  //   error: null,
  //   id: 'bvqcw2qds5civoestmt5juqi2e',
  //   input: {
  //     prompt:
  //       'mdjrny-v4 style a highly detailed matte painting of The princess and her 3 cats by studio ghibli, makoto shinkai, by artgerm, by wlop, by greg rutkowski, volumetric lighting, octane render, 4 k resolution, trending on artstation, masterpiece',
  //   },
  //   logs: 'Using seed: 31162\nGlobal seed set to 31162\n  0%|          | 0/50 [00:00<?, ?it/s]\n  4%|▍         | 2/50 [00:00<00:03, 13.39it/s]\n  8%|▊         | 4/50 [00:00<00:03, 13.90it/s]\n 12%|█▏        | 6/50 [00:00<00:03, 14.06it/s]\n 16%|█▌        | 8/50 [00:00<00:02, 14.19it/s]\n 20%|██        | 10/50 [00:00<00:02, 14.27it/s]\n 24%|██▍       | 12/50 [00:00<00:02, 14.29it/s]\n 28%|██▊       | 14/50 [00:00<00:02, 14.30it/s]\n 32%|███▏      | 16/50 [00:01<00:02, 14.31it/s]\n 36%|███▌      | 18/50 [00:01<00:02, 14.23it/s]\n 40%|████      | 20/50 [00:01<00:02, 14.30it/s]\n 44%|████▍     | 22/50 [00:01<00:01, 14.34it/s]\n 48%|████▊     | 24/50 [00:01<00:01, 14.35it/s]\n 52%|█████▏    | 26/50 [00:01<00:01, 14.38it/s]\n 56%|█████▌    | 28/50 [00:01<00:01, 14.31it/s]\n 60%|██████    | 30/50 [00:02<00:01, 14.34it/s]\n 64%|██████▍   | 32/50 [00:02<00:01, 14.20it/s]\n 68%|██████▊   | 34/50 [00:02<00:01, 14.05it/s]\n 72%|███████▏  | 36/50 [00:02<00:00, 14.16it/s]\n 76%|███████▌  | 38/50 [00:02<00:00, 14.25it/s]\n 80%|████████  | 40/50 [00:02<00:00, 14.32it/s]\n 84%|████████▍ | 42/50 [00:02<00:00, 14.31it/s]\n 88%|████████▊ | 44/50 [00:03<00:00, 14.35it/s]\n 92%|█████████▏| 46/50 [00:03<00:00, 14.11it/s]\n 96%|█████████▌| 48/50 [00:03<00:00, 14.22it/s]\n100%|██████████| 50/50 [00:03<00:00, 14.21it/s]\n100%|██████████| 50/50 [00:03<00:00, 14.23it/s]',
  //   metrics: {
  //     predict_time: 4.412456,
  //   },
  //   output: [
  //     'https://replicate.delivery/pbxt/qYpvMGzx086UDVEvW8BbYlekqwds5xBQ7Sd4KKCYXajsvONIA/out-0.png',
  //   ],
  //   started_at: '2023-02-02T21:06:29.647489Z',
  //   status: 'failed',
  //   urls: {
  //     get: 'https://api.replicate.com/v1/predictions/bvqcw2qds5civoestmt5juqi2e',
  //     cancel:
  //       'https://api.replicate.com/v1/predictions/bvqcw2qds5civoestmt5juqi2e/cancel',
  //   },
  //   version: '9936c2001faa2194a261c01381f90e65261879985476014a0a37a334593a05eb',
  //   webhook_completed: null,
  // } satisfies IPrediction;

  return { prediction, loading, error };
}
