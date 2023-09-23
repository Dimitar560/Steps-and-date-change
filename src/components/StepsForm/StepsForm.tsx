import { useState } from "react";
import Button from "../Button/Button";

import style from "./StepsForm.module.css";
import StepsNumber from "./StepNumber/StepNumber";
import StepOne from "./Step1/StepOne";
import StepTwo from "./Step2/StepTwo";
import StepThree from "./Step3/StepThree";

export default function StepsForm() {
    
    const [toggleForm,setToggleForm] = useState(true);
    const [stepNumber,setStepNumber] = useState(1);

    const toggleHandler = () => setToggleForm(prev => !prev);

    function formSwitch(formStep:number) {
        
        if (formStep === 1) {
            return <StepOne/>
        } else if(formStep === 2) {
            return <StepTwo/>
        } else if (formStep === 3) {
            return <StepThree/>
        } else {
            return <p>No page found!!!</p>
        }
                               
    }
                    
                        

    return (
    <>
        <div style={{margin: '0 670px'}}>
            <Button buttonName={"X"} onClick={toggleHandler}/>
        </div>

        {toggleForm && <main className={style.formArea}>
            <StepsNumber numOfSteps={3} stepNumber={stepNumber}/>
            <section className={style.forms}>
                {formSwitch(stepNumber)}
            </section>
            <section className={style.btnArea}>
                <Button buttonName={'Back'} onClick={() => setStepNumber(prev => prev - 1)} disable={stepNumber === 1}/>
                <Button buttonName={'Next'} onClick={() => setStepNumber(prev => prev + 1)} disable={stepNumber === 3}/>
            </section>
        </main>}
    </>
    );

}