import React from "react";

function Task12({isLogin = false}){
    return(
        <div>
            <h2>{isLogin ? "welcome back!" : "pls log in"}</h2>
        </div>
    )
}

export default Task12;

// import React from "react";

// function Task12({person}){
//     return(
//         <div>
//             <h1>my name is {person.name} and my age is {person.age} my fav emoji is {person.emoji}</h1>
//         </div>
//     )
// }

// export default Task12;

// import React from "react";

// export default function Fruits(){
//     const Fruits = ["apple","mango","banana"];
//     return(
//         <ul>
//             {Fruits.map((fruit) => (
//                 <li key={fruit}><h1>{fruit}</h1></li>
//             ))}
//         </ul>
//     )
// }