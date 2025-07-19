import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { X } from "lucide-react";

const SlidingDrawer = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.phone) newErrors.phone = "Phone number is required";
    if (!formData.experience) newErrors.experience = "Please select an experience";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      toast.success("Brochure unlocked successfully!", {
        style: {
    background: 'green',
    color: 'white',
  },

      });
      onClose();
      setFormData({ name: "", email: "", phone: "", experience: "" });
    } else {
      toast.error("Please fill out all required fields.");
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <Toaster />
      <div className="fixed inset-0 backdrop-blur-sm bg-white/30 z-40" onClick={onClose}></div>
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 overflow-y-auto transition-transform duration-300 ease-in-out">
        <div className="flex justify-between items-center p-4 bg-indigo-50 border-b">
          <h2 className="text-lg font-semibold">Fill form to view brochure</h2>
          <button onClick={onClose}><X /></button>
        </div>

        <form className="p-4 space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium">Name *</label>
            <input
              className="w-full border p-2 rounded"
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium">Email *</label>
            <input
              className="w-full border p-2 rounded"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium">Phone Number *</label>
            <div className="flex border rounded overflow-hidden">
              <span className="px-3 flex items-center bg-gray-100">🇮🇳</span>
              <input
                className="flex-1 p-2 outline-none"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Experience *</label>
            {["Working Professional - Technical Roles", "Working Professional - Non Technical", "College Student - Final Year", "College Student - 1st to Pre-final Year", "Others"].map((option) => (
              <div key={option} className="flex items-center space-x-2 mb-1">
                <input
                  type="radio"
                  name="experience"
                  value={option}
                  checked={formData.experience === option}
                  onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                />
                <label>{option}</label>
              </div>
            ))}
            {errors.experience && <p className="text-red-500 text-sm">{errors.experience}</p>}
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-3 rounded hover:bg-orange-600 font-semibold"
            >
              View brochure
            </button>
          </div>

          <p className="text-xs text-gray-500 text-center mt-2">
            I authorise Coding Ninjas to contact me with course updates & offers via Email/SMS/Whatsapp/Call. I have read and agree to <a href="#" className="text-blue-600 underline">Privacy Policy</a> & <a href="#" className="text-blue-600 underline">Terms of use</a>
          </p>
        </form>
      </div>
    </>
  );
};

export default SlidingDrawer;
