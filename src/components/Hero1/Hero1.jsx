"use client"
import { Link as ScrollLink } from "react-scroll"
import { FaLinkedin, FaFacebook, FaInstagram, FaGithub, FaTwitter } from "react-icons/fa"

// Reference your profile image directly from the public folder
// Make sure your image is located at public/profile_img.png
const profile_photo_url = "/profile_img.jpg"

const Hero = () => {
  return (
    <div id="home" className="hero">
      <div className="glass-card">
        <div className="hero-content-wrapper">
          <div className="hero-text-container">
            <div className="hello-animation">Hello!</div>
            <h1>
              I'm <span className="name-highlight">Geeth Seneviratne,</span>
            </h1>
            <p>
              I'm a second-year Computer Science Undergraduate at Sri Lanka Institute of Information Technology with
              technical skills to innovate and develop impactful solutions.
            </p>
            <div className="hero-action">
              <ScrollLink className="hero-connect" to="contact" smooth={true} duration={500} offset={-50}>
                Connect with Me
              </ScrollLink>
              <div className="hero-resume">My Resume</div>
            </div>
            <div className="social-container">
              <h4>Let's connect!</h4>
              <div className="social-icons">
                <a
                  href="https://www.linkedin.com/in/geethseneviratne/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <FaTwitter />
                </a>
                <a
                  href="https://www.facebook.com/share/1YfSjfV2Tu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://www.instagram.com/invites/contact/?igsh=1vbja1sbj1gxj&utm_content=1ub3bq1"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://github.com/geethsenaviratne"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
          <div className="hero-image-container">
            <img
              src={profile_photo_url || "/placeholder.svg"}
              alt="Geeth Seneviratne's Profile"
              className="profile-photo"
            />
          </div>
        </div>
      </div>
      <style jsx>{`
        .hero {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          padding: 50px 20px;
          position: relative;
          overflow: hidden;
          background-color: white; /* Changed to white background */
          color: #333; /* Default text color for white background */
        }

        /* Subtle grid pattern for nostalgic tech feel on white background */
        .hero::before {
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
        }
        .glass-card {
          background: rgba(255, 255, 255, 0.8); /* More opaque white glass for visibility on white */
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(0, 0, 0, 0.1); /* Subtle dark border */
          box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.08); /* Softer shadow */
          border-radius: 20px;
          padding: 60px;
          max-width: 1200px;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          z-index: 1; /* Ensure card is above the background pattern */
          position: relative; /* For z-index to work */
        }
        .hero-content-wrapper {
          display: flex;
          flex-direction: column; /* Stack on small screens */
          align-items: center;
          gap: 80px; /* Increased gap for more whitespace */
          width: 100%;
        }
        .hero-text-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          flex: 1;
        }
        .hero-image-container {
          flex: 0 0 auto;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .profile-photo {
          width: 280px;
          height: 280px;
          border-radius: 50%;
          object-fit: cover;
          border: 3px solid #66b2b2; /* Muted teal border */
          box-shadow: 0 0 20px rgba(102, 178, 178, 0.3); /* Soft glow with new accent */
          animation: fadeIn 1s ease-out 1.5s both;
        }
        .hello-animation {
          margin-top: 10px;
          font-size: 65px;
          font-weight: 600;
          color: #66b2b2; /* Muted teal */
          text-align: center;
          animation: continuousTypewriter 3s steps(6) infinite;
          overflow: hidden;
          white-space: nowrap;
          width: 6ch;
        }
        @keyframes continuousTypewriter {
          0% {
            width: 0;
          }
          50% {
            width: 6ch;
          }
          100% {
            width: 0;
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideInFromLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .hero h1 {
          text-align: center;
          width: 100%;
          font-size: 55px;
          font-weight: 700;
          animation: slideInFromLeft 1s ease-out 2s both;
          color: #212121; /* Dark text color for white background */
          margin-top: 20px;
        }
        .hero h1 .name-highlight {
          color: #66b2b2; /* Muted teal highlight for name */
        }
        .hero p {
          width: 80%;
          max-width: 650px;
          text-align: center;
          font-size: 19px;
          line-height: 1.7;
          animation: fadeInUp 1s ease-out 3.5s both;
          color: #495057; /* Medium dark gray for white background */
          margin-top: 20px;
        }
        .hero-action {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          gap: 25px;
          font-size: 18px;
          font-weight: 500;
          margin-top: 50px;
          animation: fadeInUp 1s ease-out 4s both;
        }
        .hero-connect {
          padding: 16px 32px;
          border-radius: 40px;
          background-color: #66b2b2; /* Muted teal solid fill */
          color: white;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(102, 178, 178, 0.3);
          transition: all 0.3s ease;
        }
        .hero-resume {
          padding: 16px 50px;
          border-radius: 40px;
          border: 2px solid #66b2b2; /* Muted teal border */
          color: #66b2b2; /* Muted teal text */
          cursor: pointer;
          background-color: transparent;
          transition: all 0.3s ease;
        }
        .hero-connect:hover {
          background-color: #509a9a; /* Slightly darker teal on hover */
          box-shadow: 0 6px 15px rgba(102, 178, 178, 0.4);
        }
        .hero-resume:hover {
          background-color: #66b2b2; /* Fill on hover */
          color: white;
          box-shadow: 0 6px 15px rgba(102, 178, 178, 0.4);
        }
        .social-container {
          margin-top: 70px;
          animation: fadeInUp 1s ease-out 4.5s both;
          width: 100%;
        }
        .social-container h4 {
          text-align: center;
          font-size: 24px;
          font-weight: 600;
          color: #212121; /* Dark text color for white background */
          margin-bottom: 25px;
        }
        .social-icons {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin-bottom: 50px;
        }
        .social-icons a {
          font-size: 26px;
          color: white;
          background-color: #66b2b2; /* Muted teal solid fill */
          border: none;
          border-radius: 50%;
          width: 50px;
          height: 50px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(102, 178, 178, 0.3);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .social-icons a:hover {
          transform: translateY(-5px);
          box-shadow: 0 6px 15px rgba(102, 178, 178, 0.4);
        }
        .social-icons a:active {
          transform: scale(0.95);
        }
        /* Responsive adjustments */
        @media (min-width: 769px) {
          .glass-card {
            padding: 80px; /* More padding on larger screens */
          }
          .hero-content-wrapper {
            flex-direction: row; /* Side-by-side on larger screens */
            justify-content: space-around;
            align-items: center;
          }
          .hero-text-container {
            align-items: flex-start;
            text-align: left;
            margin-right: 80px;
          }
          .hero h1,
          .hero p,
          .social-container h4 {
            text-align: left;
            width: auto;
          }
          .hero-action {
            justify-content: flex-start;
          }
          .social-icons {
            justify-content: flex-start;
          }
        }
        @media (max-width: 768px) {
          .glass-card {
            padding: 40px 20px; /* Less padding on small screens */
          }
          .profile-photo {
            width: 180px;
            height: 180px;
          }
          .hello-animation {
            font-size: 45px;
          }
          .hero h1 {
            font-size: 40px;
          }
          .hero p {
            font-size: 16px;
            width: 90%;
          }
          .hero-action {
            flex-direction: column;
            gap: 15px;
            font-size: 16px;
          }
          .hero-connect,
          .hero-resume {
            width: 80%;
            max-width: 280px;
            text-align: center;
            padding: 14px 20px;
          }
          .social-container h4 {
            font-size: 20px;
            margin-left: 0;
          }
          .social-icons a {
            font-size: 20px;
            width: 40px;
            height: 40px;
          }
        }
      `}</style>
    </div>
  )
}

export default Hero
