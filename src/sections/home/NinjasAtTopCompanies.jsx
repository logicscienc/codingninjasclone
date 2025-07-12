import React, { useState } from "react";
import "./carousel.css";

// Company Logos
import amazon from "../../assets/amazon.png";
import calsoft from "../../assets/calsoft.png";
import citibank from "../../assets/citibank.png";
import google from "../../assets/google.png";
import microsoft from "../../assets/microsoft.png";
import paypal from "../../assets/paypal.png";
import persistent from "../../assets/persistent.png";
import uber from "../../assets/uber.png";

// People Images
import entre1 from "../../assets/entre1.jpg";
import entre2 from "../../assets/entre2.jpg";
import entre3 from "../../assets/entre3.jpg";
import morning from "../../assets/morning.jpg";
import woman from "../../assets/woman.jpg";
import man1 from "../../assets/man1.jpg";
import man2 from "../../assets/man2.jpg";
import smile from "../../assets/smile.jpg";

const placementData = [
  {
    name: "John Doe",
    company: "AWS",
    stream: "CS/IT",
    college: "Tier 2 College",
    companyLogo: amazon,
    profileImage: entre1,
    linkedIn: "#",
  },
  {
    name: "Jane Smith",
    company: "Citibank",
    stream: "Non-CS/IT",
    college: "Tier 2 College",
    companyLogo: citibank,
    profileImage: entre2,
    linkedIn: "#",
  },
  {
    name: "Rahul Verma",
    company: "Optum",
    stream: "Non-CS/IT",
    college: "Tier 3 College",
    companyLogo: calsoft,
    profileImage: entre3,
    linkedIn: "#",
  },
  {
    name: "Alex Ray",
    company: "Uber",
    stream: "CS/IT",
    college: "Tier 3 College",
    companyLogo: uber,
    profileImage: morning,
    linkedIn: "#",
  },
  {
    name: "Priya Mehra",
    company: "Microsoft",
    stream: "CS/IT",
    college: "Tier 1 College",
    companyLogo: microsoft,
    profileImage: woman,
    linkedIn: "#",
  },
  {
    name: "Ravi Sharma",
    company: "Persistent",
    stream: "CS/IT",
    college: "Tier 2 College",
    companyLogo: persistent,
    profileImage: man1,
    linkedIn: "#",
  },
  {
    name: "Sneha Patel",
    company: "Paypal",
    stream: "Non-CS/IT",
    college: "Tier 2 College",
    companyLogo: paypal,
    profileImage: man2,
    linkedIn: "#",
  },
  {
    name: "Kunal Joshi",
    company: "Google",
    stream: "CS/IT",
    college: "Tier 1 College",
    companyLogo: google,
    profileImage: smile,
    linkedIn: "#",
  },
];

const NinjasAtTopCompanies = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const duplicated = [...placementData, ...placementData]; // for looping

  return (
    <div className="carousel-container">
      <div className="carousel-header">
        <h2>Our Ninjas at top tech companies</h2>
        <button>Download placement report</button>
      </div>

      <div className="carousel-wrapper">
        <div className="carousel-track">
          {duplicated.map((item, index) => (
            <div
              key={index}
              className="carousel-card"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={item.profileImage}
                alt={item.name}
                className="profile-img"
              />
              <img
                src={item.companyLogo}
                alt={item.company}
                className="company-logo"
              />
              <p className="company-name">{item.company}</p>
              <p className="stream">{item.stream}</p>
              <p className="college">{item.college}</p>

              {hoveredIndex === index && (
                <div className="tooltip-bubble">
                  <div className="tooltip-arrow"></div>
                  <p className="tooltip-name">{item.name}</p>
                  <p className="tooltip-job">at {item.company}</p>
                  <a href={item.linkedIn} target="_blank" rel="noreferrer">
                    LinkedIn profile
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NinjasAtTopCompanies;
