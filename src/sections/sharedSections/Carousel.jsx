import React, { useState } from "react";
import "./Style.css";
import mernPdf from "./images/mern_brochure.pdf";
import springbootPdf from "./images/springboot_brochure.pdf";
import { toast } from "react-toastify";

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

const hiredData = [
  { id: 1, img: entre1, companyLogo: amazon, hike: "157% hike" },
  { id: 2, img: entre2, companyLogo: calsoft, hike: "122% hike" },
  { id: 3, img: entre3, companyLogo: citibank, hike: "200% hike" },
  { id: 4, img: morning, companyLogo: google, hike: "90% hike" },
  { id: 5, img: woman, companyLogo: microsoft, hike: "275% hike" },
  { id: 6, img: man1, companyLogo: paypal, hike: "90% hike" },
  { id: 7, img: man2, companyLogo: uber, hike: "90% hike" },
  { id: 8, img: smile, companyLogo: persistent, hike: "90% hike" },
];

const Carousel = () => {
  const duplicated = [...hiredData, ...hiredData];
  const [showForm, setShowForm] = useState(false);
  const [selectedPdf, setSelectedPdf] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
  });
  const [errors, setErrors] = useState({});

  const openForm = (pdfFile) => {
    setSelectedPdf(pdfFile);
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
    setForm({ name: "", email: "", phone: "", experience: "" });
    setErrors({});
  };

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.includes("@")) errs.email = "Valid email required";
    if (!form.phone.trim() || form.phone.length !== 10)
      errs.phone = "10-digit phone required";
    if (!form.experience) errs.experience = "Select your experience";
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validation = validate();

    if (Object.keys(validation).length > 0) {
      setErrors(validation);
    } else {
      setErrors({});

      // ✅ Show toast
      toast.success("Download started");

      const link = document.createElement("a");
      link.href = selectedPdf;
      link.download = selectedPdf.split("/").pop();
      link.click();

      closeForm();
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div id="curriculum" className="container">
      <h2 className="title">Job Bootcamp brochure</h2>
      <div className="button-container">
        <button className="brochure-btn" onClick={() => openForm(mernPdf)}>
          Download MERN brochure
        </button>
        <button
          className="brochure-btn"
          onClick={() => openForm(springbootPdf)}
        >
          Download Springboot brochure
        </button>
      </div>

      <h3 className="subtitle">Ninjas who took this bootcamp got hired at</h3>

      <div className="carousel-wrapper">
        <div className="carousel-track scroll-left">
          {duplicated.map((item, idx) => (
            <div className="card" key={`row1-${idx}`}>
              <img src={item.img} alt="profile" className="profile" />

              <div className="details-column">
                <img src={item.companyLogo} alt="company" className="company" />
                <div className="hike">{item.hike}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="carousel-wrapper">
        <div className="carousel-track scroll-right">
          {duplicated.map((item, idx) => (
            <div className="card" key={`row1-${idx}`}>
              <img src={item.img} alt="profile" className="profile" />

              <div className="details-column">
                <img src={item.companyLogo} alt="company" className="company" />
                <div className="hike">{item.hike}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showForm && (
        <div className="overlay">
          <div className="form-container">
            <h2>Fill form to view brochure</h2>
            <form onSubmit={handleSubmit}>
              <label>
                Name *
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                />
                {errors.name && <p className="error">{errors.name}</p>}
              </label>

              <label>
                Email *
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                />
                {errors.email && <p className="error">{errors.email}</p>}
              </label>

              <label>
                Phone Number *
                <input
                  type="tel"
                  name="phone"
                  maxLength="10"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Enter 10-digit mobile number"
                />
                {errors.phone && <p className="error">{errors.phone}</p>}
              </label>

              <label>
                Experience *
                <div className="radio-group">
                  {[
                    "Working Professional - Technical Roles",
                    "Working Professional - Non Technical",
                    "College Student - Final Year",
                    "College Student - 1st to Pre-final Year",
                    "Others",
                  ].map((exp, idx) => (
                    <label key={idx}>
                      <input
                        type="radio"
                        name="experience"
                        value={exp}
                        checked={form.experience === exp}
                        onChange={handleChange}
                      />
                      {exp}
                    </label>
                  ))}
                </div>
                {errors.experience && (
                  <p className="error">{errors.experience}</p>
                )}
              </label>
              <div className="form-footer">
                <button type="submit" className="submit-btn">
                  View brochure
                </button>

                <p className="privacy-text">
                  I authorise Coding Ninjas to contact me with course updates &
                  offers via Email/SMS/Whatsapp/Call. I have read and agree to{" "}
                  <a href="#">Privacy Policy</a> & <a href="#">Terms of use</a>
                </p>
              </div>
            </form>
            <button className="close-btn" onClick={closeForm}>
              ×
            </button>
          </div>
         
        </div>
         
      )}

    
           
    
    </div>
  );
};

export default Carousel; 
