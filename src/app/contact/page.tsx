"use client";
import "./contact.css";

const HIDDEN_VALUE = process.env.HIDDEN_VALUE;


function Contact() {


    return (
    <main className="contact">
        <div className="contact-container">
            <div className="contact-heading">
                <h1 className="contact-title">Contact us</h1>          
                
            </div>
         

            <div className="contact-form">
                <form onSubmit={async (e) => {
                    e.preventDefault();
              
                                const nameInput = document.getElementById("name") as HTMLInputElement | null;
                                const emailInput = document.getElementById("email") as HTMLInputElement | null;
                                const orderRefInput = document.getElementById("order-ref") as HTMLInputElement | null;
                                const inquiryTypeSelect = document.getElementById("inquiry-type") as HTMLSelectElement | null;
                                const subjectInput = document.getElementById("subject") as HTMLInputElement | null;
                                const messageInput = document.getElementById("message") as HTMLTextAreaElement | null;
                                const honeyInput = document.getElementById("honey") as HTMLInputElement | null;

                                const name = nameInput?.value || "";
                                const email = emailInput?.value || "";
                                const orderRef = orderRefInput?.value || "";
                                let inquiryType = inquiryTypeSelect?.value || "";
                                inquiryType = inquiryType[0].toUpperCase() + inquiryType.slice(1).replace(/-/g, " ");
                                const subjectValue = subjectInput?.value || "";
                                const message = messageInput?.value || "";
                                const hiddenValue = honeyInput?.value || "";

                                await fetch("/api/sendEmail", {
                                    method: "POST",
                                    headers: {
                                        "Content-Type": "application/json",
                                    },
                                    body: JSON.stringify({
                                        name,
                                        orderRef,
                                        inquiryType,
                                        email,
                                        subject:subjectValue,
                                        text:message,
                                        hiddenValue,
                                    }),
                                });
                            }}>
                    <div className="top-line">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" placeholder="Enter your name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" placeholder="someone@example.com"  required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="order-ref">Order Reference (if applicable)</label>
                            <input type="text" id="order-ref" name="order-ref" />
                        </div>
                        <div className="form-group hidden">
                            <label htmlFor="telephone">Telephone</label>
                            <input type="tel" id="telephone" name="telephone" placeholder="Enter your telephone number" />
                        </div>
                        <input type="hidden" name="honey" id="honey" value={HIDDEN_VALUE} />
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
                        >Send Message</button>
                    </div>
                    <p>Currently our contact form is under maintenance. If you have any enquiries, please email us directly at: <span className="footer-link"><a href="mailto:info@sanvitahealth.co.uk">info@sanvitahealth.co.uk</a></span></p>

                </form>
            </div>
            </div>
        </main>);
}

export default Contact;