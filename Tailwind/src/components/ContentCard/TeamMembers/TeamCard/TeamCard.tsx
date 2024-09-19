
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
        <div key={member.id} className="flex flex-wrap flex-[0_0_calc(33.33%_-_20px)] justify-center p-6 m-3 min-w-72 text-center text-lightColors-primary bg-lightColors-fifth dark:text-darkColors-primary dark:bg-darkColors-sixth">
            <img src={member.image} alt={member.name} className="mb-5 rounded-[50%]" />
            <div>
                <h3 className="text-xl mt-5 mb-3 font-bold">
                    {member.name}
                    </h3>
                <p className="my-4">{member.position}</p>
                <p className="my-4">{member.bio}</p>
            </div>
        </div>
    );
}