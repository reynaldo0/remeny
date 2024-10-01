import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

// Define the content for each grid type
const gridOptions = {
  onGrid: {
    title: "On Grid",
    description: "Maximize the power produced by the sun during the daytime and utilize electricity provided by the national grid at night.",
    image: "https://sunenergy.id/cfind/source/images/homepage/ongrid-min.gif", // Replace with your image URL
  },
  offGrid: {
    title: "Off Grid",
    description: "Utilize solar energy independently from the grid, perfect for remote areas.",
    image: "https://example.com/off-grid-image.jpg", // Replace with your image URL
  },
  hybrid: {
    title: "Hybrid",
    description: "Combine the benefits of both grid-tied and off-grid systems for maximum flexibility.",
    image: "https://example.com/hybrid-image.jpg", // Replace with your image URL
  },
};

const Solar = () => {
  const [activeOption, setActiveOption] = useState("onGrid");

  const handleOptionChange = (option) => {
    setActiveOption(option);
  };

  return (
    <div className="bg-white flex flex-col items-center justify-center min-h-screen">
      <div className="relative w-full -z-50">
        {/* Display the image corresponding to the active option */}
        <img
          src={gridOptions[activeOption].image}
          alt={gridOptions[activeOption].title}
          className="w-full h-64 object-cover mb-6"
        />
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start w-full px-8 md:px-20 mt-10">
        <div className="text-left mb-8 md:mb-0">
          <h2 className="text-green-600 text-xs md:text-sm font-semibold">
            OUR SOLUTION
          </h2>
          <h1 className="text-3xl md:text-4xl font-bold mt-2">
            Smart Solar System
          </h1>
        </div>

        <div className="text-left md:ml-20">
          <div className="flex flex-row md:flex-row items-center">
            {/* Render option buttons */}
            {Object.keys(gridOptions).map((option) => (
              <div key={option} className="flex items-center">
                <span
                  className={`font-semibold cursor-pointer ${
                    activeOption === option ? "text-green-600" : "text-gray-600"
                  }`}
                  onClick={() => handleOptionChange(option)}
                >
                  {gridOptions[option].title}
                </span>
                <div
                  className={`w-20 h-1 mx-2 md:mx-4 ${
                    activeOption === option ? "bg-green-600" : "bg-gray-300"
                  }`}
                ></div>
              </div>
            ))}
          </div>

          <div className="text-left mt-4">
            <h3 className="text-green-600 font-semibold">
              {gridOptions[activeOption].title}
            </h3>
            <p className="text-gray-600 mt-2 text-sm md:text-base">
              {gridOptions[activeOption].description}
            </p>
          </div>
        </div>
      </div>

      <div className="fixed bottom-5 right-5 md:bottom-10 md:right-10">
        <a href="#" className="text-green-600 text-3xl md:text-4xl">
          <i className="fab fa-whatsapp"></i>
        </a>
      </div>
    </div>
  );
};

export default Solar;
