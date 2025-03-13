import React from "react";

export default function GitHubRepos({ repos }) {
  return (
    <section>
      <h2 className="text-2xl font-semibold text-center mb-6">🚀 Mes Repos GitHub</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {repos.length > 0 ? (
          repos.map((repo) => (
            <div
              key={repo.id}
              className="p-6 border rounded-lg shadow-md bg-gray-100 dark:bg-gray-800"
            >
              <h3 className="text-xl font-bold">{repo.name}</h3>
              <p className="text-gray-600 dark:text-gray-400">{repo.description}</p>
              <p className="text-sm text-gray-500">{repo.language}</p>
              <div className="mt-2 flex gap-3">
                <a href={repo.html_url} className="text-blue-500">
                  🔗 Voir sur GitHub
                </a>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600 dark:text-gray-400">Aucun repos disponible.</p>
        )}
      </div>
    </section>
  );
}
