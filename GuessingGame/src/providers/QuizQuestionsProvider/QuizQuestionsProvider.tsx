import { createContext, useCallback, useEffect, useState } from "react";
import { QuizData, QuizQuestionsData } from "../../components/Quiz";
import { getPotions } from "./DataProviders/PotionsProvider";
import { delay } from "../../utilis";
import { getSpells } from "./DataProviders/SpellsProvider";

export const QuizQuestionsContext = createContext<{
        loadingData: boolean;
        quizData: QuizData[]
    }>({
        loadingData: true,
        quizData: [],
    })

const QuizQuestionsProvider = ({children} : {children: React.ReactNode}) => {
    const [loadingData, setLoadingData] = useState(true);
    const [quizData, setQuizData] = useState<QuizData[]>([]);

	const fetchData = useCallback(
		async function fetchData(ignore=false, getData: () => Promise<QuizQuestionsData[]>, dataCategory: string) {
			setLoadingData(true);
			const data = await getData();
			if(!ignore){
                const quiz:QuizData = {
                    category: dataCategory,
                    questions: data.filter(question => question.effect !== null)
                }
				setQuizData( prevData => {
                    return prevData.some(q => q.category === quiz.category)? prevData : [...prevData, quiz]
                    })
                await delay(1000);
				setLoadingData(false);
			}
		},
		[]
	)

	useEffect(() =>{
		let ignore = false;
		fetchData(ignore, getPotions, "Potions");
		fetchData(ignore, getSpells, "Spells");

		return () => {
			ignore = true;
		};
	},[fetchData])



    return(
        <QuizQuestionsContext.Provider value={{loadingData, quizData}}>
            {children}
        </QuizQuestionsContext.Provider>
    )
};

export default QuizQuestionsProvider;