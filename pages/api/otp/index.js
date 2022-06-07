// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import NextCors from 'nextjs-cors';

const generateOTP = () => Math.random().toString().slice(2, 8);

export default async function handler(req, res) {
  // Run the cors middleware
  // nextjs-cors uses the cors package, so we invite you to check the documentation https://github.com/expressjs/cors
  await NextCors(req, res, {
    // Options
    methods: ['GET', 'POST'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });

  const { id } = req.body;
  res.status(200).json({ otp: generateOTP(), id });
}
