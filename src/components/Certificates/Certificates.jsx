"use client"
import certificates_data from "../../assets/certificates_data"

function Certificates() {
  return (
    <div id="certificates" className="certificates">
      <div className="certificates-inner-content">
        <div className="certificates-title">
          <h1 className="animated-title">My Certificates</h1>
          <div className="underline animated-underline"></div>
        </div>
        <div className="certificates-container">
          {certificates_data.map((certificate, index) => (
            <div key={index} className="certificate-item animated-item" style={{ animationDelay: `${0.3 * index}s` }}>
              <img
                src={certificate.c_img || "/placeholder.svg?height=300&width=500&query=certificate"}
                alt={certificate.c_name}
              />
              <div className="certificate-overlay">
                <h3>{certificate.c_name}</h3>
                <p>{certificate.c_issuer}</p>
                <span>{certificate.c_date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .certificates {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 80px 0;
          background-color: white; /* White background to match MyWork section */
          color: #333;
          position: relative;
          overflow: hidden;
          width: 100%;
        }
        /* Subtle grid pattern for nostalgic tech feel on white background */
        .certificates::before {
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
        .certificates-inner-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 80px;
          position: relative;
          z-index: 1;
        }
        .certificates-title {
          position: relative;
          text-align: center;
        }
        .certificates-title h1 {
          font-size: 65px;
          font-weight: 700;
          color: #66b2b2; /* Muted teal to match MyWork section */
          margin-bottom: 15px;
        }
        .underline {
          width: 150px;
          height: 4px;
          background-color: #a0a0a0;
          border-radius: 2px;
          margin: 0 auto;
        }
        .certificates-container {
          display: flex;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
          gap: 40px;
          padding-bottom: 20px;
          width: 100%;
          margin: 0 auto;
        }
        /* Hide scrollbar for a cleaner look */
        .certificates-container::-webkit-scrollbar {
          display: none;
        }
        .certificates-container {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .certificate-item {
          flex: 0 0 auto;
          scroll-snap-align: center;
          width: 450px;
          height: 300px;
          background: rgba(255, 255, 255, 0.9);
          border-radius: 12px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
          transition: all 0.4s ease;
          cursor: pointer;
          overflow: hidden;
          position: relative;
          border: 1px solid rgba(0, 0, 0, 0.08);
          opacity: 0;
        }
        .certificate-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 10px;
          display: block;
          transition: transform 0.4s ease;
        }
        .certificate-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
          color: white;
          padding: 20px;
          transform: translateY(100%);
          transition: transform 0.4s ease;
        }
        .certificate-overlay h3 {
          font-size: 18px;
          font-weight: 600;
          margin: 0 0 8px 0;
          line-height: 1.3;
        }
        .certificate-overlay p {
          font-size: 14px;
          margin: 0 0 4px 0;
          color: #ccc;
        }
        .certificate-overlay span {
          font-size: 12px;
          color: #66b2b2;
          font-weight: 500;
        }
        .certificate-item:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.18);
          border-color: #66b2b2;
        }
        .certificate-item:hover img {
          transform: scale(1.05);
        }
        .certificate-item:hover .certificate-overlay {
          transform: translateY(0);
        }
        /* Animations */
        .animated-title {
          opacity: 0;
          animation: fadeInUp 1s ease-out forwards;
        }
        .animated-underline {
          opacity: 0;
          animation: fadeIn 1s ease-out forwards 0.3s;
        }
        .animated-item {
          animation: fadeInUp 0.8s ease-out forwards;
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
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes backgroundPan {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 100px 100px;
          }
        }
        /* Media Queries for Responsiveness */
        @media (max-width: 1024px) {
          .certificates-inner-content {
            gap: 60px;
          }
          .certificates-title h1 {
            font-size: 55px;
          }
          .certificates-container {
            gap: 30px;
            padding: 0 15px 20px;
          }
          .certificate-item {
            width: 380px;
            height: 250px;
          }
        }
        @media (max-width: 768px) {
          .certificates-inner-content {
            gap: 50px;
            padding: 0 10px;
          }
          .certificates-title h1 {
            font-size: 45px;
          }
          .underline {
            width: 100px;
          }
          .certificates-container {
            gap: 20px;
            padding: 0 10px 15px;
          }
          .certificate-item {
            width: 300px;
            height: 200px;
            border-radius: 8px;
          }
          .certificate-item img {
            border-radius: 6px;
          }
          .certificate-overlay {
            padding: 15px;
          }
          .certificate-overlay h3 {
            font-size: 16px;
          }
        }
        @media (max-width: 480px) {
          .certificate-item {
            width: 260px;
            height: 180px;
          }
          .certificate-overlay {
            padding: 12px;
          }
          .certificate-overlay h3 {
            font-size: 14px;
          }
        }
      `}</style>
    </div>
  )
}

export default Certificates