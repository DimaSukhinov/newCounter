import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from './components/Counter';
import {Settings} from './components/Settings';

function App() {

    const [value, setValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(0)

    const incValue = () => {
        if (value < maxValue) {
            setValue(value + 1)
        }
    }

    const resetValue = () => setValue(0)

    const setNewValues = (num: number) => {
        setValue(num)
        setMaxValue(num)
    }

    useEffect(() => {
        let stringCounterValue = localStorage.getItem('counterValue')
        if (stringCounterValue) {
            let newValue = JSON.parse(stringCounterValue)
            setValue(newValue)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('counterValue', JSON.stringify(value))
    }, [value])

    return (
        <div className="app">
            <Settings
                setValue={setValue}
                maxValue={maxValue}
                setMaxValue={setMaxValue}
                setNewValues={setNewValues}
            />
            <Counter
                value={value}
                maxValue={maxValue}
                setValue={setValue}
                incValue={incValue}
                resetValue={resetValue}
            />
        </div>
    );
}

export default App;
