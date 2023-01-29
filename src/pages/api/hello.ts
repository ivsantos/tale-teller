import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  setTimeout(() => {
    return res.status(200).json({ name: 'John Doe' });
  }, 3000);
}
