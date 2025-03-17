import React from "react"

export default function SkillsSection() {
  const skills = [
    {
      category: "Frontend",
      items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Sass"]
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "PHP", "Laravel", "Symfony", "WordPress", "Python"]
    },
    {
      category: "Base de données",
      items: ["SQL", "MySQL", "MariaDB", "MongoDB", "Supabase"]
    }
  ];

  const techIcons = {
    "HTML": "💙",
    "CSS": "🔵",
    "JavaScript": "💛",
    "TypeScript": "🔷",
    "React": "⚛️",
    "Next.js": "▲",
    "Node.js": "💚",
    "Express": "🚂",
    "PHP": "🐘",
    "Laravel": "🔺",
    "Symfony": "🎵",
    "WordPress": "📰",
    "Python": "🐍",
    "Tailwind CSS": "🌊",
    "Sass": "💄",
    "MongoDB": "🍃",
    "MySQL": "🐬",
    "MariaDB": "🔹",
    "SQL": "📊",
    "Supabase": "⚡"
  };

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-dots opacity-5 dark:opacity-10" style={{ backgroundSize: '30px 30px' }}></div>
      
      <div className="max-w-4xl mx-auto relative">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl font-bold mb-4">⚡ Compétences</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-glow transition-all duration-300 p-6 transform hover:-translate-y-1 animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <h3 className="text-xl font-bold mb-4 text-center bg-gradient-to-r from-blue-500 to-indigo-600 text-transparent bg-clip-text">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {skillGroup.items.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-4 py-2 bg-gray-50 dark:bg-gray-700 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-600 transition-colors duration-200 flex items-center group"
                  >
                    <span className="mr-1 group-hover:scale-110 transition-transform">{techIcons[skill] || ""}</span>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
