import { useState } from "react";
import { QuizQuestionsData } from "../Quiz";
import Button from "./QuizConstent/Button";

interface QuizContentProps{
    currentQuestion : QuizQuestionsData|null,
    optionalAnswers : string[],
    selectQuestion: () => void,
    resetCategory: () => void,
    handleCorrectAnswer: () => void,
    handleWrongAnswer: () => void,
}

export default function QuizContent({currentQuestion,
                                    optionalAnswers,
                                    selectQuestion,
                                    resetCategory,
                                    handleCorrectAnswer,
                                    handleWrongAnswer}: QuizContentProps){

    const [wrongAnswer, setWrongAnswer] = useState<boolean|null>(null);

    return(
        <div className="flex items-center flex-col my-5">
            {currentQuestion && <>
            <h3 className="text-lg text-center mb-4" >
                {currentQuestion?.effect}?
            </h3>
            <div className="grid grid-cols-2 grid-flow-row gap-4 max-w-max max-h-max">
                {optionalAnswers.map(answer => (
                    <Button key={ `${answer} ${currentQuestion?.id}`}
                        className="flex rounded-lg bg-slate-600 justify-center text-sm p-4 w-full"
                        onClick={() => {
                            if(answer === currentQuestion?.name){
                                handleCorrectAnswer();
                                setWrongAnswer(false);
                                selectQuestion();
                            } else {
                                setWrongAnswer(true);
                                handleWrongAnswer();
                            }}}
                        >
                        {answer}
                    </Button>

                ))}
            </div>
            {(wrongAnswer === false) &&
                <button
                    className="rounded-xl mt-5 p-2 text-blue-600 bg-slate-700"
                    onClick={() => (resetCategory())}
                    >
                    Wanna change category?
                </button>

            }
            {(wrongAnswer === true) &&
                <div className="flex flex-col items-center pt-4">
                    <div className="text-red-700">
                        Wrong Answer!
                    </div>
                    <button
                        className="rounded-xl p-2"
                        onClick={() => (resetCategory())}
                        >
                        Gonna cry?
                    </button>
                </div>
            }
            </>}
            {!currentQuestion &&
                <button
                    className="rounded-xl mt-5 p-2 text-blue-600 bg-slate-700"
                    onClick={() => (resetCategory())}
                    >
                    Change category
                </button>
            }

        </div>
    );
}