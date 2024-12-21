import React from "react";

function Contact() {
    return(
        <section id="contact">
            <div className="contact-inner contact-left">
                <h2>CONTACT ✉</h2>
                <p>Thank you : )</p>
                <div className="img"></div>
            </div>
            <div className="contact-inner contact-right">
                <form action="MAILTO:savinpark0315@gmail.com" method="post" encType="text/plain">
                    <input type="text" name="name" placeholder="Name" autoComplete="off" />
                    <input type="text" name="title" placeholder="Title" autoComplete="off" />
                    <textarea name="message" placeholder="Message" cols="30" rows="12" autoComplete="off"></textarea>
                    <button type="submit">SEND</button>
                </form>
            </div>
        </section>
    );
}

export default Contact;