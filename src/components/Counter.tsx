import React from 'react';
import '../App.css';
import {Button} from '@material-ui/core';

type counterProps = {
    value: number
    maxValue: number
    setValue: (value: number) => void
    incValue: () => void
    resetValue: () => void
}

export const Counter = (props: counterProps) => {

    const displayStyle = {
        color: props.value === props.maxValue && (props.value && props.maxValue) !== 0 ? 'red' : '#75d4f5'
    }

    const buttonStyle = {
        margin: '20px',
    }

    return (
        <div className="counter">
            <div className={'display'} style={displayStyle}>
                {props.value}
            </div>
            <div className={'buttons'}>
                <Button variant="contained" color="primary" style={buttonStyle} onClick={props.incValue}>INC</Button>
                <Button variant="contained" color="primary" style={buttonStyle} onClick={props.resetValue}>RESET</Button>
            </div>
        </div>
    );
}
