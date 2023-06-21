import React, {ChangeEvent, useState} from "react";
import style from './counterSettings.module.css'
import {Button} from "../../button/button";


type SettingsType={
    minValue:number,
    maxValue:number,
}
export const CounterSettings=(props:SettingsType)=>{

    let [minValue,setMinValue]=useState(0)
    let [maxValue,setMaxValue]=useState(0)



    return(
        <div className={style.body}>
            <div className={style.buttonsGroup}>
<input value={'max'} onChange={e=>setMaxValue(Number(e.currentTarget.value))}/>
            </div>

            <div className={style.buttonsGroup} >
                <input value={'min'} onChange={e=>setMinValue(Number(e.currentTarget.value))}/>
            </div>
            <div className={style.buttons}>
                <Button name={'Set num'} callBack={()=>{}}
                />

            </div>


        </div>
    )

}