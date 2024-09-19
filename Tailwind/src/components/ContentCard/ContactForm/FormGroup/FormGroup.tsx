
interface FormGroupProps extends React.HtmlHTMLAttributes<HTMLDivElement>{
    children: React.ReactNode
}

export default function FormGroup({children, ...props}: FormGroupProps){
    return(
        <div {...props} className="mb-5 *:w-full *:mt-[5px] *:mr-[10px] *:p-2.5 *:rounded-[5px] *:border *:border-solid *:text-xs *:border-lightColors-borderLight *:dark:border-darkColors-borderLight *:dark:bg-darkColors-sixth *:dark:text-darkColors-primary" >
            {children}
        </div>
    );
}