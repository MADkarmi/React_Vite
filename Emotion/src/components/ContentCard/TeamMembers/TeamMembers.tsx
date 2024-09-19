import styled from "@emotion/styled";
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

const TeamMembersDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

export default function TeamMembers({teamMembers}:TeamMembersProps){
    return (
        <TeamMembersDiv>
            {teamMembers.map((member) => (
                <TeamCard member={member}/>
            ))}
        </TeamMembersDiv>
    );
}