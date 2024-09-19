import { ReactNode } from "react";

interface ContentCardProps{
    children : ReactNode;
}

export default function ContentCard({children}:ContentCardProps){
    return(
        <div className="rounded-lg my-5 bg-lightColors-fourth dark:bg-darkColors-fourth">
            {children}
        </div>
    );
}