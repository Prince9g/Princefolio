import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import alien from "../assets/contacts.png";
import contact from "../assets/alien.gif";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PulseLoader } from "react-spinners";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [pic, setPic] = useState(
    document.documentElement.classList.contains("dark") ? alien : contact
  );
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const isDark = document.documentElement.classList.contains("dark");
      setPic(isDark ? alien : contact);
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_evvvcqb",
        "template_a0mjiae",
        formData,
        "q6U-CxH_rSwXYf0yK"
      )
      .then(
        () => {
          toast.success("Message sent successfully! 🎉");
          setFormData({ name: "", email: "", message: "" });
        },
        () => {
          toast.error("Failed to send message. Please try again.");
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <div className="dark:text-white">
      <ToastContainer position="top-right" autoClose={3000} theme="colored" />
      <h2 className="text-center text-3xl font-bold font-serif border-b-2 m-10">
        Get in Touch
      </h2>
      <div className="md:flex md:items-center md:justify-between md:gap-4">
        {/* Image section */}
        <div className="md:flex md:items-center md:justify-center md:w-1/2">
          <img
            src={pic}
            alt="Contact GIF"
            className={`${pic === contact ? "" : "dark:md:h-[600px]"}`}
          />
        </div>

        {/* Contact form section */}
        <div className="m-4 md:m-0 md:flex md:items-center md:justify-center md:w-1/2">
          <form className="md:w-1/2 space-y-3" onSubmit={handleSubmit}>
            <div className="text-lg w-full font-semibold">
              Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="p-1 w-full border-2 rounded-lg dark:bg-slate-200 text-black"
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
                className="p-1 w-full border-2 rounded-lg dark:bg-slate-200 text-black"
              />
            </div>
            <div className="text-lg w-full font-semibold">
              Message:
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="p-1 w-full border-2 rounded-lg dark:bg-slate-200 text-black"
              />
            </div>
            <div className="mt-2">
              <button
                type="submit"
                disabled={loading}
                className={`p-3 text-lg rounded-full w-full bg-red-400 ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {loading ? (
                  <PulseLoader color="white" size={10} />
                ) : (
                  "Get in Touch"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
