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
        <section className="bg-white dark:bg-gray-900">
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 className="mb-4 text-4xl font-extrabold text-center text-gray-900 dark:text-white">
                    Contactez-moi
                </h2>

                {errorMessage && (
                    <div className="mb-4 p-4 text-red-700 bg-red-100 border border-red-400 rounded-lg">
                        {errorMessage}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-8">
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            Votre email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            Sujet
                        </label>
                        <input
                            type="text"
                            id="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                            Votre message
                        </label>
                        <textarea
                            id="message"
                            rows="6"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        />
                    </div>

                    <div className="flex justify-center">
                        <ReCAPTCHA
                            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                            onChange={handleCaptchaChange}
                        />

                    </div>

                    <button
                        type="submit"
                        className="py-3 px-5 text-sm font-medium text-center text-white bg-blue-600 rounded-lg sm:w-fit hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-700"
                    >
                        Envoyer le message
                    </button>
                </form>
            </div>
        </section>
    );
}




