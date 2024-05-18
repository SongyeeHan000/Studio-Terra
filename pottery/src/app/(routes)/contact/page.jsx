export default function Contact () {
    return (
        <div className="contactFormPage">
            <div className="contactFormInfo">
                <h3>Contact Me</h3>
                <p>If you cannot find the answer to your question
                    on the website or if your inquiry is very specific, 
                    feel free to contact us!
                </p>
            </div>
            <div className="contactForm">
                <div>
                    <p>Name (required)</p>
                    <p>First Name </p>
                    <input type="text" name="name" id="firstName" required />
                    <span>
                        <label>Last Name </label>
                        <input type="text" name="name" id="lastName" required />
                    </span>
                </div>
                <div>
                    <label>Email: </label>
                    <input type="email" name="email" id="email" required />
                </div>
                <div>
                    <label >Subject: </label>
                    <input type="" name="subject" id="subject" required />
                </div>
                <div>
                    <label>Message: </label>
                    <input type="text" name="message" id="message" required />
                </div>
                <div>
                    <input type="submit" value="Submit" />
                </div>
            </div>

        </div>
    )
}