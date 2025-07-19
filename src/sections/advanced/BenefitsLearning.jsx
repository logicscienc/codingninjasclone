import React from 'react';
import frame6 from './img/frame6.svg';
import frame7 from './img/frame7.svg';
import frame8 from './img/frame8.svg';
import frame9 from './img/frame9.svg';
import frame10 from './img/frame10.svg';



const benefits = [
  {
    title: "Dedicated Relationship Manager",
    desc: "",
    icon: frame6,
  },
  {
    title: "NSDC Job Portal Access",
    desc: "",
    icon: frame7,
  },
  {
    title: "GenAI Project Portfolio",
    desc: "",
    icon: frame8,
  },
  {
    title: "Coding Ninjas Career Services",
    desc: "Industry-expert sessions, profile building assistance, CN job board access",
    icon: frame9,
  },
  {
    title: "Monthly GenAI Trend Updates",
    desc: "Stay up-to-date on tech advancements",
    icon: frame10,
  },
];
const BenefitsLearning = () => {
  return (
     <div className="bg-black text-white py-16">
      <div className="max-w-[1120px] mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">
          Benefits beyond learning
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="bg-[#111] shadow-md rounded-2xl p-6 flex gap-4 items-start"
            >
              <img src={item.icon} alt={item.title} className="w-6 h-6 mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                {item.desc && (
                  <p className="text-sm text-gray-300">{item.desc}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BenefitsLearning
