
interface FooterProps{
    companyName: string
}

export default function Footer({companyName}: FooterProps){
    return(
        <footer className="">
			<div className="py-5 text-center">
			<p className="my-3">
				&copy; {new Date().getFullYear()} {companyName}
			</p>
			</div>
		</footer>
    );
}