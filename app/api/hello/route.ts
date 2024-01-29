import type { NextApiRequest, NextApiResponse } from 'next' 

export async function POST(req: Request) {
    try {
        const body = await req.json();
        console.log(body);

        return new Response(JSON.stringify({ hello: 'world' }));
    } catch (error) {
        console.error('Error processing POST request:', error);
        return new Response('Internal Server Error', { status: 500 });
    }
}

