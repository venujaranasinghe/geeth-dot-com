"use client"
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa" // Import icons

function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    formData.append("access_key", "614269f7-b3d6-44de-8d1a-2e0da19c4448") // Your Web3Forms Access Key
    const object = Object.fromEntries(formData)
    const json = JSON.stringify(object)
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json())
    if (res.success) {
      alert(res.message)
      event.target.reset() // Reset the form after successful submission
    } else {
      alert("Failed to send message. Please try again later.")
    }
  }

  return (
    <div id="contact" className="contact">
      <div className="contact-inner-content">
        <div className="contact-title">
          <h1 className="animated-title">Get in touch</h1>
          <div className="underline animated-underline"></div>
        </div>
        <div className="contact-section">
          <div className="contact-left animated-left">
            <h1>Let's talk</h1>
            <p>
              I'm currently available to take on new projects, so feel free to send me a message about anything that you
              want me to work on. You can contact anytime.
            </p>
            <div className="contact-details">
              <div className="contact-detail">
                <FaEnvelope className="contact-icon" /> <p>geeths2001@gmail.com</p>
              </div>
              <div className="contact-detail">
                <FaPhoneAlt className="contact-icon" /> <p>+94 70 663 3356</p>
              </div>
              <div className="contact-detail">
                <FaMapMarkerAlt className="contact-icon" /> <p>75/1, Anagarika Dharmapala Mawatha, Kandy</p>
              </div>
            </div>
          </div>
          <form onSubmit={onSubmit} className="contact-right animated-right">
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" placeholder="Enter Your Name" name="name" required />
            <label htmlFor="email">Your E-mail</label>
            <input type="email" id="email" placeholder="Enter Your E-mail" name="email" required />
            <label htmlFor="message">Write your message here</label>
            <textarea name="message" id="message" rows="8" placeholder="Enter your message" required></textarea>
            <button type="submit" className="contact-submit">
              Submit now
            </button>
          </form>
        </div>
      </div>
      <style jsx>{`
        .contact {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 80px 0; /* Vertical padding for the section */
          background-color: white; /* White background to match Hero/About */
          color: #333; /* Default text color for white background */
          position: relative;
          overflow: hidden;
          width: 100%; /* Ensure it takes full width */
        }
        /* Subtle grid pattern for nostalgic tech feel on white background */
        .contact::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: linear-gradient(0deg, transparent 24%, rgba(0, 0, 0, 0.03) 25%, rgba(0, 0, 0, 0.03) 26%, transparent 27%),
                            linear-gradient(90deg, transparent 24%, rgba(0, 0, 0, 0.03) 25%, rgba(0, 0, 0, 0.03) 26%, transparent 27%);
          background-size: 50px 50px;
          pointer-events: none;
          z-index: 0;
          animation: backgroundPan 60s linear infinite; /* Slow pan animation */
        }
        .contact-inner-content { /* New wrapper for content */
          max-width: 1200px; /* Max width for content */
          margin: 0 auto; /* Center content */
          padding: 0 20px; /* Horizontal padding for content */
          width: 100%; /* Ensure it takes full width within max-width */
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 80px; /* Gap between main sections within the content wrapper */
          position: relative; /* For z-index to work */
          z-index: 1; /* Ensure content is above pattern */
        }
        .contact-title {
          position: relative;
          text-align: center;
        }
        .contact-title h1 {
          font-size: 65px; /* Consistent with other titles */
          font-weight: 700;
          color: #66b2b2; /* Muted teal to match aesthetic */
          margin-bottom: 15px;
          /* font-family is handled by global app.css */
        }
        .underline {
          width: 150px; /* Consistent with other underlines */
          height: 4px; /* Consistent with other underlines */
          background-color: #a0a0a0; /* Subtle light gray */
          border-radius: 2px;
          margin: 0 auto;
        }
        /* Animations for Contact section */
        .animated-title {
          opacity: 0;
          animation: fadeInUp 1s ease-out forwards;
        }
        .animated-underline {
          opacity: 0;
          animation: fadeIn 1s ease-out forwards 0.3s;
        }
        .animated-left {
          opacity: 0;
          animation: slideInFromLeft 0.8s ease-out forwards 0.6s;
        }
        .animated-right {
          opacity: 0;
          animation: fadeInUp 0.8s ease-out forwards 0.9s;
        }

        .contact-section {
          display: flex;
          gap: 100px; /* Generous gap between left and right sections */
          width: 100%;
          align-items: flex-start; /* Align items to the top */
        }
        .contact-left {
          display: flex;
          flex-direction: column;
          gap: 30px; /* Gap between elements in left column */
          flex: 1; /* Allow left column to grow */
        }
        .contact-left h1 {
          font-size: 48px; /* Adjusted font size */
          font-weight: 700;
          color: #66b2b2; /* Muted teal for "Let's talk" */
          margin-bottom: 10px;
        }
        .contact-left p {
          max-width: 500px; /* Constrain width for readability */
          color: #495057; /* Medium dark gray */
          font-size: 18px; /* Adjusted font size */
          line-height: 1.7; /* Improved line height */
        }
        .contact-details {
          display: flex;
          flex-direction: column;
          gap: 20px; /* Gap between contact details */
          color: #495057; /* Medium dark gray */
          font-size: 18px; /* Adjusted font size */
        }
        .contact-detail {
          display: flex;
          align-items: center;
          gap: 15px; /* Gap between icon and text */
        }
        .contact-icon {
          font-size: 24px; /* Size of the icons */
          color: #66b2b2; /* Muted teal for icons */
        }
        .contact-right {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 25px; /* Gap between form elements */
          flex: 1.2; /* Allow form to take more space */
          background: rgba(255, 255, 255, 0.7); /* Subtle white glass background for form */
          padding: 40px;
          border-radius: 12px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05); /* Soft shadow */
          border: 1px solid rgba(0, 0, 0, 0.08); /* Light gray border */
        }
        .contact-right label {
          color: #212121; /* Deep charcoal for labels */
          font-size: 18px; /* Adjusted font size */
          font-weight: 500;
          margin-bottom: -10px; /* Pull label closer to input */
        }
        .contact-right input,
        .contact-right textarea {
          border: 1px solid #ced4da; /* Light gray border */
          width: 100%; /* Full width */
          padding: 15px 20px; /* Generous padding */
          border-radius: 8px; /* Slightly rounded corners */
          background-color: white; /* White background for inputs */
          color: #495057; /* Medium dark gray for input text */
          font-family: inherit; /* Inherit font from body */
          font-size: 17px; /* Adjusted font size */
          box-sizing: border-box; /* Include padding in width */
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }
        .contact-right input:focus,
        .contact-right textarea:focus {
          outline: none;
          border-color: #66b2b2; /* Muted teal border on focus */
          box-shadow: 0 0 0 3px rgba(102, 178, 178, 0.3); /* Subtle focus ring */
        }
        .contact-right textarea {
          min-height: 150px; /* Minimum height for textarea */
          resize: vertical; /* Allow vertical resizing */
        }
        .contact-submit {
          border: 2px solid #66b2b2; /* Muted teal border */
          color: white;
          border-radius: 40px; /* Consistent with other buttons */
          background-color: #66b2b2; /* Muted teal solid fill */
          font-size: 18px;
          padding: 15px 40px; /* Refined padding */
          margin-top: 10px; /* Space from last input */
          cursor: pointer;
          transition: all 0.3s ease;
          font-weight: 600;
          align-self: flex-end; /* Align button to the right */
        }
        .contact-submit:hover {
          transform: translateY(-3px); /* Subtle lift */
          background-color: #509a9a; /* Slightly darker teal on hover */
          box-shadow: 0 6px 15px rgba(102, 178, 178, 0.4); /* Enhanced shadow */
        }
        /* Media Queries for Responsiveness */
        @media (max-width: 1024px) {
          .contact-inner-content {
            gap: 60px;
          }
          .contact-title h1 {
            font-size: 55px;
          }
          .contact-section {
            gap: 60px;
            flex-direction: column; /* Stack on smaller desktops */
            align-items: center;
          }
          .contact-left,
          .contact-right {
            width: 90%; /* Adjust width for stacked columns */
            max-width: 600px; /* Max width for readability */
            text-align: center; /* Center text on smaller screens */
            align-items: center; /* Center items in left column */
          }
          .contact-left p {
            text-align: center;
          }
          .contact-details {
            align-items: center; /* Center contact details */
          }
          .contact-right {
            padding: 30px;
          }
          .contact-right label {
            align-self: flex-start; /* Keep labels left-aligned in form */
          }
          .contact-submit {
            align-self: center; /* Center submit button */
          }
        }
        @media (max-width: 768px) {
          .contact {
            padding: 40px 0; /* Adjust vertical padding for mobile */
          }
          .contact-inner-content {
            gap: 50px;
            padding: 0 15px;
          }
          .contact-title h1 {
            font-size: 45px;
          }
          .underline {
            width: 100px;
          }
          .contact-section {
            gap: 40px;
          }
          .contact-left h1 {
            font-size: 38px;
          }
          .contact-left p {
            font-size: 16px;
            line-height: 1.6;
          }
          .contact-details {
            font-size: 16px;
            gap: 15px;
          }
          .contact-icon {
            font-size: 20px;
          }
          .contact-right {
            padding: 25px;
            gap: 20px;
          }
          .contact-right label {
            font-size: 16px;
          }
          .contact-right input,
          .contact-right textarea {
            padding: 12px 15px;
            font-size: 15px;
          }
          .contact-right textarea {
            min-height: 120px;
          }
          .contact-submit {
            font-size: 16px;
            padding: 12px 30px;
          }
        }
      `}</style>
    </div>
  )
}

export default Contact
