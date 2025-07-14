import React from 'react'
import stanford from './images/stanford.png';
import google from './images/google.jpeg';
import appamazon from './images/appamazon.jpeg';
import facebook from './images/facebook.jpeg';
import iiitdelhi from './images/iiitdelhi.png';
import iitdelhi2 from './images/iitdelhi2.png';
import morning from "../../assets/morning.jpg";
import woman from "../../assets/woman.jpg";
import man1 from "../../assets/man1.jpg";
import RequestCallbackButton from './RequestCallbackButton';


const facultyData = [
  {
    name: 'Ankush Singla',
    role: 'Co-Founder & Instructor',
    image: man1,
    logos: [iitdelhi2, appamazon, facebook, stanford],
    teaches: ['Data Structures & Algorithms', 'Competitive Programming'],
    linkedin: '#',
  },
  {
    name: 'Nidhi Aggarwal',
    role: 'Instructor',
    image: morning,
    logos: [iiitdelhi],
    teaches: ['Basics of Java with DSA'],
    linkedin: '#',
  },
  {
    name: 'Manisha Khattar',
    role: 'Instructor',
    image: woman,
    logos: [google, iiitdelhi],
    teaches: ['MERN Stack'],
    linkedin: '#',
  },
];


const Faculty = ({ setShowForm }) => {
  return (
     <div className="bg-[#f6fdff] py-20 px-4">
      <div className="max-w-[1000px] mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-16">
          Faculty that brings out the best in you
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {facultyData.map((faculty, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 flex flex-col items-center shadow-md"
            >
              <img
                src={faculty.image}
                alt={faculty.name}
                className="w-24 h-24 rounded-full object-cover mb-4"
              />
              <h3 className="font-semibold text-lg">{faculty.name}</h3>
              <p className="text-sm text-gray-600 mb-4">{faculty.role}</p>

              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {faculty.logos.map((logo, idx) => (
                  <img
                    key={idx}
                    src={logo}
                    alt="logo"
                    className="w-8 h-8 object-contain"
                  />
                ))}
              </div>

              <div className="text-sm text-gray-700 mb-4">
                <span className="font-medium">Teaches</span>
                <ul className="mt-1 space-y-1">
                  {faculty.teaches.map((line, i) => (
                    <li key={i}>{line}</li>
                  ))}
                </ul>
              </div>

              <a
                href={faculty.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 text-sm font-medium hover:underline flex items-center gap-1"
              >
                LinkedIn profile <span>↗</span>
              </a>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-4 mt-16">
          <RequestCallbackButton/>
          <button 
           onClick={() => setShowForm(true)}
          className="px-6 py-2 bg-[#FC652D] text-white rounded hover:bg-[#e35a24] transition">
            Book a free webinar
          </button>
        </div>
      </div>
    </div>
  )
}

export default Faculty
