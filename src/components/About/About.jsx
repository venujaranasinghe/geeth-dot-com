"use client"

// Reference your profile image directly from the public folder
// Make sure your image is located at public/profile_img.jpg
const profile_photo_url = "/profile_img.jpg"

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-inner-content">
        <div className="about-title">
          <h1 className="animated-title">About me</h1>
          <div className="underline animated-underline"></div>
        </div>
        <div className="about-section">
          <div className="about-left">
            <img src={profile_photo_url || "/placeholder.svg"} alt="Profile" className="profile-image animated-image" />
          </div>
          <div className="about-right">
            <div className="about-para">
              <p className="animated-para">
                As an undergraduate in Computer Science at Sri Lanka Institute of Information Technology (SLIIT), I have
                a strong foundation in programming languages, including C, Python, Java, and Arduino. My expertise
                extends to web development, database management, and front-end technologies like React and Tailwind CSS.
              </p>
              <p className="animated-para" style={{ animationDelay: "0.3s" }}>
                I have a passion for creating efficient and user-friendly software solutions, whether it’s developing
                dynamic web applications or building innovative hardware projects with Arduino. My experience spans
                across diverse projects, including eCommerce platforms, smart systems, and APIs, showcasing my ability
                to solve complex problems through technology.
              </p>
              <p className="animated-para" style={{ animationDelay: "0.6s" }}>
                I am committed to continuous learning and staying updated with industry trends, aiming to contribute to
                impactful projects that blend creativity, functionality, and technical excellence.
              </p>
            </div>
            <div className="about-skills">
              <div className="about-skill animated-skill" style={{ animationDelay: "0.9s" }}>
                <p>HTML & CSS</p>
                <div className="skill-bar-container">
                  <div className="skill-bar-fill" style={{ width: "90%" }}></div>
                </div>
              </div>
              <div className="about-skill animated-skill" style={{ animationDelay: "1.1s" }}>
                <p>React JS</p>
                <div className="skill-bar-container">
                  <div className="skill-bar-fill" style={{ width: "75%" }}></div>
                </div>
              </div>
              <div className="about-skill animated-skill" style={{ animationDelay: "1.3s" }}>
                <p>Java</p>
                <div className="skill-bar-container">
                  <div className="skill-bar-fill" style={{ width: "85%" }}></div>
                </div>
              </div>
              <div className="about-skill animated-skill" style={{ animationDelay: "1.5s" }}>
                <p>Python</p>
                <div className="skill-bar-container">
                  <div className="skill-bar-fill" style={{ width: "70%" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-achievements">
          <div className="achievement-card animated-achievement" style={{ animationDelay: "1.8s" }}>
            <div className="about-achievement">
              <h1>01+</h1>
              <p>YEAR OF EXPERIENCE</p>
            </div>
          </div>
          <div className="vertical-line"></div>
          <div className="achievement-card animated-achievement" style={{ animationDelay: "2.1s" }}>
            <div className="about-achievement">
              <h1>05+</h1>
              <p>PROJECTS COMPLETED</p>
            </div>
          </div>
          <div className="vertical-line"></div>
          <div className="achievement-card animated-achievement" style={{ animationDelay: "2.4s" }}>
            <div className="about-achievement">
              <h1>01+</h1>
              <p>HAPPY CLIENTS</p>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .about {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 80px 0; /* Vertical padding for the section */
          background-color: white; /* White background to match Hero/About */
          color: #333; /* Default text color for white background */
          position: relative;
          overflow-x: hidden; /* Prevent horizontal scrolling */
          width: 100%; /* Ensure it takes full width */
          box-sizing: border-box; /* Include padding in width calculation */
        }
        /* Subtle grid pattern for nostalgic tech feel on white background */
        .about::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: linear-gradient(
              0deg,
              transparent 24%,
              rgba(0, 0, 0, 0.03) 25%,
              rgba(0, 0, 0, 0.03) 26%,
              transparent 27%
            ),
            linear-gradient(
              90deg,
              transparent 24%,
              rgba(0, 0, 0, 0.03) 25%,
              rgba(0, 0, 0, 0.03) 26%,
              transparent 27%
            );
          background-size: 50px 50px;
          pointer-events: none;
          z-index: 0;
          animation: backgroundPan 60s linear infinite; /* Slow pan animation */
        }

        /* Reduce background animation on mobile for better performance */
        @media (max-width: 768px) {
          .about::before {
            animation: none; /* Disable animation on mobile for better performance */
            background-size: 30px 30px; /* Smaller pattern for mobile */
          }
          
          /* Reduce motion for users who prefer it */
          @media (prefers-reduced-motion: reduce) {
            .animated-title,
            .animated-underline,
            .animated-image,
            .animated-para,
            .animated-skill,
            .animated-achievement {
              animation: none;
              opacity: 1;
            }
            
            .about::before {
              animation: none;
            }
          }
        }
        .about-inner-content {
          max-width: 1200px; /* Max width for content */
          margin: 0 auto; /* Center content */
          padding: 0 20px; /* Horizontal padding for content */
          width: 100%; /* Ensure it takes full width within max-width */
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 100px; /* Gap between main sections within the content wrapper */
          position: relative; /* For z-index to work */
          z-index: 1; /* Ensure content is above pattern */
          box-sizing: border-box; /* Include padding in width calculation */
        }
        .about-title {
          position: relative;
          text-align: center;
        }
        .about-title h1 {
          font-size: 65px; /* Adjusted font size */
          font-weight: 700;
          color: #66b2b2; /* Changed to muted teal */
          margin-bottom: 15px;
        }
        .underline {
          width: 150px; /* Shorter underline */
          height: 4px; /* Thinner underline */
          background-color: #a0a0a0; /* Changed to a slightly darker light gray */
          border-radius: 2px;
          margin: 0 auto;
        }
        /* Animations for About section */
        .animated-title {
          opacity: 0;
          animation: fadeInUp 1s ease-out forwards;
        }
        .animated-underline {
          opacity: 0;
          animation: fadeIn 1s ease-out forwards 0.3s;
        }
        .animated-image {
          opacity: 0;
          animation: fadeIn 1s ease-out forwards 0.6s;
        }
        .animated-para {
          opacity: 0;
          animation: fadeInUp 0.8s ease-out forwards; /* Staggered delay applied inline */
        }
        .animated-skill {
          opacity: 0;
          animation: slideInFromLeft 0.8s ease-out forwards; /* Staggered delay applied inline */
        }
        .animated-achievement {
          opacity: 0;
          animation: fadeInUp 0.8s ease-out forwards; /* Staggered delay applied inline */
        }

        /* Keyframe animations */
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

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
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

        @keyframes backgroundPan {
          0% {
            background-position: 0px 0px;
          }
          100% {
            background-position: 50px 50px;
          }
        }
        .about-section {
          display: flex;
          gap: 80px; /* Generous gap between image and text */
          align-items: flex-start; /* Align items to the top */
          width: 100%;
        }
        .about-left {
          flex-shrink: 0; /* Prevent image from shrinking */
        }
        .profile-image {
          width: 320px; /* Slightly smaller for elegance */
          height: 320px;
          object-fit: cover;
          border-radius: 10px; /* Slightly rounded corners */
          border: 3px solid #66b2b2; /* Muted teal border to match Hero */
          box-shadow: 0 10px 30px rgba(102, 178, 178, 0.3); /* Soft glow to match Hero */
        }
        .about-right {
          display: flex;
          flex-direction: column;
          gap: 60px; /* Gap between paragraphs and skills */
          flex-grow: 1; /* Allow text content to grow */
        }
        .about-para {
          display: flex;
          flex-direction: column;
          gap: 25px; /* Increased gap between paragraphs */
          font-size: 19px; /* Adjusted font size */
          font-weight: 400; /* Lighter weight for body text */
          line-height: 1.8; /* Improved line height for readability */
          color: #495057; /* Medium dark gray to match Hero */
        }
        .about-skills {
          display: flex;
          flex-direction: column;
          gap: 25px; /* Increased gap between skills */
        }
        .about-skill {
          display: flex;
          gap: 30px; /* Adjusted gap between text and bar */
          align-items: center;
          transition: transform 0.3s ease;
        }
        .about-skill p {
          min-width: 120px; /* Ensure text doesn't wrap too much */
          font-size: 20px; /* Adjusted font size */
          font-weight: 500;
          color: #212121; /* Deep charcoal to match Hero */
        }
        .skill-bar-container {
          flex-grow: 1;
          height: 8px; /* Slightly thicker bar */
          background-color: #e0e0e0; /* Light gray background for the bar track */
          border-radius: 4px;
          overflow: hidden;
          box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1); /* Subtle inner shadow */
        }
        .skill-bar-fill {
          height: 100%;
          background-color: #66b2b2; /* Muted teal fill */
          border-radius: 4px;
          transition: width 0.8s ease-out; /* Smooth fill animation */
          box-shadow: 0 0 8px rgba(102, 178, 178, 0.5); /* Subtle glow on fill */
        }
        .about-skill:hover {
          transform: translateX(10px); /* Subtle slide effect */
        }

        /* Touch device improvements */
        @media (hover: none) and (pointer: coarse) {
          .about-skill:hover {
            transform: none; /* Disable hover effect on touch devices */
          }
          .achievement-card:hover {
            transform: none; /* Disable hover effect on touch devices */
          }
          .about-skill {
            padding: 8px 0; /* Add padding for better touch targets */
          }
          .achievement-card {
            transition: none; /* Remove transition on touch devices for better performance */
          }
        }
        .about-achievements {
          display: flex;
          width: 100%;
          justify-content: space-around;
          margin-bottom: 80px;
          flex-wrap: wrap; /* Allow wrapping on smaller screens */
          gap: 40px; /* Gap between achievements */
        }
        .achievement-card {
          background: rgba(255, 255, 255, 0.7); /* Subtle white background for each card */
          border: 1px solid rgba(0, 0, 0, 0.08); /* Light border */
          border-radius: 12px;
          padding: 25px 35px; /* Padding inside the card */
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05); /* Soft shadow */
          transition: all 0.3s ease;
          flex: 1; /* Allow cards to grow */
          min-width: 220px; /* Minimum width for cards */
          max-width: 30%; /* Max width for cards in a row */
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .achievement-card:hover {
          transform: translateY(-8px); /* Lift effect */
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1); /* More pronounced shadow on hover */
        }
        .about-achievement {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          text-align: center;
        }
        .about-achievement h1 {
          font-size: 55px; /* Adjusted font size */
          font-weight: 700;
          color: #66b2b2; /* Muted teal for numbers to match Hero */
        }
        .about-achievement p {
          font-size: 18px; /* Adjusted font size */
          font-weight: 500;
          color: #495057; /* Medium dark gray to match Hero */
          line-height: 1.4;
        }
        .vertical-line {
          height: 100px; /* Shorter line */
          width: 1px; /* Thinner line */
          background-color: #ced4da; /* Light gray for separator */
          margin: 0 20px;
        }
        /* Media Queries for Responsiveness */
        @media (max-width: 1200px) {
          .about-inner-content {
            gap: 70px;
            padding: 0 40px;
          }
          .about-title h1 {
            font-size: 58px;
          }
          .about-section {
            gap: 60px;
          }
          .profile-image {
            width: 300px;
            height: 300px;
          }
        }

        @media (max-width: 1024px) {
          .about-inner-content {
            gap: 60px;
            padding: 0 30px;
          }
          .about-title h1 {
            font-size: 52px;
          }
          .about-section {
            gap: 50px;
          }
          .profile-image {
            width: 280px;
            height: 280px;
          }
          .about-para {
            font-size: 18px;
            gap: 20px;
          }
          .about-skill p {
            font-size: 18px;
          }
          .about-skills {
            gap: 20px;
          }
          .about-achievements {
            gap: 30px;
            flex-wrap: wrap;
            justify-content: center;
          }
          .achievement-card {
            max-width: 45%;
            min-width: 280px;
          }
          .about-achievement h1 {
            font-size: 45px;
          }
          .about-achievement p {
            font-size: 16px;
          }
        }
        @media (max-width: 768px) {
          .about {
            padding: 60px 0;
            margin: 0 10px; /* Add margin to prevent content from being cut off */
          }
          .about-inner-content {
            gap: 50px;
            padding: 0 30px;
            box-sizing: border-box; /* Ensure padding is included in width calculation */
          }
          .about-title h1 {
            font-size: 42px;
            text-align: center;
          }
          .underline {
            width: 100px;
          }
          .about-section {
            flex-direction: column;
            align-items: center;
            gap: 30px;
          }
          .about-left {
            display: none; /* Hide image on mobile */
          }
          .about-right {
            gap: 40px;
            width: 100%;
          }
          .about-para {
            font-size: 16px;
            line-height: 1.6;
            text-align: center;
            gap: 20px;
            width: 100%;
            padding: 0 15px;
            box-sizing: border-box;
          }
          .about-skills {
            align-items: center;
            gap: 25px;
            width: 100%;
            padding: 0 15px;
            box-sizing: border-box;
          }
          .about-skill {
            flex-direction: column;
            gap: 12px;
            width: 100%;
            align-items: flex-start;
            text-align: left;
            padding: 10px 0;
          }
          .about-skill p {
            min-width: unset;
            width: 100%;
            text-align: left;
            font-size: 16px;
            margin-bottom: 5px;
          }
          .skill-bar-container {
            width: 100%;
            height: 10px;
            margin-right: 5px; /* Add small right margin to prevent cutoff */
          }
          .about-achievements {
            flex-direction: column;
            gap: 25px;
            margin-bottom: 40px;
            align-items: center;
          }
          .achievement-card {
            max-width: 85%;
            width: 100%;
            margin: 0 auto;
            padding: 30px 35px;
            min-width: unset;
          }
          .vertical-line {
            display: none;
          }
          .about-achievement h1 {
            font-size: 36px;
          }
          .about-achievement p {
            font-size: 14px;
            text-align: center;
            line-height: 1.4;
          }
        }

        @media (max-width: 480px) {
          .about {
            padding: 50px 0;
            margin: 0 8px; /* Add margin to prevent content from being cut off */
          }
          .about-inner-content {
            gap: 40px;
            padding: 0 24px;
            box-sizing: border-box;
          }
          .about-title h1 {
            font-size: 32px;
          }
          .underline {
            width: 80px;
            height: 3px;
          }
          .about-section {
            gap: 25px;
          }
          .about-right {
            gap: 35px;
          }
          .about-para {
            font-size: 15px;
            gap: 18px;
            line-height: 1.5;
            padding: 0 12px;
            box-sizing: border-box;
          }
          .about-skills {
            gap: 22px;
            padding: 0 12px;
            box-sizing: border-box;
          }
          .about-skill {
            gap: 12px;
            padding: 8px 0;
          }
          .about-skill p {
            font-size: 15px;
          }
          .skill-bar-container {
            height: 8px;
            margin-right: 3px; /* Add small right margin */
          }
          .achievement-card {
            padding: 25px 30px;
            max-width: 90%;
          }
          .about-achievements {
            gap: 25px;
            margin-bottom: 35px;
          }
          .about-achievement h1 {
            font-size: 28px;
          }
          .about-achievement p {
            font-size: 13px;
            line-height: 1.3;
          }
        }

        @media (max-width: 375px) {
          .about {
            padding: 40px 0;
            margin: 0 6px; /* Add margin to prevent content from being cut off */
          }
          .about-inner-content {
            gap: 35px;
            padding: 0 20px;
            box-sizing: border-box;
          }
          .about-title h1 {
            font-size: 28px;
          }
          .underline {
            width: 60px;
            height: 3px;
          }
          .about-section {
            gap: 20px;
          }
          .about-right {
            gap: 30px;
          }
          .about-para {
            font-size: 14px;
            gap: 15px;
            line-height: 1.4;
            padding: 0 10px;
            box-sizing: border-box;
          }
          .about-skills {
            gap: 18px;
            padding: 0 10px;
            box-sizing: border-box;
          }
          .about-skill {
            gap: 10px;
            padding: 6px 0;
          }
          .about-skill p {
            font-size: 14px;
          }
          .skill-bar-container {
            height: 6px;
            margin-right: 2px; /* Add small right margin */
          }
          .achievement-card {
            padding: 22px 25px;
            max-width: 95%;
          }
          .about-achievements {
            gap: 22px;
            margin-bottom: 30px;
          }
          .about-achievement h1 {
            font-size: 24px;
          }
          .about-achievement p {
            font-size: 12px;
            line-height: 1.2;
          }
        }

        /* Extra small devices */
        @media (max-width: 320px) {
          .about {
            padding: 35px 0;
            margin: 0 4px; /* Add margin to prevent content from being cut off */
          }
          .about-inner-content {
            gap: 30px;
            padding: 0 16px;
            box-sizing: border-box;
          }
          .about-title h1 {
            font-size: 24px;
          }
          .underline {
            width: 50px;
          }
          .about-right {
            gap: 25px;
          }
          .about-para {
            font-size: 13px;
            gap: 12px;
            padding: 0 8px;
            box-sizing: border-box;
          }
          .about-skills {
            gap: 15px;
            padding: 0 8px;
            box-sizing: border-box;
          }
          .about-skill p {
            font-size: 13px;
          }
          .achievement-card {
            padding: 20px 22px;
            max-width: 98%;
          }
          .about-achievements {
            gap: 20px;
            margin-bottom: 25px;
          }
          .about-achievement h1 {
            font-size: 22px;
          }
          .about-achievement p {
            font-size: 11px;
          }
        }
      `}</style>
    </div>
  )
}

export default About
