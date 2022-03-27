const initialState = {}

const counterReducer = (state: InitialStateType = initialState, action: any) => {
    switch(action.type) {
        default:
            return state
    }
}

type InitialStateType = typeof initialState

export default counterReducer;