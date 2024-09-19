import "./ServiceList.scss";

interface ServiceListProps{
    services: {
        id: number;
        name: string;
        description: string;
    }[];
}

export default function ServiceList({services}:ServiceListProps){
    return(
        <>
            <ul>
                {services.map((service) => (
                    <li key={service.id}>
                        <h3>{service.name}</h3>
						<p>{service.description}</p>
                    </li>
                ))}
            </ul>
        </>
    );
}