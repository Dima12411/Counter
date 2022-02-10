import React from "react";

type propsButtonType = {
    button: string
    disabled: boolean
    callback: () => void
}

const Button = (props: propsButtonType) => {
    return (
        <div>
            <button className="button"
                    onClick={props.callback}
                    disabled={props.disabled}
            >{props.button}
            </button>
        </div>
    )
}


export default Button;