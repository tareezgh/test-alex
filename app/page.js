"use client";
import { useState } from "react";
import RotateDiv from "./components/RotateDiv";

export default function Home() {
  const [isClicked, setIsClicked] = useState(false);

  const toggleButton = () => {
    setIsClicked(!isClicked);
  };

  return (
    <main className="flex flex-col justify-center items-center my-4 gap-[100px]">
      <button
        className="flex center bg-blue-500 p-4 rounded"
        onClick={toggleButton}
      >
        Display Div
      </button>
      {/* When click on the button will display 4 button, you can rotate each one alone */}
      {isClicked && (
        <div className="flex flex-wrap justify-center mt-4 gap-2 ">
          {[1, 2, 3, 4].map((index) => (
            <RotateDiv key={index} />
          ))}
        </div>
      )}
    </main>
  );
}
