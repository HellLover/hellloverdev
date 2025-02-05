import React from 'react';
import Navbar from './Navbar.tsx'

const Hero: React.FC = () => {
    return (
        <>  
            <Navbar />
            <div className="min-h-[100vh] flex items-center content-center bg-gray-900 text-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4">
                        Hi, I'm <span className="text-blue-600">HellLover</span>
                    </h1>
                    <p className="max-w-3xl text-lg sm:text-xl lg:text-2xl mb-8 ">
                        Mid-level full-stack web developer specializing in Next.js and TypeScript. Passionate about building scalable web applications, optimizing user experiences, and developing innovative solutions
                    </p>
                    <div className='w-full mx-auto flex flex-row sm:flex-col space-x-2 sm:space-y-2 justify-center items-center'>
                        <div className="flex justify-center">
                            <a
                                href="#"
                                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 text-xl"
                            >
                                Hire me
                            </a>
                        </div>
                        <div className="flex justify-center">
                            <a
                                href="#"
                                className="bg-none hover:text-blue-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 text-xl"
                            >
                                Projects
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;