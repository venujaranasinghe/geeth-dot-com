"use client"

// Reference your profile image directly from the public folder
// Make sure your image is located at public/profile_img.jpg
const profile_photo_url = "/profile_img.jpg"

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <div className="underline"></div>
      </div>

      {/* Section Container */}
      <div className="about-section">
        {/* Right Side Image */}
        <div className="about-left">
          <img src={profile_photo_url || "/placeholder.svg"} alt="Profile" className="profile-image" />
        </div>

        {/* Left Side Content */}
        <div className="about-right">
          <div className="about-para">
            <p>
              As an undergraduate in Computer Science at Sri Lanka Institute of Information Technology (SLIIT), I have a
              strong foundation in programming languages, including C, Python, Java, and Arduino. My expertise extends
              to web development, database management, and front-end technologies like React and Tailwind CSS.
            </p>
            <p>
              I have a passion for creating efficient and user-friendly software solutions, whether it’s developing
              dynamic web applications or building innovative hardware projects with Arduino. My experience spans across
              diverse projects, including eCommerce platforms, smart systems, and APIs, showcasing my ability to solve
              complex problems through technology.
            </p>
            <p>
              I am committed to continuous learning and staying updated with industry trends, aiming to contribute to
              impactful projects that blend creativity, functionality, and technical excellence.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              {" "}
              <p>HTML & CSS</p>
              <hr style={{ width: "90%" }} />
            </div>
            <div className="about-skill">
              {" "}
              <p>React JS</p>
              <hr style={{ width: "75%" }} />
            </div>
            <div className="about-skill">
              {" "}
              <p>Java</p>
              <hr style={{ width: "85%" }} />
            </div>
            <div className="about-skill">
              {" "}
              <p>Python</p>
              <hr style={{ width: "70%" }} />
            </div>
          </div>
        </div>
      </div>

      {/* Achievements Section */}
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>01+</h1>
          <p>YEAR OF EXPERIENCE</p>
        </div>
        {/* Vertical line */}
        <div className="vertical-line"></div>
        <div className="about-achievement">
          <h1>05+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        {/* Vertical line */}
        <div className="vertical-line"></div>
        <div className="about-achievement">
          <h1>01+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>

      <style jsx>{`
        .about {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 100px; /* Increased gap for more whitespace */
          margin: 80px auto; /* Centered with auto margins */
          max-width: 1200px; /* Max width for content */
          padding: 0 20px; /* Horizontal padding */
          color: #212121; /* Deep charcoal for default text */
        }

        .about-title {
          position: relative;
          text-align: center;
        }

        .about-title h1 {
          font-size: 65px; /* Adjusted font size */
          font-weight: 700;
          color: #212121; /* Deep charcoal */
          margin-bottom: 15px;
        }

        .underline {
          width: 150px; /* Shorter underline */
          height: 4px; /* Thinner underline */
          background-color: #a8dadc; /* Soft blue accent */
          border-radius: 2px;
          margin: 0 auto;
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
          border: 3px solid #a8dadc; /* Soft blue border */
          box-shadow: 0 10px 30px rgba(69, 123, 157, 0.15); /* Soft glow */
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
          color: #495057; /* Medium dark gray */
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
          color: #212121; /* Deep charcoal */
        }

        .about-skill hr {
          outline: none;
          border: none;
          height: 6px; /* Thinner bar */
          border-radius: 3px;
          background-color: #a8dadc; /* Soft blue for skill bars */
          flex-grow: 1; /* Allow bar to take remaining space */
        }

        .about-skill:hover {
          transform: translateX(10px); /* Subtle slide effect */
        }

        .about-achievements {
          display: flex;
          width: 100%;
          justify-content: space-around;
          margin-bottom: 80px;
          flex-wrap: wrap; /* Allow wrapping on smaller screens */
          gap: 40px; /* Gap between achievements */
        }

        .about-achievement {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          transition: transform 0.4s ease;
          text-align: center;
        }

        .about-achievement h1 {
          font-size: 55px; /* Adjusted font size */
          font-weight: 700;
          color: #457b9d; /* Muted blue for numbers */
        }

        .about-achievement p {
          font-size: 18px; /* Adjusted font size */
          font-weight: 500;
          color: #495057; /* Medium dark gray */
          line-height: 1.4;
        }

        .about-achievement:hover {
          transform: translateY(-10px); /* Lift effect */
        }

        .vertical-line {
          height: 100px; /* Shorter line */
          width: 1px; /* Thinner line */
          background-color: #ced4da; /* Light gray for separator */
          margin: 0 20px;
        }

        /* Media Queries for Responsiveness */
        @media (max-width: 1024px) {
          .about {
            gap: 80px;
            margin: 60px auto;
          }
          .about-title h1 {
            font-size: 55px;
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
          .about-achievements {
            gap: 30px;
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
            gap: 60px;
            margin: 40px auto;
            padding: 0 15px;
          }
          .about-title h1 {
            font-size: 45px;
          }
          .underline {
            width: 100px;
          }
          .about-section {
            flex-direction: column; /* Stack on mobile */
            align-items: center;
            gap: 40px;
          }
          .about-left {
            display: none; /* Hide image on mobile as per original */
          }
          .about-right {
            gap: 40px;
            width: 100%;
          }
          .about-para {
            font-size: 16px;
            line-height: 1.7;
            text-align: center; /* Center text on mobile */
          }
          .about-skills {
            align-items: center; /* Center skills on mobile */
          }
          .about-skill {
            flex-direction: column; /* Stack skill text and bar */
            gap: 10px;
            width: 90%; /* Constrain width */
            align-items: flex-start; /* Align text to left within skill */
          }
          .about-skill p {
            min-width: unset; /* Remove min-width */
            width: 100%; /* Full width for text */
            text-align: left;
          }
          .about-skill hr {
            width: 100%; /* Full width for bar */
          }
          .about-achievements {
            flex-direction: column; /* Stack achievements on mobile */
            gap: 30px;
            margin-bottom: 40px;
          }
          .vertical-line {
            display: none; /* Hide vertical lines on mobile */
          }
        }
      `}</style>
    </div>
  )
}

export default About
