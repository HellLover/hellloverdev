import { socials } from "../../types/resources";
import { AiFillDiscord, AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Navbar = () => {
    return (
        <nav className="sticky top-0 bg-gray-900 p-4 z-50">
            <div className="max-w-2xl mx-auto flex justify-between items-center border-1 border-gray-800 bg-gray-800 rounded-full p-4 shadow-sm shadow-gray-900">
                <div className='ml-4 text-white font-bold text-xl pointer-events-none'>
                    kuyumjyan<span className='text-blue-600'>dev</span>
                </div>
                <div className='flex row gap-2 content-center justify-center mr-5'>
                    <a href={socials.github} target='_blank' rel='noreferrer' className='transform hover:text-violet-200'>
                        <AiFillGithub size={26} />
                    </a>
                    <a href={socials.discord} target='_blank' rel='noreferrer' className='transform hover:text-violet-200'>
                        <AiFillDiscord size={26} />
                    </a>
                    <a href={socials.linkedin} target='_blank' rel='noreferrer' className='transform hover:text-violet-200'>
                        <AiFillLinkedin size={26} />
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
