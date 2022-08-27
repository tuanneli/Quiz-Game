import React from 'react';
// import {ButtonWrapper} from "./QuestionCard.styles";
import {IQuestionData} from "../api/API";
import {IAnswer} from "./QuizGame";
import {quotesReplacer} from "./quotesReplacer";

interface IListOfQuestions {
    list_of_questions: string[]
    clickHandler: (question: string) => void
    questionData: IQuestionData
    answer: IAnswer
}

const ListOfQuestions = ({
                             list_of_questions,
                             answer,
                             clickHandler,
                             questionData
                         }: IListOfQuestions) => {

    return (
        <div className={"questions"}>
            {list_of_questions?.map((question, index) => (
                <div
                    key={index}
                    className={"question-item"}
                >
                    <button
                        style={{
                            background: !answer.isClicked ? 'blue' :
                                questionData.correct_answer === question ? 'green' :
                                    answer.isClicked && !answer.isCorrect && answer.answer_text === question ? "red" : 'blue'
                        }}
                        onClick={() => clickHandler(quotesReplacer(question))}
                        disabled={answer.isClicked}
                    >
                        {quotesReplacer(question)}
                    </button>
                </div>
            ))}
        </div>
    );
};

export default ListOfQuestions;