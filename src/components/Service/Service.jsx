"use client"
import services_data from "../../assets/services_data" // Assuming this path is correct
import { FaArrowRight } from "react-icons/fa" // Import the arrow icon

const Service = () => {
  return (
    <div id="services" className="service">
      <div className="service-inner-content">
        <div className="service-title">
          <h1 className="animated-title">My Services</h1>
          <div className="underline animated-underline"></div>
        </div>
        <div className="service-container">
          {services_data.map((service, index) => (
            <div key={index} className="service-format animated-item" style={{ animationDelay: `${0.3 * index}s` }}>
              <h3>{service.s_no}</h3>
              <h2>{service.s_name}</h2>
              <p>{service.s_desc}</p>
              <div className="service-readmore">
                <button className="readmore-btn">
                  Read More <FaArrowRight className="arrow" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .service {
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
        .service::before {
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
        .service-inner-content { /* New wrapper for content */
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
        .service-title {
          position: relative;
          text-align: center;
        }
        .service-title h1 {
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
        .service-container {
          display: flex; /* Use flex for horizontal scrolling */
          overflow-x: auto; /* Enable horizontal scrolling */
          scroll-snap-type: x mandatory; /* Snap to items */
          -webkit-overflow-scrolling: touch; /* Smooth scrolling on iOS */
          gap: 40px; /* Gap between service cards */
          padding-bottom: 20px; /* Space for scrollbar */
          width: 100%; /* Take full width */
          margin: 0 auto; /* Center the container */
        }
        /* Hide scrollbar for a cleaner look */
        .service-container::-webkit-scrollbar {
          display: none;
        }
        .service-container {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
        .service-format {
          flex: 0 0 auto; /* Prevent items from shrinking */
          scroll-snap-align: center; /* Snap to center of item */
          width: 350px; /* Fixed width for desktop items */
          display: flex;
          flex-direction: column;
          justify-content: flex-start; /* Align content to top */
          gap: 15px; /* Adjusted gap within card */
          padding: 35px; /* Generous padding */
          border-radius: 12px; /* More rounded corners */
          border: 1px solid rgba(0, 0, 0, 0.08); /* Light gray border consistent with About/MyWork */
          background: rgba(255, 255, 255, 0.7); /* Subtle white background for cards */
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05); /* Soft shadow consistent with About/MyWork */
          transition: all 0.4s ease;
          cursor: pointer;
          opacity: 0; /* For animation */
        }
        .service-format h3 {
          font-size: 26px; /* Adjusted font size for number */
          font-weight: 600;
          color: #66b2b2; /* Muted teal for number */
          margin-bottom: 10px;
        }
        .service-format h2 {
          font-size: 32px; /* Adjusted font size for service name */
          font-weight: 700;
          color: #212121; /* Deep charcoal for service name */
          margin-bottom: 10px;
        }
        .service-format p {
          color: #495057; /* Medium dark gray for description */
          font-size: 18px; /* Adjusted font size */
          line-height: 1.7; /* Improved line height */
          max-width: none; /* Remove max-width */
          flex-grow: 1; /* Allow paragraph to take space */
        }
        .service-readmore {
          display: flex;
          justify-content: flex-start; /* Align button to left */
          align-items: center;
          margin-top: 20px;
        }
        .readmore-btn {
          border: 2px solid #66b2b2; /* Muted teal border */
          padding: 10px 25px; /* Refined padding */
          font-size: 16px;
          color: #66b2b2; /* Muted teal text */
          background-color: transparent;
          border-radius: 30px; /* Rounded button */
          cursor: pointer;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-weight: 500;
        }
        .readmore-btn .arrow {
          font-size: 18px; /* Size of the arrow icon */
          transition: transform 0.3s ease;
        }
        .readmore-btn:hover {
          background-color: #66b2b2; /* Fill on hover */
          color: white;
          transform: translateY(-3px); /* Subtle lift */
          box-shadow: 0 4px 12px rgba(102, 178, 178, 0.3); /* Muted teal shadow */
        }
        .readmore-btn:hover .arrow {
          transform: translateX(5px); /* Slide arrow on hover */
        }
        .service-format:hover {
          transform: translateY(-10px); /* Lift effect */
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15); /* Enhanced shadow */
          border-color: #66b2b2; /* Muted teal border on hover */
        }
        /* Animations for Service section */
        .animated-title {
          opacity: 0;
          animation: fadeInUp 1s ease-out forwards;
        }
        .animated-underline {
          opacity: 0;
          animation: fadeIn 1s ease-out forwards 0.3s;
        }
        .animated-item {
          animation: fadeInUp 0.8s ease-out forwards; /* Staggered delay applied inline */
        }
        /* Media Queries for Responsiveness */
        @media (max-width: 1024px) {
          .service-inner-content {
            gap: 60px;
          }
          .service-title h1 {
            font-size: 55px;
          }
          .service-container {
            gap: 30px;
            padding: 0 15px 20px; /* Adjust padding for smaller screens */
          }
          .service-format {
            width: 300px; /* Adjust width for smaller desktops/large tablets */
            padding: 30px;
          }
          .service-format h2 {
            font-size: 28px;
          }
          .service-format p {
            font-size: 17px;
          }
        }
        @media (max-width: 768px) {
          .service {
            padding: 40px 0; /* Adjust vertical padding for mobile */
          }
          .service-inner-content {
            gap: 50px;
            padding: 0 10px; /* Less padding on mobile */
          }
          .service-title h1 {
            font-size: 45px;
          }
          .underline {
            width: 100px;
          }
          .service-container {
            gap: 20px;
            padding: 0 10px 15px; /* Adjust padding for mobile */
          }
          .service-format {
            width: 280px; /* Adjust width for mobile */
            padding: 25px;
            gap: 10px;
          }
          .service-format h3 {
            font-size: 22px;
          }
          .service-format h2 {
            font-size: 24px;
          }
          .service-format p {
            font-size: 16px;
            line-height: 1.6;
          }
          .readmore-btn {
            padding: 8px 20px;
            font-size: 14px;
          }
          .readmore-btn .arrow {
            font-size: 16px;
          }
        }
        @media (max-width: 480px) {
          .service-format {
            width: 250px; /* Even smaller width for very small mobiles */
          }
        }
      `}</style>
    </div>
  )
}

export default Service
