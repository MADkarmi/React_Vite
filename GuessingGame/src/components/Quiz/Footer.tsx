interface FooterProps{
    currentScore: number;
    highScore: number;
}

export default function Footer({currentScore, highScore}:FooterProps){
    return(
        <div className="flex justify-between mx-6 my-4 bg-blue-900 text-sm font-bold">
            <div className="">
                Current Score: {currentScore}
            </div>
            <div className="">
                High Score: {highScore}
            </div>
        </div>
    )
}