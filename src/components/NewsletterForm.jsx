import { FaPhone } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";

import { useState } from "react";

const NewsletterForm = () => {
  const [newsletterEmail, setNewsletterEmail] = useState("");

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: newsletterEmail }),
      });
      const data = await response.json();
      alert(data.message);
      setNewsletterEmail("");
    } catch (error) {
      console.error("Error subscribing to newsletter:", error);
    }
  };

  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Newsletter</h3>
      <p>Sign up for updates about our work and events.</p>
      <form
        onSubmit={handleNewsletterSubmit}
        className="flex items-center mt-4"
      >
        <input
          type="email"
          placeholder="Email *"
          value={newsletterEmail}
          onChange={(e) => setNewsletterEmail(e.target.value)}
          required
          className="w-full p-3 border rounded-tl-lg mt-2 text-black"
        />
        <button
          type="submit"
          className="bg-orange-500 text-white py-4 px-4 rounded-br-lg mt-2"
        >
          Subscribe
        </button>
      </form>
      <h3 className="text-xl font-bold mt-2 mb-4">Contact Us</h3>
      <div>
        <p className="flex items-center space-y-4">
          <FaPhone className="mr-3" />
          +251-9123456789
        </p>
        <p className="flex items-center space-y-4">
          <MdOutlineEmail className="mr-3" /> info@eavo-ngo.org
        </p>
        <p className="flex items-center space-y-4">
          <CiLocationOn className="mr-3" /> Addis Ababa, Ethiopia, 1000
        </p>
      </div>
    </div>
  );
};

export default NewsletterForm;
