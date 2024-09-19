import { ButtonHTMLAttributes, useState } from "react";

export default function Button({children, className, onClick,  ...props}: ButtonHTMLAttributes<HTMLButtonElement> ){
    const [clicked, setClicked] = useState(false);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        onClick && onClick(event);
        setClicked(true);
    }

    return(
        <button {...props}
            className={className + `${clicked? "bg-gray-800 text-gray-400 " : ""}`}
            onClick={handleClick}
            disabled={clicked}
            >
            {children}
        </button>
    )
}