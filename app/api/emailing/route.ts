import nodemailer from 'nodemailer'


export async function POST(request) {
    const {subject, message} = await request.json();

    const transporter = nodemailer.createTransport({
    })
}