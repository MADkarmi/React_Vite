import { ReactNode } from "react";
import "./ContentCard.scss";

interface ContentCardProps{
    children : ReactNode;
}

export default function ContentCard({children}:ContentCardProps){
    return(
        <div className="content-card">
            {children}
        </div>
    );
}