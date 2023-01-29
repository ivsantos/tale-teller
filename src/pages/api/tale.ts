import { NextApiRequest, NextApiResponse } from 'next';

import tale from './tale.json';

// import cohere from 'cohere-ai';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { input } = req.query;
  if (!input) {
    return res.status(400).json({ error: 'Missing input' });
  }
  // cohere.init(process.env.API_KEY!, '2022-12-06');
  // const response = await cohere.generate({
  //   model: 'command-xlarge-20221108',
  //   prompt: `Generate a tale that starts with: "${input}" with the maximum possible paragraphs and a definite ending.`,
  //   max_tokens: 1000,
  //   temperature: 1,
  //   end_sequences: ['---'],
  // });

  return res.status(200).json(tale);
}
