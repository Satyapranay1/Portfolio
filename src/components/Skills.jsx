const skills = {
  "Programming Languages": ["Java", "Python", "JavaScript", "PHP"],
  Databases: ["MySQL", "MongoDB"],
  "Machine Learning & Deep Learning": ["TensorFlow", "Scikit-learn", "Keras", "XGBoost"],
  "Data Analysis & Visualization": ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Plotly"],
  Tools: [
    "VS Code",
    "GitHub",
    "Jupyter Notebook",
    "Streamlit",
    "MySQL Workbench",
    "Pydantic",
    "Docker",
    "Node.js",
    "Express"
  ]
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 max-w-6xl mx-auto px-6">
      <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>

      {Object.entries(skills).map(([category, items], index) => (
        <div key={index} className="mb-10">
          <h3 className="text-2xl font-semibold mb-6 text-center text-gray-800 dark:text-gray-100">
            {category}
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {items.map((skill, i) => (
              <span
                key={i}
                className="px-3 py-1 text-sm bg-white/20 dark:bg-gray-800/30 backdrop-blur-md text-gray-900 dark:text-gray-100 rounded-full shadow-sm hover:scale-105 transform transition-all duration-300 hover:shadow-lg hover:bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 hover:text-white"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
