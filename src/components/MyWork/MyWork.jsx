"use client"

import mywork_data from "../../assets/mywork_data.js" // Correct relative path
import { FaArrowRight } from "react-icons/fa" // Import the arrow icon

function MyWork() {
  return (
    <div id="work" className="mywork">
      <div className="mywork-title">
        <h1>My latest work</h1>
        <div className="underline"></div>
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => (
          <div key={index} className="mywork-item">
            <img
              src={work.w_img || "/placeholder.svg?height=280&width=419&query=abstract project screenshot"}
              alt={work.w_name}
            />
            {/* You can add project title/description overlay here if desired */}
          </div>
        ))}
      </div>
      <div className="mywork-showmore">
        <p>Show More</p>
        <FaArrowRight className="arrow-icon" />
      </div>

      <style jsx>{`
        .mywork {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 100px; /* Consistent gap with About section */
          margin: 80px auto; /* Centered with auto margins */
          max-width: 1200px; /* Max width for content */
          padding: 0 20px; /* Horizontal padding */
          color: #212121; /* Deep charcoal for default text */
        }

        .mywork-title {
          position: relative;
          text-align: center;
        }

        .mywork-title h1 {
          font-size: 65px; /* Consistent with About title */
          font-weight: 700;
          color: #212121;
          margin-bottom: 15px;
        }

        .underline {
          width: 150px; /* Consistent with About underline */
          height: 4px; /* Consistent with About underline */
          background-color: #a8dadc; /* Soft blue accent */
          border-radius: 2px;
          margin: 0 auto;
        }

        .mywork-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* Responsive grid */
          gap: 40px; /* Gap between project items */
          width: 100%;
          justify-content: center; /* Center items in grid */
        }

        .mywork-item {
          box-sizing: border-box;
          width: 100%; /* Take full width of grid column */
          padding: 10px; /* Inner padding for border/shadow effect */
          background-color: #f8f9fa; /* Light background for each item */
          border-radius: 8px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08); /* Soft shadow */
          transition: all 0.3s ease;
          cursor: pointer;
          overflow: hidden; /* Ensure image doesn't overflow rounded corners */
        }

        .mywork-item img {
          width: 100%;
          height: 250px; /* Fixed height for consistency */
          object-fit: cover; /* Cover the area, crop if necessary */
          border-radius: 4px; /* Slightly rounded image corners */
          display: block; /* Remove extra space below image */
        }

        .mywork-item:hover {
          transform: translateY(-8px); /* Lift effect */
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15); /* Enhanced shadow */
          border: 1px solid #a8dadc; /* Subtle border on hover */
        }

        .mywork-showmore {
          display: flex;
          align-items: center;
          gap: 15px;
          border-radius: 40px; /* Consistent with buttons */
          border: 2px solid #457b9d; /* Muted blue border */
          padding: 15px 40px; /* Refined padding */
          font-size: 18px;
          font-weight: 500;
          color: #457b9d; /* Muted blue text */
          margin-top: 20px; /* Space from grid */
          margin-bottom: 80px;
          transition: all 0.4s ease;
          cursor: pointer;
          background-color: transparent;
        }

        .mywork-showmore:hover {
          gap: 25px; /* More pronounced arrow slide */
          background-color: #457b9d; /* Fill on hover */
          color: white;
          box-shadow: 0 6px 15px rgba(69, 123, 157, 0.4);
        }

        .mywork-showmore .arrow-icon {
          font-size: 20px; /* Size of the arrow icon */
          transition: transform 0.4s ease;
        }

        .mywork-showmore:hover .arrow-icon {
          transform: translateX(5px); /* Slide arrow on hover */
        }

        /* Media Queries for Responsiveness */
        @media (max-width: 1024px) {
          .mywork {
            gap: 80px;
            margin: 60px auto;
          }
          .mywork-title h1 {
            font-size: 55px;
          }
          .mywork-container {
            gap: 30px;
          }
          .mywork-item img {
            height: 220px;
          }
        }

        @media (max-width: 768px) {
          .mywork {
            gap: 60px;
            margin: 40px auto;
            padding: 0 15px;
          }
          .mywork-title h1 {
            font-size: 45px;
          }
          .underline {
            width: 100px;
          }
          .mywork-container {
            grid-template-columns: 1fr; /* Single column on mobile */
            gap: 25px;
          }
          .mywork-item img {
            height: 200px;
          }
          .mywork-showmore {
            padding: 12px 30px;
            font-size: 16px;
            gap: 10px;
            margin-bottom: 50px;
          }
        }
      `}</style>
    </div>
  )
}

export default MyWork
