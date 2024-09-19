import styled from "@emotion/styled";

const StyledDiv = styled.div`
    margin: 10px;

    color: ${({theme}) => theme.color.primaryColor};
    font-family: inherit;
    height: 10%;
`

export default function Header({ children }: { children: React.ReactNode }){
    return(
        <StyledDiv>
            {children}
        </StyledDiv>
    );
}