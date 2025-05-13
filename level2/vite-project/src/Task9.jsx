import React,{ useState } from "react";

function Task9(){
    const [text,setText] = useState("")
    return(
        <div>
            <input type="text" value={text}
            onChange={(value) => setText(value.target.value)}>
            </input>
            <p>this your anser : {text}</p>
        </div>
    )
}

export default Task9;
// it can use value or e



