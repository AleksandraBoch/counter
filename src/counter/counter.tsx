import React, {useState} from "react";
import {Button} from "../button/button";
import "./counter.css"


export const Counter = () => {
    let [num, setNum] = useState(0)
    let [error, setError] = useState('Error!')




    let count = () => {
        if (num <= 4) {
            return setNum(++num)
        } else return error
    }


    const resetButton = () => {
        return setNum(0)
    }
    return (

        <div className={'task'}>

            <div className={'display'}>
                <div className={'numDisplay'}>

                    <h2 className={'num'}>{num}</h2>

                </div>



                </div>
            <div className={'buttons'}>
                <Button name={'count'} callBack={count}/>
            <Button name={'Reset'} callBack={resetButton}/>
            </div>


        </div>

    )
}