// “Create a React component called WindowTracker that displays the current width and height of the browser window. 
// It should update in real-time whenever the user resizes the window. Additionally, add a button to start and stop tracking. 
// Make sure to properly clean up any event listeners to avoid memory leaks.”

import { useState, useEffect } from "react";

function WindowTracker(){

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    const [tracking, setTracking] = useState(true);

    useEffect(()=>{

        const handleResize = () =>{
            setHeight(window.innerHeight);
            setWidth(window.innerWidth);
        }

        window.addEventListener("resize", handleResize);

        return()=> window.removeEventListener("resize", handleResize)
    }, [tracking]);

    return(
        <>
        <h2>Question 5</h2>
        <p>Width: {width}</p>
        <p>Height: {height}</p>

        <button onClick={()=>setTracking(!tracking)}>
            {tracking ? "Stop Tracking" : "Start Tracking"}
        </button>
        </>
    );
}

export default WindowTracker