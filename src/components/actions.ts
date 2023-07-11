import {counterUpType, errorType, ResetValueType, setMaxValueType, setMinValueType} from "./type";

export const countUp = (): counterUpType => ({
    type: "COUNTUP",
    // payload: {value}
})

export const setMaxValue = (value:number):setMaxValueType => ({
    type:"SET_MAX_VALUE",
    payload:{value}
})
export const setMinValueAC = (value:number): setMinValueType => ({
    type:"SET_MIN_VALUE",
    payload:{value}
})

export const resetValue = (): ResetValueType => ({
        type: "RESET_VALUE",
        // payload:{value}
    } as const
)
export const errorAC=(error:boolean):errorType=>({
type:"ERROR",
    payload:{error}
})