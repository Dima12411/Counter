import React, {useEffect, useState} from 'react';
import './App.css';
import Counter from "./components/Counter";
import PropertiesForCounter from "./components/PropertiesForCounter";


function App() {
    // const [start, setStart] = useState<number>(0)
    // const [max, setMax] = useState<number>(5)
    // const [number, setNumber] = useState<number>(start)
    // const [message, setMessage] = useState<boolean>(false)
    // const [errorMessage, setErrorMessage] = useState<boolean>(false)
    // const plusNumber = () => {
    //     if (number < max) {
    //         setNumber(number + 1)
    //     }
    // }
    // useEffect(() => {
    //     let NumberAsString = localStorage.getItem('numberForCounter')
    //     if (NumberAsString) {
    //         let newValue = JSON.parse(NumberAsString)
    //         setNumber(newValue)
    //     }
    //     let startValueAsString = localStorage.getItem('startValue')
    //     if (startValueAsString) {
    //         let newValue = JSON.parse(startValueAsString)
    //         setStart(newValue)
    //     }
    //     let maxValueAsString = localStorage.getItem('maxValue')
    //     if (maxValueAsString) {
    //         let newValue = JSON.parse(maxValueAsString)
    //         setMax(newValue)
    //     }
    // }, [])
    // useEffect(() => {
    //     localStorage.setItem('numberForCounter', JSON.stringify(number))
    //     localStorage.setItem('startValue', JSON.stringify(start))
    //     localStorage.setItem('maxValue', JSON.stringify(max))
    // }, [number, start, max])


    return (
        <div className="App">
            <div className="propertiesForCounter">
                <PropertiesForCounter
                    // start={start}
                    // max={max}
                    // number={number}
                    // setNumber={setNumber}
                    // setStart={setStart}
                    // setMax={setMax}
                    // setMessage={setMessage}
                    // setErrorMessage={setErrorMessage}
                />
            </div>
            <div className="counter">
                <Counter
                    // number={number}
                    // start={start}
                    // max={max}
                    // message={message}
                    // errorMessage={errorMessage}
                    // setNumber={setNumber}
                    // plusNumber={plusNumber}

                />
            </div>
        </div>
    );
}

export default App;
