import { QuizData } from "../Quiz";


interface CategorySelectorProps{
    data: QuizData[]
    setCategory: (index: number) => void;
}
export default function CategorySelector({data, setCategory}: CategorySelectorProps){
    return (
        <div className="flex items-center flex-col my-5">
            <h3 className="text-lg text-center mb-4" >
                Select Category:
            </h3>
            <div className="flex justify-between gap-4 max-w-max max-h-max">
                {data.map((obj,index) => (
                    <div key={index} className="flex rounded-lg bg-gray-700 justify-center hover:cursor-pointer">
                        <button className="text-lg p-4 w-full"
                            onClick={() => {
                                setCategory(index);
                            }}>
                                {obj.category}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}