import React, { useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="sticky top-0 bg-gray-900 p-4 z-50">
            <div className="max-w-2xl mx-auto flex justify-between items-center border-1 border-gray-800 bg-gray-800 rounded-full p-4 shadow-sm shadow-gray-900">
                <div className='ml-4 text-white font-bold text-xl pointer-events-none'>
                    helllover<span className='text-blue-600'>.dev</span>
                </div>
                <div className="hidden md:flex space-x-6 mx-auto">
                    <a href="#projects" className="text-gray-300 font-bold hover:text-blue-600 duration-300 text-xl">Projects</a>
                    <a href="#home" className="text-gray-300 font-bold hover:text-blue-600 duration-300 text-xl">Home</a>
                </div>
                <div className="md:hidden flex items-center">
                    <button onClick={toggleMenu} className="text-gray-300 focus:outline-none">
                        {isOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className="m-2 p-4 z-50 bg-transparent backdrop-blur-md md:hidden">
                    <a href="#projects" className="block text-gray-300 font-bold hover:text-blue-600 duration-300 text-xl p-2">Projects</a>
                    <a href="#home" className="block text-gray-300 font-bold hover:text-blue-600 duration-300 text-xl p-2">Home</a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;