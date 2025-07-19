import React, { useState } from "react";
import hat from "./img/hat.svg";
import star from "./img/star.svg";
import building from "./img/building.svg";
import { FiArrowRight } from "react-icons/fi";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { IoClose } from "react-icons/io5";

const SlidingDrawer = ({ isOpen, onClose }) => {
  const [drawerForm, setDrawerForm] = useState({
    slot: "",
    graduationYear: "",
  });
  const [drawerErrors, setDrawerErrors] = useState({});

  const validateDrawerForm = () => {
    const newErrors = {};
    if (!drawerForm.slot) newErrors.slot = "Time slot is required";
    if (!drawerForm.graduationYear) newErrors.graduationYear = "Graduation year is required";
    setDrawerErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleDrawerSubmit = (e) => {
    e.preventDefault();
    if (validateDrawerForm()) {
      toast.success("Webinar booked successfully!");
      setDrawerForm({ slot: "", graduationYear: "" });
      onClose();
    }
  };

  return (
    <div className={`fixed inset-0 z-50 ${isOpen ? "block" : "hidden"}`}>
      {/* Backdrop with blur */}
      <div
        className="absolute inset-0 backdrop-blur-md bg-black/10"
        onClick={onClose}
      ></div>

      {/* Drawer */}
      <div className="absolute right-0 top-0 h-full w-full sm:max-w-md bg-white shadow-lg p-6 overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Book a free live webinar</h2>
          <button onClick={onClose}><IoClose className="text-xl" /></button>
        </div>
        <form onSubmit={handleDrawerSubmit} className="space-y-4">
          <div>
            <label className="font-medium text-sm">Select a time slot <span className="text-red-500">*</span></label>
            <div className="mt-2 grid grid-cols-2 gap-4">
              {["Sun - 20 Jul 2025 - 03:00 PM", "Sun - 20 Jul 2025 - 07:00 PM", "Mon - 21 Jul 2025 - 03:00 PM", "Mon - 21 Jul 2025 - 07:00 PM"].map((slot) => (
                <button
                  type="button"
                  key={slot}
                  onClick={() => setDrawerForm({ ...drawerForm, slot })}
                  className={`border rounded px-4 py-2 ${drawerForm.slot === slot ? 'bg-orange-500 text-white' : ''}`}
                >
                  {slot.split(" - ").slice(0, 2).join(" - ")}<br /><span className="text-sm font-medium">{slot.split(" - ")[2]}</span>
                </button>
              ))}
            </div>
            {drawerErrors.slot && <p className="text-red-500 text-xs mt-1">{drawerErrors.slot}</p>}
          </div>

          <div>
            <label className="font-medium text-sm block mb-1">Graduation Year</label>
            <select
              value={drawerForm.graduationYear}
              onChange={(e) => setDrawerForm({ ...drawerForm, graduationYear: e.target.value })}
              className="w-full border rounded p-2"
            >
              <option value="">Select Graduation Year</option>
              {[2025, 2024, 2023, 2022, 2021].map((year) => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
            {drawerErrors.graduationYear && <p className="text-red-500 text-xs mt-1">{drawerErrors.graduationYear}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-3 rounded font-semibold hover:bg-orange-600"
          >
            Book webinar
          </button>
        </form>
      </div>
    </div>
  );
};

const Main = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", experience: "" });
  const [errors, setErrors] = useState({});
  const [drawerOpen, setDrawerOpen] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email || !formData.email.includes("@")) newErrors.email = "Valid email is required";
    if (!formData.phone || formData.phone.length < 10) newErrors.phone = "Valid phone number is required";
    if (!formData.experience) newErrors.experience = "Please select an experience";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setDrawerOpen(true);
    }
  };

  return (
    <div className="bg-[#f9f6f2] py-10 px-4 relative">
      <SlidingDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />
      <div className="max-w-[1000px] mx-auto flex flex-col md:flex-row gap-20 items-start mt-10">
        <div className="flex-1">
          <p className="text-sm text-gray-500 mb-2">E&ICT Academy IIT Guwahati | Coding Ninjas</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            PG Certification in Data Analytics with GenAI by E&ICT IIT Guwahati
          </h1>
          <div className="flex flex-wrap gap-2 mb-6">
            {["6 months", "Online", "For graduates"].map((tag) => (
              <span key={tag} className="bg-white px-4 py-1 rounded-full text-sm text-gray-700 shadow">{tag}</span>
            ))}
          </div>
          <hr className="my-4 border-gray-300" />
          <ul className="space-y-4 mt-20">
            <li className="flex items-start gap-5">
              <img src={hat} alt="hat" className="w-6 h-6 mt-1" />
              <span className="text-gray-700 text-lg">Get a PG certification from E&ICT IIT Guwahati</span>
            </li>
            <li className="flex items-start gap-3">
              <img src={star} alt="star" className="w-6 h-6 mt-1" />
              <span className="text-gray-700 text-lg">Experience the IIT life with campus immersion</span>
            </li>
            <li className="flex items-start gap-3">
              <img src={building} alt="building" className="w-6 h-6 mt-1" />
              <span className="text-gray-700 text-lg">Alumni Status by E&ICT IIT Guwahati</span>
            </li>
          </ul>
        </div>

        <div className="w-full md:max-w-sm bg-white  p-6 shadow-md">
          <h2 className="text-md mb-4 font-medium">
            Book a <span className="text-pink-600 font-semibold">free live webinar</span> to know more
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input type="text" placeholder="Name" className="w-full border rounded p-2" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>
            <div>
              <input type="email" placeholder="Email" className="w-full border rounded p-2" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>
            <div>
              <div className="flex items-center border rounded overflow-hidden">
                <span className="px-3 bg-gray-100 text-sm">🇮🇳</span>
                <input type="tel" placeholder="Phone Number" className="w-full p-2 outline-none" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
              </div>
              {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
            </div>
            <div>
              <p className="text-sm font-medium mb-2">Experience <span className="text-red-500">*</span></p>
              {["Working professional - Technical roles", "Working professional - Non technical", "College student - Final year", "College student - 1st to pre-final year", "Others"].map((exp) => (
                <label key={exp} className="flex items-center gap-2 text-sm mb-1">
                  <input type="radio" name="experience" value={exp} checked={formData.experience === exp} onChange={(e) => setFormData({ ...formData, experience: e.target.value })} />
                  {exp}
                </label>
              ))}
              {errors.experience && <p className="text-red-500 text-xs mt-1">{errors.experience}</p>}
            </div>
            <button type="submit" className="w-full bg-orange-500 text-white py-3 rounded font-semibold flex items-center justify-center hover:bg-orange-600">
              Continue booking webinar <FiArrowRight className="ml-2 w-4 h-4" />
            </button>
          </form>
          <p className="text-[10px] text-gray-500 text-center mt-3">
            I authorise Coding Ninjas to contact me with course updates & offers via Email/SMS/Whatsapp/Call. I have read and agree to <a href="#" className="underline text-blue-600">Privacy Policy</a> & <a href="#" className="underline text-blue-600">Terms of use</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;



