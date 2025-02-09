import Hero from '../ui/Hero';
import { RevealOnScroll } from '../ui/RevealOnScroll';
import { projects } from '../../types/resources';

const Projects = () => {
    return (
        <Hero>
            <RevealOnScroll>
                <div id='projects' className="border-1 border-gray-900 p-10 rounded-md shadow-md inset-shadow-gray-900">
                    <h1 className="text-4xl text-blue-600 font-bold text-center mb-5">My Recent Projects</h1>
                    <div className='w-full pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4'>
                        {projects.map((project, idx) => {
                            return (
                                <div key={`project-${idx}`} className="flex flex-col gap-4 shadow-gray-950 shadow-sm hover:scale-[1.05] duration-300 transform rounded-lg p-4">
                                    <div className="w-full flex flex-col gap-3">
                                        <p className="text-2xl">{project.name}</p>
                                        <p className="text-lg text-gray-400">{project.description}</p>
                                        <div className='flex flex-wrap gap-2 mb-4'>
                                            {project.tech.map((t, idx) => {
                                                return (
                                                    <span 
                                                        key={`tech-${idx}`} 
                                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                                                    >{t}</span>
                                                )
                                            })}
                                        </div>
                                        <a href={project.url} className='text-lg text-blue-400'>View Project →</a>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </RevealOnScroll>
        </Hero>
    );
};

export default Projects;