import {GitHubLogoIcon, LinkedInLogoIcon} from '@radix-ui/react-icons'
import Link from './Link';

interface TeamCardProps{
    member: member;
}

export interface member{
    name: string;
    bio: string;
    image: string;
    git: string;
    linkedin: string;
}

export default function TeamCard({member}:TeamCardProps){
    return (
        <div className="flex flex-wrap max-w-md max-h-[600px] justify-center rounded-md p-6 m-3 min-w-96 text-center text-lightColors-primary bg-lightColors-fifth dark:text-darkColors-primary dark:bg-darkColors-sixth">

                <img src={member.image} alt={member.name} className="rounded-[50%] max-w-80 max-h-80" />

                <h3 className="text-4xl mt-5 mb-3 ">
                    {member.name}
                </h3>
                <p className="my-4">{member.bio}</p>
                <Link href={member.git}>
                    <GitHubLogoIcon/>
                    GitHub
                </Link>
                <Link href={member.linkedin}>
                    <LinkedInLogoIcon/>
                    LinkedIn
                </Link>


        </div>
    );
}