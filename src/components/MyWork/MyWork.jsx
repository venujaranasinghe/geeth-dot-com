"use client"
import mywork_data from "../../assets/mywork_data" // Assuming this path is correct

function MyWork() {
  return (
    <div id="work" className="mywork">
      <div className="mywork-inner-content">
        <div className="mywork-title">
          <h1 className="animated-title">My latest work</h1>
          <div className="underline animated-underline"></div>
        </div>
        <div className="mywork-container">
          {mywork_data.map((work, index) => (
            <div key={index} className="mywork-item animated-item" style={{ animationDelay: `${0.3 * index}s` }}>
              <img
                src={work.w_img || "/placeholder.svg?height=300&width=500&query=abstract project screenshot"}
                alt={work.w_name}
              />
              {/* You can add project title/description overlay here if desired */}
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .mywork {
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
        .mywork::before {
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
        .mywork-inner-content { /* New wrapper for content */
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
        .mywork-title {
          position: relative;
          text-align: center;
        }
        .mywork-title h1 {
          font-size: 65px; /* Consistent with About title */
          font-weight: 700;
          color: #66b2b2; /* Muted teal to match aesthetic */
          margin-bottom: 15px;
          /* font-family is handled by global app.css */
        }
        .underline {
          width: 150px; /* Consistent with About underline */
          height: 4px; /* Consistent with About underline */
          background-color: #a0a0a0; /* Subtle light gray */
          border-radius: 2px;
          margin: 0 auto;
        }
        .mywork-container {
          display: flex; /* Use flex for horizontal scrolling */
          overflow-x: auto; /* Enable horizontal scrolling */
          scroll-snap-type: x mandatory; /* Snap to items */
          -webkit-overflow-scrolling: touch; /* Smooth scrolling on iOS */
          gap: 40px; /* Gap between project items */
          padding-bottom: 20px; /* Space for scrollbar */
          width: 100%; /* Take full width */
          margin: 0 auto; /* Center the container */
        }
        /* Hide scrollbar for a cleaner look */
        .mywork-container::-webkit-scrollbar {
          display: none;
        }
        .mywork-container {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
        .mywork-item {
          flex: 0 0 auto; /* Prevent items from shrinking */
          scroll-snap-align: center; /* Snap to center of item */
          width: 450px; /* Fixed width for desktop items */
          height: 300px; /* Fixed height */
          background: rgba(255, 255, 255, 0.7); /* Subtle white background for each item */
          border-radius: 12px; /* More rounded corners */
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05); /* Soft shadow consistent with About */
          transition: all 0.4s ease;
          cursor: pointer;
          overflow: hidden; /* Ensure image doesn't overflow rounded corners */
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(0, 0, 0, 0.08); /* Subtle border consistent with About */
          opacity: 0; /* For animation */
        }
        .mywork-item img {
          width: 100%;
          height: 100%;
          object-fit: cover; /* Cover the area, crop if necessary */
          border-radius: 10px; /* Slightly smaller border-radius than container */
          display: block;
        }
        .mywork-item:hover {
          transform: translateY(-10px) scale(1.02); /* Lift and slight scale effect */
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15); /* Enhanced shadow */
          border-color: #66b2b2; /* Muted teal border on hover */
        }
        /* Animations for MyWork section */
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
          .mywork-inner-content {
            gap: 60px;
          }
          .mywork-title h1 {
            font-size: 55px;
          }
          .mywork-container {
            gap: 30px;
            padding: 0 15px 20px; /* Adjust padding for smaller screens */
          }
          .mywork-item {
            width: 380px; /* Adjust width for smaller desktops/large tablets */
            height: 250px;
          }
        }
        @media (max-width: 768px) {
          .mywork-inner-content {
            gap: 50px;
            padding: 0 10px; /* Less padding on mobile */
          }
          .mywork-title h1 {
            font-size: 45px;
          }
          .underline {
            width: 100px;
          }
          .mywork-container {
            gap: 20px;
            padding: 0 10px 15px; /* Adjust padding for mobile */
          }
          .mywork-item {
            width: 300px; /* Adjust width for mobile */
            height: 200px;
            border-radius: 8px;
          }
          .mywork-item img {
            border-radius: 6px;
          }
        }
        @media (max-width: 480px) {
          .mywork-item {
            width: 260px; /* Even smaller width for very small mobiles */
            height: 180px;
          }
        }
      `}</style>
    </div>
  )
}

export default MyWork
