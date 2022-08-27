import React, {Dispatch, useEffect, useState} from 'react';
import {fetchData, IQuestionData} from "../api/API";
import Question from "./Question";
import ListOfQuestions from "./ListOfQuestions";
import '../App.css';

interface IQuizGameProps {
    setStart: Dispatch<boolean>
    setResult: Dispatch<number | null>

}

export interface IAnswer {
    answer_text: string
    isClicked: boolean
    isCorrect: boolean
}

const AMOUNT_OF_QUESTIONS = 10;

const QuizGame = ({setStart, setResult}: IQuizGameProps) => {

    const initAnswer = {
        answer_text: '',
        isClicked: false,
        isCorrect: false,
    }

    const [questionData, setQuestionData] = useState<IQuestionData[]>([])
    const [questionNumber, setQuestionNumber] = useState<number>(0)
    const [endGame, setEndGame] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)
    const [score, setScore] = useState<number>(0)
    const [answer, setAnswer] = useState<IAnswer>(initAnswer)

    useEffect(() => {
        startQuiz()
    }, [])

    const startQuiz = async () => {
        setLoading(true)
        setQuestionData(await fetchData())
        setLoading(false)
    }

    useEffect(() => {
        if (questionNumber === AMOUNT_OF_QUESTIONS) {
            setEndGame(true)
            setStart(false)
            setResult(score)
        }
    }, [questionNumber])

    const clickHandler = (question: string) => {
        initAnswer.answer_text = question
        initAnswer.isClicked = true
        if (question === questionData[questionNumber].correct_answer) {
            initAnswer.isCorrect = true
            setScore(score + 1)
        } else {
            initAnswer.isCorrect = false
        }
        setAnswer(initAnswer)
    }

    const nextHandler = () => {
        setQuestionNumber(prev => prev + 1)
        initAnswer.answer_text = ''
        initAnswer.isClicked = false
        setAnswer(initAnswer)
    }

    return (
        <div className={"main-content"}>
            <div className={"questions-all"}>
                <div className={"questions-header"}>
                    {loading ? <p>Loading...</p> : <p>{questionNumber + 1} / {questionData.length}</p>}

                    <Question questions={questionData[questionNumber]?.question}/>
                </div>
                <ListOfQuestions clickHandler={clickHandler}
                                 questionData={questionData[questionNumber]}
                                 answer={answer}
                                 list_of_questions={questionData[questionNumber]?.list_of_questions}/>
            </div>
            <div className={"next-button"}>
                <button
                    disabled={endGame}
                    hidden={!answer.isClicked}
                    onClick={nextHandler}>Next
                </button>
            </div>
        </div>
    )
};

export default QuizGame;