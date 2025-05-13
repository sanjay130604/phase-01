import React from "react";

export default function Names() {
    let Collage = [{
        CollageName : "sns",
        dept : "it",
        passout : 2026,
        rollNo : 41
    },
    {
        CollageName : "cit",
        dept : "cse",
        passout : 2027,
        rollNo : 21 
    },
    {
        CollageName : "psg",
        dept : "Aids",
        passout : 2025,
        rollNo : 61 
    }
];
    return(
        <div>
            <ul>
            {Collage.map((Clg => (
                <li key={Clg.CollageName}>my clg name is {Clg.CollageName} and i now study {Clg.dept} deptment and passout in "{Clg.passout}" and register number is {Clg.rollNo}</li>
            )))}
            </ul>
        </div>
    )
}