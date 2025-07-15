import React, {useState} from "react";
import { RxCross1 } from "react-icons/rx";
import { LuPlus } from "react-icons/lu";
import { Link } from "react-scroll";
import nsdc from "./images/nsdc.webp";
import RequestCallbackButton from "./RequestCallbackButton"; // adjust path as needed


const faqContent = {
  "Full Stack Web Development": [
  {
    question: "What is the Full Stack Web Development Job Bootcamp program?",
    answer:
      "The Full Stack Web Development Job Bootcamp is an intensive, hands-on training program designed to equip learners with industry-relevant full stack development skills. You can choose between the MERN stack or Spring Boot, ensuring expertise in front-end and back-end technologies. The program follows an AI-infused curriculum, real-world projects, 1:1 mentorship, and expert-led sessions. With a 95% placement rate, 1200+ hiring companies, and an average salary hike of 128%, this web development bootcamp is ideal for anyone looking to break into tech or transition to a product-based company.",
  },
  {
    question:
      "What is the refund policy for the Full Stack Developer Bootcamp?",
    answer: "You can request a refund within 7 days of your batch start date.",
  },
  {
    question:
      "Who is eligible to enroll in the Full Stack Web Developer Bootcamp?",
    answer:
      "The Bootcamp is open to working professionals, final-year college students, and fresher graduates from any industry or domain.",
  },
  {
    question: "What is the duration of the Full Stack Web Development course?",
    answer:
      "The full stack developer course is a structured, job-oriented program designed for comprehensive training. The duration varies based on the learning pace and includes self-paced classes, hands-on projects, and placement assistance.",
  },
  {
    question: "How good is the placement record for this Bootcamp?",
    answer:
      "With a 95% placement rate and partnerships with 1200+ hiring companies, this FSD bootcamp has helped learners secure top tech jobs. Alumni have received an average salary hike of 128%, with some achieving 425% hikes.",
  },
],

"Data Analytics" : [
  {
    question: "What is the Data Analytics Job Bootcamp program?",
    answer: "The Data Analytics Job Bootcamp is an intensive, practice-based learning program designed to get you job-ready in just six months. The curriculum covers essential data analytics tools like Excel, SQL, Python, Power BI, and statistics through real-world case studies. With live classes, 1:1 expert sessions, and placement support, this data analytics bootcamp online ensures a smooth transition into the industry."

  },
  {
    question: "What is the refund policy for the Data Analytics Bootcamp program?",
    answer: "You can request a refund within 7 days of your batch start date."

  },
  {
    question: "Who is eligible for the Data Analyst Bootcamp?",
    answer: "The Job Bootcamp is open to working professionals, final-year college students, and fresher graduates from any industry or domain."

  },
  {
    question : "What is the duration of the Data Analytics Job Bootcamp?",
    answer: "The duration of the program is 6 months (learning phase), along with placement support until you secure your first job. Additionally, you will continue to have access to the content for 21 months from your batch start date."

  },
  {
    question: "How good is the placement record for the Data Analytics Bootcamp?",
    answer: "According to our records, 95% of learners who completed the program have secured suitable job opportunities. Coding Ninjas has consistently delivered on its promises and is a trusted name in the education industry, with experience in upskilling over 1,50,000 learners. We will create your profile, assist you in preparing your resume, conduct mock interviews, and do everything we can to help you land a job."

  },
]
};

const Faq = ({ setShowForm, courseName = "Full Stack Web Development" }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleIndex = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const faqData = faqContent[courseName] || [];
  return (
    <div className="max-w-[1000px] mx-auto px-4 py-12 mt-16">
      <h2 className="text-2xl font-bold text-center mb-8">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div key={index} className=" pb-4">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleIndex(index)}
            >
              <p className="font-medium text-gray-700">{item.question}</p>
              <span className="text-gray-600 text-xl">
                {activeIndex === index ? <RxCross1 /> : <LuPlus />}
              </span>
            </div>

            {/* Answer */}
            {activeIndex === index && (
              <div className="mt-4 text-gray-600 transition-all duration-300 ease-in-out">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="flex flex-wrap justify-center gap-6 mt-12">
       <RequestCallbackButton />

        <button
         onClick={() => setShowForm(true)} 
        className="px-6 py-2 bg-[#FC652D] text-white rounded hover:bg-[#e35a24] transition">
          Book a free webinar
        </button>
      </div>

      {/* Certificate section */}
      <div className="mt-16 p-6 border rounded-xl flex flex-col md:flex-row items-center gap-6">
        <img
          src={nsdc}
          alt="NSDC Certificate"
          className="w-full md:w-[280px] rounded-md"
        />
        <p className="text-lg font-medium text-center md:text-left">
          We are an approved training partner of NSDC under their scheme for
          market led fee-based services
        </p>
      </div>
    </div>
  );
};

export default Faq;
