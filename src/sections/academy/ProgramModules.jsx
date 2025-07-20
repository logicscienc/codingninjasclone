import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const modules = [
  {
    title: "Introduction to Data Analytics",
    content: [
      "Introduction to Data",
      "Type of Data Analysis",
      "Framework of Data Analysis",
      "Project – National Air Quality",
    ],
  },
  {
    title: "Data Analytics with Excel",
    content: [
      "Basics of Excel",
      "Business Problem Introduction",
      "Data Preparation",
      "Data Analysis",
      "Art of Story Telling",
      "Case Study 1: US Healthcare Dataset",
      "Case Study 2: India CPI Inflation",
    ],
  },
  {
    title: "Data Visualization",
    content: [
      "Introduction to Data Visualization",
      "Introduction to PowerBI",
      "PowerBI Visualizations",
      "Project: IT Department PowerBI Dashboard",
    ],
  },
  {
    title: "Data Analytics with SQL",
    content: [
      "Database and SQL",
      "Retrieve Data",
      "Filtering Data",
      "SQL Joins",
      "Case Study 1: Retail Store",
      "Case Study 2: E-Com Business",
    ],
  },
  {
    title: "Python Programming",
    content: [
      "Introduction to Python",
      "Conditional Statements",
      "Loops",
      "Case Study 1: Covid 19",
      "Case Study 2: PhonePe Digital Payments",
    ],
  },
  {
    title: "Data Types",
    content: ["Strings, List and 2D List", "Tuples, Dictionaries, and Sets"],
  },
  {
    title: "Python Data Libraries",
    content: ["NumPy (Library)", "Matplotlib (Library)", "Pandas (Library)"],
  },
  {
    title: "Generative AI",
    content: [
      "Introduction to Generative AI",
      "Prompt Engineering",
      "Generative AI in Excel",
      "Python with Generative AI",
      "Generative AI for SQL",
      "Data Analysis with Generative AI",
    ],
  },
];

const AccordionItem = ({ module }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-300 py-2">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center text-left text-base sm:text-lg font-semibold text-gray-800"
      >
        <span>{module.title}</span>
        <span className="text-gray-500">{open ? <FaChevronUp /> : <FaChevronDown />}</span>
      </button>
      {open && (
        <ul className="mt-2 ml-4 list-disc text-sm sm:text-base text-gray-700 space-y-1">
          {module.content.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

const ProgramModules = () => {
  return (
    <div className="max-w-[1000px] mx-auto px-4 sm:px-6 py-10">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">
        Program <span className="text-blue-600">Modules</span>
      </h2>

      <div className="space-y-4">
        {modules.map((module, index) => (
          <AccordionItem key={index} module={module} />
        ))}
      </div>
    </div>
  );
};

export default ProgramModules;


