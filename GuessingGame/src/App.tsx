
import Quiz from './components/Quiz'
import QuizQuestionsProvider from './providers/QuizQuestionsProvider/QuizQuestionsProvider';

function App() {
	return (
		<div className='font-sans m-0 p-0 text-white bg-no-repeat bg-gradient-to-r from-blue-900 from-10% to-orange-800'>
			<div className='flex justify-center items-center h-screen'>
				<QuizQuestionsProvider>
					<Quiz quizName='Harry Potter'/>
				</QuizQuestionsProvider>
			</div>
		</div>

	)
}

export default App
