import {setMinValue} from "./type";


export const countUp = () => {
    type:"COUNTUP"

}
export const countDown = () => {
    type:"COUNTDOWN"
    payload:{

    }
}
export const setMaxValue = () => {
    type:"SET_MAX_VALUE"
    payload:{

    }
}
export const setMinValueAC = (value:number):any => {
    type:"SET_MIN_VALUE"
    payload:{
        value
    }
}
export const resetValue = ():any => {
    type:"RESET VALUE"

}