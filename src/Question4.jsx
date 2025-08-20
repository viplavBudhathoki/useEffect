// “Create a React component that fetches a random joke from an API every 5 seconds and displays it on the screen. 
// Include a button to start and stop the automatic fetching.”

import { useState, useEffect } from "react";

function Joke(){

    const [joke, setJoke] = useState("Joke Loading..........");

    const [running, setRunning] = useState(true);

    useEffect(()=>{
        if(!running) return;

        const fetchJoke = async ()=>{
            try{
                const response = await fetch("https://api.chucknorris.io/jokes/random");
                const data = await response.json();
                setJoke(data.value)
            } catch (error){
                setJoke("Failed to fetch Joke.")
            }
        }

        fetchJoke();

        const interval = setInterval(fetchJoke, 5000);

        return()=> clearInterval(interval)
    }, [running]
);


    return(
        <>
        <h2>Question 4</h2>
        <p>{joke}</p>
        <button onClick={()=>{
            setRunning(!running)
        }}>
            {running ? "Pause" : "Resume"}
        </button>
        </>
    );
}

export default Joke