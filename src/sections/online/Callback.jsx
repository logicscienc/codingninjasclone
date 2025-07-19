import React, { useState } from "react";
import call from './img/call.webp';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Callback = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = "Invalid email";
    if (!form.phone.trim()) newErrors.phone = "Phone number is required";
    else if (!/^\d{10}$/.test(form.phone))
      newErrors.phone = "Phone must be 10 digits";
    if (!form.experience.trim())
      newErrors.experience = "Please select an experience level";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    toast.success("Success! We will contact you shortly.", {
      autoClose: 3000,
      closeOnClick: true,
      pauseOnHover: true,
    });

    setForm({ name: "", email: "", phone: "", experience: "" });
    setErrors({});
  };
  return (
    <div id="callback" className="bg-[#fff5f0] py-12 px-4">
        <ToastContainer position="top-right" autoClose={3000} /> 
      <div className="max-w-[1000px] mx-auto flex flex-col md:flex-row gap-10 items-center">
        {/* Left Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img src={call} alt="phone" className="max-w-lg" />
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="w-full md:w-1/2 space-y-4">
          <h2 className="text-2xl font-semibold">
            Have questions? <br /> Request a call from our counselors.
          </h2>

          {/* Name */}
          <div>
            <label className="block font-medium mb-1">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="w-full border rounded px-4 py-2"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block font-medium mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              className="w-full border rounded px-4 py-2"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label className="block font-medium mb-1">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center border rounded px-2">
              <span className="mr-2">🇮🇳</span>
              <input
                type="tel"
                className="w-full px-2 py-2 outline-none"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />
            </div>
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone}</p>
            )}
          </div>

          {/* Experience */}
          <div>
            <label className="block font-medium mb-1">
              Experience <span className="text-red-500">*</span>
            </label>
            {[
              "Working professional - Technical roles",
              "Working professional - Non technical",
              "College student - Final year",
              "College student - 1st to pre-final year",
              "Others",
            ].map((option) => (
              <div key={option} className="mb-1">
                <label className="flex items-center gap-2 ">
                  <input
                    type="radio"
                    name="experience"
                    value={option}
                    checked={form.experience === option}
                    onChange={(e) =>
                      setForm({ ...form, experience: e.target.value })
                    }
                    className="mr-3"
                  />
                  {option}
                </label>
              </div>
            ))}
            {errors.experience && (
              <p className="text-red-500 text-sm">{errors.experience}</p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="bg-[#FC652D] text-white w-full py-3 rounded-md font-semibold text-center cursor-pointer hover:bg-[#e35a24] transition"
          >
            Request callback
          </button>

          <p className="text-xs text-gray-600">
            I authorise Coding Ninjas to contact me with course updates & offers
            via Email/SMS/Whatsapp/Call. I have read and agree to the{" "}
            <span className="text-blue-600 underline">Privacy Policy</span> &{" "}
            <span className="text-blue-600 underline">Terms of use</span>.
          </p>
        </form>
      </div>
    </div>
  );
};

export default Callback;