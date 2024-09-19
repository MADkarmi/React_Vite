import ExperienceList from "./components/ExperienceList";
import Section from "./components/Section";
import SkillsList from "./components/SkillsList";

const photo = {
    src: '../../../src/assets/profile_image.jpg',
    alt: 'me',
}

const education = [
    {
        name: "University of Wroclaw",
        years: "2016-2024",
        description:
            `I excelled in computer science program at university,
            demonstrating a deep understanding of fundamental concepts and principles in programming,
            algorithms, and data structures. During this time I've actively participated in various projects,
            competitions, and research endeavors, showcasing their ability to apply theoretical knowledge to
            real-world scenarios and innovate solutions to complex problems. Additionally, my strong communication
            and collaboration skills fostered a dynamic learning environment, contributing positively to the academic
            community and my peers' growth in the field of computer science.`
    }
];

const experience = [
    {
        name: "XYZ Solutions",
        jobTitle: "Software Engineering Intern",
        description: "Assisted in the development and enhancement of internal tools to improve productivity.",
    },
    {
        name: "ABC Corporation",
        jobTitle: "Software Developer",
        description: "Developed and maintained internal tools for streamlining name operations.",
    },
    {
        name: "Tech Innovations Inc.",
        jobTitle: "Junior Developer",
        description: "Contributed to the maintenance and improvement of internal tools for optimizing workflow processes.",
    },
    {
        name: "PPG GBS",
        jobTitle: "Software Development Intern",
        description: "Supported the team in the maintenance and development of internal tools to enhance operational efficiency.",
    },
]

const skills = [
    "Fundamental web development languages for creating the structure, style, and interactivity of web applications.",
    "Knowledge of popular front-end frameworks to efficiently build user interfaces and single-page applications.",
    "Proficiency in version control systems like Git for tracking changes, collaborating with team members, and managing code repositories.",
    "Understanding of server-side programming languages to develop the back-end logic and handle server-side operations.",
    "Familiarity with back-end frameworks for building scalable and secure server-side applications.",
    "Knowledge of database management systems and querying languages for storing, retrieving, and managing data in web applications.",
    "Experience in building and consuming APIs to facilitate communication between different software systems and services.",
    "Understanding of authentication mechanisms (e.g., JWT, OAuth) and authorization techniques to secure web applications and control access to resources.",
    "Proficiency in writing and executing tests to ensure the reliability, performance, and functionality of web applications.",
    "Knowledge of DevOps principles and tools (e.g., Docker, Kubernetes, CI/CD pipelines) to automate deployment, testing, and monitoring processes.",
    "Familiarity with cloud computing platforms and services for deploying, hosting, and scaling web applications in the cloud.",
    "Awareness of common security threats (e.g., XSS, CSRF, SQL injection) and best practices for mitigating risks and protecting web applications from vulnerabilities.",
    "Understanding of Agile development methodologies (e.g., Scrum, Kanban) for iterative and collaborative software development.",
    "Strong analytical and problem-solving skills to identify, debug, and resolve issues in web applications efficiently."
]

export default function AboutMe() {
    return (
        <div className="flex flex-col justify-center items-center space-y-4">
            <p className="text-4xl">About me</p>
            <img src={photo.src} alt={photo.alt} className="rounded-[50%] max-w-80 max-h-80" />
            <Section title="Education">
                <ExperienceList experience={education} />
            </Section>
            <Section title="Experience">
                <ExperienceList experience={experience} />
            </Section>
            <Section title="Skills">
                <SkillsList skills={skills} />
            </Section>



        </div>
    );
}
