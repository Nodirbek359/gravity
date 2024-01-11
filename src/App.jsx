import React, { useState } from "react";
import "./App.css";

const GravitatsiyaKuchi = () => {
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState(null);

  const gravitationalAccelerations = {
    mercury: { acceleration: 3.7, image: "/images/mercury.svg" },
    venus: { acceleration: 8.87, image: "/images/venus.svg" },
    earth: { acceleration: 9.81, image: "/images/earth.svg" },
    mars: { acceleration: 3.71, image: "/images/mars.svg" },
    jupiter: { acceleration: 24.79, image: "/images/yupiter.svg" },
    saturn: { acceleration: 10.44, image: "/images/saturn.svg" },
    uranus: { acceleration: 8.69, image: "/images/uranus.svg" },
    neptune: { acceleration: 11.15, image: "/images/neptune.svg" },
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    if (!isNaN(value)) {
      const result = Object.fromEntries(
        Object.entries(gravitationalAccelerations).map(
          ([planet, { acceleration, image }]) => [
            planet,
            {
              gravity: parseFloat(
                ((parseFloat(value) / 9.81) * acceleration).toFixed(2)
              ),
              image,
            },
          ]
        )
      );
      setResult(result);
    } else {
      setResult(null);
    }
  };

  return (
    <div>
      <label className="w-100%  h-100%">
        <h1 className="text-4xl   mb-3 p-1 text-black bg-slate-200 rounded-lg">
          Value
        </h1>
        <input
          type="text"
          className="px-4 bg-blue-200 text-xl"
          value={inputValue}
          autoFocus
          placeholder="Vazningizni kiriting"
          onChange={handleInputChange}
        />
      </label>
      <div className="box bg-slate-400 p-1  top-3 left-4">
        <h1>Rustamov</h1>
       
</div>
      {result && (
        <div >
          <h2 className="text-4xl py-1">Result:</h2>
          <div className="grid-container  p-3 backdrop-blur rounded-lg ">
            {Object.entries(result).map(([planet, { gravity, image }]) => (
              <div className="grid-item text-center disp " key={planet}>
                <img
                  src={image}
                  alt={planet}
                  className="items-center  flex bg-slate-600 rounded-2xl content-center"
                />
                <p className="pt-2 whitespace-pre-wrap ">
                  {planet}: {gravity}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default GravitatsiyaKuchi;
