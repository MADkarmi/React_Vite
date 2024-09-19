import { ReactNode } from "react";

interface SectionProps{
    children?: ReactNode;
    id: string;
    className?: string;
    title: string;
}

export default function Section({children, id, className, title}:SectionProps){
    return (
        <>
            <section id={id} className={`py-5 even:bg-lightColors-fifth dark:even:bg-darkColors-sixth ${className}`}>
				<div className="max-w-3xl mx-auto">
					<h2 className="text-4xl mt-8 mb-5 inline-block font-bold">{title}</h2>
                    {children}
                </div>
			</section>
        </>
    );
}