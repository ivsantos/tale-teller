import { NextApiRequest, NextApiResponse } from 'next';

import cohere from 'cohere-ai';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { input } = req.query;
  if (!input) {
    return res.status(400).json({ body: '', statusCode: 400 });
  }
  cohere.init(process.env.COHERE_API_KEY!, '2022-12-06');
  const response = await cohere.generate({
    model: 'command-xlarge-20221108',
    prompt: `Give me a happy tale that starts with: "${input}" with a definite ending.`,
    max_tokens: 500,
    temperature: 0.9,
    end_sequences: ['---'],
  });

  return res.status(200).json(response);
}
