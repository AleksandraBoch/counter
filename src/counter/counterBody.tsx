import React from "react";
import {Button} from "../button/button";
import style from "./counter.module.css"
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./state";
import {countUp, resetValue} from "../components/actions";

// type CounterType = {
//     disabled: boolean;
//     maxValue: number,
//     minValue: number,
//     num: number,
//     setNum: (value: number) => void,
//     error?: (value: string) => void
// }


export const Counter = () => {
    const dispatch = useDispatch()
    const value = useSelector<AppRootStateType, number>(state => state.values.currentValue)
    const minValue = useSelector<AppRootStateType, number>(state => state.values.minCount)
    const maxValue = useSelector<AppRootStateType, number>(state => state.values.maxCount)
    // let [num, setNum] = useState(0)
    // let [error, setError] = useState('Error!')

    let error: any = () => {
        if (maxValue < minValue || maxValue ===minValue) {
            error = 'incorrect value'
        } else {
            error = 'please set value'
        }
    }
    let errorStyle = `${value=== maxValue && style.error}`


    let count = () => {
        dispatch(countUp())
    }

    const resetButton = () => {
        console.log('resetButton')
        dispatch(resetValue())
    }
// useEffect(()=>{
//     if (minValue==maxValue ||value===maxValue){
//         dispatch(error())
//     }
// },[value])


    let disabledCount = value === maxValue

    return (
        <div className={style.frame}>

            <div className={style.display}>
                <div className={style.counterScreen}>

                    <h2 className={`${style.num} ${errorStyle}`}>{value}</h2>

                </div>
            </div>
            <div className={style.buttonsGroup}>
                <Button name={'count'} callBack={count} disabled={disabledCount}/>
                <Button name={'Reset'} callBack={resetButton} disabled={value == 0}/>
            </div>


        </div>


    )
}