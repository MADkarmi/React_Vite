
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
            <ul className="list-none p-0 m-0">
                {services.map((service) => (
                    <li key={service.id} className="mb-6 text-left">
                        <h3 className="text-3xl mt-7 mb-[10px] font-bold">
                            {service.name}
                        </h3>
						<p className="my-4">
                            {service.description}
                        </p>
                    </li>
                ))}
            </ul>
        </>
    );
}