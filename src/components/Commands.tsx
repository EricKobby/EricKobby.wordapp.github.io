import { useContext, useEffect, useState } from "react";
import { DataContext } from "../context";
import { Button } from "./Button"

interface Prop{
    onNextClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const Commands:React.FC<Prop> = ({ onNextClick }) =>{

    const [disabled, setState] =  useState(false);

    const context = useContext(DataContext);

    useEffect(()=>{
        
        setState(context.currentIndex >= context.questions.length -1)

    }, [context])

    return(
        <div className="w-100 d-flex justify-content-end">
            <Button disabled={disabled} className="btn btn-outline-primary" text="Next" onClick={onNextClick} />
        </div>
    )

}

export default Commands;