import React, { useState } from "react";
import { toast } from "react-toastify";
import { IoMdClose } from "react-icons/io";

const CallbackDrawer = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    experience: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Valid email is required";
    if (!formData.mobile.trim() || formData.mobile.length !== 10)
      newErrors.mobile = "Valid 10-digit mobile number required";
    if (!formData.experience.trim())
      newErrors.experience = "Experience is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      toast.success("Callback request submitted!");
      onClose();
      setFormData({ name: "", email: "", mobile: "", experience: "" });
    } else {
      toast.error("Please fix the errors!");
    }
  };

  return (
    <div
      className={`fixed top-0 right-0 h-full bg-white shadow-lg transition-transform duration-300 z-50 transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } w-full md:w-[500px] p-4 md:p-6 overflow-y-auto`}
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-base md:text-lg font-bold">
          Fill your details to request for callback
        </h2>
        <IoMdClose onClick={onClose} className="text-2xl cursor-pointer" />
      </div>

      <p className="text-red-500 mb-4 text-sm">Last few seats left!</p>

      {/* Form */}
      <div className="space-y-4">
        {/* Name */}
        <div>
          <label className="block font-medium text-sm">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            className="w-full border px-3 py-2 rounded-md text-sm"
            placeholder="Name"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
          />
          {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
        </div>

        {/* Email */}
        <div>
          <label className="block font-medium text-sm">
            Email ID <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            className="w-full border px-3 py-2 rounded-md text-sm"
            placeholder="Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          {errors.email && (
            <p className="text-red-500 text-xs">{errors.email}</p>
          )}
        </div>

        {/* Mobile */}
        <div>
          <label className="block font-medium text-sm">
            Mobile Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            className="w-full border px-3 py-2 rounded-md text-sm"
            placeholder="Phone Number"
            value={formData.mobile}
            onChange={(e) =>
              setFormData({ ...formData, mobile: e.target.value })
            }
          />
          {errors.mobile && (
            <p className="text-red-500 text-xs">{errors.mobile}</p>
          )}
        </div>

        {/* Experience */}
        <div>
          <label className="block font-medium text-sm">
            Experience <span className="text-red-500">*</span>
          </label>
          <select
            className="w-full border px-3 py-2 rounded-md text-sm"
            value={formData.experience}
            onChange={(e) =>
              setFormData({ ...formData, experience: e.target.value })
            }
          >
            <option value="">Select</option>
            <option value="Fresher">Fresher</option>
            <option value="0-1 years">0-1 years</option>
            <option value="1-3 years">1-3 years</option>
            <option value="3+ years">3+ years</option>
          </select>
          {errors.experience && (
            <p className="text-red-500 text-xs">{errors.experience}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          className="w-full bg-blue-600 text-white py-2 rounded-md font-medium text-sm hover:bg-blue-700 transition"
        >
          Request Callback
        </button>
      </div>

      <p className="text-xs text-gray-500 mt-4 leading-relaxed">
        I authorise Coding Ninjas to contact me with course updates & offers
        via Email / SMS / WhatsApp / Call. I have read and agree to the{" "}
        <span className="text-blue-500 underline cursor-pointer">
          Privacy Policy
        </span>{" "}
        &{" "}
        <span className="text-blue-500 underline cursor-pointer">
          Terms of Use
        </span>
        .
      </p>
    </div>
  );
};

export default CallbackDrawer;
