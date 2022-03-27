import React, {ChangeEvent, useState} from "react";
import Button from "./Button";

type PropsType = {
    start: number
    max: number
    number: number
    setNumber: (number: number) => void
    setStart: (start: number) => void
    setMax: (max: number) => void
    setMessage: (message: boolean) => void
    setErrorMessage: (errorMessage: boolean) => void
}

const PropertiesForCounter = (props: PropsType) => {
    const [disabled, setDisabled] = useState<boolean>(true)
    const startNumberHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setStart(+e.currentTarget.value)
        props.setMessage(true)
        setDisabled(false)
    }
    const maxNumberHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setMax(+e.currentTarget.value)
        props.setMessage(true)
        setDisabled(false)
    }
    const setButtonHandler = () => {
        props.setMessage(false)
        props.setNumber(props.start)
        setDisabled(true)
    }
    if (props.max < 0 || props.start < 0 || props.max === props.start) {
        props.setErrorMessage(true)
    } else {
        props.setErrorMessage(false)
    }
    const disabledButtonSet = props.start < 0 || props.max < 0 || props.start === props.max ? true : disabled

    return (
        <div>
            <div className="body">
                <div className="borderForInput">
                    <div>
                        <span className="span-value">Max value:</span>
                        <input type="number"
                               value={props.max}
                               onChange={maxNumberHandler}
                               className={props.max < 0 || props.max === props.start ? "redMax" : "input-max"}/>
                    </div>
                    <div>
                        <span className="span-value">Start value:</span>
                        <input type="number"
                               value={props.start}
                               onChange={startNumberHandler}
                               className={props.start < 0 || props.start === props.max ? "redStart" : "input"}/>
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