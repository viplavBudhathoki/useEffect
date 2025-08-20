
import { useState, useEffect } from "react";

function Clocker(){

    const [time, setTime] = useState(new Date().toLocaleTimeString());

    const [running, setRunning] = useState(true);

    useEffect (()=>{

        if (!running) return;

        const timer = setInterval(()=>{
            setTime(new Date().toLocaleTimeString())
        }, 1000) 

        return ()=> clearInterval(timer);
    }, [running]);

    return(
        <>
        <h2>Question 2</h2>
        <p>{time}</p>
        <button onClick={()=>{
            setRunning(!running)}}>
                {running ? "Resume" : "Pause"}
            </button>

        </>
    );
}

export default Clocker