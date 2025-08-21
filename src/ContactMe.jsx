import { useState } from "react";
import Footer from "./components/Footer";
import "./ContactMe.css";

function ContactMe() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setStatus("Sending...");

    try {
      const res = await fetch("https://personal-portfolio-backend-z4an.onrender.com/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("❌ Failed to send message. Try again.");
      }
    } catch (err) {
      console.error(err);
      setStatus("⚠️ Network error. Please try again later.");
    }
  };

  return (
    <div className="contact-form">
      <div className="request_CV_div">
        <div className="request_CV_div_container">
          <h1>Let's Connect</h1>
          <p>Fill in the form and I'll get back to you as soon as possible</p>

          <div className="row">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Enter your message...."
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <div style={{ width: "80%" }}>
            <button
              type="button"
              className="send-btn"
              onClick={handleSubmit}
            >
              SEND MESSAGE
            </button>
          </div>

          {status && <p>{status}</p>}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ContactMe;
