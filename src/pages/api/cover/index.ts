import { NextApiRequest, NextApiResponse } from 'next';

// @ts-ignore
import midjourney from 'midjourney-client';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { prompt } = req.body;
  if (!prompt) {
    return res.status(400).json({ body: '', statusCode: 400 });
  }

  try {
    const response = await midjourney(prompt);
    return res.status(200).json(response);
  } catch (error) {
    return res
      .status(500)
      .json({ detail: 'Something went wrong fetching a tale cover.' });
  }
}
