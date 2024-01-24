import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const CARDKNOX_API_ENDPOINT = 'https://api.cardknox.com';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Extract required parameters from the request body
    const { cardNumber, expiration, amount, apiKey } = req.body;

    // Make a request to the Cardknox API
    const response = await axios.post(
      `${CARDKNOX_API_ENDPOINT}/Charge?`,
      {
        xKey: apiKey,
        xCardNum: cardNumber,
        xExp: expiration,
        xAmount: amount,
      }
    );

    // Handle the Cardknox API response
    const responseData = response.data;
    res.status(200).json({ success: true, data: responseData });
  } catch (error) {
    console.error('Cardknox API error:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
}