import React,{useState} from "react";

function BackgroundColor(){

    const[bgColor,setbgColor] = useState("skyblue")

    const bgstyle = {
        width: "50vw",
        height: "50vh",
        backgroundColor: bgColor,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "red",
        fontSize: "24px",

    }
    return(
        <div 
        style={bgstyle} id="bg"
        className="body"
        >
            <p>bacground color is {bgColor} </p>

            <button onClick={
                () =>{
                    setbgColor("RED")
                }}>
                    RED</button>

            <button onClick={
                () =>{
                    setbgColor("lightblue")
                    }}>
                    BLUE</button>

            <button onClick={
                () =>setbgColor("lightgreen")}>
                    GREEN</button>

        </div>
    )
}
export default BackgroundColor;