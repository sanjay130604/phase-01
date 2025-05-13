import React, { useState } from "react";

function Task8() {
  const [show, setshow] = useState(false);

  return (
    <div className="task8">
      <button onClick={() =>setshow(!show)}> 
        { show ? "hide":"show"}content
        </button>
        {show && <div>did you see me...??</div>}
    </div>
  );
}

export default Task8;
