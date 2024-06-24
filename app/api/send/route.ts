//re_c69gZxDc_9VLBVfFcMEiwu3S17quNvS7X

import { Resend } from "resend";
import { EmailTemplate } from "@/components/EmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
    try {
        const dataForm = await req.json()
        try {
            const data = await resend.emails.send({
                from: "Acme <onboarding@resend.dev>",
                to: ["davidllumitaxi67@gmail.com"],
                subject: "Portafolio Web 2",
                react: EmailTemplate({
                    firstName: dataForm.username,
                    message: dataForm.message,
                    email: dataForm.email,
                }),
                text: "Welcome to my web"
            });
            return Response.json(data);
        } catch (error) {
            return Response.json({ error })
        }
    } catch (error) {
        return Response.json({ error })
    }
}