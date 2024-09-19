import styled from "@emotion/styled";

const StyledButton = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    padding: 0 15px;
    font-size: 15px;
    line-height: 1;
    font-weight: 500;
    height: 35px;
    border: none;
    background-color: ${({theme}) => theme.color.buttonBackgroundGreen};
    color: ${({theme}) => theme.color.buttonColor};
    :hover{
        background-color: ${({theme}) => theme.color.buttonHoverLighterGreen};
        cursor: pointer;
    }
    /* :focus{
        box-shadow: 0 0 0 2px ${({theme}) => theme.color.buttonHoverLighterGreen};
    } */
`;

const StyledDiv = styled.div`
    display: flex;
    margin-top: auto;
    justify-content: flex-end;

`;

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    children: React.ReactNode
}

export default function Button({children, ...props} : ButtonProps){
    return(
        <StyledDiv>
            <StyledButton {...props}>
                {children}
            </StyledButton>
        </StyledDiv>
    );
}