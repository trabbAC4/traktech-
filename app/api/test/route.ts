// app/api/test/route.page.ts
import type { NextApiRequest, NextApiResponse } from 'next';

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'This is a response from /api/test/route' });
}
