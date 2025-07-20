import React, { useEffect, useState } from "react";
import Group from "./img/Group.png";
import pc_Icon from "./img/pc_Icon.png";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Main = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
  });
  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [slotData, setSlotData] = useState({ slot: "", occupation: "" });
  const [slotErrors, setSlotErrors] = useState({});

  useEffect(() => {
    const endTime =
      new Date().getTime() + 22 * 60 * 60 * 1000 + 18 * 60 * 1000 + 1 * 1000; // 22hr 18min 1sec
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = endTime - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });

      if (distance < 0) clearInterval(interval);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = () => {
    const newErrors = {};
    Object.entries(formData).forEach(([key, value]) => {
      if (!value.trim()) newErrors[key] = "This field is required";
    });
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      setShowModal(true);
    }
  };

  const handleSlotSubmit = () => {
    const slotErr = {};
    if (!slotData.slot) slotErr.slot = "Select a slot";
    if (!slotData.occupation) slotErr.occupation = "Select occupation";
    setSlotErrors(slotErr);

    if (Object.keys(slotErr).length === 0) {
      toast.success("Slot is registered!");
      setShowModal(false);
    }
  };
  return (
    <div className="relative">
      <ToastContainer />
      <div
        className={`bg-gradient-to-br from-[#0e121d] via-[#111827] to-[#1e293b] text-white py-12 px-4 transition-all duration-200 ${
          showModal ? "blur-sm pointer-events-none" : ""
        }`}
      >
        <div className="bg-gradient-to-br from-[#0e121d] via-[#111827] to-[#1e293b] text-white py-12 px-4">
          <div className="max-w-[1000px] mx-auto flex flex-col md:flex-row gap-10 items-center justify-between">
            {/* Left Section */}
            <div className="max-w-md">
              <p className="text-sm font-semibold">India's first and only,</p>
              <h1 className="text-2xl sm:text-3xl font-bold mt-1">
                Training and Internship Certification in <br />
                <span className="text-orange-300">
                  Advanced Data Structures and Algorithms
                </span>
              </h1>
              <p className="mt-4 font-semibold text-lg">by</p>
              <h2 className="text-2xl font-bold mt-1">IITM Pravartak</h2>
              <img
                src={Group}
                alt="IITM x Coding Ninjas"
                className="h-12 mt-4"
              />
              <div className="mt-6">
                <p className="font-semibold text-white text-lg mb-2">
                  Admission closing soon
                </p>
                <div className="flex gap-4 text-center">
                  {[
                    { label: "Days", value: timeLeft.days },
                    { label: "Hours", value: timeLeft.hours },
                    { label: "Minutes", value: timeLeft.minutes },
                    { label: "Seconds", value: timeLeft.seconds },
                  ].map((item, i) => (
                    <div key={i}>
                      <div className="text-2xl font-bold">
                        {item.value.toString().padStart(2, "0")}
                      </div>
                      <div className="text-sm text-gray-300">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Section - Form */}
            <div className="bg-white rounded-lg p-6 w-full max-w-sm text-black">
              <h2 className="font-bold text-lg mb-1">
                Book a FREE Webinar. NOW!
              </h2>
              <p className="text-red-500 text-sm mb-3">Last few seats left!</p>

              {[
                { label: "Enter your Name", name: "name" },
                { label: "Enter your email ID", name: "email" },
                { label: "Enter your Mobile Number", name: "phone" },
              ].map((field, i) => (
                <div className="mb-3" key={i}>
                  <input
                    type="text"
                    name={field.name}
                    placeholder={field.label}
                    value={formData[field.name]}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-md"
                  />
                  {errors[field.name] && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors[field.name]}
                    </p>
                  )}
                </div>
              ))}

              <div className="mb-3">
                <select
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md text-gray-700"
                >
                  <option value="">Experience</option>
                  <option value="College Student 1st Year">
                    College Student 1st Year
                  </option>
                  <option value="College Student 2nd Year">
                    College Student 2nd Year
                  </option>
                  <option value="College Student 3rd Year">
                    College Student 3rd Year
                  </option>
                  <option value="College Student 4th Year">
                    College Student 4th Year
                  </option>
                  <option value="Working Professional">
                    Working Professional
                  </option>
                </select>
                {errors.experience && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.experience}
                  </p>
                )}
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-orange-400 to-orange-500 text-white font-semibold py-2 rounded-md"
              >
                Continue booking webinar
              </button>

              <p className="text-xs text-gray-600 mt-3">
                I authorise Coding Ninjas to contact me with course updates &
                offers via Email /SMS /WhatsApp/ Call. I have read and agree to
                the
                <span className="text-orange-600"> Privacy Policy </span>&
                <span className="text-orange-600"> Terms of use</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Floating Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-[#111827] text-white p-6 rounded-lg w-[90%] max-w-md shadow-lg relative">
            <button
              className="absolute top-2 right-3 text-white text-xl"
              onClick={() => setShowModal(false)}
            >
              ×
            </button>
            <div className="text-center mb-4">
              <img src={pc_Icon} className="h-10 w-10" />
              <h3 className="font-bold text-lg">Select Webinar Slot</h3>
              <p className="text-sm">Complete your registration</p>
            </div>

            <div className="mb-3">
              <label className="block font-semibold mb-1 ">Webinar Slot</label>
              <select
                value={slotData.slot}
                onChange={(e) => {
                  setSlotData({ ...slotData, slot: e.target.value });
                  setSlotErrors({ ...slotErrors, slot: "" });
                }}
                className="w-full px-3 py-2 rounded-md bg-[#1f2937] text-white"
              >
                <option value="">Tap to Select</option>
                <option>July 20, 7PM</option>
                <option>July 21, 11AM</option>
                <option>July 22, 4PM</option>
              </select>
              {slotErrors.slot && (
                <p className="text-red-400 text-xs mt-1">{slotErrors.slot}</p>
              )}
            </div>

            <div className="mb-3">
              <label className="block font-semibold mb-1">
                Father's occupation
              </label>
              <select
                value={slotData.occupation}
                onChange={(e) => {
                  setSlotData({ ...slotData, occupation: e.target.value });
                  setSlotErrors({ ...slotErrors, occupation: "" });
                }}
                className="w-full px-3 py-2 rounded-md bg-[#1f2937] text-white"
              >
                <option value="">Select occupation</option>
                <option>Teacher</option>
                <option>Engineer</option>
                <option>Farmer</option>
                <option>Doctor</option>
                <option>Businessman</option>
              </select>
              {slotErrors.occupation && (
                <p className="text-red-400 text-xs mt-1">
                  {slotErrors.occupation}
                </p>
              )}
            </div>

            <button
              onClick={handleSlotSubmit}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 rounded"
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Main;
