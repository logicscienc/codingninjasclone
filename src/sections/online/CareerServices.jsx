import React from 'react';
import job from './img/job.webp';
import mentor from './img/mentor.webp';
import resume from './img/resume.png';
import speaker from './img/speaker.png';

const services = [
  {
    icon: job,
    title: "Mock interviews",
    desc: "Get ready for interviews with mock sessions by industry experts",
  },
  {
    icon: speaker,
    title: "Curated job boards",
    desc: "Get access to CN X Naukri job boards and showcase your profile to recruiters",
  },
  {
    icon: resume,
    title: "Resume building",
    desc: "Get personalised inputs on improving your resume",
  },
  {
    icon: mentor,
    title: "Industry mentor sessions",
    desc: "Connect with top talent working to get career and project guidance",
  },
];

const CareerServices = ({ onDownloadClick }) => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-[900px] mx-auto text-center">
        <h4 className="text-xs text-blue-600 font-semibold tracking-wide uppercase mb-2">
          Career Services
        </h4>
        <h2 className="text-2xl md:text-3xl font-bold mb-10">
          Helping you become industry ready
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-6 rounded-2xl shadow-md border border-gray-100 bg-white"
            >
              <img
                src={service.icon}
                alt={service.title}
                className="w-7 h-7 md:w-8 md:h-8 object-contain mt-1"
              />
              <div className="text-left">
                <h3 className="font-semibold text-gray-800 mb-1">{service.title}</h3>
                <p className="text-sm text-gray-600">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <button 
         onClick={onDownloadClick} 
        className="px-6 py-3 border border-black text-black font-medium rounded-lg hover:bg-gray-100 transition">
          Download curriculum
        </button>
      </div>
    </section>
  )
}

export default CareerServices
