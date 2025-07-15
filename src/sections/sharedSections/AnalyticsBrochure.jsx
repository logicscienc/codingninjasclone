import React, { useState } from "react";
import "./Style.css";
// import analyticsPdf from "./images/data_analytics_brochure.pdf";
import mernPdf from "./images/mern_brochure.pdf";
import { toast } from "react-toastify";

const AnalyticsBrochure = () => {
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
  });
  const [errors, setErrors] = useState({});

  const openForm = () => {
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
      toast.success("Download started");

      const link = document.createElement("a");
      link.href = analyticsPdf;
      link.download = analyticsPdf.split("/").pop();
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
        <button className="brochure-btn" onClick={openForm}>
          Download Data Analytics brochure
        </button>
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

export default AnalyticsBrochure;
