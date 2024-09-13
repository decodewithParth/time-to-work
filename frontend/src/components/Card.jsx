import React from "react";
import { Pen, Trash } from "lucide-react";
import { FaArrowUp } from "react-icons/fa";

export default function Card({
  content = "Sample content",
  time = "23:42:30",
  date = "2023-05-20",
}) {
  const [year, month, day] = date.split("-");
  const dateObj = new Date(date);
  const monthName = dateObj.toLocaleString("default", { month: "short" });

  return (
    <div className="card-container w-64 h-64 flex overflow-hidden group border rounded-lg shadow-md">
      <div className="card-content flex-grow p-4 relative">
        <div className="text-lg font-semibold mb-2">{content}</div>
        <div className="absolute bottom-4 left-4 right-4 flex justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="btn-outline" aria-label="Edit">
            <Pen className="h-4 w-4" />
          </button>
          <button className="btn-outline" aria-label="Delete">
            <Trash className="h-4 w-4" />
          </button>
        </div>
      </div>
      <div className="card-date w-16 bg-gray-100 flex flex-col items-center justify-center text-center p-2 text-sm">
        {/* <time
          dateTime={`${date}T${time}`}
          className="flex flex-col items-center"
        >
          <span className="text-2xl font-bold">{day}</span>
          <span className="uppercase text-xs font-semibold text-gray-500">
            {monthName}
          </span>
          <span className="text-xs text-gray-500 mt-1">{year}</span>
          <span className="mt-2 font-medium">{time}</span>
        </time> */}
        <div className="flex flex-row items-center justify-center text-center rotate-90 gap-2">
          <span className="text-xl font-bold tracking-[0.3rem] text-mainFont">{day}</span>
          <span className="uppercase text-xl font-semibold tracking-[0.3rem] text-middleFont">{monthName}</span>
          <span className="text-xl font-medium tracking-[0.3rem] text-endFont">{year}</span>
        </div>
        <div className="flex flex-row items-center justify-center text-center rotate-90 gap-2">
          <span className="text-xl font-bold tracking-[0.3rem] text-mainFont">{day}</span>
          <span className="uppercase text-xl font-semibold tracking-[0.3rem] text-middleFont">{monthName}</span>
          <span className="text-xl font-medium tracking-[0.3rem] text-endFont">{year}</span>
        </div>
      </div>
    </div>
  );
}

// import React from 'react'

// function Card() {
//   return (
//     <div className='w-64 h-64 flex overflow-hidden group'>
//     </div>
//   )
// }

// export default Card

// import React from 'react';

// const Card = ({ content, time, date, label }) => {
//   return (
//     <div className="flex flex-row rounded-lg shadow-lg p-4 bg-white max-w-xs">
//       {/* Main content on the left */}
//       <div className="flex-1 pr-4">
//         <p className="text-black">Parth Chauhan</p>
//       </div>

//       {/* Time and details on the right */}
//       <div className="flex flex-col items-end justify-between">
//         <p className="text-2xl font-bold -rotate-90 transform scale-x-[1] scale-y-[1]">12:02:52</p>
//         <p className="text-sm text-gray-500 -rotate-90 transform scale-x-[1]">27 Dec 2002</p>
//         <p className="text-sm text-gray-500 -rotate-90 transform scale-x-[1]">WorkTime</p>
//       </div>
//     </div>
//   );
// };

// export default Card;
