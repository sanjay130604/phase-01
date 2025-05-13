import React,{ useState } from "react";

function Task10() {
  const [Data, setData] = useState("");

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log("it your data is:",Data);
    
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <label>NAME</label>
        <input
          type="text"
          value={Data}
          onChange={(e) => setData(e.target.value)}/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Task10;
