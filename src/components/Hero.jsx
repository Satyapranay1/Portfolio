"use client";

export default function Hero() {
  return (
    <section
      id="home"
      className="h-screen flex flex-col items-center justify-center text-center relative overflow-hidden bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 text-white px-6"
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>

      <div className="relative z-10 animate-fadeInUp">
        {/* Greeting */}
        <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-yellow-300 via-pink-400 to-red-500 bg-clip-text text-transparent">
          Hi, I'm Satya 👋
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-xl md:text-2xl max-w-2xl mx-auto text-gray-200">
          Data Scientist | Machine Learning Engineer | Full-Stack Developer
        </p>

        {/* Resume Button */}
        <a
          href="/assets/Satya Pranay Resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-block px-8 py-3 bg-white text-gray-900 font-semibold rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-300"
        >
          Download Resume
        </a>

        {/* Social Links (Optional) */}
        <div className="mt-8 flex justify-center gap-6">
          <a
            href="https://github.com/Satyapranay1"
            target="_blank"
            rel="noreferrer"
            className="text-white hover:text-yellow-300 transition-colors duration-300 text-2xl"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/kotha-satya-pranay-856a09246/"
            target="_blank"
            rel="noreferrer"
            className="text-white hover:text-blue-400 transition-colors duration-300 text-2xl"
          >
            LinkedIn
          </a>
        </div>
      </div>

      {/* Tailwind Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 1s ease forwards;
        }
      `}</style>
    </section>
  );
}
