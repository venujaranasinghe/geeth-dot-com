"use client"

import { FaUser } from "react-icons/fa" // Import the user icon

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <h1>Geeth Seneviratne</h1>
          <p>Computer Science undergraduate at SLIIT, passionate about technology and building innovative solutions.</p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <FaUser className="user-icon" />
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">© 2025 Geeth Seneviratne. All rights reserved.</p>
        <div className="footer-bottom-right">
          <p>Term of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>

      <style jsx>{`
        .footer {
          margin: 50px auto 0; /* Adjusted margin for bottom */
          display: flex;
          flex-direction: column;
          gap: 50px; /* Increased gap for more whitespace */
          max-width: 1200px; /* Max width for content */
          padding: 0 20px 50px; /* Horizontal padding and bottom padding */
          color: #212121; /* Deep charcoal for default text */
        }

        .footer-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start; /* Align items to the top */
          gap: 40px; /* Gap between left and right sections */
          flex-wrap: wrap; /* Allow wrapping on smaller screens */
        }

        .footer-top-left {
          flex: 1; /* Allow left section to grow */
          min-width: 300px; /* Minimum width before wrapping */
        }

        .footer-top-left h1 {
          color: #457b9d; /* Muted blue for name */
          font-size: 32px; /* Adjusted font size */
          font-weight: 700;
          margin-bottom: 15px;
        }

        .footer-top-left p {
          font-size: 17px; /* Adjusted font size */
          max-width: 450px; /* Constrain width for readability */
          color: #495057; /* Medium dark gray */
          line-height: 1.7;
        }

        .footer-top-right {
          display: flex;
          align-items: center;
          gap: 25px; /* Adjusted gap */
          flex-wrap: wrap; /* Allow wrapping for input/button */
          justify-content: flex-end; /* Align to right on desktop */
          flex: 1; /* Allow right section to grow */
          min-width: 300px; /* Minimum width before wrapping */
        }

        .footer-email-input {
          display: flex;
          align-items: center;
          gap: 15px; /* Gap between icon and input */
          padding: 12px 20px; /* Refined padding */
          border-radius: 40px; /* Consistent with other buttons */
          background-color: #f8f9fa; /* Very light background */
          border: 1px solid #e0e0e0; /* Light gray border */
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05); /* Subtle shadow */
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
          flex-grow: 1; /* Allow input to grow */
          max-width: 350px; /* Max width for input field */
        }

        .footer-email-input:hover {
          border-color: #a8dadc; /* Soft blue border on hover */
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .user-icon {
          font-size: 20px; /* Size of the icon */
          color: #a8dadc; /* Soft blue for icon */
        }

        .footer-email-input input {
          outline: none;
          border: none;
          background: transparent;
          color: #495057; /* Medium dark gray for input text */
          font-family: inherit; /* Inherit font from body */
          font-size: 16px; /* Adjusted font size */
          flex-grow: 1; /* Allow input to fill space */
        }

        .footer-email-input input::placeholder {
          color: #adb5bd; /* Lighter placeholder text */
        }

        .footer-subscribe {
          font-size: 16px;
          padding: 12px 30px; /* Refined padding */
          border-radius: 40px; /* Consistent with other buttons */
          background-color: #457b9d; /* Muted blue solid fill */
          color: white;
          cursor: pointer;
          transition: all 0.3s ease;
          font-weight: 600;
          white-space: nowrap; /* Prevent text wrapping */
        }

        .footer-subscribe:hover {
          transform: translateY(-3px); /* Subtle lift */
          background-color: #3a6a8d; /* Slightly darker blue on hover */
          box-shadow: 0 6px 15px rgba(69, 123, 157, 0.4); /* Enhanced shadow */
        }

        hr {
          border: none;
          height: 1px; /* Very thin line */
          background-color: #e0e0e0; /* Light gray for separator */
          width: 100%;
          margin: 30px 0; /* Spacing around the line */
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 15px; /* Adjusted font size */
          color: #495057; /* Medium dark gray */
          flex-wrap: wrap; /* Allow wrapping on smaller screens */
          gap: 20px; /* Gap for wrapped items */
        }

        .footer-bottom-left {
          flex-shrink: 0; /* Prevent copyright from shrinking */
        }

        .footer-bottom-right {
          display: flex;
          gap: 30px; /* Adjusted gap */
          flex-wrap: wrap; /* Allow wrapping for links */
          justify-content: flex-end; /* Align to right on desktop */
        }

        .footer-bottom-right p {
          cursor: pointer;
          transition: color 0.3s ease;
        }

        .footer-bottom-right p:hover {
          color: #457b9d; /* Muted blue on hover */
        }

        /* Media Queries for Responsiveness */
        @media (max-width: 1024px) {
          .footer {
            gap: 40px;
            padding: 0 15px 40px;
          }
          .footer-top {
            flex-direction: column; /* Stack on smaller desktops */
            align-items: center;
            text-align: center;
            gap: 30px;
          }
          .footer-top-left,
          .footer-top-right {
            width: 100%;
            max-width: 500px; /* Constrain width for readability */
            justify-content: center; /* Center content */
          }
          .footer-top-left h1 {
            font-size: 28px;
          }
          .footer-top-left p {
            font-size: 16px;
          }
          .footer-email-input {
            max-width: none; /* Allow full width within its container */
          }
          .footer-bottom {
            flex-direction: column-reverse; /* Stack and reverse order */
            align-items: center;
            text-align: center;
            gap: 15px;
          }
          .footer-bottom-right {
            justify-content: center; /* Center links */
            gap: 20px;
          }
        }

        @media (max-width: 768px) {
          .footer {
            margin: 40px auto 0;
            padding: 0 10px 30px;
            gap: 30px;
          }
          .footer-top-left h1 {
            font-size: 24px;
          }
          .footer-top-left p {
            font-size: 15px;
          }
          .footer-email-input {
            padding: 10px 15px;
            gap: 10px;
          }
          .user-icon {
            font-size: 18px;
          }
          .footer-email-input input {
            font-size: 14px;
          }
          .footer-subscribe {
            font-size: 14px;
            padding: 10px 25px;
          }
          .footer-bottom {
            font-size: 13px;
          }
          .footer-bottom-right {
            gap: 15px;
          }
        }
      `}</style>
    </div>
  )
}

export default Footer
