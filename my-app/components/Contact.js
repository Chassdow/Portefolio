import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

export default function Contact() {
    const [formData, setFormData] = useState({
        email: "",
        subject: "",
        message: ""
    });

    const [errorMessage, setErrorMessage] = useState("");
    const [captchaValue, setCaptchaValue] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleCaptchaChange = (value) => {
        setCaptchaValue(value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!captchaValue) {
            alert("Veuillez valider le reCAPTCHA avant d'envoyer le message.");
            return;
        }

        emailjs.send(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_TEMPLATE_SEND_ID,
            {
                user_email: formData.email,
                subject: formData.subject,
                message: formData.message,
            },
            process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        )
            .then((response) => {
        
                emailjs.send(
                    process.env.REACT_APP_EMAILJS_SERVICE_ID,
                    process.env.REACT_APP_EMAILJS_TEMPLATE_REPLY_ID,
                    {
                        user_email: formData.email,
                        subject: formData.subject,
                        message: formData.message,
                    },
                    process.env.REACT_APP_EMAILJS_PUBLIC_KEY
                )
                    .then(() => {
                        alert("Message envoyé avec succès ! Un email de confirmation a été envoyé. N'oubliez pas de vérifier vos spams !");
                    })
                    .catch((error) => {
                        console.error("Erreur lors de l'envoi du mail de confirmation:", error);
                        alert("Message envoyé, mais impossible d'envoyer la confirmation.");
                    });

                setErrorMessage("");
                setCaptchaValue(null);
            })
            .catch((error) => {
                console.error("Échec de l'envoi du message:", error);
                setErrorMessage(
                    "😔 Désolé, le service de contact est hors service. Je mets tout en œuvre pour réparer ceci. " +
                    "En attendant, n'hésitez pas à me contacter directement par mail : felix.roland@epitech.eu"
                );
            });

        setFormData({
            email: "",
            subject: "",
            message: ""
        });
    };

    return (
        <section className="bg-white dark:bg-gray-900 relative overflow-hidden">
       
            <div className="absolute inset-0 bg-gradient-dots opacity-5 dark:opacity-10" style={{ backgroundSize: '20px 20px' }}></div>
            
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md relative">
                <div className="text-center mb-12 animate-fade-in">
                    <h2 className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-transparent bg-clip-text">
                        Contactez-moi
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
                </div>

                {errorMessage && (
                    <div className="mb-4 p-4 text-red-700 bg-red-100 border border-red-400 rounded-lg animate-shake">
                        {errorMessage}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-8 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg animate-fade-in-up">
                    <div className="group">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 transition-colors group-hover:text-blue-500">
                            Votre email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white transition-all duration-300 hover:shadow-md"
                            placeholder="votre@email.com"
                        />
                    </div>
                    <div className="group">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 transition-colors group-hover:text-blue-500">
                            Sujet
                        </label>
                        <input
                            type="text"
                            id="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white transition-all duration-300 hover:shadow-md"
                            placeholder="Sujet de votre message"
                        />
                    </div>
                    <div className="group">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400 transition-colors group-hover:text-blue-500">
                            Votre message
                        </label>
                        <textarea
                            id="message"
                            rows="6"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white transition-all duration-300 hover:shadow-md"
                            placeholder="Votre message..."
                        />
                    </div>

                    <div className="flex justify-center transform hover:scale-[1.01] transition-transform">
                        <ReCAPTCHA
                            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                            onChange={handleCaptchaChange}
                        />
                    </div>

                    <div className="flex items-center justify-between flex-wrap gap-4">
                        <button
                            type="submit"
                            className="py-3 px-5 text-sm font-medium text-center text-white bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 focus:ring-4 focus:outline-none focus:ring-blue-300"
                        >
                            Envoyer le message
                        </button>

                        <a 
                            href="/image/CV_Felix_Roland.pdf" 
                            download
                            className="py-3 px-5 text-sm font-medium flex items-center text-white bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 animate-float" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            Télécharger mon CV
                        </a>
                    </div>
                </form>
            </div>
        </section>
    );
}




