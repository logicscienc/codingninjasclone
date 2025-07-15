import React, { useState } from "react";

const ApplyModal = ({ onClose }) => {
  const [form, setForm] = useState({ name: "", email: "" });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Invalid email";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
    }, 1500); // fake API delay
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-md w-96 shadow-lg">
        {success ? (
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4 text-green-600">Success!</h3>
            <p className="text-sm text-gray-600">Your application has been submitted.</p>
            <button
              className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-md"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <h3 className="text-lg font-bold mb-4">Apply Now</h3>
            <div className="space-y-3">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="border w-full p-2 rounded"
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="border w-full p-2 rounded"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </div>
              <button
                onClick={handleSubmit}
                disabled={submitting}
                className="w-full bg-[#FC652D] text-white py-2 rounded hover:bg-[#e35a24] transition"
              >
                {submitting ? "Submitting..." : "Submit"}
              </button>
              <button
                onClick={onClose}
                className="w-full text-sm text-gray-500 hover:underline mt-2"
              >
                Cancel
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ApplyModal;
