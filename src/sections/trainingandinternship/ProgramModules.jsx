import React, { useState } from 'react';
import { IoMdArrowDropupCircle } from "react-icons/io";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const modulesData = [
  {
    title: "Introduction to Programming (Java / C++ / Python)",
    content: [
      "Basics of Programming: – Understand variables, data types, and basic input/output operations.",
      "Loops and Functions: – Master iterative processes using loops and organize code with reusable functions.",
      "Arrays/Lists: – Explore how to store, access, and manipulate collections of data efficiently.",
      "Strings and 2D Lists: – Work with text data and multi-dimensional structures for advanced problem-solving."
    ]
  },
  {
    title: "Data Structures & Algorithms",
    content: [
      "Problem Solving Techniques: – Develop logical thinking and strategies to break down complex problems into manageable parts.",
      "Object Oriented Programming: – Learn the principles of OOP, including classes, objects, inheritance, and polymorphism, to design modular and scalable programs.",
      "Linear Data Structures: – Master arrays, linked lists, stacks, and queues for efficient data storage and retrieval.",
      "Trees: – Understand hierarchical data structures and perform operations like traversal, insertion, and deletion.",
      "Advanced Data Structures: – Dive into heaps, graphs, and hash tables to solve complex computational problems.",
      "Dynamic Programming: – Solve optimisation problems using techniques like memoization and tabulation to improve efficiency."
    ]
  }
];

const ProgramModules = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: ''
  });
  const [errors, setErrors] = useState({});

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    if (!formData.phone.trim()) newErrors.phone = "Mobile number is required.";
    if (!formData.experience.trim()) newErrors.experience = "Experience is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      toast.success("Curriculum downloaded successfully!");
      setDrawerOpen(false);
      setFormData({ name: '', email: '', phone: '', experience: '' });
      setErrors({});
    } else {
      toast.error("Please fill all required fields.");
    }
  };

  return (
    <>
      <div className="px-4 py-10 flex justify-center bg-white">
        <div className="max-w-[1000px] w-full relative">
          <h2 className="text-3xl font-semibold text-center mb-8">
            Program <span className="text-blue-600">Modules</span>
          </h2>

          <div className="space-y-4">
            {modulesData.map((module, index) => (
              <div key={index} className="pb-4 border-b">
                <button
                  className="w-full flex items-center justify-between text-left text-lg font-medium text-gray-800 focus:outline-none"
                  onClick={() => toggle(index)}
                >
                  {module.title}
                  <span className="ml-2">
                    {openIndex === index ? (
                      <IoMdArrowDropupCircle className="text-gray-600" />
                    ) : (
                      <IoIosArrowDropdownCircle className="text-gray-600" />
                    )}
                  </span>
                </button>
                {openIndex === index && (
                  <ul className="mt-4 ml-4 list-disc space-y-2 text-gray-700 text-sm">
                    {module.content.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* Button to Open Drawer */}
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setDrawerOpen(true)}
              className="bg-blue-600 text-white font-semibold px-6 py-3 rounded hover:bg-blue-700 transition"
            >
              Download Curriculum
            </button>
          </div>

          {/* Sliding Drawer */}
          {drawerOpen && (
            <div className="fixed top-0 right-0 h-screen w-[500px] bg-white shadow-lg z-50 px-6 py-8 overflow-y-auto transition-transform duration-300">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold">Fill your details to download Curriculum</h3>
                <button onClick={() => setDrawerOpen(false)} className="text-gray-500 text-xl font-bold">×</button>
              </div>

              <p className="text-sm text-red-600 mb-4">Last few seats left!</p>

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label className="block font-medium text-sm">Name <span className="text-red-600">*</span></label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Full Name"
                    className="w-full border bg-gray-100 px-3 py-2 rounded"
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block font-medium text-sm">Email ID <span className="text-red-600">*</span></label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email Address"
                    className="w-full border bg-gray-100 px-3 py-2 rounded"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block font-medium text-sm">Mobile Number <span className="text-red-600">*</span></label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Mobile Number"
                    className="w-full border bg-gray-100 px-3 py-2 rounded"
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block font-medium text-sm">Experience <span className="text-red-600">*</span></label>
                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    className="w-full border bg-gray-100 px-3 py-2 rounded"
                  >
                    <option value="">Experience</option>
                    <option value="Fresher">Fresher</option>
                    <option value="1-2 years">1-2 years</option>
                    <option value="3+ years">3+ years</option>
                  </select>
                  {errors.experience && <p className="text-red-500 text-xs mt-1">{errors.experience}</p>}
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-semibold rounded"
                >
                  Download Curriculum
                </button>
              </form>

              <p className="text-xs text-gray-500 mt-4">
                I authorise Coding Ninjas to contact me with course updates & offers via Email /SMS /WhatsApp/ Call. I have read and agree to the 
                <span className="text-purple-600 underline ml-1 cursor-pointer">Privacy Policy & Terms of use</span>.
              </p>
            </div>
          )}
        </div>
      </div>

      <ToastContainer />
    </>
  );
};

export default ProgramModules;

