import nodemailer from "nodemailer";

export async function POST(req) {

    try {

        const { name, email, message } = await req.json();

        const transporter = nodemailer.createTransport({
            host: "brandy.hostns.io",
            port: 465,
            secure: true,
            auth: {
                user: "info@abcorpindia.com",
                pass: process.env.EMAIL_PASS
            }
        });

        await transporter.sendMail({
            from: `"AB Corporation Website" <info@abcorpindia.com>`,
            to: "info@abcorpindia.com",
            subject: `New Contact Message from ${name}`,
            html: `
        <h3>New Contact Form Message</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b></p>
        <p>${message}</p>
      `
        });

        return Response.json({ success: true });

    } catch (error) {

        console.error("MAIL ERROR:", error);

        return Response.json(
            { error: "Email failed" },
            { status: 500 }
        );

    }

}