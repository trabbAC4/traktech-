// app/api/product/[id]/route.page.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request: Request) {
    // Parsing the URL to extract the product ID
    const url = new URL(request.url);
    const id = url.pathname.split('/').pop();

    try {
        if (!id || isNaN(+id)) {
            return new Response(JSON.stringify({ error: "Invalid ID" }), {
                status: 400,
                headers: {
                    'Content-Type': 'application/json',
                },
            });
        }

        const product = await prisma.catalog.findUnique({
            where: { id: Number(id) },
        });

        if (!product) {
            return new Response(JSON.stringify({ error: "Product not found" }), {
                status: 404,
                headers: {
                    'Content-Type': 'application/json',
                },
            });
        }

        return new Response(JSON.stringify(product), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        console.error("Failed to fetch product:", error);
        return new Response(JSON.stringify({ error: "Failed to fetch product" }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
}
