import React from 'react';
import './App.css';
import Counter from "./components/Counter";
import PropertiesForCounter from "./components/PropertiesForCounter";


function App() {

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
