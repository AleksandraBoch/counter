import React, {useState} from "react";
import {Button} from "../button/button";
import style from "./counter.module.css"


type CounterType={
    disabled:boolean;
    maxValue:number,
    minValue:number,
    num:number,
    setNum:(value:number)=>void,
    error?:(value:string)=>void
}


export const Counter = (props:CounterType) => {
    // let [num, setNum] = useState(0)
    // let [error, setError] = useState('Error!')

    let error :any =()=>{
        if (props.maxValue<props.minValue || props.maxValue===props.minValue )
        {error= 'incorrect value'}
    else{ error='please set value'}
}
let errorStyle=`${props.num===props.maxValue  && style.error}`



    let count = () => {
       props.setNum(props.num + 1)
        if(props.num===props.maxValue -1){

        }
    }

    const resetButton = () => {
        return props.setNum(0)
    }

    let disabledCount=props.num===props.maxValue

    return (
<div className={style.frame}>

        <div className={style.display}>
            <div className={style.counterScreen}>

                <h2 className={`${style.num} ${errorStyle}`}>{props.num}</h2>

            </div>
        </div>
        <div className={style.buttonsGroup}>
            <Button name={'count'} callBack={count} disabled={disabledCount} />
            <Button name={'Reset'} callBack={resetButton} disabled={props.num==0}/>
        </div>


</div>


    )
}