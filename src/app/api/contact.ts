import { transporter } from "@/nodemailer/config";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const email = process.env.NEXT_PUBLIC_EMAIL
	//req.body is what’s being sent to the backend from the frontend
    const data = req.body

    const dataArray = [
        {
            title: 'Name:',
            value: data.name
        },
        {
            title: 'Email:',
            value: data.email
        },
        {
            title: 'Message:',
            value: data.message
        }
    ]


    if (req.method === 'POST') {

        try {
            await transporter.sendMail({
                from: data.email,
                to: email,
                subject: `Portfolio 2024 website new message`,
			// this is the styling for the email template; test html styling in your own /template/email.html file; must use inline styles and table semantic tags because other forms are not widely supported; flexbox will not work well so must use alternative styling methods (display: flex works but other flex stylings like flex-direction, flex, gap, justify-content, etc. will not work)
                html: `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Portfolio Email Template</title>
                    <style type="text/css">
                    * {
                        margin: 0;
                        padding: 0;
                        box-sizing: border-box;
                    }
            
                    </style>
                </head>
                <body>
                    <table class="wrapper">
                        <table class="main">
                            <tbody>
                                <tr class="content">
                                    ${dataArray.map(data => {
                                        return (
                                        `<td>
                                            <p>${data.title}</p>
                                            <p>${data.value}</p>
                                        </td>`
                                        )
                                    })}
                                </tr>
                            </tbody>
                            <tfoot></tfoot>
                        </table>
                    </table>
                </body>
                </html>`
            })

            return res.status(200).json({
                message: 'Message was sent successfully!'
            })
        } catch (err) {
            return res.status(400).json({
                message: err
            })
        }
    }
}
