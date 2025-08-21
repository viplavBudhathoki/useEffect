// “Create a React component called ClickTimer that does the following:
// Displays a timer that counts seconds since the component mounted.
// Tracks the number of times a user clicks a button.
// Includes a button to pause/resume the timer.
// Includes a button to reset both timer and clicks.
// Make sure the timer stops updating when paused, and all intervals are cleaned up when the component unmounts.”

import { useState, useEffect } from "react";

function ClickTimer (){

    const [seconds, setSeconds] = useState(0);

    const [clicks, setclicks] = useState(0);

    const [tracking, setTracking] = useState(true);

    useEffect(()=>{
        if (!tracking) return;

        const interval = setInterval(()=>{
            setSeconds(previous => previous + 1); //increment by 1 second
        }, 1000)

        return()=> clearInterval(interval);
    }, [tracking]);

    const handleClick = () => setclicks(previous => previous + 1) //increment click

    const handleReset = () => {
        setclicks(0);
        setSeconds(0);
    }

    return(
        <>
        <h2>Question 7</h2>
        <p>Seconds: {seconds}</p>
        <p>Clicks: {clicks}</p>

        <button onClick={handleClick}>Click Here</button>

        <button onClick={()=>{
            setTracking(!tracking)
        }}>{tracking ? "Pause" : "Resume"}</button>

        <button onClick={handleReset}>Reset</button>
        
        </>
    );
}

export default ClickTimer