import { NavLink, NavLinkProps } from "react-router-dom";

interface LinkProps extends NavLinkProps{
    children: React.ReactNode,
}

export default function Link({children,  ...props} : LinkProps){
    return(
        <NavLink {...props} className={({isActive}) => isActive? "px-5 text-lightColors-primary dark:text-darkColors-primary font-bold" : "no-underline px-5 text-lightColors-primary  dark:text-darkColors-primary"}>
            {children}
        </NavLink>
    );
}