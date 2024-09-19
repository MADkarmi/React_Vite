import styled from "@emotion/styled";

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

const MemberCard = styled.div`
    flex: 0 0 calc(33.33% - 20px);
    padding: 20px;
    margin: 10px;
    text-align: center;
    background: ${({theme}) => theme.color.color5};
    color: ${({theme}) => theme.color.primaryColor};

    img {
        border-radius: 50%;
        margin-bottom: 20px;
    }

    h3 {
        margin-bottom: 10px;
        display: inline-block;
    }
`

export default function TeamCard({member}:TeamCardProps){
    return (
        <MemberCard key={member.id}>
            <img src={member.image} alt={member.name} />
            <div>
                <h3>{member.name}</h3>
                <p>{member.position}</p>
                <p>{member.bio}</p>
            </div>
        </MemberCard>
    );
}