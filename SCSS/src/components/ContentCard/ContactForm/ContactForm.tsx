import "./ContactForm.scss";

export default function ContactForm(){
    return(
        <form onSubmit={(e) => {e.preventDefault()}} className="contact-form">
            <div className="form-group">
                <input type="text" placeholder="Name" required />
            </div>
            <div className="form-group">
                <input type="email" placeholder="Email" required />
            </div>
            <div className="form-group">
                <textarea rows={5} placeholder="Message" required></textarea>
            </div>
            <button type="submit">Send Message</button>
        </form>
    );
}