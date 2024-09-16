import { ContactForm } from "@/types/type";

export async function sendContactForm(data: ContactForm) {
    fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        }
    }).then((res) => {
        if (!res.ok) {
            throw new Error('Failed to send message') 
        } else {
            return res.json()
        }
    } )

}