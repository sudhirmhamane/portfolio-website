import React from "react";
import ScrollReveal from '../../utils/ScrollReveal';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-graph text-white px-6">
      <ScrollReveal>
        <div className="text-center mb-12 mt-8">
          <h2 className="text-4xl font-bold text-blue-500">CONTACT ME</h2>
          <p className="italic text-gray-400 mt-2">
            "Let's connect — I'm just a message away!"
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left side: Info */}
          <div className="space-y-6">
            <p className="text-lg text-gray-300">
              Have a project idea, collaboration, or just want to say hi? Feel
              free to reach out!
            </p>
            <div>
              <h3 className="text-blue-400 font-semibold">Email</h3>
              <p className="text-gray-300">sudhirmhamane908@gmail.com</p>
            </div>
            <div>
              <h3 className="text-blue-400 font-semibold">Phone</h3>
              <p className="text-gray-300">+91 7796180024</p>
            </div>
            <div>
              <h3 className="text-blue-400 font-semibold">Location</h3>
              <p className="text-gray-300">Solapur, Maharashtra, India</p>
            </div>
          </div>

          {/* Right side: Contact Form */}
          <form
            action="https://formspree.io/f/xkgbjgvp"
            method="POST"
            className="bg-blue-500/10 border border-blue-400 rounded-xl p-6 shadow-lg space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-3 rounded bg-transparent border border-blue-300 text-white focus:outline-none focus:border-blue-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full p-3 rounded bg-transparent border border-blue-300 text-white focus:outline-none focus:border-blue-500"
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
              className="w-full p-3 rounded bg-transparent border border-blue-300 text-white focus:outline-none focus:border-blue-500"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default Contact;
