import styled from "@emotion/styled";

interface ServiceListProps{
    services: {
        id: number;
        name: string;
        description: string;
    }[];
}

const StyledUl = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`

const StyledLi = styled.li`
    margin-bottom: 20px;
    text-align: left;
`

const StyledH3 = styled.h3`
    font-size: 1.8em;
    margin-bottom: 10px;
`


export default function ServiceList({services}:ServiceListProps){
    return(
        <>
            <StyledUl>
                {services.map((service) => (
                    <StyledLi key={service.id}>
                        <StyledH3>{service.name}</StyledH3>
						<p>{service.description}</p>
                    </StyledLi>
                ))}
            </StyledUl>
        </>
    );
}