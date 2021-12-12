import React, {ChangeEvent, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from "./Counter";
import PropertiesForTheCounter from "./PropertiesForTheCounter";

function App() {
    const [number, setNumber] = useState<number>(0)
    const [max, setMax] = useState<number>(5)
    const [start,setStart] = useState<number>(0)
    const startValue = start
    const addNumber = () => {
        if (start < max) {
            setNumber(number + 1)
        }
    }
    const resetNumber = () => {
        setNumber(start)
    }
    const onChangeMax = (e: ChangeEvent<HTMLInputElement>) => {
        setMax(e.currentTarget.valueAsNumber)
    }
    const onChangeStart = (e: ChangeEvent<HTMLInputElement>) => {
        setStart(e.currentTarget.valueAsNumber)
    }
    const messageOutput = () => {

    }
    return (
        <div className="App">
            <div className="body">
                <Counter
                addNumber={addNumber}
                number={number}
                resetNumber={resetNumber}
                start={start}
                max={max}
            />
            </div>
            <div className="body2">
                <PropertiesForTheCounter
                max={max}
                setMax={setMax}
                start={start}
                setStart={setStart}
                onChangeMax={onChangeMax}
                onChangeStart={onChangeStart}
                />
            </div>
        </div>
    );
}

export default App;
