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


export function counterReducer(state: StateType = initialState, action: ActionsType): StateType {
    switch (action.type) {
        case "COUNTUP":

            return {
                ...state, currentValue: state.currentValue + 1
            }

        case "SET_MAX_VALUE":
            return {
                ...state,
                maxCount: action.payload.value,
                // currentValue: action.payload.value
            }
        case "SET_MIN_VALUE":
            return {
                ...state,
                minCount: action.payload.value,
                // currentValue: action.payload.value
            }
        case "ERROR":
             {
          if  (state.minCount>state.maxCount ||state.currentValue===state.maxCount){
                return {...state,error:true}
        }else {
                return {...state,error:false}
            }
             }
        case "RESET_VALUE":
            console.log('hello')
            return {
                ...state,
                currentValue: state.minCount
            }

        default: {
            return state
        }
    }
}



