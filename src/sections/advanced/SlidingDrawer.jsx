import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

const experiences = [
  "Working Professional - Technical Roles",
  "Working Professional - Non Technical",
  "College Student - Final Year",
  "College Student - 1st to Pre-final Year",
  "Others",
];

const SlidingDrawer = ({ isOpen, onClose, onSubmit, brochureLink }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
  });

  const isFormValid =
    formData.name.trim() &&
    formData.email.trim() &&
    formData.phone.trim().length === 10 &&
    formData.experience;

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleExperienceChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      experience: value,
    }));
  };

  const handleSubmit = () => {
    if (isFormValid) {
      if (brochureLink) {
        window.open(brochureLink, "_blank");
      }
      toast.success("Brochure opened in new tab!", {
        autoClose: 3000,
      });

      onClose?.();
    }
  };

  useEffect(() => {
    if (isOpen) {
      setFormData({
        name: "",
        email: "",
        phone: "",
        experience: "",
      });
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 backdrop-blur-sm bg-white/30 z-40"
          onClick={onClose}
        />
      )}

      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? 0 : "100%" }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 right-0 w-full max-w-md h-full bg-[#f5f6fd] z-50 shadow-lg overflow-y-auto"
      >
        <div className="relative p-6">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-xl font-semibold"
          >
            ✕
          </button>

          <h2 className="text-lg font-semibold mb-6">
            Fill form to view brochure
          </h2>

          <div className="space-y-5">
            {/* Name */}
            <div>
              <label className="text-sm font-medium mb-1 block">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                placeholder="Enter your name"
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-sm font-medium mb-1 block">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="email"
                placeholder="you@example.com"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="text-sm font-medium mb-1 block">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center border border-gray-300 rounded px-3 py-2 gap-2">
                <span className="text-xl">🇮🇳</span>
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  type="tel"
                  placeholder="10-digit number"
                  maxLength="10"
                  className="w-full focus:outline-none"
                />
              </div>
            </div>

            {/* Experience */}
            <div>
              <label className="text-sm font-medium block mb-2">
                Experience <span className="text-red-500">*</span>
              </label>
              <div className="space-y-2">
                {experiences.map((option) => (
                  <label
                    key={option}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="experience"
                      value={option}
                      checked={formData.experience === option}
                      onChange={() => handleExperienceChange(option)}
                      className="accent-orange-500"
                    />
                    <span className="text-sm">{option}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* View Brochure Button */}
          <div className="mt-8">
            <button
              className={`w-full py-3 rounded text-white font-semibold text-center text-sm ${
                isFormValid
                  ? "bg-orange-500 hover:bg-orange-600"
                  : "bg-orange-300 cursor-not-allowed"
              }`}
              disabled={!isFormValid}
              onClick={handleSubmit}
            >
              View brochure
            </button>
          </div>

          {/* Disclaimer */}
          <p className="text-[10px] text-gray-600 text-center mt-4 leading-tight">
            I authorise Coding Ninjas to contact me with course updates & offers
            via Email/SMS/Whatsapp/Call. I have read and agree to{" "}
            <span className="underline cursor-pointer">Privacy Policy</span> &{" "}
            <span className="underline cursor-pointer">Terms of use</span>
          </p>
        </div>
      </motion.div>
    </>
  );
};

export default SlidingDrawer;
