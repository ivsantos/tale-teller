import { NextApiRequest, NextApiResponse } from 'next';

// https://replicate.com/prompthero/openjourney
const MODEL_VERSION =
  '9936c2001faa2194a261c01381f90e65261879985476014a0a37a334593a05eb';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { prompt } = req.body;
  if (!prompt) {
    return res.status(400).json({ body: '', statusCode: 400 });
  }

  const response = await fetch('https://api.replicate.com/v1/predictions', {
    method: 'POST',
    headers: {
      Authorization: `Token ${process.env.REPLICATE_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      version: MODEL_VERSION,
      input: { prompt },
    }),
  });

  if (response.status !== 201) {
    let error = await response.json();
    return res.status(500).json({ detail: error.detail });
  }

  const prediction = await response.json();
  return res.status(201).json(prediction);
}
