
interface ExperienceListProps{
    experience: {
        name: string;
        description: string;
        years?: string;
        jobTitle? : string;

    }[];
}

export default function ExperienceList({experience}:ExperienceListProps){
    return(
        <>
            <ul className="list-none p-0 m-0">
                {experience.map((exp, id) => (
                    <li key={id} className=" text-left py-2 px-5 m-1 mb-3 rounded-lg even:bg-lightColors-background dark:even:bg-darkColors-border">
                        <h3 className="text-3xl mb-2">
                            {exp.name}
                        </h3>
                        { exp.jobTitle && <p className="text-xl"> {exp.jobTitle} </p> }
                        { exp.years && <p>{exp.years}</p> }
						<p className="my-4">
                            {exp.description}
                        </p>
                    </li>
                ))}
            </ul>
        </>
    );
}