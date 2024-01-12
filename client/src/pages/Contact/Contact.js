import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import { BsLinkedin, BsGithub, BsFacebook } from "react-icons/bs";
import { FaWhatsappSquare } from "react-icons/fa";
import Fade from "react-reveal/Fade";

const Contact = () => {
  const form = useRef();
  const [message, setMessage] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    // Client-side validation
    const name = form.current.user_name.value;
    const email = form.current.user_email.value;
    const messageText = form.current.message.value;

    if (!name || !email || !messageText) {
      setMessage("Please fill in all required fields.");
      return;
    }

    emailjs
      .sendForm(
        "service_v68ydcm",
        "template_zxvuwqv",
        form.current,
        "CYPsshzxDffbHp7tJ"
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessage("Your message was sent successfully. Thank you!");
        },
        (error) => {
          console.log(error.text);
          setMessage(
            "There was an error sending your message. Please try again later."
          );
        }
      );
    e.target.reset();
  };

  return (
    <>
      <div className=" contact" id="contact">
        <Fade left>
          <h2 className="col-12 mt-3 mb-4 text-center ">CONNECT WITH ME</h2>
          <hr />
          <div className="card card0 border-0">
            <div className="row">
              <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
                <div className="card1">
                  <div className="row border-line">
                    <Fade right>
                      <img
                        src="https://thumbs.dreamstime.com/b/contact-me-sticky-note-laptop-closeup-message-53436480.jpg"
                        alt="ocontact"
                        className="image"
                      />
                    </Fade>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="card2 border-0 px-4 py-5">
                  <div className="row">
                    <div className="row">
                      <h6>
                        Contact With
                        <a
                          className="btn btn-linkedin"
                          href="https://www.linkedin.com/in/harishbpatil/"
                          rel="noreferrer"
                          target="_blank"
                        >
                          <BsLinkedin
                            color="#0A66C2"
                            size={24}
                            className="ms-2"
                          />
                        </a>
                        <a
                          className="btn btn-facebook"
                          href="https://github.com/"
                          rel="noreferrer"
                          target="_blank"
                        >
                          <BsGithub
                            color="#6e5494"
                            size={24}
                            className="ms-2"
                          />
                        </a>
                        <a
                          className="btn btn-whatsapp"
                          href="https:api.whatsapp.com/send?phone=8296834740"
                          rel="noreferrer"
                          target="_blank"
                        >
                          <FaWhatsappSquare
                            color="#59CE72"
                            size={24}
                            className="ms-2"
                          />
                        </a>
                        <a
                          className="btn btn-facebook"
                          href="https://www.facebook.com/"
                          rel="noreferrer"
                          target="_blank"
                        >
                          <BsFacebook
                            color="#1877F2"
                            size={24}
                            className="ms-2"
                          />
                        </a>
                      </h6>
                    </div>
                    <div className="row px-3 mb-4">
                      <div className="line" />
                      <small className="or text-center">OR</small>
                      <div className="line" />
                    </div>
                    <form className="form" ref={form} onSubmit={sendEmail}>
                      <label>Name</label>
                      <input type="text" name="user_name" required />
                      <label>Email</label>
                      <input type="email" name="user_email" required />
                      <label>Message</label>
                      <textarea name="message" required />
                      <input className="button" type="submit" value="Send" />
                    </form>
                    {message && <p className="mt-3">{message}</p>}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </>
  );
};

export default Contact;
