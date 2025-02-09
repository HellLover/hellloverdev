import React from 'react';
import sugar from 'sugar';
import { AiFillDiscord, AiFillGithub } from "react-icons/ai";
import { socials } from '../../types/resources';

const Footer: React.FC = () => {
    return (
        <footer>
            <hr />

            <div className="text-center py-4">
                <p className='mb-2'>
                    &copy; 2025 | Made by
                     <span className='text-violet-500'> HellLover</span>
                </p>
                <p className='text-sm'>Last built at {sugar.Date.format(new Date())}</p>
                <div className='flex row gap-2 content-center justify-center mt-2'>
                    <a href={socials.github} target='_blank' rel='noreferrer' className='transform hover:text-violet-200'>
                        <AiFillGithub size={24} />
                    </a>
                    <a href={socials.discord} target='_blank' rel='noreferrer' className='text-violet-400 transform hover:text-violet-500'>
                        <AiFillDiscord size={24} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;