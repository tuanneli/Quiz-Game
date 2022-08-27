import React from 'react';
import '../App.css'

interface IFinalText {
    score: number | null
}

const FinalText = ({score}: IFinalText) => {
    return (
        <div className={"score"}>
            <h1>Your score is {score} / 10!</h1>
        </div>
    );
};

export default FinalText;