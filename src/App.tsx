import React, {useState} from 'react';
import './App.css';
import {Counter} from "./counter/counterBody";
import {CounterSettings} from "./counter/counterSettings/counterSettings";


function App() {
    let [startValue, setStartValue] = useState(0)
    let [maxValue, setMaxValue] = useState(0)
    let [num, setNum] = useState(0)
    let [disable, setDis] = useState(true)


    return (
        <div className={'app'}>
            <Counter
                num={num}
                setNum={setNum}
                maxValue={maxValue}
                minValue={startValue}
                disabled={disable}
            />


            <CounterSettings
                startValue={startValue}
                setStartValue={setStartValue}
                maxValue={maxValue}
                setMaxValue={setMaxValue}
                setCount={setNum}


            />

        </div>
    );
}

export default App;