import React, { useState, useEffect } from 'react';

interface ToastProps {
    type: "success" | "error";
    message: string;
    duration?: number;
}

const Toast: React.FC<ToastProps> = ({ type, message, duration = 3000 }) => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(true);
        const timer = setTimeout(() => {
            setShow(false);
        }, duration);

        return () => clearTimeout(timer);
    }, [duration]);

    return (
        <div
            className={`fixed bottom-4 right-4 max-w-sm w-full bg-gray-300 ${type === "error" ? "text-red-400" : "text-gray-900"} px-4 py-2 rounded shadow-lg transition-transform transform ${
                show ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
            style={{ transitionDuration: '300ms' }}
        >
            {type == "success" ? "✔" : "❌"} {message}
        </div>
    );
};

export default Toast;