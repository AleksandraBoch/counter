import React, {useState} from "react";
import {Button} from "../button/button";
import style from "./counter.module.css"


type CounterType={
    disabled?:boolean;
    maxValue?:number,
    minValue?:number,
    num?:number
}



export const Counter = (props:CounterType) => {
    let [num, setNum] = useState(0)
    let [error, setError] = useState('Error!')

let errorStyle=`${num===5  && style.error}`



    let count = () => {
        if (num <= 4) {
            return setNum(++num)
        } else return setError('Error!')
    }

    const resetButton = () => {
        return setNum(0)
    }
    return (
<div className={style.frame}>

        <div className={style.display}>
            <div className={style.counterScreen}>

                <h2 className={`${style.num} ${errorStyle}`}>{num}</h2>

            </div>


        </div>
        <div className={style.buttonsGroup}>
            <Button name={'count'} callBack={count} />
            <Button name={'Reset'} callBack={resetButton} disabled={num==0}/>
        </div>


</div>


    )
}