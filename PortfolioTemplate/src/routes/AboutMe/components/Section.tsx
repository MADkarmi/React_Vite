import { ReactNode } from "react";

interface SectionProps{
    children?: ReactNode;
    className?: string;
    title: string;
}

export default function Section({children, className, title}:SectionProps){
    return (
        <>
            <section className={`py-5 w-full even:bg-lightColors-fifth dark:even:bg-darkColors-sixth ${className}`}>
				<div className="max-w-2xl mx-auto">
					<h2 className="text-3xl mt-8 mb-5 inline-block">{title}:</h2>
                    {children}
                </div>
			</section>
        </>
    );
}