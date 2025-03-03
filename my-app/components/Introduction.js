import React, { useEffect, useState } from "react";

export default function EasterEgg() {
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
                }, 99900);

                pressedKeys = [];
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [audio]);

    return (
        <section className="text-center py-12 relative">
            <h1 className="text-4xl font-bold">Felix Roland</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">Développeur Fullstack</p>

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






