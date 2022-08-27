import React, {useEffect, useState} from 'react';
import './App.css';
import QuizGame from "./components/QuizGame";
import FinalText from "./components/FinalText";


function App() {

    const [start, setStart] = useState<boolean>(false)
    const [result, setResult] = useState<number | null>(null)

    const handlerOnClick = () => {
        setStart(true)
    }

    return (
        <div className={"App"}>
            <h1 className={"header"}>Quiz Game</h1>
            {start ? <QuizGame setStart={setStart} setResult={setResult}/> :
                <div className={"main-content"}>
                    <FinalText score={result}/>
                    <div className={'new-game'}>
                        <button onClick={handlerOnClick}>New Game</button>
                    </div>
                </div>
            }
        </div>
    )
}

export default App;
