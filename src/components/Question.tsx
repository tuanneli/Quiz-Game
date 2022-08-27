import React from 'react';
import {quotesReplacer} from "./quotesReplacer";

interface IQuestions {
    questions: string
}

const Question = ({questions}: IQuestions) => {
    questions = quotesReplacer(questions)
    return (
        <div>
            <span>{questions}</span>
        </div>
    );
};

export default Question;

// print("Hi people, im traveller from Uzbekhistan, i leave in white room, i love listening White stripes")