"use client"

import { useState, useEffect } from "react"
import { Link as ScrollLink } from "react-scroll"
import { Menu, X } from "lucide-react" // Import Lucide React icons

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const openMenu = () => {
    setIsMenuOpen(true)
    document.body.style.overflow = "hidden" // Prevent scrolling when menu is open
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
    document.body.style.overflow = "" // Re-enable scrolling
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

  // Close menu on route change (if using a router like Next.js router)
  // Or simply ensure body scroll is re-enabled if component unmounts
  useEffect(() => {
    return () => {
      document.body.style.overflow = "" // Clean up on unmount
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
          <ScrollLink className="anchor-link" to="certificates" smooth={true} duration={500} offset={-50} onClick={closeMenu}>
            Certificates
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
          max-width: 650px; /* Increased max width for additional menu item */
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
            right: -100vw; /* Start completely off-screen */
            width: 100vw; /* Full viewport width */
            max-width: 320px; /* Cap the max width for tablets */
            height: 100vh; /* Full viewport height */
            background: rgba(255, 255, 255, 0.98); /* More opaque white for mobile menu */
            backdrop-filter: blur(15px);
            -webkit-backdrop-filter: blur(15px);
            flex-direction: column;
            align-items: flex-start; /* Align items to the left */
            gap: 30px; /* Increased gap for better spacing */
            padding: 80px 30px; /* More generous padding */
            box-shadow: -5px 0 15px rgba(0, 0, 0, 0.3);
            transition: right 0.5s ease-in-out; /* Smoother transition */
            z-index: 1001;
            justify-content: flex-start; /* Align items to top in column */
            box-sizing: border-box; /* Include padding in width/height */
          }
          .nav-menu.nav-menu-open {
            right: 0; /* Slide in when open */
          }
          .nav-menu li {
            font-size: 20px; /* Larger font for mobile menu */
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
            top: 20px; /* Adjusted position */
            right: 20px; /* Adjusted position */
            color: #212121; /* Dark color for close icon */
            font-size: 30px; /* Larger icon */
          }
        }

        @media (max-width: 480px) {
          .navbar {
            padding: 8px 15px;
            width: calc(100% - 20px);
            top: 10px;
          }
          .nav-mob-open {
            left: 15px;
            font-size: 26px;
          }
          .nav-menu {
            max-width: 280px; /* Slightly smaller max-width for very small phones */
            padding: 60px 25px; /* Adjusted padding */
            gap: 25px; /* Adjusted gap */
          }
          .nav-menu li {
            font-size: 18px;
          }
          .nav-mob-close {
            top: 15px;
            right: 15px;
            font-size: 28px;
          }
        }

        @media (max-width: 375px) { /* Specific for very small phones like iPhone SE */
          .navbar {
            padding: 6px 10px;
            width: calc(100% - 16px);
            top: 8px;
          }
          .nav-mob-open {
            left: 10px;
            font-size: 24px;
          }
          .nav-menu {
            max-width: 240px; /* Even smaller max-width */
            padding: 50px 20px;
            gap: 20px;
          }
          .nav-menu li {
            font-size: 16px;
          }
          .nav-mob-close {
            top: 10px;
            right: 10px;
            font-size: 26px;
          }
        }
      `}</style>
    </div>
  )
}

export default Navbar
