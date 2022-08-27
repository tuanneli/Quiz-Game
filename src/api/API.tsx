import axios from "axios";

export interface IQuestionData {
    category: string
    correct_answer: string
    difficulty: string
    incorrect_answers: string[]
    question: string
    type: string
    list_of_questions: string[]
}

const shuffleArray = (array: any[]) => {
    return [...array].sort(() => Math.random() - 0.5)
}

export const fetchData = async () => {
    const result = await axios.get("https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple")
    const data: IQuestionData[] = await result.data.results
    console.log(result)
    const questionData: IQuestionData[] = data.map((item: IQuestionData) => {
        return {
            ...item,
            list_of_questions: shuffleArray([...item.incorrect_answers, item.correct_answer])
        }
    })
    return questionData;
}
