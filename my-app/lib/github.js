const GITHUB_TOKEN = process.env.NEXT_PUBLIC_GITHUB_TOKEN;

export async function getGitHubRepos(username) {
    try {
        const headers = {
            'Accept': 'application/vnd.github.v3+json',
            ...(GITHUB_TOKEN && { 'Authorization': `token ${GITHUB_TOKEN}` })
        };

        console.log("📤 Envoi de la requête à l'API GitHub...");
        const response = await fetch(`https://api.github.com/users/${username}/repos`, { headers });
        
        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            console.error("❌ Erreur API GitHub:", {
                status: response.status,
                statusText: response.statusText,
                error: errorData
            });
            throw new Error(`GitHub API error: ${response.status} ${response.statusText}`);
        }

        const repos = await response.json();
        console.log(`✅ ${repos.length} repos récupérés depuis GitHub`);
        return repos;
    } catch (error) {
        console.error("❌ Erreur lors de la récupération des repos:", error);
        return [];
    }
}

export async function checkGitHubRateLimit() {
    try {
        const headers = {
            'Accept': 'application/vnd.github.v3+json',
            ...(GITHUB_TOKEN && { 'Authorization': `token ${GITHUB_TOKEN}` })
        };

        const response = await fetch("https://api.github.com/rate_limit", { headers });
        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            console.error("❌ Erreur vérification limite API:", {
                status: response.status,
                statusText: response.statusText,
                error: errorData
            });
            throw new Error(`Rate limit check failed: ${response.status}`);
        }

        const data = await response.json();
        const { remaining, limit, reset } = data.rate;
        const resetTime = new Date(reset * 1000).toLocaleTimeString();

        console.log(`📊 Limite API GitHub:
            - Requêtes restantes: ${remaining}/${limit}
            - Reset à: ${resetTime}
            - Token utilisé: ${GITHUB_TOKEN ? 'Oui' : 'Non'}`);

        return remaining > 0;
    } catch (error) {
        console.error("⚠️ Erreur vérification limite API:", error);
        return false;
    }
}
  
  