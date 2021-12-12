import React from "react";

type CounterProps = {
    addNumber: () => void
    number: number
    resetNumber: () => void
    start: number
    max: number
}

const Counter = (props: CounterProps) => {
    const maxNumber = {
        color: props.number === props.max ? "red" : "black"
    }
    const onClickInc = () => {
        props.addNumber()
    }
    const onClickReset = () => {
        props.resetNumber()
    }
    return (
        <div>
            <div className="counter">
                <div className="countNumber" style={maxNumber}>{props.number}</div>
            </div>
            <div className="buttons">
                <button disabled={props.number === props.max ? true : false}
                    className="button-inc"
                    onClick={onClickInc}
                >inc</button>
                <button disabled={props.number === props.start ? true : false}
                    className="button-reset"
                        onClick={onClickReset}
                >reset</button>
            </div>
        </div>
    )
}

export default Counter;