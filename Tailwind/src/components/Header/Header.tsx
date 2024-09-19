

interface HeaderProps{
    companyName: string;
    companySlogan: string;
}

export default function Header({companyName, companySlogan}:HeaderProps){
    return(
        <header id="header" className="py-[50px]  text-center">
			<div>
			<h1 className="text-5xl mt-8 mb-4 font-bold">{companyName}</h1>
			<p className="text-2xl my-6">{companySlogan}</p>
			</div>
		</header>
    );
}