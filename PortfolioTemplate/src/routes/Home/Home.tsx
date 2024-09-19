import TeamCard, { member } from "./components/TeamCard/TeamCard";

const teamMember: member = {
    name: "Radosław Madzia",
    bio: "I bring value to web development projects by merging technical expertise with creativity and aesthetics xDDD.",
    image: '../../../src/assets/profile_image_2.jpg',
    git: "https://www.linkedin.com/in/rados%C5%82aw-madzia-482a72226/",
    linkedin: "https://github.com/MADkarmi",

}

export default function Home() {
    return (
        <div className="flex flex-wrap justify-center">
            <TeamCard member={teamMember} />
        </div>

    );
}
