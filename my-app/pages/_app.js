import '../styles/globals.css';
console.log("Clé reCAPTCHA : ", process.env.REACT_APP_RECAPTCHA_SITE_KEY);
    console.log("Test : le composant est bien rendu !");

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
  
}
