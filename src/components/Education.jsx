import React from "react";
import { GraduationCap } from "lucide-react";

const educationData = [
  {
    degree: "Bachelor of Technology in Computer Science",
    school: "VIT – AP University, Andhra Pradesh",
    year: "2021 - 2025",
    details: [
      "Specialization in Data Science and Machine Learning",
      "Projects: Weather Classification, Bus Reservation System,Medical Insurance Estimator",
      "CGPA: 9.19/10",
    ],
  },
  {
    degree: "Intermediate (Class XII)",
    school: "Sarada College",
    year: "2019 - 2021",
    details: ["PCM (Physics, Chemistry, Mathematics)", "Percentage: 95%"],
  },
  {
    degree: "High School (Class X)",
    school: "Ideal High School",
    year: "2018 - 2019",
    details: ["Percentage: 95%"],
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="py-20 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 flex items-center justify-center gap-3">
          <GraduationCap className="w-10 h-10 text-blue-500 dark:text-purple-400 animate-bounce" />
          Education
        </h2>

        {/* Horizontal Scrollable Cards */}
        <div className="flex space-x-6 overflow-x-auto px-2 scroll-smooth scrollbar-custom snap-x snap-mandatory">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="min-w-[300px] bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-transparent hover:border-gradient-to-r hover:border-blue-500/40 flex-shrink-0 snap-start"
            >
              <h3 className="text-2xl font-bold text-blue-500 dark:text-purple-400">
                {edu.degree}
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">{edu.school}</p>
              <p className="text-sm text-gray-400 italic mt-1">{edu.year}</p>
              <ul className="mt-4 list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                {edu.details.map((point, i) => (
                  <li
                    key={i}
                    className="hover:text-blue-500 dark:hover:text-purple-400 transition-all"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
