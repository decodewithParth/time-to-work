import React, { useRef, useState } from "react";
import { VscDebugStart } from "react-icons/vsc";
import { FaSquare } from "react-icons/fa6";
import { LuTimerReset } from "react-icons/lu";
import Input from "./Input";

function StopWatch() {
  const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });  // to set the time of stop watch
  const [capturedTime, setCapturedTime] = useState(null);  // to store the captured value of time of stop watch
  const [isRunning, setIsRunning] = useState(false);  // to check that is stop watch is running or not
  const [activeButton, setActiveButton] = useState("");  // to store the active state of stop watch button
  const [showInput, setShowInput] = useState(false);  // to show the input components or not
  const [capturedInputs, setCapturedInputs] = useState([]);  // to store the input component value and time 
  const timeRef = useRef(null);

  const handleStart = () => {
    setActiveButton("start");
    if (!isRunning) {
      setIsRunning(true);
      timeRef.current = setInterval(() => {
        setTime((prevTime) => {
          let { hours, minutes, seconds } = prevTime;
          seconds++;
          if (seconds === 60) {
            seconds = 0;
            minutes++;
          }

          if (minutes === 60) {
            minutes = 0;
            hours++;
          }

          return { hours, minutes, seconds };
        });
      }, 1000);
      setShowInput(false);
    }
  };

  const handleStop = () => {
    setActiveButton("stop");
    if (isRunning) {
      clearInterval(timeRef.current);
      setCapturedTime(time);
      setIsRunning(false);
      setShowInput(true);
    }
  };

  const handleReset = () => {
    setActiveButton("reset");
    clearInterval(timeRef.current);
    setIsRunning(false);
    setTime({ hours: 0, minutes: 0, seconds: 0 });
    setShowInput(false);
    // setCapturedInputs([]);
  };

  const handleAddClick = (inputValue) => {
    setShowInput(false);
    if (inputValue) {
      setCapturedInputs((prev) => [
        ...prev,
        { text: inputValue, time: { ...time } },
      ]);
    }
    setTime({ hours: 0, minutes: 0, seconds: 0 });
    setActiveButton("");
  };

  const formatTime = (timeValue) =>
    timeValue < 10 ? `0${timeValue}` : timeValue;

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-3xl font-semibold mb-4">Stop Watch</h2>
      <p className="text-8xl font-bold mb-8">
        {formatTime(time.hours)} : {formatTime(time.minutes)} :{" "}
        {formatTime(time.seconds)}
      </p>
      <div className="flex space-x-4">
        <button
          onClick={handleStart}
          className={`${
            activeButton === "start"
              ? "bg-white text-green-500 border-green-500"
              : "bg-green-500 text-white border-transparent"
          } font-semibold py-2 px-6 text-xl border-4 focus:outline-none rounded-lg transition-all duration-200 flex items-center justify-center w-40 h-14`}
        >
          <VscDebugStart className="mr-2" />
          <span>Start</span>
        </button>
        <button
          onClick={handleStop}
          className={`${
            activeButton === "stop"
              ? "bg-white text-red-500 border-red-500"
              : "bg-red-500 text-white border-transparent"
          } font-semibold py-2 px-6 text-xl border-4 focus:outline-none rounded-lg transition-all duration-200 flex items-center justify-center w-40 h-14`}
        >
          <FaSquare className="mr-2" />
          <span>Stop</span>
        </button>
        <button
          onClick={handleReset}
          className={`${
            activeButton === "reset"
              ? "bg-white text-blue-500 border-blue-500"
              : "bg-blue-500 text-white border-transparent"
          } font-semibold py-2 px-6 text-xl border-4 focus:outline-none rounded-lg transition-all duration-200 flex items-center justify-center w-40 h-14`}
        >
          <LuTimerReset className="mr-2" />
          <span>Reset</span>
        </button>
      </div>
      <div className="py-4 w-full h-auto">
        {showInput && (
          <Input capturedTime={capturedTime} onAddClick={handleAddClick} />
        )}
      </div>
      {capturedInputs.length > 0 && (
        <div className="mt-8 w-full max-w-md">
          <h3 className="text-2xl font-semibold mb-4">Captured Inputs:</h3>
          <ul className="space-y-2">
            {capturedInputs.map((item, index) => (
              <li key={index} className="bg-gray-100 p-3 rounded-md">
                <p className="font-semibold">{item.text}</p>
                <p className="text-sm text-gray-600">
                  Time: {formatTime(item.time.hours)}:
                  {formatTime(item.time.minutes)}:
                  {formatTime(item.time.seconds)}
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default StopWatch;
