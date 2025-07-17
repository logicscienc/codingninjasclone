import React from 'react';
import briefcase from '../trainingandinternship/img/briefcase.png';
import complaint from '../trainingandinternship/img/complaint.png';
import interview from '../trainingandinternship/img/job-interview.png';
import resume from '../trainingandinternship/img/resume.png';

const Career = () => {
  return (
    <div className="flex justify-center py-10 px-4 bg-white">
      <div className="max-w-[1000px] w-full bg-gradient-to-b from-[#1e3a5f] to-[#0f172a] rounded-xl text-white p-6 md:p-10 shadow-xl">
        <h2 className="text-3xl font-bold text-center mb-8">
          Coding Ninjas <span className="text-orange-400">Career Services</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-10 border-t border-orange-400 pt-10">
          
          {/* Left Section */}
          <div className="space-y-10">
            {/* Mock Interviews */}
            <div className="flex gap-4">
              <img src={interview} alt="Mock Interviews" className="w-8 h-8 mt-1" />
              <div>
                <h3 className="text-lg font-bold">1:1 Mock interviews</h3>
                <p className="text-sm">
                  10 mock interviews / domain expert sessions with industry experts
                  from reputed companies who have proven competencies in specific
                  fields.
                </p>
              </div>
            </div>

            {/* Access to Job Cell */}
            <div className="flex gap-4">
              <img src={briefcase} alt="Access to Job Cell" className="w-8 h-8 mt-1" />
              <div>
                <h3 className="text-lg font-bold">Access to job cell</h3>
                <p className="text-sm">
                  Our placement cell supports learners in their journey toward
                  successful careers, providing access to top job openings.
                </p>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="space-y-10">
            {/* Profile Building */}
            <div className="flex gap-4">
              <img src={complaint} alt="Profile Building" className="w-8 h-8 mt-1" />
              <div>
                <h3 className="text-lg font-bold">Profile building</h3>
                <p className="text-sm">
                  Our Profile Building program is designed to help professionals create
                  a compelling and market-ready profile that stands out to potential
                  employers.
                </p>
              </div>
            </div>

            {/* Resume Review */}
            <div className="flex gap-4">
              <img src={resume} alt="Resume Review" className="w-8 h-8 mt-1" />
              <div>
                <h3 className="text-lg font-bold">Resume Review</h3>
                <p className="text-sm">
                  Our Resume review service is designed to help you enhance your
                  resume and increase your chances of landing interviews.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="text-red-500 text-xs mt-10 text-center">
          Please note, neither Coding Ninjas nor IITM Pravartak, is liable for getting you placement or job offer upon completion of the program. We also don’t guarantee a job upon program completion. However, as a valuable benefit, we provide you with access to Coding Ninjas’ Career Services. These resources are designed to support your career growth and improve your job prospects.
        </p>
      </div>
    </div>
  );
};

export default Career;