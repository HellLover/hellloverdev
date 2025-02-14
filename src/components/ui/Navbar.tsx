const Navbar = () => {
    return (
        <nav className="sticky top-0 bg-gray-900 p-4 z-50">
            <div className="max-w-2xl mx-auto flex justify-between items-center border-1 border-gray-800 bg-gray-800 rounded-full p-4 shadow-sm shadow-gray-900">
                <div className='ml-4 text-white font-bold text-xl pointer-events-none'>
                    helllover<span className='text-blue-600'>.dev</span>
                </div>
                <a href="#contact" className="text-gray-300 font-bold hover:text-blue-600 duration-300 text-md mr-6 border-1 rounded-full p-[4px_8px]">Contact</a>
            </div>
        </nav>
    );
};

export default Navbar;