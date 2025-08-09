"use client" // This is not strictly necessary for Vite, but harmless if copied from Next.js context
import { Link as ScrollLink } from "react-scroll"
import { FaLinkedin, FaFacebook, FaInstagram, FaGithub, FaTwitter } from "react-icons/fa"

// Reference your profile image directly from the public folder
// Make sure your image is located at public/profile_img.jpg
const profile_photo_url = "/profile_img.jpg"

const Hero = () => {
  return (
    <div id="home" className="hero">
      <div className="hero-content-wrapper">
        <div className="hero-text-container">
          <div className="hello-animation">Hello!</div>
          <h1>
            I'm <span>Geeth Seneviratne,</span>
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

      <style jsx>{`
        .hero {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          padding: 50px 20px; /* Adjusted padding */
          position: relative;
          overflow: hidden;
          color: #333; /* Darker text for white background */
          background-color: white; /* Ensure hero itself is white */
        }

        .hero-content-wrapper {
          display: flex;
          flex-direction: column; /* Stack on small screens */
          align-items: center;
          gap: 60px; /* Increased gap for better spacing */
          max-width: 1200px;
          width: 100%;
          padding: 20px;
        }

        .hero-text-container {
          display: flex;
          flex-direction: column;
          align-items: center; /* Center text content */
          text-align: center;
          flex: 1; /* Allows text to take available space */
        }

        .hero-image-container {
          flex: 0 0 auto; /* Prevents image from shrinking */
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .profile-photo {
          width: 300px; /* Fixed size for elegance */
          height: 300px;
          border-radius: 50%; /* Circular image */
          object-fit: cover;
          border: 8px solid #b415ff; /* Elegant border */
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2); /* Soft shadow */
          animation: fadeIn 1s ease-out 1.5s both; /* Fade in animation */
        }

        .hello-animation {
          margin-top: 10px;
          font-size: 70px; /* Slightly smaller for balance */
          font-weight: 600;
          background: linear-gradient(264deg, #df8908 -5.09%, #b415ff 106.28%); /* Gradient for "Hello!" */
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-align: center;
          animation: continuousTypewriter 3s steps(6) infinite;
          overflow: hidden;
          white-space: nowrap;
          width: 6ch;
        }
        @keyframes continuousTypewriter {
          0% { width: 0; }
          50% { width: 6ch; }
          100% { width: 0; }
        }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInFromLeft {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .hero h1 {
          text-align: center;
          width: 100%; /* Adjusted width */
          font-size: 60px; /* Slightly smaller for balance */
          font-weight: 700; /* Bolder */
          animation: slideInFromLeft 1s ease-out 2s both;
          color: #333; /* Darker color for contrast */
          margin-top: 20px;
        }
        .hero h1 span {
          background: linear-gradient(264deg, #df8908 -5.09%, #b415ff 106.28%); /* Gradient for name */
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .hero p {
          width: 80%; /* Adjusted width */
          max-width: 700px;
          text-align: center;
          font-size: 20px; /* Slightly smaller */
          line-height: 1.8; /* Improved line height */
          animation: fadeInUp 1s ease-out 3.5s both;
          color: #555; /* Softer dark color */
          margin-top: 20px;
        }
        .hero-action {
          display: flex;
          flex-wrap: wrap; /* Allow wrapping on small screens */
          align-items: center;
          justify-content: center;
          gap: 20px; /* Adjusted gap */
          font-size: 20px; /* Adjusted font size */
          font-weight: 500;
          margin-top: 40px; /* Increased margin */
          animation: fadeInUp 1s ease-out 4s both;
        }
        .hero-connect {
          padding: 18px 35px; /* Adjusted padding */
          border-radius: 50px;
          background: linear-gradient(264deg, #df8908 -5.09%, #b415ff 106.28%);
          color: white;
          cursor: pointer;
          box-shadow: 0 8px 20px rgba(180, 21, 255, 0.3); /* Softer shadow */
        }
        .hero-resume {
          padding: 18px 55px; /* Adjusted padding */
          border-radius: 50px;
          border: 2px solid #b415ff; /* Border color matching gradient */
          color: #b415ff; /* Text color matching border */
          cursor: pointer;
          background-color: transparent; /* Transparent background */
        }
        .hero-connect:hover,
        .hero-resume:hover {
          transform: translateY(-5px); /* Lift effect */
          transition: all 0.4s ease;
          box-shadow: 0 12px 25px rgba(180, 21, 255, 0.4); /* Enhanced shadow on hover */
        }
        .hero-connect:hover {
          border: 2px solid #b415ff; /* Keep border consistent */
        }
        .hero-resume:hover {
          background: linear-gradient(264deg, #df8908 -5.09%, #b415ff 106.28%); /* Fill on hover */
          color: white;
        }
        .social-container {
          margin-top: 60px; /* Increased margin */
          animation: fadeInUp 1s ease-out 4.5s both;
          width: 100%;
        }
        .social-container h4 {
          text-align: center;
          font-size: 26px; /* Adjusted font size */
          font-weight: 600;
          color: #333;
          margin-bottom: 20px;
        }
        .social-icons {
          display: flex;
          justify-content: center;
          gap: 20px; /* Adjusted gap */
          margin-bottom: 50px;
        }
        .social-icons a {
          font-size: 28px; /* Larger icons */
          color: white;
          background: linear-gradient(264deg, #df8908 -5.09%, #b415ff 106.28%);
          border: none;
          border-radius: 50%; /* Circular social icons */
          width: 55px; /* Fixed size */
          height: 55px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 6px 18px rgba(180, 21, 255, 0.4);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .social-icons a:hover {
          transform: translateY(-8px); /* More pronounced lift */
          box-shadow: 0 10px 25px rgba(180, 21, 255, 0.6);
        }
        .social-icons a:active {
          transform: scale(0.9);
        }

        /* Responsive adjustments */
        @media (min-width: 769px) {
          .hero-content-wrapper {
            flex-direction: row; /* Side-by-side on larger screens */
            justify-content: space-around; /* Distribute space */
            align-items: center;
            text-align: left; /* Align text to left */
          }
          .hero-text-container {
            align-items: flex-start; /* Align text to left */
            text-align: left;
            margin-right: 50px; /* Space between text and image */
          }
          .hero h1,
          .hero p,
          .social-container h4 {
            text-align: left; /* Align text to left */
            width: auto; /* Remove fixed width */
          }
          .hero-action {
            justify-content: flex-start; /* Align buttons to left */
          }
          .social-icons {
            justify-content: flex-start; /* Align social icons to left */
          }
        }

        @media (max-width: 768px) {
          .profile-photo {
            width: 200px;
            height: 200px;
          }
          .hello-animation {
            font-size: 50px;
          }
          .hero h1 {
            font-size: 45px;
          }
          .hero p {
            font-size: 18px;
            width: 90%;
          }
          .hero-action {
            flex-direction: column; /* Stack buttons on small screens */
            gap: 15px;
            font-size: 18px;
          }
          .hero-connect,
          .hero-resume {
            width: 80%; /* Make buttons wider */
            max-width: 300px;
            text-align: center;
            padding: 15px 25px;
          }
          .social-container h4 {
            font-size: 22px;
            margin-left: 0;
          }
          .social-icons a {
            font-size: 22px;
            width: 45px;
            height: 45px;
          }
        }
      `}</style>
    </div>
  )
}

export default Hero
