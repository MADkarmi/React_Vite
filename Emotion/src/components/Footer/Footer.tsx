import styled from "@emotion/styled";

interface FooterProps{
    companyName: string
}

const StyledFooter = styled.footer`
	padding: 20px 0;
	text-align: center;
`;

export default function Footer({companyName}: FooterProps){
    return(
        <StyledFooter>
			<div>
			<p>
				&copy; {new Date().getFullYear()} {companyName}
			</p>
			</div>
		</StyledFooter>
    );
}