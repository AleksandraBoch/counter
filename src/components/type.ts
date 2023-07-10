export type counterUpType = {
    type: "COUNTUP",
    payload: {}

}
export type counterDownType = {
    type: "COUNTDOWN"
    payload: {}
}
export type setMaxValue = {
    type: "SET_MAX_VALUE"
    payload: {}
}
export type setMinValue = {
    type: "SET_MIN_VALUE"
    payload: {value: number}
}

export type ResetValue = {
    type: 'RESET VALUE'
}

export type ActionsType = counterUpType | counterDownType | setMaxValue | setMinValue | ResetValue