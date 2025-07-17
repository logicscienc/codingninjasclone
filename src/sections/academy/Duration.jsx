import React from 'react';
import certificate from '../trainingandinternship/img/certificate.png';
import clock from '../trainingandinternship/img/clock.png';
import education from '../trainingandinternship/img/education.png';
import hourglass from '../trainingandinternship/img/hourglass.png';

const Duration = () => {
  const items = [
    {
      icon: clock,
      title: '10th August, 2025',
      subtitle: 'Deadline: 9th August, 2025',
      label: 'PROGRAM START',
    },
    {
      icon: hourglass,
      title: '6 Months, Online',
      subtitle: 'Weekly Effort: 14-15 hours',
      label: 'DURATION',
    },
    {
      icon: education,
      title: 'Live Learning',
      subtitle: 'Monday, Wednesday, Friday 8-10 PM',
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