import { useContext } from "react";
import { QuizQuestionsContext } from "./QuizQuestionsProvider";

export default function useQuizQuestions(){
    const context = useContext(QuizQuestionsContext);
    if(!context) {
        throw new Error("useQuizQuestions must be used within an QuizQuestionsProvider");
    }

    return context;
}