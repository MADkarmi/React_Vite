import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from "./Link";



interface ProjectProps{
    project: project
}

export interface project{
    id: number;
    title: string;
    technologies: string[];
    description: string;
    github : string;
    liveDemo? : string;
}

export default function Project({project}:ProjectProps){
    return(
        <div key={project.id} className="text-left p-5 rounded-[10px] *:mb-[10px] text-lightColors-primary bg-lightColors-second dark:text-darkColors-primary dark:bg-darkColors-second">
            <h3 className=" font-bold text-2xl">
                {project.title}
            </h3>
            <div>
                <p className="text-lg font-bold">Description:</p>
                <p>{project.description}</p>
            </div>

            <div className="flex flex-col">
                <p className="text-lg font-bold">Technologies:</p>
                {project.technologies.map((technology, id) => (
                    <p key={id}>{technology}</p>
                ))}
            </div>

            <div className="grid justify-end space-y-3">
                <Link href={project.github}>
                    <GitHubLogoIcon/>
                    GitHub
                </Link>
                {project.liveDemo?

                <Link href={project.liveDemo}>
                    Live Demo
                </Link>

                : null
            }
            </div>
        </div>
    );
}