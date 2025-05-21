import "./contact.css";

function Contact() {
    return (
    <div className="contact">
        <main className="contact-container">
            <div className="contact-heading">
                <h1 className="contact-title">Contact us</h1>          
                
            </div>
            <div>
                
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
                        <button type="submit">Send Message</button>
                    </div>
                    
                </form>
            </div>
            <p>Sanvita Health Ltd is MHRA registered UK based importer for Suzhou Medical Appliance Factory (Hwato)</p>
            </main>
            </div>);
}

export default Contact;