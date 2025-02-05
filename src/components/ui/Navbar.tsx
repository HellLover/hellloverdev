import React, { useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="sticky top-0 bg-gray-900 backdrop-blur-md p-4">
            <div className="max-w-2xl mx-auto flex justify-between items-center border-1 border-gray-800 bg-gray-800 rounded-full p-4 shadow-sm shadow-gray-900">
                <div className="hidden md:flex space-x-6 mx-auto">
                    <a href="#projects" className="text-white font-bold hover:text-gray-400 duration-300 text-xl">Projects</a>
                    <a href="#" className="text-white font-bold hover:text-gray-400 duration-300 text-xl">About</a>
                    <a href="#" className="text-white font-bold hover:text-gray-400 duration-300 text-xl">Contact</a>
                </div>
                <div className="md:hidden flex items-center">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        {isOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className="m-2 p-4  md:hidden">
                    <a href="#" className="block text-white font-bold hover:text-gray-400 duration-300 text-xl p-2">Projects</a>
                    <a href="#" className="block text-white font-bold hover:text-gray-400 duration-300 text-xl p-2">About</a>
                    <a href="#" className="block text-white font-bold hover:text-gray-400 duration-300 text-xl p-2">Contact</a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;