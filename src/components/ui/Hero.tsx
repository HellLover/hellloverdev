import React from 'react';

type Props = {
    children: React.ReactNode;
}

const Hero: React.FC<Props> = ({ children }) => {
    return (
            <main className="flex items-center content-center bg-gray-900 text-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto text-center">
                    {children}
                </div>
            </main>
    );
};

export default Hero;