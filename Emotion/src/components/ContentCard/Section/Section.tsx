import styled from "@emotion/styled";
import { ReactNode } from "react";

interface SectionProps{
    children?: ReactNode;
    id: string;
    title: string;
}

const StyledSection = styled.section`
    padding: 20px 0;
    :nth-child(even){
        background: ${({theme}) => theme.color.color5};
    }
    h2{
        font-size: 2.5em;
        margin-bottom: 20px;
        display: inline-block;
    }
`

const StyledSectionContent = styled.div`
    max-width: 800px;
    margin: 0 auto;
`

export default function Section({children, id, title}:SectionProps){
    return (
        <>
            <StyledSection id={id}>
				<StyledSectionContent>
					<h2>{title}</h2>
                    {children}
                </StyledSectionContent>
			</StyledSection>
        </>
    );
}