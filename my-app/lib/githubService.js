import { getGitHubRepos, checkGitHubRateLimit } from "./github.js";
import { supabase } from "./supabaseClient.js";

const CACHE_TTL = 600 * 60 * 1000;

export async function syncGitHubRepos(username) {
  console.log("🔄 Début de la synchronisation des repos GitHub...");

  console.log("🔍 Vérification des limites de l'API GitHub...");
  const canCallAPI = await checkGitHubRateLimit();
  if (canCallAPI) {
    console.log("📥 Récupération des repos depuis GitHub...");
    const repos = await getGitHubRepos(username);
    if (repos.length > 0) {
      const enrichedRepos = repos.map(repo => ({
        name: repo.name,
        description: repo.description || "Aucune description",
        html_url: repo.html_url,
        language: repo.language || "Non spécifié",
        last_updated: new Date().toISOString(),
      }));

      console.log("💾 Mise à jour de la base Supabase...");
      const { data, error } = await supabase
        .from("github_repos")
        .upsert(enrichedRepos, { onConflict: ["name"] });

      if (error) {
        console.error("❌ Erreur lors de la synchronisation des repos :", error);
      } else {
        console.log("✅ Synchronisation réussie !");
      }

      return repos;
    } else {
      console.log("⚠️ Aucun repo trouvé sur GitHub");
    }
  } else {
    console.log("⚠️ Limite d'API GitHub atteinte ou erreur, utilisation du cache");
  }

  // Utilisation du cache si l'API GitHub ne peut pas être appelée ou si aucun repo n'est trouvé
  const { data: existingRepos, error: dbError } = await supabase
    .from("github_repos")
    .select("*")
    .gte("last_updated", new Date(Date.now() - CACHE_TTL).toISOString());

  if (dbError) {
    console.error("❌ Erreur lors de la lecture de Supabase:", dbError);
    return [];
  }

  if (existingRepos.length > 0) {
    console.log("✅ Repos trouvés en cache:", existingRepos.length);
    return existingRepos; 
  }

  return [];
}
