const initialState = {
    startValue: 0,
    maxValue: 5,
    value: 0,
    message: false,
    errorMessage: false

}

const counterReducer = (state: InitialStateType = initialState, action: AllActionsType) => {
    switch(action.type) {
        case "SET-VALUE":
            return {
                ...state,
                value: state.startValue
            }
        case "PLUS_VALUE":
            return {
                ...state,
                value: state.value + 1
            }
        case "RESET-VALUE":
            return {
                ...state,
                value: state.startValue
            }
        case "SET_START_VAlUE":
            return {
                ...state,
                startValue: action.payload.value
            }
        case "SET_MAX_VAlUE":
            return {
                ...state,
                maxValue: action.payload.value
            }
        case "SET-MESSAGE":
            return {
                ...state,
                message: action.payload.message
            }
        case "SET-ERROR-MESSAGE":
            return {
                ...state,
                errorMessage: action.payload.error
            }
        default:
            return state
    }
}

export const setValueAC = () => {
    return {
        type: 'SET-VALUE',

    } as const
}
export const plusValueAC = () => {
    return {
        type: 'PLUS_VALUE',
    } as const
}
export const resetValueAC = () => {
    return {
        type: 'RESET-VALUE'
    } as const
}
export const setMaxValueAC = (value: number) => {
    return {
        type: 'SET_MAX_VAlUE',
        payload: {value}
    } as const
}
export const setStartValueAC = (value: number) => {
    return {
        type: 'SET_START_VAlUE',
        payload: {value}
    } as const
}
export const setMessageAC = (message: boolean) => {
    return {
        type: 'SET-MESSAGE',
        payload: {message}
    } as const
}
export const setErrorMessageAC = (error: boolean) => {
    return {
        type: 'SET-ERROR-MESSAGE',
        payload: {error}
    } as const
}


export type InitialStateType = typeof initialState
type AllActionsType =
    | PlusNumberType
    | SetMaxValueType
    | ResetValueType
    | SetStartValueType
    | SetMessageType
    | SetErrorMessage
    | SetValueType

type PlusNumberType = ReturnType<typeof plusValueAC>
type SetMaxValueType = ReturnType<typeof setMaxValueAC>
type ResetValueType = ReturnType<typeof resetValueAC>
type SetStartValueType = ReturnType<typeof setStartValueAC>
type SetMessageType = ReturnType<typeof setMessageAC>
type SetErrorMessage = ReturnType<typeof setErrorMessageAC>
type SetValueType = ReturnType<typeof setValueAC>

export default counterReducer;