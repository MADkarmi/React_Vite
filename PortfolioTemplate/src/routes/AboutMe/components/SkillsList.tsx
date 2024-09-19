
interface SkillsListProps{
    skills: string[];
}

export default function SkillsList({skills}:SkillsListProps){
    return(
        <>
            <ul className="list-none p-0 m-0">
                {skills.map((skill, id) => (
                    <li key={id} className="text-left px-5 py-1 m-1 mb-3 rounded-lg even:bg-lightColors-fifth dark:even:bg-darkColors-border">
                        <p className="text-xl mt-1 mb-2">
                            {skill}
                        </p>
                    </li>
                ))}
            </ul>
        </>
    );
}