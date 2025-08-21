// “Create a React component called MouseTracker that shows the current mouse position (x, y) on the screen.
// It should update in real-time as the user moves the mouse.
// Add a button to start and stop tracking.
// Make sure to clean up the event listener when tracking stops or the component unmounts.”

import {useState, useEffect} from 'react';

function MouseTracker(){

    const [position, setPosition] = useState({x:0, y:0});

    const [tracking, setTracking] = useState(true);

    useEffect(() => {
    if (!tracking) return;

    const handleMouseMove = (event) => {
        setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [tracking]);


    return(
        <>
        <h2>Question 6</h2>
        <p>x: {position.x} y: {position.y}</p>

        <button 
        style={{ padding: "10px 20px", fontSize: "16px" }}
        onClick={() => setTracking(!tracking)}
        >
        {tracking ? "Stop" : "Start"}
        </button>

        </>
    );
}

export default MouseTracker