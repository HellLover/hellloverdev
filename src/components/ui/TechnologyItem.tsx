type TechProps = {
    name: string;
    icon: string;
    type: string;
}

const TechnologyItem = ({ name, icon, type }: TechProps) => {
    return (
        <div className="flex row gap-4 px-4 py-2 bg-gray-800 border border-gray-900 hover:scale-[1.05] duration-300 transform rounded-md">
            <img
                src={icon}
                alt={`${name} logo`}
                className="w-10 h-10 object-contain my-auto"
                loading="lazy"
            />
            <div className="w-full">
                <p className="text-2xl">{name}</p>
                <p className="text-sm text-gray-400">{type}</p>
            </div>
        </div>
    )
}

export default TechnologyItem;