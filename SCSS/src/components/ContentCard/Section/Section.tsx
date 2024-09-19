import { ReactNode } from "react";
import "./Section.scss";

interface SectionProps{
    children?: ReactNode;
    id: string;
    className: string;
    title: string;
}

export default function Section({children, id, className, title}:SectionProps){
    return (
        <>
            <section id={id} className={className}>
				<div className="section-content">
					<h2>{title}</h2>
                    {children}
                </div>
			</section>
        </>
    );
}