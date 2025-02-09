import React from 'react';

interface ButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'outline';
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', onClick }) => {
    const baseStyles = 'px-4 py-2 rounded focus:outline-none';
    const variantStyles = {
        primary: 'bg-blue-600 text-white hover:bg-blue-700 font-bold py-3 px-6 rounded-full transition duration-300 text-xl',
        outline: 'bg-none hover:text-blue-600 border-1 text-white font-bold py-3 px-6 rounded-full transition duration-300 text-xl',
    };

    return (
        <button
            className={`${baseStyles} ${variantStyles[variant]}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;