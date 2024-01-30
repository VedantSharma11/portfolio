import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";
import { TbSend } from "react-icons/tb";
import { MdOutlineMail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoArrowForward } from "react-icons/io5";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rwis3uq",
        "template_rnoucgw",
        form.current,
        "wqj2rPh7MeVEEKmNe"
      )
      e.target.reset();
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Get in touch</h2>
      <span className="section__subtitle">Contact Me</span>

      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">Talk to me</h3>

          <div className="contact__info">
            <div className="contact__card">
              <MdOutlineMail fontSize={21} className="contact__card-icon"/>
              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">vedants2003@gmail.com</span>
              <a
                href="mailto:vedants2003@gmail.com"
                className="contact__button"
              >
                Write me
                <IoArrowForward />
              </a>
            </div>

            <div className="contact__card">
            <FaWhatsapp fontSize={21} className="contact__card-icon"/>
              <h3 className="contact__card-title">Whatsapp</h3>
              <span className="contact__card-data">+91 8742967471</span>
              <a
                href="https://api.whatsapp.com/send?phone=8742967471&text=Hello, more information!"
                className="contact__button"
              >
                Write me
                 <IoArrowForward />
              </a>
            </div>

            <div className="contact__card">
            <FaLinkedinIn fontSize={21} className="contact__card-icon"/>
              <h3 className="contact__card-title">Linkedin</h3>
              <span className="contact__card-data">@vedantsharma13</span>
              <a
                href="https://www.linkedin.com/in/vedantsharma13/"
                className="contact__button"
              >
                Write me
                <IoArrowForward />
              </a>
            </div>
          </div>
        </div>

        <div className="contact__content">
          <h3 className="contact__title">Write your message</h3>

          <form ref={form} onSubmit={sendEmail} className="contact__form">
            <div className="contact__form-div">
              <label className="contact__form-tag">Name</label>
              <input
                type="text"
                name="name"
                className="contact__form-input"
                placeholder="Insert your name"
                required
              />
            </div>
            <div className="contact__form-div">
              <label className="contact__form-tag">Mail</label>
              <input
                type="email"
                name="email"
                className="contact__form-input"
                placeholder="Insert your email"
                required
              />
            </div>
            <div className="contact__form-div contact__form-area">
              <label className="contact__form-tag">Project</label>
              <textarea
                name="project"
                cols="30"
                rows="10"
                className="contact__form-input"
                placeholder="Write your message"
                required
              ></textarea>
            </div>
            <button href="#contact" className="button button--flex">
              Send Message
              <TbSend fontSize={21} className="send-icon" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
