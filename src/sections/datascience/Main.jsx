import React, { useState } from "react";
import advancedtech from "../sharedSections/images/advancedtech.pdf";
import advance from "../sharedSections/images/advance.pdf";
import frametech from "../sharedSections/images/frametech.svg";
import futureready from "../sharedSections/images/futureready.svg";
import callimage from "../sharedSections/images/callimage.jpg";

import hand from "./img/hand.webp";
import placement from "../../assets/placement.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Main = ({ stats }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
  });

  const [showDrawer, setShowDrawer] = useState(false);
  const [callbackData, setCallbackData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
  });

  React.useEffect(() => {
    const handleMessage = (event) => {
      console.log("Received message:", event.data);
      if (event.data === "openDrawer") {
        setShowDrawer(true);
      }
      if (event.data === "callbackSubmitted") {
        toast.success(
          "We’ve received your request. Our advisor will reach out shortly!"
        );
      }
    };
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let selectedPdf =
      formData.experience === "nontech" ? advance : advancedtech;
    const html = `
<html>
<head>
  <title>Curriculum PDF</title>
  <style>
    body {
      margin: 0;
      display: flex;
      height: 100vh;
      font-family: Arial, sans-serif;
    }
    iframe {
      flex: 1;
      height: 100vh;
      border: none;
    }
    .right {
      width: 360px;
      background: #ffffff;
      padding: 24px;
      box-sizing: border-box;
      overflow-y: auto;
    }
    .top img {
      height: 40px;
      width: 40px;
      margin-bottom: 12px;
    }
    .top h3 {
      font-size: 1.2rem;
      font-weight: 700;
      margin-bottom: 8px;
    }
    .top p {
      font-size: 0.95rem;
      color: #333;
      margin-bottom: 20px;
    }
    .btn {
      background-color: #f97316;
      color: white;
      padding: 12px 20px;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      font-size: 1rem;
      font-weight: 600;
      width: 100%;
      margin-top: 12px;
    }
    .footer {
      font-size: 0.8rem;
      color: #dc2626;
      margin-top: 24px;
    }
    .logo {
      text-align: right;
      font-weight: bold;
      color: #f97316;
      font-size: 1.4rem;
      margin-top: 24px;
    }

    .drawer {
      position: fixed;
      top: 0;
      right: 0;
      height: 100%;
      width: 40vw;
      background-color: white;
      box-shadow: -2px 0 10px rgba(0, 0, 0, 0.2);
      transform: translateX(100%);
      transition: transform 0.3s ease-in-out;
      padding: 24px;
      box-sizing: border-box;
      z-index: 1000;
    }

    .drawer.open {
      transform: translateX(0);
    }

    .drawer h2 {
      margin-top: 0;
      margin-bottom: 16px;
      font-size: 1.4rem;
    }

    .drawer label {
      display: block;
      margin-bottom: 6px;
      font-weight: 600;
      font-size: 0.9rem;
    }

    .drawer input, .drawer select {
      width: 100%;
      padding: 10px;
      font-size: 1rem;
      border-radius: 6px;
      border: 1px solid #ccc;
      margin-bottom: 16px;
      box-sizing: border-box;
    }

    .close-btn {
      float: right;
      font-size: 22px;
      border: none;
      background: none;
      cursor: pointer;
    }

    .experience-options {
      margin-bottom: 16px;
    }

    .experience-options label {
      display: block;
      font-weight: normal;
      margin-bottom: 6px;
      font-size: 0.9rem;
    }

    .experience-options input {
      margin-right: 8px;
    }
      

  </style>
</head>
<body>
  <iframe src="${selectedPdf}" title="Curriculum PDF"></iframe>

  <div class="right">
    <div class="top">
      <img src="${callimage}" alt="Call Icon"/>
      <h3>How this program can boost your career?</h3>
      <p>Talk to our program advisors, to understand the relevance and impact this program will have on your career.</p>
      <button class="btn" id="callbackBtn">Request Callback</button>

      <div class="drawer" id="drawer">
        <button class="close-btn" onclick="document.getElementById('drawer').classList.remove('open')">&times;</button>
        <h2>Request a Callback</h2>
          <form onsubmit="event.preventDefault(); showToast(); document.getElementById('drawer').classList.remove('open');">





          <label>Name</label>
          <input type="text" required />

          <label>Email</label>
          <input type="email" required />

          <label>Phone</label>
          <input type="tel" required />

          <div class="experience-options">
            <label>Experience</label>
            <label><input type="radio" name="experience" value="tech" required /> Technical</label>
            <label><input type="radio" name="experience" value="nontech" required /> Non-Technical</label>
            <label><input type="radio" name="experience" value="final" required /> College - Final Year</label>
            <label><input type="radio" name="experience" value="prefinal" required /> College - Pre-final Year</label>
            <label><input type="radio" name="experience" value="others" required /> Others</label>
          </div>

          <button type="submit" class="btn">Request Callback</button>
        </form>
      </div>

      <div class="footer">50,000+ learners found this helpful</div>
    </div>
  </div>
  <style>
  .toast {
    visibility: hidden;
    min-width: 240px;
    background-color: #333;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 14px;
    position: fixed;
    z-index: 1001;
    right: 30px;
    top: 30px;
    font-size: 0.95rem;
    box-shadow: 0 0 10px rgba(0,0,0,0.3);
    opacity: 0;
    transition: visibility 0s, opacity 0.5s ease-in-out;
  }

  .toast.show {
    visibility: visible;
    opacity: 1;
  }
</style>

<div id="toast" class="toast">We’ve received your request. Our advisor will reach out shortly!</div>

<script>
  function showToast() {
    const toast = document.getElementById('toast');
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
  }
</script>


  <script>
    document.getElementById("callbackBtn").addEventListener("click", () => {
      document.getElementById("drawer").classList.add("open");
    });
  </script>
</body>
</html>
`;

    const newTab = window.open();
    newTab.document.write(html);
    newTab.document.close();
  };

  return (
    <section
      id="about"
      className="bg-gradient-to-br from-[#0e121d] via-[#111827] to-[#1e293b] text-white"
    >
      <div className="max-w-[1000px] mx-auto px-4 py-12 flex flex-col md:flex-row justify-between items-start gap-10">
        <div className="md:w-1/2 space-y-6 mt-6 md:mt-12">
          <img
            src={frametech}
            alt="For professionals badge"
            className="h-35  md:h-7 w-auto"
          />

          <h1 className="text-3xl md:text-3xl font-bold leading-tight">
            PG Certification in Data Science with GenAI by E&ICT IIT Guwahati
          </h1>
          <p className="text-gray-300 text-sm md:text-base">
            Get years ahead in just nine months through practice-based learning and real-world projects.
          </p>
          <div className="flex flex-col flex-wrap gap-3 text-xs font-medium">
            <span className="bg-[#1c1f2b] px-3 py-1 rounded-full flex items-center gap-1">
              <img src={hand} className="h-6 w-6" /> Earn Alumni Status by E&ICT Academy, IITG
            </span>

            <span className="bg-[#1c1f2b] px-3 py-1 rounded-full flex items-center gap-1">
              <img src={placement} className="h-6 w-6" /> Orientation & Graduation ceremony at E&ICT, IITG
            </span>
            
          </div>

          <div className="bg-[#1f2937] text-center grid grid-cols-4 gap-4 text-sm text-white py-4 px-6 rounded-xl w-fit mt-10">
            {stats.map((stat, idx) => (
              <div key={idx}>
                <p className="text-lg font-bold">{stat.value}</p>
                <p className="text-xs text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex-1 bg-white p-8 space-y-4 rounded-xl"
        >
          <h3 className="text-lg font-semibold text-black">
            Check out the full curriculum now
          </h3>

          <label className="block text-sm font-semibold text-gray-700">
            Name *
          </label>
          <input
            name="name"
            required
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded text-gray-700"
          />
          <label className="block text-sm font-semibold text-gray-700">
            Email *
          </label>
          <input
            name="email"
            type="email"
            required
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <label className="block text-sm font-semibold text-gray-700">
            Phone Number *
          </label>
          <input
            name="phone"
            type="tel"
            pattern="[0-9]{10}"
            required
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-md text-gray-700"
          />

          <div className="space-y-2">
            <label className="block font-medium text-gray-700">
              Experience *
            </label>
            <div className="space-y-2">
              {[
                {
                  label: "Working Professional - Technical Roles",
                  value: "tech",
                },
                {
                  label: "Working Professional - Non Technical",
                  value: "nontech",
                },
                { label: "College Student - Final Year", value: "final" },
                {
                  label: "College Student - 1st to Pre-final Year",
                  value: "prefinal",
                },
                { label: "Others", value: "others" },
              ].map((opt) => (
                <label
                  key={opt.value}
                  className="flex items-center space-x-2 text-sm text-gray-800"
                >
                  <input
                    type="radio"
                    name="experience"
                    value={opt.value}
                    onChange={handleChange}
                    required
                    className="accent-black"
                  />
                  <span>{opt.label}</span>
                </label>
              ))}
            </div>
          </div>

          <button
            type="submit"
            disabled={!formData.experience}
            className={`bg-orange-500 text-white px-4 py-2 rounded w-full ${
              !formData.experience
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-orange-600"
            }`}
          >
            Unlock curriculum
          </button>

          <p className="text-xs text-gray-500 mt-2">
            I authorise Coding Ninjas to contact me with course updates &
            offers...
          </p>
        </form>
      </div>

      {showDrawer && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={() => setShowDrawer(false)}
        />
      )}

      {showDrawer && (
        <div className="fixed top-0 right-0 h-screen w-[40vw] bg-white shadow-xl z-50 p-8 overflow-y-auto transition-all duration-500">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">
              Fill your details to request for callback
            </h2>
            <button
              onClick={() => setShowDrawer(false)}
              className="text-xl text-black"
            >
              &times;
            </button>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              // You can handle this submission separately or reuse the same logic
              toast.success(
                "We’ve received your request. Our advisor will reach out shortly!"
              );
              setShowDrawer(false);
            }}
            className="space-y-4"
          >
            <label className="block font-semibold text-sm">
              Name <span className="text-red-600">*</span>
            </label>
            <input
              className="w-full border border-gray-300 p-2 rounded"
              name="name"
              required
              value={callbackData.name}
              onChange={(e) =>
                setCallbackData({ ...callbackData, name: e.target.value })
              }
            />

            <label className="block font-semibold text-sm">
              Email ID <span className="text-red-600">*</span>
            </label>
            <input
              className="w-full border border-gray-300 p-2 rounded"
              name="email"
              type="email"
              required
              value={callbackData.email}
              onChange={(e) =>
                setCallbackData({ ...callbackData, email: e.target.value })
              }
            />

            <label className="block font-semibold text-sm">
              Mobile Number <span className="text-red-600">*</span>
            </label>
            <input
              className="w-full border border-gray-300 p-2 rounded"
              name="phone"
              type="tel"
              pattern="[0-9]{10}"
              required
              value={callbackData.phone}
              onChange={(e) =>
                setCallbackData({ ...callbackData, phone: e.target.value })
              }
            />

            <label className="block font-semibold text-sm">
              Experience <span className="text-red-600">*</span>
            </label>
            <select
              required
              className="w-full border border-gray-300 p-2 rounded"
              value={callbackData.experience}
              onChange={(e) =>
                setCallbackData({ ...callbackData, experience: e.target.value })
              }
            >
              <option value="">Select</option>
              <option value="tech">Technical Roles</option>
              <option value="nontech">Non Technical</option>
              <option value="final">College - Final Year</option>
              <option value="prefinal">College - Pre-final Year</option>
              <option value="others">Others</option>
            </select>

             <button
              type="submit"
              disabled={
                !callbackData.name ||
                !callbackData.email ||
                !callbackData.phone ||
                !callbackData.experience
              }
              className={`bg-blue-600 text-white py-2 w-full rounded font-semibold ${
                !callbackData.name ||
                !callbackData.email ||
                !callbackData.phone ||
                !callbackData.experience
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-blue-700"
              }`}
            >
              Request Callback
            </button> 
             
          </form>

          <p className="text-xs text-red-500 mt-4">
            I authorise Coding Ninjas to contact me with course updates & offers
            via Email / SMS / WhatsApp / Call. I have read and agree to the{" "}
            <a href="#" className="underline text-blue-600">
              Privacy Policy
            </a>{" "}
            &{" "}
            <a href="#" className="underline text-blue-600">
              Terms of use
            </a>
            .
          </p>
        </div>
      )}
      <ToastContainer position="top-right" autoClose={3000} />
    </section>
  );
};

export default Main;