import {ActionsType} from "../components/type";



export type StateType = {
    minCount: number,
    maxCount: number,
    error: boolean,
    currentValue: number,
}

const initialState: StateType = {
    minCount: 0,
    maxCount: 0,
    error: false,
    currentValue: 0

}


export function counterReducer(state: StateType = initialState, action: ActionsType) {
    switch (action.type) {
        case "COUNTUP":

            return {...state,

            }

        case "COUNTDOWN":
            return {}
        case "SET_MAX_VALUE":
            return {}
        case "SET_MIN_VALUE":
            return {
                ...state,
                minCount:action.payload.value,
                currentValue:action.payload.value
            }
        case "RESET VALUE":
            return {
                ...state,error:false,
                currentValue:state.minCount
            }

        default: {
            return state
        }
    }
}



