import React, { useRef, useState } from "react";
import { VscDebugStart } from "react-icons/vsc";
import { FaSquare } from "react-icons/fa6";
import { LuTimerReset } from "react-icons/lu";
import Input from "./Input";

function StopWatch() {
  const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const [isRunning, setIsRunning] = useState(false);
  const [activeButton, setActiveButton] = useState(""); // this state is used to track the active button for css animaiton
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
    }
  };

  const handleStop = () => {
    setActiveButton("stop");
    if (isRunning) {
      clearInterval(timeRef.current);
      setIsRunning(false);
    }
  };

  const handleReset = () => {
    setActiveButton("reset");
    clearInterval(timeRef.current);
    setIsRunning(false);
    setTime({ hours: 0, minutes: 0, seconds: 0 });
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
        {activeButton=="stop" ? <Input/> : ""}
      </div>
    </div>
  );
}

export default StopWatch;
