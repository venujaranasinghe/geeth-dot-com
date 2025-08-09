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
      <style jsx>{`
        .navbar {
          display: flex;
          align-items: center;
          justify-content: center; /* Center content horizontally */
          padding: 15px 40px; /* Adjusted padding for pill shape */
          background: rgba(255, 255, 255, 0.9); /* White glass background */
          backdrop-filter: blur(10px); /* Liquid glass effect */
          -webkit-backdrop-filter: blur(10px);
          border-radius: 50px; /* Pill shape */
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15); /* Subtle drop shadow */
          position: fixed; /* Fixed for floating */
          top: 20px; /* Distance from top */
          left: 50%; /* Start from center */
          transform: translateX(-50%); /* Pull back by half its width to truly center */
          z-index: 1000;
          max-width: 700px; /* Max width for the pill */
          width: 90%; /* Responsive width */
          box-sizing: border-box;
          transition: all 0.3s ease;
        }
        .nav-menu {
          display: flex;
          align-items: center;
          list-style: none;
          gap: 40px; /* Evenly spaced sections */
          margin: 0;
          padding: 0;
          width: 100%; /* Take full width of navbar for spacing */
          justify-content: space-around; /* Distribute items evenly */
        }
        .nav-menu li {
          cursor: pointer;
        }
        .anchor-link {
          text-decoration: none;
          color: #212121; /* Black text for high contrast */
          font-size: 17px;
          font-weight: 600; /* Slightly bolder for impact */
          position: relative;
          padding-bottom: 5px;
          transition: color 0.3s ease;
          white-space: nowrap; /* Prevent text wrapping */
        }
        .anchor-link::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background-color: #00e6e6; /* Vibrant accent color */
          transition: width 0.3s ease;
        }
        .anchor-link:hover {
          color: #00e6e6; /* Vibrant accent on hover */
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
          font-size: 30px;
          color: #212121; /* Black color for icons on white background */
          padding: 5px;
        }
        /* Mobile Styles */
        @media (max-width: 768px) {
          .navbar {
            padding: 15px 25px; /* Adjusted padding for mobile */
            border-radius: 10px; /* Less rounded for mobile */
            top: 15px; /* Closer to top on mobile */
            width: calc(100% - 30px); /* Full width with padding */
          }
          .nav-mob-open {
            display: block; /* Show open icon on mobile */
            position: absolute; /* Position relative to navbar */
            left: 20px; /* Align to left */
          }
          .nav-menu {
            position: fixed;
            top: 0;
            width: 280px; /* Mobile menu width */
            height: 100%;
            background: rgba(255, 255, 255, 0.98); /* More opaque white for mobile menu */
            backdrop-filter: blur(15px);
            -webkit-backdrop-filter: blur(15px);
            flex-direction: column;
            align-items: flex-start;
            gap: 25px;
            padding: 60px 25px;
            box-shadow: -5px 0 15px rgba(0, 0, 0, 0.3);
            transition: right 0.5s ease;
            z-index: 1001;
            right: -280px; /* Explicitly set closed position, matching width */
            justify-content: flex-start; /* Align items to top in column */
          }
          .nav-menu.nav-menu-open {
            right: 0; /* Slide in when open */
          }
          .nav-menu li {
            font-size: 20px;
            padding-left: 0;
            width: 100%;
          }
          .anchor-link {
            display: block;
            padding: 10px 0;
            color: #212121; /* Darker text for mobile menu links */
          }
          .anchor-link:hover {
            color: #00e6e6; /* Vibrant accent on hover */
          }
          .anchor-link::after {
            background-color: #00e6e6; /* Vibrant accent underline */
          }
          .nav-mob-close {
            display: block;
            position: absolute;
            top: 15px;
            right: 15px;
            color: #212121; /* Dark color for close icon */
          }
        }
        @media (max-width: 480px) {
          .navbar {
            padding: 10px 20px;
          }
          .nav-menu {
            width: 240px;
            right: -240px;
          }
        }
      `}</style>
    </div>
  )
}

export default Navbar
