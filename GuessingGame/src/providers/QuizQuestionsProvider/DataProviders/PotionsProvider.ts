import { QuizQuestionsData } from "../../../components/Quiz";

export async function getPotions():Promise<QuizQuestionsData[]> {
	const response = await fetch(
		`https://api.potterdb.com/v1/potions`
	);
	const {data} = await response.json();
	return data.map(
		({
			id,
			attributes:{
				name,
				effect
			}
		} : {id: string, attributes: {name: string, effect: string}} ) => (
			{
				id,
				name,
				effect
			}
		)
	);
}