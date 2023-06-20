import React from "react";

type ButtonType={
    name:string
    callBack:()=>void
    disabled?:boolean,
    maxNum?:number
}


export const Button=(props:ButtonType)=>{
    const onClick=()=>{
props.callBack()
    }
    return(
        <div>
            <button onClick={onClick}
            disabled={props.disabled}
            >{props.name}</button>
        </div>
    )
}