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

        const mailOptions = {
            from: `"AB Corporation Website" <info@abcorpindia.com>`,
            to: "info@abcorpindia.com",

            // VERY IMPORTANT for inbox delivery
            replyTo: email,

            subject: `New Contact Message from ${name}`,

            html: `
        <div style="font-family: Arial, sans-serif; color:#333;">
          <h2 style="color:#1a73e8;">New Contact Form Submission</h2>

          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>

          <p><strong>Message:</strong></p>
          <p>${message}</p>

          <hr>

          <p style="font-size:13px;color:#777;">
          This email was sent from the contact form on <strong>AB Corporation</strong>.
          </p>
        </div>
      `,

            // Plain text version helps spam filters
            text: `
New Contact Form Submission

Name: ${name}
Email: ${email}

Message:
${message}

Sent from AB Corporation Website
`
        };

        await transporter.sendMail(mailOptions);

        return Response.json({ success: true });

    } catch (error) {

        console.error("MAIL ERROR:", error);

        return Response.json(
            { error: "Email failed" },
            { status: 500 }
        );

    }

}