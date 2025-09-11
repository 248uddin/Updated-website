import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3cf4p4v",
        "template_l81nx3l",
        form.current,
        "G4JolKxBvXdBC4Agz"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact" className="relative min-h-screen flex flex-col items-center justify-center lg:px-48 px-10 pt-32 gap-12">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 60, damping: 20 }}
        viewport={{ once: true }}
        className="text-4xl md:text-6xl font-bold mb-6 text-white-500"
      >
        Contact Me
      </motion.h2>

      <motion.form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col w-full max-w-xl gap-4"
      >
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          className="p-4 rounded-lg border border-green-500 bg-black/60 text-white"
          required
        />
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          className="p-4 rounded-lg border border-green-500 bg-black/60 text-white"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          className="p-4 rounded-lg border border-green-500 bg-black/60 text-white"
          rows={6}
          required
        />
        <button
          type="submit"
          className="bg-green-500 text-black font-bold px-6 py-3 rounded-lg hover:bg-green-400 transition"
        >
          Send
        </button>
        {success && <p className="text-green-400 mt-2">Message sent successfully!</p>}
      </motion.form>
    </section>
  );
};

export default Contact;