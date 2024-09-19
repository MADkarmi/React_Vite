interface LinkProps extends React.LinkHTMLAttributes<HTMLAnchorElement>{
    children: React.ReactNode
}

export default function Link({children, ...props} : LinkProps){
    return(
        <a {...props} className="flex space-x-4 items-center p-1 w-fit no-underline border-2 border-lightColors-primary dark:border-darkColors-third rounded-md shadow-md hover:scale-110   text-lightColors-primary  dark:text-darkColors-primary">
            {children}
        </a>
    );
}