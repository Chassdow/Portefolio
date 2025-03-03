import React from "react";
// import "../styles/globals.css";
export default function SkillsSection() {
  return (
    <section className="text-center py-12">
      <h2 className="text-2xl font-semibold mb-4">⚡ Compétences</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {["React", "Next", "Tailwind CSS", "Supabase", "Laravel", "Symfony", "SQL"].map((skill) => (
          <span
            key={skill}
            className="bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
