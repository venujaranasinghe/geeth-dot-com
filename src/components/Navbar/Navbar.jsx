"use client"

import { useState } from "react"
import { Link as ScrollLink } from "react-scroll"
import { FaBars, FaTimes } from "react-icons/fa" // Import icons

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const openMenu = () => {
    setIsMenuOpen(true)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <div className="navbar">
      {/* Mobile menu open icon */}
      <FaBars onClick={openMenu} className="nav-mob-open" aria-label="Open navigation menu" />

      <ul className={`nav-menu ${isMenuOpen ? "nav-menu-open" : ""}`}>
        {/* Mobile menu close icon */}
        <FaTimes onClick={closeMenu} className="nav-mob-close" aria-label="Close navigation menu" />
        <li>
          <ScrollLink className="anchor-link" to="home" smooth={true} duration={500} offset={-50} onClick={closeMenu}>
            <p>Home</p>
          </ScrollLink>
        </li>
        <li>
          <ScrollLink className="anchor-link" to="about" smooth={true} duration={500} offset={-50} onClick={closeMenu}>
            <p>About Me</p>
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            className="anchor-link"
            to="services"
            smooth={true}
            duration={500}
            offset={-50}
            onClick={closeMenu}
          >
            <p>Services</p>
          </ScrollLink>
        </li>
        <li>
          <ScrollLink className="anchor-link" to="work" smooth={true} duration={500} offset={-50} onClick={closeMenu}>
            <p>Portfolio</p>
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            className="anchor-link"
            to="contact"
            smooth={true}
            duration={500}
            offset={-50}
            onClick={closeMenu}
          >
            <p>Contact</p>
          </ScrollLink>
        </li>
      </ul>
      <ScrollLink className="nav-contact" to="contact" smooth={true} duration={500} offset={-50}>
        Connect with Me
      </ScrollLink>

      <style jsx>{`
        .navbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 80px; /* Generous padding */
          background-color: #2c3e50; /* Deep, muted blue-gray */
          position: sticky;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          width: 100%;
          box-sizing: border-box;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15); /* Subtle shadow */
          transition: background-color 0.3s ease;
        }

        .nav-menu {
          display: flex;
          align-items: center;
          list-style: none;
          gap: 50px; /* Increased gap for minimalism */
          font-size: 18px;
          margin: 0;
          padding: 0;
        }

        .nav-contact {
          padding: 12px 30px; /* Refined padding */
          border-radius: 40px; /* Softer border-radius */
          background-color: #457b9d; /* Muted blue accent */
          font-size: 18px;
          cursor: pointer;
          color: #e0e0e0; /* Light text on button */
          font-weight: 600;
          transition: all 0.3s ease;
          border: 2px solid transparent; /* For hover effect */
        }

        .nav-contact:hover {
          transform: translateY(-3px); /* Subtle lift */
          background-color: #3a6a8d; /* Slightly darker blue on hover */
          box-shadow: 0 5px 15px rgba(69, 123, 157, 0.4); /* Enhanced shadow */
        }

        .nav-menu li {
          cursor: pointer;
        }

        .anchor-link {
          text-decoration: none;
          color: #e0e0e0; /* Light gray text */
          font-size: 17px; /* Slightly smaller for elegance */
          font-weight: 500; /* Medium weight */
          position: relative;
          padding-bottom: 5px; /* Space for underline */
          transition: color 0.3s ease;
        }

        .anchor-link::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px; /* Thinner underline */
          background-color: #a8dadc; /* Soft blue underline */
          transition: width 0.3s ease;
        }

        .anchor-link:hover {
          color: #a8dadc; /* Soft blue on hover */
        }

        .anchor-link:hover::after {
          width: 100%;
        }

        /* Mobile Menu Buttons */
        .nav-mob-open,
        .nav-mob-close {
          display: none; /* Hidden by default on desktop */
          cursor: pointer;
          background: none;
          border: none;
          font-size: 30px; /* Larger icons for touch */
          color: #e0e0e0; /* Light color for icons */
          padding: 5px;
        }

        /* Mobile Styles */
        @media (max-width: 768px) {
          .navbar {
            padding: 15px 25px; /* Adjusted padding for mobile */
          }
          .nav-contact {
            display: none;
          }
          .nav-mob-open {
            display: block; /* Show open icon on mobile */
          }
          .nav-menu {
            position: fixed;
            top: 0;
            width: 280px; /* Mobile menu width */
            height: 100%;
            background-color: #2c3e50; /* Same dark background */
            flex-direction: column;
            align-items: flex-start;
            gap: 25px; /* Adjusted gap */
            padding: 60px 25px; /* Adjusted padding */
            box-shadow: -5px 0 15px rgba(0, 0, 0, 0.3); /* Clearer shadow */
            transition: right 0.5s ease; /* Smooth transition */
            z-index: 1001;
            right: -280px; /* Explicitly set closed position, matching width */
          }
          .nav-menu.nav-menu-open {
            right: 0; /* Slide in when open */
          }
          .nav-menu li {
            font-size: 20px; /* Adjusted font size */
            padding-left: 0; /* Remove padding */
            width: 100%; /* Full width for touch targets */
          }
          .anchor-link {
            display: block; /* Make links block-level for easier tapping */
            padding: 10px 0;
          }
          .nav-mob-close {
            display: block; /* Show close icon on mobile */
            position: absolute;
            top: 15px;
            right: 15px;
          }
        }
      `}</style>
    </div>
  )
}

export default Navbar
