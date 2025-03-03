export async function getGitHubRepos(username) {
    try {
      const response = await fetch(`https://api.github.com/users/${username}/repos`);
      if (!response.ok) throw new Error("Erreur lors de la récupération des repos GitHub");
      return await response.json();
    } catch (error) {
      console.error("Erreur GitHub :", error);
      return [];
    }
  }


  export async function checkGitHubRateLimit() {
    try {
      const response = await fetch("https://api.github.com/rate_limit");
      if (!response.ok) throw new Error("Impossible de vérifier la limite API");
  
      const data = await response.json();
      const remaining = data.rate.remaining;
      const resetTime = new Date(data.rate.reset * 1000).toLocaleTimeString();
  
      console.log(`🔄 Requêtes GitHub restantes : ${remaining}, reset à ${resetTime}`);
  
      return remaining > 0;
    } catch (error) {
      console.error("⚠️ Erreur lors de la vérification de la limite API :", error);
      return false; 
    }
  }
  
  