// “Create a digital clock in React that updates every second and can be paused/resumed by the user.”

import { useState, useEffect } from "react";

function Clock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString()); 
  const [running, setRunning] = useState(true);

  useEffect(() => {
    if (!running) return; 

    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer);
  }, [running]); 

  return (
    <>
      <h2>Question 2</h2>
      <p>{time}</p>
      <button onClick={() => setRunning(!running)}>
        {running ? "Pause" : "Resume"}
      </button>
    </>
  );
}

export default Clock;

