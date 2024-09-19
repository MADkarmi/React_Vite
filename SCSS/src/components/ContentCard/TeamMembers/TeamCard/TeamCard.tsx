import "./TeamCard.scss";
interface TeamCardProps{
    member: member;
    // member: {
    //     id: number;
    //     name: string;
    //     position: string;
    //     bio: string;
    //     image: string;
    // };
}

export interface member{
    id: number;
    name: string;
    position: string;
    bio: string;
    image: string;
}

export default function TeamCard({member}:TeamCardProps){
    return (
        <div key={member.id} className="team-member">
            <img src={member.image} alt={member.name} />
            <div>
                <h3>{member.name}</h3>
                <p>{member.position}</p>
                <p>{member.bio}</p>
            </div>
        </div>
    );
}