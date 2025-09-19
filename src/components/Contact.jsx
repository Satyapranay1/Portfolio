"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus("Sending...");

    const serviceID = "service_p93pjeg";
    const templateID = "template_5lv2l4m";
    const publicKey = "MBbJgtfmhfAXAeJlk";

    emailjs.send(serviceID, templateID, formData, publicKey)
      .then(() => {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      })
      .catch(() => {
        setStatus("Failed to send message. Please try again.");
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          Contact Me
        </h2>
        <p className="text-center text-gray-700 dark:text-gray-300 mb-10 text-lg">
          Feel free to reach out! I'd love to connect and collaborate on projects.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-8 flex flex-col gap-5 border border-transparent hover:border-blue-500/30 transition-all duration-300"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="p-4 rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 dark:focus:ring-purple-500 outline-none bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="p-4 rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 dark:focus:ring-purple-500 outline-none bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="p-4 rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 dark:focus:ring-purple-500 outline-none bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="p-4 rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 dark:focus:ring-purple-500 outline-none bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100"
          />

          <button
            type="submit"
            disabled={isLoading}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-3 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </form>

        {status && (
          <p className="mt-6 text-center text-blue-500 dark:text-purple-400 font-medium">
            {status}
          </p>
        )}
      </div>
    </section>
  );
}
