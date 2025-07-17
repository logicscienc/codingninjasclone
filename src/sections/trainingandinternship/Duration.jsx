import React from 'react';
import certificate from './img/certificate.png';
import clock from './img/clock.png';
import education from './img/education.png';
import hourglass from './img/hourglass.png';

const Duration = () => {
  const items = [
    {
      icon: clock,
      title: 'Next Wednesday',
      subtitle: 'Deadline: Midnight 11:59 P.M.',
      label: 'PROGRAM START',
    },
    {
      icon: hourglass,
      title: '4 Months, Online',
      subtitle: 'Weekly Effort: 14–15 hours',
      label: 'DURATION',
    },
    {
      icon: education,
      title: 'Course Pause',
      subtitle: '20 Days',
      label: 'COURSE PAUSE',
    },
    {
      icon: certificate,
      title: 'Students',
      subtitle: 'Pursuing Graduation',
      label: 'ELIGIBILITY',
    },
  ];

  return (
    <div className="bg-[#f9f9f9] py-10 px-4">
      <div className=" mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {items.map((item, index) => (
          <div key={index} className="px-4 py-6">
            <p className="text-sm font-semibold text-gray-600 uppercase mb-3">
              {item.label}
            </p>
            <img src={item.icon} alt={item.label} className="mx-auto h-6 mb-3" />
            <h3 className="text-lg font-bold text-gray-800">{item.title}</h3>
            <p className="text-sm text-gray-500 mt-1">{item.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Duration;


