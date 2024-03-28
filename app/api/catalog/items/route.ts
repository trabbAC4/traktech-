import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
    try {
        const catalogItems = await prisma.catalog.findMany();
        return new Response(JSON.stringify({ catalogItems }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        console.error("Failed to fetch catalog items:", error);
        return new Response(JSON.stringify({ error: "Failed to fetch catalog items" }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
}