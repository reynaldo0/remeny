import  { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

// Define the content for each grid type
const gridOptions = {
  onGrid: {
    title: "On Grid",
    description:
      "Maximize the power produced by the sun during the daytime and",
    image: "https://sunenergy.id/cfind/source/images/homepage/ongrid-min.gif", // Example GIF URL
  },
  offGrid: {
    title: "Off Grid",
    description:
      "Utilize solar energy independently from the grid, perfect for remote areas.",
    image: "https://sunenergy.id/cfind/source/images/homepage/ofgrid-min.gif", // Example GIF URL
  },
  hybrid: {
    title: "Hybrid",
    description:
      "Combine the benefits of both grid-tied and off-grid systems for maximum flexibility.",
    image: "https://sunenergy.id/cfind/source/images/homepage/hybrids-min.gif", // Example GIF URL
  },
};

const Solar = () => {
  const [activeOption, setActiveOption] = useState("onGrid");

  const handleOptionChange = (option) => {
    setActiveOption(option);
  };

  return (
    <div className="bg-white flex flex-col items-center justify-center min-h-screen relative overflow-hidden">
      {/* Display the image corresponding to the active option */}
      <img
        src={gridOptions[activeOption].image}
        alt={gridOptions[activeOption].title}
        className="w-full h-[430px] object-contain relative top-0 left-0 z-50" // Place the GIF behind content
      />

      <div className="flex flex-col md:flex-row justify-between items-start w-full px-8 md:px-20 mt-10 relative z-10">
        <div className="text-left mb-8 md:mb-0">
          <h2 className="text-green-600 text-xs md:text-sm font-semibold">
            OUR SOLUTION
          </h2>
          <h1 className="text-3xl md:text-4xl font-bold mt-2">
            Smart Solar System
          </h1>
        </div>

        <div className="text-left md:ml-40 flex-grow">
          <div className="flex flex-row items-center mb-4 relative">
            {/* Render option buttons */}
            {Object.keys(gridOptions).map((option, index) => (
              <div key={option} className="flex items-center mr-10 md:mr-40 relative">
                {/* Dot marker for active option */}
                <div
                  className={`w-3 h-3 rounded-full mt-10 absolute ${
                    activeOption === option ? "bg-green-600" : "bg-gray-300"
                  }`}
                ></div>

                {/* Line connecting the dots */}
                {index < Object.keys(gridOptions).length - 1 && ( // Don't render line for the last item
                  <div
                    className={`absolute h-1 mt-5 w-[100px] md:w-[225px] ${
                      activeOption === option ? "bg-green-600" : "bg-gray-300"
                    }`}
                    style={{
                      
                      left: "10px", // Position the line to the right of the dot
                      top: "50%", // Center the line vertically
                      transform: "translateY(-50%)", // Adjust vertical alignment
                    }}
                  ></div>
                )}

                <span
                  className={`font-semibold cursor-pointer ${
                    activeOption === option ? "text-green-600" : "text-gray-600"
                  } mr-2`} // Margin left for text
                  onClick={() => handleOptionChange(option)}
                >
                  {gridOptions[option].title}
                </span>
              </div>
            ))}
          </div>

          {/* Full-width underline */}
          <div className="w-full h-1 flex items-center">
            {Object.keys(gridOptions).map((option) => (
              <div
                key={option}
                className={`flex-grow ${
                  activeOption === option ? "bg-green-600" : "bg-gray-300"
                }`}
              >
                {/* Active option dot to be colored if it matches */}
                {activeOption === option && (
                  <div
                    className={`absolute transform translate-y-[-50%] left-0`}
                  />
                )}
              </div>
            ))}
          </div>

          <div className="text-left mt-4 h-40 overflow-y-auto flex items-start">
            {/* Set a fixed height for consistent layout */}
            {/* Add image to the left (you can change this image URL) */}
            <img
              src={gridOptions[activeOption].image}
              alt={gridOptions[activeOption].title}
              className="w-16 h-16 mr-4 object-cover" // Set size and margin
            />
            <div>
              <h3 className="text-green-600 font-semibold">
                {gridOptions[activeOption].title}
              </h3>
              <p className="text-gray-600 mt-2 text-sm md:text-base">
                {gridOptions[activeOption].description}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-5 right-5 md:bottom-10 md:right-10 z-20">
        <a href="#" className="text-green-600 text-3xl md:text-4xl">
          <i className="fab fa-whatsapp"></i>
        </a>
      </div>
    </div>
  );
};

export default Solar;
