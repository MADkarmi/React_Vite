import TeamCard, { member } from "./TeamCard/TeamCard";


interface TeamMembersProps{
    teamMembers: member[]
    // teamMembers: {
    //     id: number;
    //     name: string;
    //     position: string;
    //     bio: string;
    //     image: string;
    // }[];
}

export default function TeamMembers({teamMembers}:TeamMembersProps){
    return (
        <div className="flex flex-wrap justify-center">
            {teamMembers.map((member, id) => (
                <TeamCard key={id} member={member}/>
            ))}
        </div>
    );
}