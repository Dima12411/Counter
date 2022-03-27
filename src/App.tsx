import React, {useEffect, useState} from 'react';
import './App.css';
import Counter from "./components/Counter";
import PropertiesForCounter from "./components/PropertiesForCounter";


function App() {
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
                <PropertiesForCounter/>
            </div>
            <div className="counter">
                <Counter/>
            </div>
        </div>
    );
}

export default App;
