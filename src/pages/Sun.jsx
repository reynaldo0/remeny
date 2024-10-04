import React from "react";

const Sun = () => {
  return (
    <div className="bg-green-100 rounded-3xl px-36 mx-32 py-16">
      <div className="text-center">
        <div className="">
          <span className="text-green-600 font-semibold tracking-[2px]">
            SOLAR CALCULATOR
          </span>
          <h2 className="text-4xl font-bold pb-4">
            Explore how SUN Energy can reduce your electricity tariff
          </h2>
          <p className="mb-14">
            Solar Calculator, our feature to estimate your solar energy needs
            Building type:
          </p>
        </div>
      </div>
      <div className="mb-10">
        <h4 className="text-center text-2xl">Your property is used for:</h4>

        <div className="flex gap-12 py-10">
          <div className="flex justify-between items-center bg-white opacity-85 p-10 rounded-3xl hover:shadow-2xl">
            <div className="flex items-center">
              <div className="mr-3">
                <h4 className="text-3xl pr-5 text-green-600 font-bold pb-5">
                  Residential
                </h4>
                <span>
                  SUN Terra is a tech-based solar energy developer specializing
                  in residential, small medium enterprises &amp; business, and
                  retail sectors.
                </span>
              </div>
              <figure className="">
                <img
                  src="https://sunenergy.id/cfind/source/images/icon-business-2.png"
                  alt="icon"
                  style={{ height: "150px", width: "650px" }}
                />
              </figure>
            </div>
          </div>
          <div className="flex justify-between items-center bg-white opacity-85 p-10 rounded-3xl hover:shadow-2xl">
            <div className="flex items-center">
              <div className="mr-10">
                <h4 className="text-3xl pr-5 text-green-600 font-bold pb-5">
                  Commercial &amp; Industrial
                </h4>
                <span>
                  SUN Energy is specialized and pioneer in providing tailor-made
                  solar energy solutions for commercial &amp; industrial sectors
                  with no upfront cost.
                </span>
              </div>
              <figure className="">
                <img
                  src="https://sunenergy.id/cfind/source/images/icon-residence-2.png"
                  alt="icon"
                  style={{ height: "150px", width: "650px" }}
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sun;
