import {NextApiRequest, NextApiResponse} from "next";
import { StringDecoder } from "string_decoder";
import {google} from "googleapis"


type SheetForm = {
    name: string 
    email: string
    phone: string
    message: string 

}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
)   {

    if (req.method != "POST") {
        return res.status(statusCode: 405).send(body: {message: 'Only POST requests are allowed'})
    }

    const body = req.body as SheetForm

    try {
		const auth = new google.auth.GoogleAuth(opts: {
			credentials: {
				client_email: process.env.GOOGLE_CLIENT_EMAIL,
				private_key: process.env.GOOGLE_PRIVATE_KEY, 

			}
		})
    }catch(e) {

	}
}
