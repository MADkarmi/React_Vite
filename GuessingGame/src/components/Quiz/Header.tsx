
interface HeaderProps{
    quizName: string;
}

export default function Header({quizName}:HeaderProps){
    return(
        <div className="my-4 mx-6 font-bold text-xl">
            {quizName} Quiz
        </div>
    )
}