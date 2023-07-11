import React, {ChangeEvent} from "react";
import style from './counterSettings.module.css'
import {Button} from "../../button/button";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../state";
import {StateType} from "../reducer";
import {setMaxValue, setMinValueAC} from "../../components/actions";

//
// type SettingsType = {
//     startValue: number,
//     maxValue: number,
//     setStartValue: (e: number) => void,
//     setMaxValue: (e: number) => void,
//     setCount: (value: number) => void,
//
// }
export const CounterSettings = () => {
    const dispatch = useDispatch()
    const settingValues = useSelector<AppRootStateType, StateType>(state => state.values)


    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setMaxValue(Number(e.currentTarget.value)))
    }

    const onChangeMinValue = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setMinValueAC(Number(e.currentTarget.value)))
    }

    let setButton = () => {
    }


    return (
        <div className={style.body}>
            <div className={style.buttonsGroup}>maxValue
                <input
                    type={'number'}
                    value={settingValues.maxCount}
                    onChange={ onChangeMaxValue}/>
            </div>

            <div className={style.buttonsGroup}>
                minValue
                <input
                    type={'number'}
                    value={settingValues.minCount}
                    onChange={ onChangeMinValue}
                />
            </div>
            <div className={style.buttons}>
                <Button name={'Set num'} callBack={setButton}
                />

            </div>


        </div>
    )

}