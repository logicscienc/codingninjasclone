import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const modules = [
  {
    title: "Frontend module",
    content: [
      "Getting started with Basics",
      "Introduction to HTML",
      "More on HTML Forms",
      "Intro to CSS",
      "Styling with CSS",
      "Starting with the Resume project",
      "Flex",
      "Completing Resume",
      "Responsive designs",
      "Animations and 3D space",
      "Bootstrap",
      "Getting started with JavaScript",
      "Fundamentals of JS",
      "Loops, Arrays, Function & Objects",
      "Working of JS",
      "Functions in JS",
      "Oops in JS",
      "ES6 Classes",
      "DOM Manipulation",
      "Mini-Project: Quiz Game",
      "JS ASYNCHRONOS",
      "Modules in Js",
      "jQuery",
      "Git",
    ],
  },
  {
    title: "Backend with Node.js",
    content: [
      "Getting Started With NodeJS",
      "Modules in NodeJS",
      "Exploring More Modules",
      "Getting Started with Express",
      "Model-View-Controller – I",
      "Model-View-Controller – II",
      "File Upload, Session and Cookies",
      "Getting started with API",
      "Securing APIs",
      "Adding More features to E.Com App",
      "Handling Errors",
      "Getting Started with Databases",
      "MongoDB with NodeJS – I",
      "MongoDB with NodeJS – II",
      "Working with Mongoose – I",
      "Working with Mongoose – II",
      "Socket Programming",
      "Task Runners in NodeJS",
      "Deployment",
    ],
  },
  {
    title: "React",
    content: [
      "Introduction to React",
      "Learning JSX",
      "Score-Keeper App",
      "Create-React-App",
      "React Components -I",
      "React Components – II",
      "Styling in React",
      "Component Lifecycle Methods",
      "React Hooks",
      "Firebase 9",
      "React Router v6",
      "Context API",
      "Redux in React",
      "Redux Toolkit",
    ],
  },
  {
    title: "Database Management Systems (DBMS)",
    content: [
      "Introduction to DBMS",
      "Data Modeling",
      "Entity-Relationship Model",
      "Relational Model",
      "SQL",
      "Normalisation",
      "Transactions",
      "Classification of Databases",
      "NoSQL Databases",
      "Database Optimisation",
    ],
  },
  {
    title: "Operating Systems",
    content: [
      "Introduction to OS",
      "Process Management",
      "Memory Management",
      "Concurrency",
      "Storage Management",
      "Case Study: Linux OS",
    ],
  },
];

const AccordionItem = ({ module }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className=" py-3">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left flex justify-between items-center text-lg font-semibold"
      >
        <span>{module.title}</span>
        <span className="text-gray-600">
          {open ? <FaChevronUp /> : <FaChevronDown />}
        </span>
      </button>
      {open && (
        <ul className="mt-2 ml-4 list-disc text-gray-700 text-sm space-y-1">
          {module.content.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default function ProgramModules() {
  return (
    <div className="max-w-[1000px] mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        Program <span className="text-blue-600">Modules</span>
      </h1>

      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-bold text-blue-800 mb-2">
            1. Full Stack Web Development
          </h2>
          {modules.map((mod, i) => (
            <AccordionItem key={i} module={mod} />
          ))}
        </div>

        <div>
          <h2 className="text-xl font-bold text-blue-800 mt-6">
            2. Advanced Data Structures and Algorithms
          </h2>
          <p className="mt-2 font-medium">• Introduction to Programming</p>
          <p className="mt-2 font-medium">
            • Data Structures & Algorithms with (Java / Python / C++)
          </p>
        </div>
      </div>
    </div>
  );
}

