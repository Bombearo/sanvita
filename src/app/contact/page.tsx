"use client";
import "./contact.css";
import {sendMail} from "@/lib/send-mail";


function Contact() {
    const constructEmailReceipt = (name: string, email: string, orderRef: string, inquiryType: string, subject: string, message: string) => {

        let body = "";
        if (name) {
            body += `<p><strong>Name:</strong> ${name}</p>`;
        }
        
        if (orderRef) {
            body += `<p><strong>Order Reference:</strong> ${orderRef}</p>`;
        }
        if (inquiryType) {
            body += `<p><strong>Inquiry Type:</strong> ${inquiryType}</p>`;
        }
        
        if (message) {
            body += `<p><strong>Message:</strong></p><p>${message}</p>`;
        }
        return `
        <div class="message-details">
        <h2>Message Details:</h2>
                ${body}
        </div>`;
    };

    const generateHtml = (name: string, email: string, orderRef: string, inquiryType: string, subject: string, message: string) => {
    const styles = `
    body {
font-family: Arial, sans-serif;
line-height: 1.6;
color: #333;
}
h1, h2 {
color: #2c3e50;
}
    
.message-details {
margin-top: 20px;
padding: 10px;
background-color: #f9f9f9;
border: 1px solid #ddd;
border-radius: 5px;
display: flex;
flex-direction: column;
gap: 10px;
}
.message-details p {
margin: 5px 0;
}

.footer{
display:flex;
}

.contact-info {
display: flex;
flex-direction: column;
align-items: flex-end;
justify-content: flex-start;
border-left:1px solid #ddd;
padding: 10px;
}
    `
    
        return `
        <style>${styles}</style>
        <h1>Dear ${name}</h1>
<p>Thank you for reaching out to us via our contact form. We’ve received your message and a member of our team will get back to you as soon as possible—typically within 1-2 business days.</p>

<p>If your enquiry is urgent, please feel free to contact us directly at <a href="mailto:info@sanvitahealth.co.uk">info@sanvitahealth.co.uk</a>.</p>

<p>We appreciate your interest and look forward to assisting you.</p>

<p>Best regards,</p>
<div class="footer">
<div style="padding-right:20px">
    <p>Sanvita Health</p>
</div>

<div class="contact-info">
    <div>
        Website: <a href="https://www.sanvitahealth.co.uk">www.sanvitahealth.co.uk</a>
    </div>
    <div>
        Email: <a href="mailto:Info@sanvitahealth.co.uk">Info@sanvitahealth.co.uk</a>
    </div>
</div>

</div>


        ${constructEmailReceipt(name, email, orderRef, inquiryType, subject, message)}


        `;
    };



    return (
    <main className="contact">
        <div className="contact-container">
            <div className="contact-heading">
                <h1 className="contact-title">Contact us</h1>          
                
            </div>
         

            <div className="contact-form">
                <form>
                    <div className="top-line">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" placeholder="Enter your name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" placeholder="someone@example.com" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="order-ref">Order Reference (if applicable)</label>
                            <input type="text" id="order-ref" name="order-ref" />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="inquiry-type">Inquiry Type</label>
                        <select id="inquiry-type" name="inquiry-type" required>
                            <option value="general">General Inquiry</option>
                            <option value="technical">Technical Support</option>
                            <option value="product">Product Inquiry</option>
                            <option value="custom-order">Custom Order</option>
                            <option value="feedback">Feedback</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="subject">Subject</label>
                        <input type="text" id="subject" name="subject" placeholder="Enter the subject of your enquiry" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" placeholder="Enter your message" required></textarea>
                    </div>
                    <div className="button-container">
                        <button
                            type="submit"
                            className="submit-button"
                            onClick={async (e) => {
                                e.preventDefault();
                                const nameInput = document.getElementById("name") as HTMLInputElement | null;
                                const emailInput = document.getElementById("email") as HTMLInputElement | null;
                                const orderRefInput = document.getElementById("order-ref") as HTMLInputElement | null;
                                const inquiryTypeSelect = document.getElementById("inquiry-type") as HTMLSelectElement | null;
                                const subjectInput = document.getElementById("subject") as HTMLInputElement | null;
                                const messageInput = document.getElementById("message") as HTMLTextAreaElement | null;

                                const name = nameInput?.value || "";
                                const email = emailInput?.value || "";
                                const orderRef = orderRefInput?.value || "";
                                let inquiryType = inquiryTypeSelect?.value || "";
                                inquiryType = inquiryType[0].toUpperCase() + inquiryType.slice(1).replace(/-/g, " ");
                                const subjectValue = subjectInput?.value || "";
                                const message = messageInput?.value || "";

                                const subject = `Thank you for Contacting Sanvita Health`;
                                const text = `Name: ${name}\nEmail: ${email}\nOrder Reference: ${orderRef}\nInquiry Type: ${inquiryType}\nMessage: ${message}`;
                                const html = generateHtml(name, email, orderRef, inquiryType, subjectValue, message);
                                
                                console.log("Sending email with the following details:");
                                console.log("Name:", name);
                                console.log("Email:", email);
                                console.log("Order Reference:", orderRef);
                                console.log("Inquiry Type:", inquiryType);
                                console.log("Subject:", subject);
                                console.log("Message:", message);
                                await sendMail({
                                    email,
                                    sendTo: email,
                                    subject,
                                    text,
                                    html,
                                });
                            }} 
                        >Send Message</button>
                    </div>
                    <p>Currently our contact form is under maintenance. If you have any enquiries, please email us directly at: <span className="footer-link"><a href="mailto:info@sanvitahealth.co.uk">info@sanvitahealth.co.uk</a></span></p>

                </form>
            </div>
            </div>
        </main>);
}

export default Contact;