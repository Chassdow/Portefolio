import React, { useEffect, useState } from "react";
import { syncGitHubRepos } from "../lib/githubService";
import Header from "../components/Header";
import Introduction from "../components/Introduction";
import GitHubRepos from "../components/GitHubRepos";
import SkillsSection from "../components/SkillsSection";
import Footer from "../components/Footer";
// import '../styles/globals.css';

export default function Home() {
  const [repos, setRepos] = useState([]);
  console.log("Clé reCAPTCHA : ", process.env.REACT_APP_RECAPTCHA_SITE_KEY);
  console.log("Test : le composant est bien rendu !");

  useEffect(() => {
    async function fetchRepos() {
      try {
        const username = "Chassdow";
        const response = await syncGitHubRepos(username);

        if (Array.isArray(response)) {
          setRepos(response);
        } else {
          console.error("syncGitHubRepos n'a pas retourné un tableau :", response);
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des repos :", error);
      }
    }

    fetchRepos();
    const interval = setInterval(fetchRepos, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <Header />
      <div className="container mx-auto px-6 py-12">
        <Introduction />
        <GitHubRepos repos={repos} />
        <SkillsSection />
      </div>
      <Footer />
    </div>
  );
}


