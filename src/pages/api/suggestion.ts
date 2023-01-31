import { NextApiRequest, NextApiResponse } from 'next';

import { Tale } from '@/components/Tale/Tale';
import Tale1 from './tale1.json';
import Tale2 from './tale2.json';
import Tale3 from './tale3.json';

interface SuggestionTales {
  [key: string]: Tale;
}

const Tales: SuggestionTales = {
  '1': Tale1,
  '2': Tale2,
  '3': Tale3,
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { tale } = req.query;
  if (!tale) {
    return res.status(400).json({ body: '', statusCode: 400 });
  }

  const taleNumber = (tale as string).split('-')[1];
  return res.status(200).json(Tales[taleNumber]);
}
