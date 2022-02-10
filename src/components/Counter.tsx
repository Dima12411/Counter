import React, {useState} from "react";
import Button from "./Button";

type PropsTypeCounter = {
    number: number
    start: number
    max: number
    message: boolean
    errorMessage: boolean
    plusNumber: () => void
    setNumber: (number: number) => void
}

const Counter = (props: PropsTypeCounter) => {
    const plusNumberHandler = () => {
        props.plusNumber()
    }
    const resetNumberHandler = () => {
        props.setNumber(props.start)
    }
    const disabledButtonInc =
        props.errorMessage || props.message
        ? true
        : props.number === props.max ? true : false
    const disabledButtonReset =
        props.errorMessage || props.message
        ? true
        : props.number === props.start ? true : false

    return (
        <div>
            <div className="body">
                <div className="borderForNumber">
                    <div className="numberForCounter">
                        {  props.errorMessage
                            ? <span className="error-message">Incorrect value!</span>
                            : props.message
                            ? <span className="message">Enter values and press "set"</span>
                            : <span className={props.number === props.max ? "redNumber" : "propertiesForNumber"}>
                                {props.number}</span>
                        }
                    </div>
                </div>
                <div className="borderForButton">
                    <div>
                        <Button
                        button={"inc"}
                        callback={plusNumberHandler}
                        disabled={disabledButtonInc}
                        />
                    </div>
                    <div>
                        <Button button={"reset"}
                                disabled={disabledButtonReset}
                                callback={resetNumberHandler}/>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Counter;