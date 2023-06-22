import React from "react";
import style from './counterSettings.module.css'
import {Button} from "../../button/button";


type SettingsType={
    startValue:number,
    maxValue:number,
    setStartValue:(e:number)=>void,
    setMaxValue:(e:number)=>void,
    setCount:(value:number)=>void,

}
export const CounterSettings=(props:SettingsType)=>{

    let set=()=>{
        props.setCount(props.startValue)


    }


    return(
        <div className={style.body}>
            <div className={style.buttonsGroup}>maxValue
<input value={props.maxValue}

       onChange={e=>props.setMaxValue(Number(e.currentTarget.value))}/>
            </div>

            <div className={style.buttonsGroup} >
                minValue
                <input value={props.startValue} onChange={e=>props.setStartValue(Number(e.currentTarget.value))}/>
            </div>
            <div className={style.buttons}>
                <Button name={'Set num'} callBack={set}
                />

            </div>


        </div>
    )

}