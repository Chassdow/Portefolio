import React from "react";

export default function GitHubRepos({ repos }) {
  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">🚀 Mes Projets GitHub</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.length > 0 ? (
            repos.map((repo) => (
              <div
                key={repo.id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 flex flex-col"
              >
                <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-transparent bg-clip-text">
                  {repo.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">
                  {repo.description || "Pas de description disponible"}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full">
                    {repo.language || "N/A"}
                  </span>
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 transition-colors flex items-center"
                  >
                    Voir le projet →
                  </a>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                Chargement des projets...
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
