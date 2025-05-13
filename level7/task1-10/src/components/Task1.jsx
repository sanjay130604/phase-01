import React from 'react';
import useToggle from '../hooks/useToggle';

function ToggleComponent() {
  const [isVisible, toggleVisibility] = useToggle();

  return (
    <div>
      <button onClick={toggleVisibility}>Toggle Content</button>
      {isVisible && <p>This content is now visible!</p>}
    </div>
  );
}

export default ToggleComponent;
