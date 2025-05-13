import React from "react";

function Task5() {
    let numberOne = 10;
    let numberTwo = 20;

    function total() {
        return numberOne + numberTwo;
    }

    return (
        <div className="container">
            <h3>
                First number is: {numberOne}, Second number is: {numberTwo}, Total: {total()}
            </h3>
        </div>
    );
}

export default Task5;
