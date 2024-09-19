import styled from "@emotion/styled";
import { ReactNode } from "react";


interface ContentCardProps{
    children : ReactNode;
}

const Card = styled.div`
    border-radius: 10px;
    margin: 20px 0;
    background: ${({theme}) => theme.color.color3};
`

export default function ContentCard({children}:ContentCardProps){
    return(
        <Card>
            {children}
        </Card>
    );
}