import React, { useState } from "react";

function Task7(){
    const [counter,setCounter] = useState(0);

    const handleClick1 = () => {
        setCounter(counter + 1);
    }

    const handleClick2 = () => {
        setCounter(counter -1);
    }
    return(
        <div className="container-Task7">
            <div className="text-number">{counter}</div>
            <div>
                <button onClick={handleClick1} className="btn-task7">Increment</button>
                <button onClick={handleClick2}  className="btn-task7">Decrement</button>
            </div>
        </div>
    )
}

export default Task7;