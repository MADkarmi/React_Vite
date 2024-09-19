interface LinkProps extends React.LinkHTMLAttributes<HTMLAnchorElement>{
    children: React.ReactNode
}

export default function Link({children, ...props} : LinkProps){
    return(
        <a {...props} className="no-underline px-5 text-lightColors-primary  dark:text-darkColors-primary">
            {children}
        </a>
    );
}