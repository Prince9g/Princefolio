import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import alien from "../assets/alien.gif";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .send(
        "service_evvvcqb", // Replace with your EmailJS Service ID
        "template_a0mjiae", // Replace with your EmailJS Template ID
        formData,
        "q6U-CxH_rSwXYf0yK" // Replace with your EmailJS Public Key
      )
      .then(
        (response) => {
          console.log("Email sent successfully!", response);
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.log("Failed to send email.", error);
          setStatus("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div>
      <h2 className="text-center text-3xl font-bold font-serif border-b-2 m-10">
        Get in Touch
      </h2>
      <div className="md:flex">
        {/* Image section */}
        <div>
          <img src={alien} alt="Alien GIF" />
        </div>

        {/* Contact form section */}
        <div className="m-4 md:m-0 md:flex md:items-center md:justify-center md:w-1/2">
          <form
            className="md:w-1/2 space-y-3"
            onSubmit={handleSubmit}
          >
            <div className="text-lg w-full font-semibold">
              Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="p-1 w-full border-2 rounded-lg"
              />
            </div>
            <div className="text-lg w-full font-semibold">
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="p-1 w-full border-2 rounded-lg"
              />
            </div>
            <div className="text-lg w-full font-semibold">
              Message:
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="p-1 w-full border-2 rounded-lg"
              />
            </div>
            <div className="mt-2">
              <button
                type="submit"
                className="p-3 text-lg rounded-full w-full bg-red-400"
              >
                Get in Touch
              </button>
            </div>
            {status && <p className="text-center mt-2">{status}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
