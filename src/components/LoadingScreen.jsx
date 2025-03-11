import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {

    const [text, setText] = useState("");
    const fullText = "Wellcome"; // The text you want to display;

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setText(fullText.substring(0, index));
            index++;
            if (index > fullText.length) {
                clearInterval(interval);

                setTimeout(() => {
                    onComplete();
                }, 1000);
            }
        }, 100);

        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <div className="fixed inset-0 z-50 bg-black text-gray-200 flex flex-col items-center justify-center">
        <div className="mb-4 text-4xl font-mono font-bold"> {text} <span className="animate-blink ml-1"> | </span></div>


            <div className="w-[200px] has-[2px] bg-gray-500 rounded relative overflow-hidden">
            <div className="w-[40%] h-full bg-emerald-500 shadow-[0_0_15px_#3bf67c] animate-loading-bar"></div>
            </div>
        </div>
    );
}