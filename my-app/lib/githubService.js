import { getGitHubRepos, checkGitHubRateLimit } from "./github.js";
import { supabase } from "./supabaseClient.js";

const CACHE_TTL = 600 * 60 * 1000;

export async function syncGitHubRepos(username) {
 
  const { data: existingRepos, error: dbError } = await supabase
    .from("github_repos")
    .select("*")
    .gte("last_updated", new Date(Date.now() - CACHE_TTL).toISOString());

  if (!dbError && existingRepos.length > 0) {
    return existingRepos; 
  }

  const canCallAPI = await checkGitHubRateLimit();
  if (!canCallAPI) {
    return existingRepos;
  }

  const repos = await getGitHubRepos(username);
  if (repos.length === 0) {
    return [];
  }

  const enrichedRepos = repos.map(repo => ({
    name: repo.name,
    description: repo.description || "Aucune description",
    html_url: repo.html_url,
    language: repo.language || "Non spécifié",
    last_updated: new Date().toISOString(),
  }));

  const { data, error } = await supabase
    .from("github_repos")
    .upsert(enrichedRepos, { onConflict: ["name"] });

  if (error) {
    console.error("❌ Erreur lors de la synchronisation des repos :", error);
  } else {
    }

  return repos;
}
