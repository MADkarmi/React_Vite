import "./Header.scss";

interface HeaderProps{
    companyName: string;
    companySlogan: string;
}

export default function Header({companyName, companySlogan}:HeaderProps){
    return(
        <header id="header" className="header">
			<div className="header-content">
			<h1>{companyName}</h1>
			<p>{companySlogan}</p>
			</div>
		</header>
    );
}