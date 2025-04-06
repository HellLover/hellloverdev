const images = "static/images";

export class Assets {
    static react = images + "/reactjs.png";
    static next = images + "/nextjs.png";
    static css = images + "/css.png";
    static html = images + "/html.png";
    static js = images + "/javascript.png";
    static ts = images + "/typescript.png";
    static mongodb = images + "/mongodb.png";
    static nodejs = images + "/nodejs.png";
    static tailwind = images + "/tailwindcss.png";
    static chakraui = images + "/chakra-ui.png";
    static sass = images + "/sass.png";
    static vscode = images + "/vscode.png";
    static windows = images + "/windows.png";
    static expressjs = images + "/express-js.png";
    static github = images + "/github.png";
}

export const projects = [
    {
        name: "Portfolio",
        description: "My personal portfolio website",
        tech: ["React", "Tailwind CSS", "TypeScript", "Vite"],
        url: "",
        image: "https://i.imgur.com/UU3yA9X.png"
    },
    {
        name: "Dolphin Bot",
        description: "A versatile Discord bot with a sleek web dashboard that simplifies server management!",
        tech: ["React", "Next", "TypeScript", "discord.js", "ChakraUI"],
        url: "https://dolphinbot.online",
        image: "https://i.imgur.com/Wz3OQJn.jpeg"
    }
]

export const socials = {
    github: "https://github.com/HellLover",
    discord: "https://discord.gg/TYhSGhWGvm",
    linkedin: "https://www.linkedin.com/in/samvel-kuyumjyan-5465782a6/"
}