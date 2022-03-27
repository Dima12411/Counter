import React, {useEffect, useState} from "react";
import Button from "./Button";
import {useDispatch, useSelector} from "react-redux";
import {RootReducerType} from "../bll/store";
import {InitialStateType, plusValueAC, resetValueAC, setErrorMessageAC} from "../bll/counterReducer";

const Counter = () => {
    const counter = useSelector<RootReducerType, InitialStateType>(state => state.counter)
    const dispatch = useDispatch()
    const plusNumberHandler = () => {
        dispatch(plusValueAC())
    }
    const resetNumberHandler = () => {
        dispatch(resetValueAC())
    }

    useEffect(() => {
        if (counter.maxValue < 0 || counter.startValue < 0 || counter.maxValue === counter.startValue
            || counter.startValue > counter.maxValue) {
            dispatch(setErrorMessageAC(true))
        } else {
            dispatch(setErrorMessageAC(false))
        }
    }, [counter.startValue, counter.maxValue])

    const disabledButtonInc =
        counter.errorMessage || counter.message
            ? true
            : counter.value === counter.maxValue ? true : false

    const disabledButtonReset =
        counter.errorMessage || counter.message
            ? true
            : counter.value === counter.startValue ? true : false

    return (
        <div>
            <div className="body">
                <div className="borderForNumber">
                    <div className="numberForCounter">
                        {counter.errorMessage
                            ? <span className="error-message">Incorrect value!</span>
                            : counter.message
                                ? <span className="message">Enter values and press "set"</span>
                                : <span
                                    className={counter.value === counter.maxValue ? "redNumber" : "propertiesForNumber"}>
                                    {counter.value}</span>
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