import { useState } from "react";
import CancellableRequest from "./components/CancellableRequest";

function App() {
  const [showComponent, setShowComponent] = useState(true);

  return (
    <div>
      <h1>Axios Request Cancellation Example</h1>
      <button onClick={() => setShowComponent(!showComponent)}>
        {showComponent ? "Unmount Component" : "Mount Component"}
      </button>

      {showComponent && <CancellableRequest />}
    </div>
  );
}

export default App;
