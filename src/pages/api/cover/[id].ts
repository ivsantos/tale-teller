import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { id } = req.query;
  const response = await fetch(
    `https://api.replicate.com/v1/predictions/${id}`,
    {
      headers: {
        Authorization: `Token ${process.env.REPLICATE_API_KEY}`,
        'Content-Type': 'application/json',
      },
    },
  );
  if (response.status !== 200) {
    let error = await response.json();
    return res.status(500).json({ detail: error.detail });
  }

  const prediction = await response.json();
  return res.status(200).json(prediction);
}
