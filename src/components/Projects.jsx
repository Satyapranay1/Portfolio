const projects = [
  {
    title: "TripVerse",
    desc: "Full-stack travel management platform for booking flights and hotels with chat-based communication and secure authentication.",
    tech: ["React.js", "TypeScript", "Tailwind CSS", "Spring Boot", "PostgreSQL", "JWT", "REST API"],
    link: "https://trip-verse-gold.vercel.app/",
  },
  {
    title: "Fit-Fusion",
    desc: "Fitness tracking and workout recommendation app offering personalized plans, daily progress tracking, and nutrition tips.",
    tech: ["React.js", "TypeScript", "PostgreSQL", "Spring Boot", "Tailwind CSS", "JWT Authentication"],
    link: "https://fit-fusion-js8k.vercel.app",
  },
  {
    title: "Personal Finance Tracker",
    desc: "Comprehensive finance management app to track income, expenses, and savings with interactive visual analytics.",
    tech: ["React.js", "Tailwind CSS", "Spring Boot", "MySQL", "Chart.js", "JWT", "REST API"],
    link: "https://finance-tracker4-z17e.vercel.app/",
  },
  {
    title: "Weather Classification with VGG16",
    desc: "Implemented CNN with VGG16 to classify weather conditions from images using deep learning.",
    tech: ["VGG16", "CNN", "HTML", "CSS", "Flask"],
    link: "https://github.com/Satyapranay1/Weather-Classification",
  },
];


export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 relative">
          Projects
          <span className="block w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-2 rounded"></span>
        </h2>

        {/* Horizontal Scrollable Projects */}
        <div className="flex space-x-8 overflow-x-auto px-2 scroll-smooth scrollbar-custom snap-x snap-mandatory">
          {projects.map((p, i) => (
            <div
              key={i}
              className="min-w-[320px] max-w-sm p-6 bg-white/30 dark:bg-gray-800/50 backdrop-blur-md rounded-3xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-transparent hover:border-blue-500/40 flex-shrink-0 snap-start"
            >
              <h3 className="text-2xl font-bold text-blue-500 dark:text-purple-400">{p.title}</h3>
              <p className="mt-3 text-gray-600 dark:text-gray-300">{p.desc}</p>

              {/* Tech Stack Badges */}
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs sm:text-sm font-medium bg-white/20 dark:bg-gray-700/30 backdrop-blur-md text-blue-700 dark:text-blue-300 rounded-full shadow-sm hover:scale-105 transform transition-all duration-300 hover:bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 hover:text-white"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Project Link */}
              <a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-6 px-5 py-2 text-sm font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
