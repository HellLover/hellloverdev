import Button from "../ui/Button";
import Hero from "../ui/Hero";
import { RevealOnScroll } from "../ui/RevealOnScroll";

const Home = () => {
  return (
    <Hero>
        <RevealOnScroll>
            <h1 id="home" className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4">
                👋 Hi, I'm <span className="text-blue-600">HellLover</span>
            </h1>
            <p className="max-w-3xl text-lg sm:text-xl lg:text-2xl mb-8 ">
                Mid-level full-stack web developer specializing in Next.js and TypeScript. Passionate about building scalable web applications, optimizing user experiences, and developing innovative solutions
            </p>
            <div className='w-full mx-auto flex flex-row space-x-2 justify-center items-center'>
                <Button variant="primary">
                    <a
                        href="#contact"
                    >
                        Hire me
                    </a>
                </Button>
                <Button variant="outline">
                    <a
                        href="#projects"
                    >
                        Projects
                    </a>
                </Button>
            </div>
        </RevealOnScroll>
    </Hero>
  );
}

export default Home;