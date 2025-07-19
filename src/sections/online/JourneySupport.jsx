import React from 'react';
import course from './img/course.svg';
import square from './img/square.webp';
import icon1 from './img/icon1.webp';
import icon2 from './img/icon2.webp';
import icon3 from './img/icon3.webp';


const points = [
  {
    icon: icon1,
    alt: "Certification",
    text: (
      <>
        <strong>Get certified</strong> by one of India’s premier institute
      </>
    ),
  },
  {
    icon: icon2,
    alt: "TA support",
    text: (
      <>
        <strong>Teaching assistants</strong> available 7 days a week
      </>
    ),
  },
  {
    icon: icon3,
    alt: "Video/chat",
    text: (
      <>
        Video and <strong>chat support</strong> available
      </>
    ),
  },
  {
    icon: square,
    alt: "Personalised help",
    text: (
      <>
        Personalised guidance from <strong>relationship managers</strong>
      </>
    ),
  },
];

const JourneySupport = () => {
  return (
     <div className="bg-[#fefdfc] py-16 px-4">
      <div className="max-w-[800px] mx-auto">
        <h4 className="text-xs text-center text-blue-600 tracking-wider font-semibold uppercase mb-2">
          Coding Ninjas Advantage
        </h4>
        <h2 className="text-center text-2xl md:text-3xl font-semibold mb-10">
          With you throughout your journey
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-16">
          {/* Left Image */}
          <div className="flex-shrink-0">
            <img src={course} alt="Illustration" className="w-[200px] md:w-[200px]" />
          </div>

          {/* Right Points */}
          <div className="space-y-6 w-full">
            {points.map((point, index) => (
              <div key={index} className="flex items-start gap-4">
                <img
                  src={point.icon}
                  alt={point.alt}
                  className="w-8 h-8 md:w-10 md:h-10 object-contain"
                />
                <p className="text-gray-700 text-xl md:text-base">{point.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default JourneySupport
