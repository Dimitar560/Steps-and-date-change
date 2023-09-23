import React, { useState, useEffect } from "react";
import Button from "../Button/Button";

import style from './DateCounter.module.css';

export default function DateCounter() {

    const [stepMultiply, setStepMultiply] = useState(1);
    const [date, setDate] = useState(0);
    const [showBtn, setShowBtn] = useState(false);    
    const todayDate = new Date();
    // console.log(todayDate.setDate(todayDate.getDate() - 1));

    // version 1
    // function plusMultiplyHandler() {
    //     setStepMultiply(prev => prev + 1);
    // }

    // function minusMultiplyHandler() {
    //     setStepMultiply(prev => prev - 1);
    // }

    function rangeHndler(e: React.ChangeEvent<HTMLInputElement>) {
        
        const numValue = +e.target.value;

        setStepMultiply(numValue);
    }

    function inputHandler(e: React.ChangeEvent<HTMLInputElement>) {
        
        const numValue = +e.target.value;

        setDate(numValue);

    }

    function resetHandler() {
        setStepMultiply(1);
        setDate(0);
    }

    function plusDays() {
        setDate(prev => prev + stepMultiply);
    }

    function minusDays() {
        setDate(prev => prev - stepMultiply)
    }

    function dateCounterhandler() {
        let newDate;

        if (date > 0) {
            newDate = todayDate.setDate(todayDate.getDate() + date)
            return `${date} from today is ${new Date(newDate).toDateString()}`
        } else if (date < 0) {
            newDate = todayDate.setDate(todayDate.getDate() - (date * -1))
            return `${(date * -1)} days ago was ${new Date(newDate).toDateString()}`
        } else if (date === 0) {
            return `Today's date is ${todayDate.toDateString()}`
        }
    }

    useEffect(()=>{

        if (stepMultiply > 1 || date > 0 || date < 0) {
            setShowBtn(true);
        } else {
            setShowBtn(false);
        }

    },[stepMultiply,date]);

    // console.log(todayDate);

    return (
        <section className={style.wrap} >
            <div style={{display: 'flex', flexFlow: 'row wrap', gap: '15px' ,minWidth: '200px'}}>
                {/* <Button buttonName="-" onClick={minusMultiplyHandler} disable={stepMultiply === 1} />  V1 */}
                    <strong>Step: {stepMultiply}</strong>
                    <input type="range" min="1" max="10" value={stepMultiply} onChange={rangeHndler}/>
                {/* <Button buttonName="+" onClick={plusMultiplyHandler} />  V1 */}
            </div>
            <div style={{display: 'flex', flexFlow: 'row wrap', gap: '15px' ,minWidth: '300px'}}>
                <Button buttonName="-" onClick={minusDays} />
                    <input type="number" value={date} onChange={inputHandler}/>
                <Button buttonName="+" onClick={plusDays} />
            </div>
            <div style={{display: 'flex', flexFlow: 'row wrap', gap: '15px' ,minWidth: '250px',padding: '25px 0'}}>
                {dateCounterhandler()}
            </div>
            {showBtn && <Button buttonName="Reset" onClick={resetHandler} />}
        </section>
    );

}