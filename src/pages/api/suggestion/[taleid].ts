import { NextApiRequest, NextApiResponse } from 'next';

import { ITale } from 'src/app/page';
import Tale1 from './tale1.json';
import Tale2 from './tale2.json';
import Tale3 from './tale3.json';

interface SuggestionTales {
  [key: string]: ITale;
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
  const { taleid } = req.query;
  if (!taleid) {
    return res.status(400).json({ body: '', statusCode: 400 });
  }

  const taleNumber = (taleid as string).split('-')[1];

  return res.status(200).json(Tales[taleNumber]);
}
