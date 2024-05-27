'use client'
import { useState } from "react"

 
export default function Contact () {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')
    
    //Needs to be DRY?
    function firstNameChange(e) {
        setFirstName(e.target.value)
    }
    function lastNameChange(e) {
        setLastName(e.target.value)
    }
    function emailChange(e) {
        setEmail(e.target.value)
    }
    function validateEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
 
    }
    function subjectChange(e) {
        setSubject(e.target.value)
    }
    function messageChange(e) {
        setMessage(e.target.value)
    }
    function submit () {
        /*
        CHECK FOR REQUIREMENTS:
        - check if email has "@" and ".com" at the end. Idea: https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript
        - Check if none of these text boxes are empty strings. If so, throw an error saying "Please fill in the required boxes?" (If possible, throw in a red color on text or box? )
        - If these requirements are okay, then send to "admin" (use Temp mail to create fake ones)
            Have subject, message, and name formatted in this order. 

        */
        if (!validateEmail(email)) {
            console.log("Error: email is not valid! ")
        } else if (!firstName || !lastName || !subject || !message ) {
            console.log('incomplete form!')
        } else {
            console.log('SUBMITTING FORM', firstName, lastName, email, subject, message)
        }
    }


    return (
        <div className="contactFormPage">
            <div className="contactFormInfo">
                <h2>Contact Me</h2>
                <p>If you cannot find the answer to your question
                    on the website or if your inquiry is very specific, 
                    feel free to contact us!
                </p>
            </div>
            <div className="contactForm">
                <div>
                    {/* <p>Name (required)</p> */}
                    <label>First Name </label>
                    <input type="text" name="name" onChange={firstNameChange} id="firstName" required />
                </div>
                <div> 
                    <label>Last Name </label>
                    <input type="text" name="name" onChange={lastNameChange} id="lastName" required />
                </div>
                <div>
                    <label>Email: </label>
                    <input type="email" name="email" onChange={emailChange} id="email" required />
                </div>
                <div>
                    <label >Subject: </label>
                    <input type="" name="subject" id="subject" onChange={subjectChange} required />
                </div>
                <div>
                    <label>Message: </label>
                    <input type="textbox" name="message" id="message" onChange={messageChange} required />
                </div>
                <div>
                    <input type="submit" onClick={submit}value="Submit" />
                </div>
            </div>

        </div>
    )
}