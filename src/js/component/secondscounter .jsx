import React, { useState, useEffect } from 'react';


function SecondsCounter({ seconds }) {
  const [counter, setCounter] = useState(seconds);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(prevCounter => prevCounter + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []); 

  return (
    <div >
      <h1 class="display-1">Counter</h1>
      <h1 class="display-5">{counter}</h1>
    </div>
  );
}


export default SecondsCounter ;