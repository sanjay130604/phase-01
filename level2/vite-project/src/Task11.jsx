import React from "react";

let Names= ["vijay","aijth","suriya","kamal"];

function Task11(){  
    return(
        <div>
        <ul>{Names.map((Name,index)=>(
            <li key={index}>{Name}</li>
        ))}
        </ul>
    </div>
    )
}

export default Task11;