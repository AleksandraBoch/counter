export type counterUpType = {
    type: "COUNTUP",
    // payload: {value:number}

}

export type setMaxValueType = {
    type: "SET_MAX_VALUE"
    payload: {value: number}
}
export type setMinValueType = {
    type: "SET_MIN_VALUE"
    payload: {value: number}
}

export type ResetValueType = {
    type: 'RESET_VALUE'
    // payload: {value: number}
}

export type errorType={
    type:"ERROR"
    payload:{error:boolean}
}

export type ActionsType = counterUpType  | setMaxValueType | setMinValueType | ResetValueType |errorType