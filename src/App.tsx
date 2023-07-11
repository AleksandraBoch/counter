import React from 'react';
import './App.css';
import {Counter} from "./counter/counterBody";
import {CounterSettings} from "./counter/counterSettings/counterSettings";


function App() {
    return (
        <div className={'app'}>
            <Counter/>
            <CounterSettings/>
        </div>
    );
}

export default App;