import React from "react";

export default function Apropos() {
  const parcours = [
    {
      periode: "2020 - Présent",
      titre: "Développeur Fullstack",
      description: "Spécialisé dans le développement d'applications web modernes"
    },
    {
      periode: "2018 - 2020",
      titre: "Formation Développement Web",
      description: "Formation intensive en développement web et mobile"
    }
  ];

  const valeurs = [
    {
      titre: "Innovation",
      description: "Toujours à l'affût des nouvelles technologies et méthodologies",
      icon: "💡"
    },
    {
      titre: "Qualité",
      description: "Attaché aux bonnes pratiques et à la qualité du code",
      icon: "✨"
    },
    {
      titre: "Collaboration",
      description: "Passionné par le travail d'équipe et le partage de connaissances",
      icon: "🤝"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4">
      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">👨‍💻 À Propos</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
            Je suis un développeur Fullstack passionné par la création d'applications web innovantes et performantes.
            Mon approche combine créativité technique et sens des responsabilités pour délivrer des solutions qui dépassent les attentes.
          </p>
        </div>

        {/* Parcours */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-center">Mon Parcours</h3>
          <div className="space-y-6">
            {parcours.map((etape, index) => (
              <div key={index} className="flex items-start space-x-4 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <div className="min-w-[120px] text-sm text-gray-500 dark:text-gray-400">
                  {etape.periode}
                </div>
                <div>
                  <h4 className="font-semibold mb-2">{etape.titre}</h4>
                  <p className="text-gray-600 dark:text-gray-400">{etape.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Valeurs et Approche */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-center">Mes Valeurs</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {valeurs.map((valeur, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
                <div className="text-3xl mb-4">{valeur.icon}</div>
                <h4 className="font-semibold mb-2">{valeur.titre}</h4>
                <p className="text-gray-600 dark:text-gray-400">{valeur.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Objectifs */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4 text-center">Objectifs Professionnels</h3>
          <p className="text-gray-600 dark:text-gray-400 text-center max-w-2xl mx-auto">
            Mon objectif est de continuer à évoluer dans le développement web en me spécialisant dans l'architecture de solutions scalables et performantes.
            Je souhaite également contribuer à la communauté open source et partager mes connaissances avec d'autres développeurs.
          </p>
        </div>
      </section>
    </div>
  );
}
