import React from "react";
import Hero from "../ui/Hero";
import TechnologyItem from "../ui/TechnologyItem";
import { Assets } from "../../types/resources";
import { RevealOnScroll } from "../ui/RevealOnScroll";

const Technology: React.FC = () => {
    return (
        <Hero>
            <RevealOnScroll>
                <div className="border-1 border-gray-900 p-10 rounded-md shadow-md inset-shadow-gray-900">
                    <h1 className="text-4xl text-blue-600 font-bold text-center mb-5">Technologies I Use</h1>
                    <div className="w-full pt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        <TechnologyItem name="React" icon={Assets.react} type="UI Framework" />
                        <TechnologyItem name="Next" icon={Assets.next} type="Framework" />
                        <TechnologyItem name="Tailwind CSS" icon={Assets.tailwind} type="CSS Framework" />
                        <TechnologyItem name="ChakraUI" icon={Assets.chakraui} type="CSS Module" />
                        <TechnologyItem name="SASS" icon={Assets.sass} type="CSS Framework" />
                        <TechnologyItem name="TypeScript" icon={Assets.ts} type="Language" />
                        <TechnologyItem name="JavaScript" icon={Assets.js} type="Language" />
                        <TechnologyItem name="Node.js" icon={Assets.nodejs} type="Language" />
                        <TechnologyItem name="Express" icon={Assets.expressjs} type="App Framework" />
                        <TechnologyItem name="MongoDB" icon={Assets.mongodb} type="Database" />
                        <TechnologyItem name="HTML" icon={Assets.html} type="Language" />
                        <TechnologyItem name="CSS" icon={Assets.css} type="Language" />
                        <TechnologyItem name="Windows" icon={Assets.windows} type="OS" />
                        <TechnologyItem name="VSCode" icon={Assets.vscode} type="Editor" />
                        <TechnologyItem name="GitHub" icon={Assets.github} type="Version Control" />
                    </div>
                </div>
            </RevealOnScroll>
        </Hero>
    )
};

export default Technology;