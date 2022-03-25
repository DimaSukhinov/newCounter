import React, {ChangeEvent, useEffect, useState} from 'react';
import '../App.css';
import {Button} from '@material-ui/core';

type settingsProps = {
    maxValue: number
    setValue: (num: number) => void
    setMaxValue: (value: number) => void
    setNewValues: (num: number) => void
}

export const Settings = (props: settingsProps) => {

    const [max, setMax] = useState<number>(0)
    const [start, setStart] = useState<number>(0)

    useEffect(() => {
        let stringCounterMaxValue = localStorage.getItem('maxValue')
        let stringCounterStartValue = localStorage.getItem('startValue')
        if (stringCounterMaxValue && stringCounterStartValue) {
            let newMaxValue = JSON.parse(stringCounterMaxValue)
            let newStartValue = JSON.parse(stringCounterStartValue)
            setMax(newMaxValue)
            setStart(newStartValue)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('maxValue', JSON.stringify(max))
        localStorage.setItem('startValue', JSON.stringify(start))
    }, [max, start])

    const onMaxValueChange = (e: ChangeEvent<HTMLInputElement>) => setMax(+e.currentTarget.value)
    const onStartValueChange = (e: ChangeEvent<HTMLInputElement>) => setStart(+e.currentTarget.value)

    const onSet = () => {
        if (max > start) {
            props.setValue(start)
            props.setMaxValue(max)
        }
    }

    const textFieldStyle = {
        padding: '5px',
        width: '120px',
        border: 'solid 2px #75d4f5',
        borderRadius: '6px',
        borderColor: start >= max && (start && max) !== 0 ? 'red' : '#75d4f5'
    }

    const buttonStyle = {margin: '20px'}

    return (
        <div className="settings">
            <div className={'setValues'}>
                <div className={'value'}>
                    <span>max value:</span>
                    <input type="number" value={max} onChange={onMaxValueChange} style={textFieldStyle}/>
                </div>
                <div className={'value'}>
                    <span>start value:</span>
                    <input type="number" value={start} onChange={onStartValueChange} style={textFieldStyle}/>
                </div>
            </div>
            <div className={'set'}>
                <Button variant="contained" color="primary" style={buttonStyle} onClick={onSet}>SET</Button>
            </div>
        </div>
    );
}