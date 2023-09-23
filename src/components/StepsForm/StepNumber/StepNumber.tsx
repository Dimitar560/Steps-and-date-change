
import style from "./StepNumber.module.css";

type stepNumProps = {
    stepNumber: number
    numOfSteps: number
}

export default function StepsNumber({stepNumber, numOfSteps} : stepNumProps) {
    
    const arrLength: number[] = [];

    for (let i = 0; i < numOfSteps; i++) {
        const el = i;

        arrLength.push(el + 1);
    }

    return (
    <>
        <div className={style.numContainer}>
            
            {arrLength.map(x => { 
                return (
                    <div className={`${style.stepNum} ${stepNumber === x ? style.active : ''}`} key={x}>{x}</div>
                )
            })}

        </div>
    </>
    );

}