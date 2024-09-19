import footer from "./Footer.module.scss"; //css module import

interface FooterProps{
    companyName: string
}

export default function Footer({companyName}: FooterProps){
    return(
        <footer className={footer.footer}>
			<div className="footer-content">
			<p>
				&copy; {new Date().getFullYear()} {companyName}
			</p>
			</div>
		</footer>
    );
}