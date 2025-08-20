// useEffect = (setup, dependencies?)

import {useState, useEffect} from 'react';

function Counter(){

    const [count, setCount] = useState(0);

    useEffect(()=>{
        console.log(`The count is now: ${count}`);
    }, []);


    return(
        <>
        <h2>Question 1</h2>
        <button onClick={()=>setCount(count + 1)}>+1</button>
        
        </>
    );
}

export default Counter