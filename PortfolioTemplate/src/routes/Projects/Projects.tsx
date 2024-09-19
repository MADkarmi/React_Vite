import Project, { project } from "./components/Project/Project";

const projects: project[] = [
    {
        id: 0,
        title: "ScreenCap Desktop",
        technologies: [
            "Rust",
            "ASP.Net"
        ],
        description: "Simple App enabling capturing content's of your screen and streaming it on web platform in real time",
        github: "https://www.linkedin.com/in/rados%C5%82aw-madzia-482a72226/",
        liveDemo: "https://tailwindcss.com/docs",
    },
    {
        id: 1,
        title: "Project 2",
        technologies: [
            "NodeJS",
            "Express",
            "EJS",
            "Postgres"
        ],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero et nisi cursus, sit amet laoreet odio rutrum.",
        github: "https://www.linkedin.com/in/rados%C5%82aw-madzia-482a72226/",
    },
    {
        id: 2,
        title: "Project 3",
        technologies: [
            "React",
            "TS",
            "Vue",
        ],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero et nisi cursus, sit amet laoreet odio rutrum.",
        github: "https://www.linkedin.com/in/rados%C5%82aw-madzia-482a72226/",
        liveDemo: "https://tailwindcss.com/docs",
    },
    {
        id: 3,
        title: "Project 4",
        technologies: [
            "React",
            "TS",
            "Vue",
        ],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero et nisi cursus, sit amet laoreet odio rutrum.",
        github: "https://www.linkedin.com/in/rados%C5%82aw-madzia-482a72226/",
    },
    {
        id: 4,
        title: "Project 5",
        technologies: [
            "React",
            "TS",
            "Vue",
        ],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero et nisi cursus, sit amet laoreet odio rutrum.",
        github: "https://www.linkedin.com/in/rados%C5%82aw-madzia-482a72226/",
        liveDemo: "https://tailwindcss.com/docs",
    },
]


export default function Projects() {
    return (
        <div className="grid grid-cols-[repeat(auto-fit,minmax(600px,1fr))] gap-5 m-5">
            {projects.map((project, id) => (
                <Project project={project} key={id}/>
            ))}
        </div>

    );
}
