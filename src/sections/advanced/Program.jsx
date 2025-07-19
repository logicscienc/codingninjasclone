import React from 'react';
import frame1 from './img/frame1.svg';
import frame2 from './img/frame2.svg';
import frame3 from './img/frame3.svg';
import frame4 from './img/frame4.svg';
import frame5 from './img/frame5.svg';

const benefits = [
  {
    title: 'Industry-Led Webinars',
    desc: 'Stay updated with real-world GenAI trends through 10X Club sessions and expert talks.',
    icon: frame1,
    large: true,
  },
  {
    title: 'Live, Interactive Classes',
    desc: 'Learn directly from experts with real-time support and feedback.',
    icon: frame2,
  },
  {
    title: 'GenAI & MAS projects',
    desc: 'Apply concepts with 10+ real-world projects, including a custom GenAI application & MAS concepts.',
    icon: frame3,
  },
  {
    title: '1:1 AI Doubt Support',
    desc: 'Get 24×7 personalised help for uninterrupted learning.',
    icon: frame4,
  },
  {
    title: 'Exclusive Curriculum',
    desc: 'A rare combination of Applied GenAI and MAS designed for maximum industry impact.',
    icon: frame5,
  },
];



const Program = () => {
  return (
    <div className="bg-black text-white py-12">
      <div className="max-w-[1000px] mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">
          Program benefits
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((item, index) => (
            <div
              key={index}
              className={`bg-[#111] shadow-lg rounded-2xl p-6 flex gap-4 items-start ${
                item.large ? 'md:col-span-2' : ''
              }`}
            >
              <img src={item.icon} alt={item.title} className="w-6 h-6 mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-300">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Program;



