import React, {ChangeEvent, useState} from "react";

export type PropsType = {
    max: number
    setMax: (max: number) => void
    start: number
    setStart: (start: number) => void
    onChangeMax: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeStart: (e: ChangeEvent<HTMLInputElement>) => void
}

const PropertiesForTheCounter = (props: PropsType) => {
    return (
        <div className="Properties">
            <div className="content">
                <div className="input_1">
                    <span className="value">Max value: </span>
                    <input className="input"
                           type="number"
                           value={props.max}
                           onChange={props.onChangeMax}
                    />
                </div>
                <div className="input_2">
                    <span className="value">Start value: </span>
                    <input className="input2"
                           type="number"
                           value={props.start}
                           onChange={props.onChangeStart}
                    />
                </div>
            </div>
            <div className="button_set">
                <button className="button_Set"
                >
                    set
                </button>
            </div>
        </div>
    )
}

export default PropertiesForTheCounter;