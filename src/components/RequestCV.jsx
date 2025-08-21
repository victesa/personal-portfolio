import { useState } from "react";
import "../components/RequestCV.css";

function RequestCV() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("https://personal-portfolio-backend-z4an.onrender.com/request-cv", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus("✅ CV request sent! Check your email.");
        setEmail("");
      } else {
        setStatus("❌ Something went wrong. Try again.");
      }
    } catch (err) {
      console.error(err);
      setStatus("⚠️ Network error. Please try again later.");
    }
  };

  return (
    <div className="request_CV_div" id="CV">
      <div className="request_CV_div_container">
        <h1>Love my work?</h1>
        <h1>Request Resume</h1>

        <p>
          Enter your email and have my CV instantly sent to your email in PDF
          and Word format
        </p>

        <form className="email_input" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input type="submit" id="submit_button" value="Request" />
        </form>

        {status && <p style={{ marginTop: "10px", color: "#ccc" }}>{status}</p>}
      </div>
    </div>
  );
}

export default RequestCV;
