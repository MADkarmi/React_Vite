import TeamCard, { member } from "./TeamCard/TeamCard";
import "./TeamMembers.scss";

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
        <div className="team-members">
            {teamMembers.map((member) => (
                <TeamCard member={member}/>
            ))}
        </div>
    );
}