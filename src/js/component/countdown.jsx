import React, { useState, useEffect } from 'react';

function Countdown({ initialTime }) {
  const [countdownValue, setCountdownValue] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(true);
  const [inputValue, setInputValue] = useState(initialTime);

  useEffect(() => {
    if (isRunning) {
      const intervalId = setInterval(() => {
        setCountdownValue((prevValue) => {
          if (prevValue > 0) {
            return prevValue - 1;
          } else {
            return 0;
          }
        });
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, [isRunning]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSetTime = () => {
    setCountdownValue(Number(inputValue));
    setIsRunning(true);
  };

  return (
    <div>
      <h1 className="display-1">Countdown</h1>
      <h1 className="display-5">{countdownValue}</h1>
      <div>
        <input
          type="number"
          value={inputValue}
          onChange={handleInputChange}
          className="form-control mb-2"
          placeholder="Set time in seconds"
        />

        <button onClick={handleSetTime}class="btn btn-primary me-2">Set Time</button>
        <button onClick={() => setIsRunning(false)} className="btn btn-outline-danger me-2">Stop</button>
        <button onClick={() => setCountdownValue(initialTime)} className="btn btn-outline-warning me-2">Reset</button>
        <button onClick={() => setIsRunning(true)} className="btn btn-outline-success">Resume</button>
      </div>
    </div>
  );
}

export default Countdown;
