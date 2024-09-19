import styled from "@emotion/styled";


interface HeaderProps{
    id: string;
    companyName: string;
    companySlogan: string;
}

const StyledHeader = styled.header`
padding: 20px 0;
text-align: center;
h1{
    font-size: 3em;
    margin-bottom: 10px;
}
p{
    font-size: 1.5em;
}
`

export default function Header({id, companyName, companySlogan}:HeaderProps){
    return(
        <StyledHeader id={id}>
			<div>
                <h1>{companyName}</h1>
                <p>{companySlogan}</p>
			</div>
		</StyledHeader>
    );
}