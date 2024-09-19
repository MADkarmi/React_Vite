import styled from "@emotion/styled";


interface NavBarProps{
    toggleTheme: () => void;
    theme: string;
}

const StyledNavar = styled.div`
  position: sticky;
  top: 0;
  padding: 10px 0;
  text-align: center;
  z-index: 1000;
  background: ${({theme}) => theme.color.color1};
`

const StyledLink = styled.a`
  text-decoration: none;
  padding: 0 20px;
  color: ${({theme}) => theme.color.primaryColor};
`

const StyledButton = styled.button`
  cursor: pointer;
  padding: 10px 20px;
  transition: background-color 0.3s ease;
  border-radius: 5px;
  color: ${({theme}) => theme.color.backgroundColor};
  background: ${({theme}) => theme.color.primaryColor};

  &:hover{
    background: ${({theme}) => theme.color.color2};
  }
`

export default function NavBar({toggleTheme, theme}: NavBarProps){
    return(
        <StyledNavar>
        <StyledLink href="#header">Home</StyledLink>
        <StyledLink href="#about">About</StyledLink>
        <StyledLink href="#services">Services</StyledLink>
        <StyledLink href="#team">Team</StyledLink>
        <StyledLink href="#blog">Blog</StyledLink>
        <StyledLink href="#contact">Contact</StyledLink>
        <StyledButton onClick={toggleTheme} className="theme-toggle-button">
          {theme === "dark" ? "Light Mode" : "Dark Mode"}
        </StyledButton>
      </StyledNavar>
    );
}