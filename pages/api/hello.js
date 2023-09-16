// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import type { NextApiRequest, NextApiResponse } from 'next'

// type Data = {
//   name: string
// }

// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//   res.status(200).json({ name: 'John Doe' })
// }
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const { NextApiRequest, NextApiResponse } = require('next');

const handler = (req, res) => {
  const data = { name: 'John Doe' };
  res.status(200).json(data);
};

module.exports = handler;

