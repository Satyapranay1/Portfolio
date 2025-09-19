"use client";

import { Code, Server, Activity } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-50 dark:bg-gray-900 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I'm Satya Pranay, passionate about Machine Learning, Data Science, and Full-Stack Development. 
            I enjoy building intelligent systems and modern web applications that solve real-world problems.
          </p>
        </div>

        {/* Highlights Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="glass-card p-6 rounded-2xl flex flex-col items-center text-center hover:scale-105 transform transition duration-300">
            <Code className="w-12 h-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Full-Stack Development</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Building modern web apps using React, Node.js, and database technologies.
            </p>
          </div>
          <div className="glass-card p-6 rounded-2xl flex flex-col items-center text-center hover:scale-105 transform transition duration-300">
            <Server className="w-12 h-12 text-purple-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Data & AI</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Designing scalable AI/ML solutions, data analysis, and intelligent systems.
            </p>
          </div>
          <div className="glass-card p-6 rounded-2xl flex flex-col items-center text-center hover:scale-105 transform transition duration-300">
            <Activity className="w-12 h-12 text-pink-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Innovation</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Passionate about creative solutions and exploring emerging technologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
