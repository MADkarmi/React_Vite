import { useState } from "react";
import Footer from "./Quiz/Footer";
import Header from "./Quiz/Header";
import Spinner from "./Spinner";
import useQuizQuestions from "../providers/QuizQuestionsProvider/useQuizQuestions";
import QuizContent from "./Quiz/QuizContent";
import CategorySelector from "./Quiz/CategorySelector";

export type QuizQuestionsData = {
	id: string,
	name: string,
	effect: string
}

export type QuizData ={
    category: string,
    questions: QuizQuestionsData[],
}

interface QuizProps{
    quizName: string;
}

function shuffleArray<T>(array: T[]): T[] {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
}

function getRandomElements<T>(array: T[], count: number): T[] {
    const shuffledArray = shuffleArray(array);
    return shuffledArray.slice(0, count);
}

export default function Quiz({quizName}: QuizProps){
    const {loadingData, quizData} = useQuizQuestions();
    const [currentScore, setCurrentScore] = useState<number>(0);
	const [highScore, setHighScore] = useState<number>(Number(localStorage.getItem("highScore")) || 0);
    const [questionSet, setQuestionSet] = useState<number|undefined>(undefined);

    const [questions, setQuestions] = useState<QuizQuestionsData[]>([]);
    const [currentQuestion, setCurrentQuestion] = useState<QuizQuestionsData|null>(null);
    const [optionalAnswers, setOptionalAnswers] = useState<string[]>([]);
    const [availableQuestionsIds, setAvailableQuestionsIds] = useState<number[]>([])//

    const handleCorrectAnswer = () => {
        setCurrentScore(currentScore => currentScore + 1);
        if(currentScore + 1 > Number(highScore)){
            localStorage.setItem("highScore", `${currentScore+1}`);
            setHighScore(currentScore + 1);
        }
    }

    const handleWrongAnswer = () => {
        setCurrentScore(0);
    }

    const resetCategory = () => {
        setQuestionSet(undefined);
        setQuestions([]);
        setAvailableQuestionsIds([]);
    }

    const setCategory = (index: number) => {
        setQuestionSet(index);
        const questions = quizData[Number(index)].questions
        const availableIds = Array.from({length: questions.length}, (v,i) => i);
        setQuestions(questions);
        setAvailableQuestionsIds(availableIds);
        selectNextQuestion(availableIds, questions);
    }

    const selectNextQuestion = (availableIds = availableQuestionsIds, availableQuestions = questions) => {
        const randomQuestion = Math.floor(Math.random()* availableIds.length);
        const selectedQuestion = availableQuestions[availableIds[randomQuestion]];
        setCurrentQuestion(selectedQuestion);

        const correctAnswer = selectedQuestion.name;
        const incorrectAnswers = availableQuestions.filter(q => q.id != selectedQuestion.id).map(q => q.name);
        const answers = shuffleArray([correctAnswer, ...getRandomElements(incorrectAnswers, 3)]);
        setOptionalAnswers(answers);

        availableIds.splice(randomQuestion, 1);
        setAvailableQuestionsIds(availableIds);
        console.log("answer: ", correctAnswer);
    }

    return(
        <div className="bg-blue-900 rounded-lg w-2/5 shadow">
            <Header quizName={quizName}/>
            <div className="bg-slate-900 flex justify-center py-4 px-4">
                {loadingData &&
                    <Spinner/>}
                {!loadingData &&
                (questionSet === undefined) &&
                    <div>
                        <CategorySelector
                            data={quizData}
                            setCategory={setCategory}
                        />
                    </div>
                    }
                {!loadingData && (!isNaN(Number(questionSet))) &&
                    <div>
                        <QuizContent
                            currentQuestion = {currentQuestion}
                            optionalAnswers = {optionalAnswers}
                            selectQuestion={selectNextQuestion}
                            resetCategory = {resetCategory}
                            handleCorrectAnswer = {handleCorrectAnswer}
                            handleWrongAnswer = {handleWrongAnswer}
                        />
                    </div>
                }
            </div>
            <Footer currentScore={currentScore} highScore={highScore}/>
        </div>
    )
}