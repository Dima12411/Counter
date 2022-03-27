import React, {ChangeEvent, useState} from "react";
import Button from "./Button";
import {useDispatch, useSelector} from "react-redux";
import {RootReducerType} from "../bll/store";
import {
    InitialStateType,
    setMaxValueAC,
    setMessageAC,
    setStartValueAC,
    setValueAC
} from "../bll/counterReducer";

const PropertiesForCounter = () => {
    const counter = useSelector<RootReducerType, InitialStateType>(state => state.counter)
    const dispatch = useDispatch()
    const [disabled, setDisabled] = useState<boolean>(true)

    const startNumberHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setStartValueAC(+e.currentTarget.value))
        dispatch(setMessageAC(true))
        setDisabled(false)
    }
    const maxNumberHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setMaxValueAC(+e.currentTarget.value))
        dispatch(setMessageAC(true))
        setDisabled(false)
    }
    const setButtonHandler = () => {
        dispatch(setMessageAC(false))
        dispatch(setValueAC())
        setDisabled(true)
    }

    const disabledButtonSet = counter.startValue < 0 || counter.maxValue < 0 || counter.startValue === counter.maxValue
        ? true
        : disabled

    const classNameForMaxInput = counter.maxValue < 0 || counter.maxValue === counter.startValue
    || counter.startValue > counter.maxValue
        ? "redMax"
        : "input-max"

    const classNameForStartInput = counter.startValue < 0 || counter.startValue === counter.maxValue
    || counter.startValue > counter.maxValue
        ? "redStart"
        : "input"
    return (
        <div>
            <div className="body">
                <div className="borderForInput">
                    <div>
                        <span className="span-value">Max value:</span>
                        <input type="number"
                               value={counter.maxValue}
                               onChange={maxNumberHandler}
                               className={classNameForMaxInput}
                        />
                    </div>
                    <div>
                        <span className="span-value">Start value:</span>
                        <input type="number"
                               value={counter.startValue}
                               onChange={startNumberHandler}
                               className={classNameForStartInput}
                        />
                    </div>
                </div>
                <div className="borderForButton2">
                    <div>
                        <Button button={"set"}
                                disabled={disabledButtonSet}
                                callback={setButtonHandler}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PropertiesForCounter;