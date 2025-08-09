"use client"

import { useState, useEffect } from "react"
import { Link as ScrollLink } from "react-scroll"
import { Menu, X } from "lucide-react" // Import Lucide React icons

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const openMenu = () => {
    setIsMenuOpen(true)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  // Effect to handle scroll transparency
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div className="navbar">
      {/* Mobile menu open icon */}
      <Menu onClick={openMenu} className="nav-mob-open" aria-label="Open navigation menu" />
      <ul className={`nav-menu ${isMenuOpen ? "nav-menu-open" : ""}`}>
        {/* Mobile menu close icon */}
        <X onClick={closeMenu} className="nav-mob-close" aria-label="Close navigation menu" />
        <li>
          <ScrollLink className="anchor-link" to="home" smooth={true} duration={500} offset={-50} onClick={closeMenu}>
            Home
          </ScrollLink>
        </li>
        <li>
          <ScrollLink className="anchor-link" to="about" smooth={true} duration={500} offset={-50} onClick={closeMenu}>
            About Me
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
            Services
          </ScrollLink>
        </li>
        <li>
          <ScrollLink className="anchor-link" to="work" smooth={true} duration={500} offset={-50} onClick={closeMenu}>
            Portfolio
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
            Contact
          </ScrollLink>
        </li>
      </ul>
      <style jsx>{`
        .navbar {
          display: flex;
          align-items: center;
          justify-content: center; /* Center content horizontally */
          padding: 10px 30px; /* Reduced padding for smaller size */
          background: ${isScrolled ? "rgba(255, 255, 255, 0.2)" : "rgba(255, 255, 255, 0.85)"}; /* Dynamic transparency */
          backdrop-filter: blur(15px); /* Increased blur for more liquid effect */
          -webkit-backdrop-filter: blur(15px);
          border-radius: 50px; /* Pill shape */
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1); /* Refined subtle drop shadow */
          border: 1px solid rgba(255, 255, 255, 0.2); /* Very subtle light border */
          position: fixed; /* Fixed for floating */
          top: 20px; /* Distance from top */
          left: 50%; /* Start from center */
          transform: translateX(-50%); /* Pull back by half its width to truly center */
          z-index: 1000;
          max-width: 550px; /* Reduced max width for a smaller pill */
          width: 90%; /* Responsive width */
          box-sizing: border-box;
          transition: all 0.3s ease; /* Smooth transition for transparency */
        }
        .nav-menu {
          display: flex;
          align-items: center;
          list-style: none;
          gap: 30px; /* Adjusted gap for smaller size */
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
          font-size: 16px; /* Slightly smaller font size */
          font-weight: 600; /* Slightly bolder for impact */
          position: relative;
          padding-bottom: 0; /* Remove padding for underline */
          transition: color 0.3s ease;
          white-space: nowrap; /* Prevent text wrapping */
        }
        .anchor-link::after {
          /* Removed underline effect */
          display: none;
        }
        .anchor-link:hover {
          color: #66b2b2; /* Muted teal on hover */
        }
        /* Mobile Menu Buttons */
        .nav-mob-open,
        .nav-mob-close {
          display: none; /* Hidden by default on desktop */
          cursor: pointer;
          background: none;
          border: none;
          font-size: 30px; /* Icon size */
          color: #212121; /* Black color for icons on white background */
          padding: 5px;
        }
        /* Mobile Styles */
        @media (max-width: 768px) {
          .navbar {
            padding: 10px 20px; /* Adjusted padding for mobile */
            border-radius: 10px; /* Less rounded for mobile */
            top: 15px; /* Closer to top on mobile */
            width: calc(100% - 30px); /* Full width with padding */
            max-width: none; /* Remove max-width constraint on mobile */
          }
          .nav-mob-open {
            display: block; /* Show open icon on mobile */
            position: absolute; /* Position relative to navbar */
            left: 20px; /* Align to left */
            font-size: 28px; /* Slightly smaller icon */
          }
          .nav-menu {
            position: fixed;
            top: 0;
            width: 80vw; /* Use viewport width for flexibility */
            max-width: 320px; /* Cap the max width for tablets */
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
            right: -80vw; /* Match width for closed position */
            justify-content: flex-start; /* Align items to top in column */
          }
          .nav-menu.nav-menu-open {
            right: 0; /* Slide in when open */
          }
          .nav-menu li {
            font-size: 18px; /* Slightly smaller font for mobile menu */
            padding-left: 0;
            width: 100%;
          }
          .anchor-link {
            display: block;
            padding: 10px 0;
            color: #212121; /* Darker text for mobile menu links */
          }
          .anchor-link:hover {
            color: #66b2b2; /* Muted teal on hover */
          }
          .nav-mob-close {
            display: block;
            position: absolute;
            top: 15px;
            right: 15px;
            color: #212121; /* Dark color for close icon */
            font-size: 28px; /* Slightly smaller icon */
          }
        }

        @media (max-width: 480px) {
          .navbar {
            padding: 8px 15px;
            width: calc(100% - 20px);
            top: 10px; /* Closer to top on smaller screens */
          }
          .nav-mob-open {
            left: 15px;
            font-size: 26px; /* Even smaller icon */
          }
          .nav-menu {
            width: 90vw; /* Even wider percentage for very small screens */
            max-width: 280px; /* Cap max width for very small screens */
            right: -90vw; /* Match width for closed position */
            padding: 50px 20px;
          }
          .nav-menu.nav-menu-open {
            right: 0;
          }
          .nav-menu li {
            font-size: 16px; /* Smaller font for very small screens */
          }
          .nav-mob-close {
            top: 10px;
            right: 10px;
            font-size: 26px; /* Even smaller icon */
          }
        }

        @media (max-width: 375px) { /* Specific for very small phones like iPhone SE */
          .navbar {
            padding: 6px 10px;
            width: calc(100% - 16px); /* Even tighter width */
            top: 8px;
          }
          .nav-mob-open {
            left: 10px;
            font-size: 24px;
          }
          .nav-menu {
            width: 95vw; /* Maximize width for tiny screens */
            max-width: 260px; /* Cap it */
            right: -95vw;
            padding: 40px 15px;
          }
          .nav-menu.nav-menu-open {
            right: 0;
          }
          .nav-menu li {
            font-size: 15px;
          }
          .nav-mob-close {
            top: 8px;
            right: 8px;
            font-size: 24px;
          }
        }
      `}</style>
    </div>
  )
}

export default Navbar
