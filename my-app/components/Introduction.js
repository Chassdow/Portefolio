import React, { useEffect, useState } from "react";

export default function Introduction() {
    const [showImage, setShowImage] = useState(false);
    const [audio, setAudio] = useState(null);
    const konamiCode = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];
    let pressedKeys = [];

    useEffect(() => {
        if (typeof window !== "undefined") {
            const alertSound = new Audio("/sounds/alert.mp3");
            alertSound.preload = "auto";
            alertSound.volume = 0.8;
            setAudio(alertSound);
        }
    }, []);

    useEffect(() => {
        const handleKeyDown = (event) => {
            pressedKeys.push(event.key);
            if (pressedKeys.length > konamiCode.length) {
                pressedKeys.shift();
            }

            if (JSON.stringify(pressedKeys) === JSON.stringify(konamiCode)) {
                if (audio) {
                    audio.currentTime = 0;
                    audio.play().catch(err => console.error("🔊 Erreur lecture audio:", err));
                }
                setShowImage(true);
                setTimeout(() => {
                    setShowImage(false);
                }, 500);
                pressedKeys = [];
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [audio]);

    return (
        <section className="py-16 relative">
            <div className="max-w-4xl mx-auto text-center">
                <div className="mb-8">
                    <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-transparent bg-clip-text">
                        Felix Roland
                    </h1>
                    <p className="text-2xl text-gray-600 dark:text-gray-400 mb-6">
                        Développeur Fullstack
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
                </div>

                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                    Passionné par la création d'expériences web innovantes et performantes.
                    Je transforme des idées en solutions digitales élégantes.
                </p>
            </div>

            <button className="hidden" onClick={() => audio?.play()}>Débloquer le son</button>

            {showImage && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/80 z-50">
                    <img
                        src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdmxraHNxMGlhOTRxZmhneHB4NTlrOWZ2c3Y1aTkwYzV5NWF4eW82NCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/OrFmkOFx7PVK/giphy.gif"
                        alt="Metal Gear Alert"
                        className="w-full h-full object-cover animate-fade-out"
                    />
                </div>
            )}
        </section>
    );
}






