import React from 'react';

const Map = () => {
  return (
    <section className="relative py-24 bg-green-50" id="about-us">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <h1 className="text-green-800 font-bold text-lg">ABOUT SUN ENERGY</h1>
          <h2 className="text-gray-800 font-bold text-4xl mt-4">Indonesia's Leading Integrated Solar Developer Company</h2>
          <p className="text-gray-600 mt-4">
            SUN Energy is experienced in delivering End to End Solar Solutions including Concept & Site Analysis, Design & Permitting, Installation, Commissioning, Maintenance, and Innovative Financing.
          </p>
          <a href="/profile" className="inline-block bg-green-500 text-white font-medium mt-6 py-3 px-6 rounded-lg hover:bg-green-600 transition duration-300">
            Learn More
          </a>
        </div>
        <figure className="lg:w-1/2 flex justify-center">
          <div className="relative">
            <img
              src="https://sunenergy.id/images/content/globe.png"
              alt="Globe"
              className="w-full"
            />
            <span className="absolute top-0 left-0 animate-bounce">
              <img src="https://sunenergy.id/images/content/ab-anim-1.png" alt="Solar panel 1" />
            </span>
            <span className="absolute bottom-0 right-0 animate-pulse">
              <img src="https://sunenergy.id/images/content/ab-anim-2.png" alt="Solar panel 2" />
            </span>
            {/* Tambahkan elemen animasi lainnya dengan absolute positioning jika diperlukan */}
          </div>
        </figure>
      </div>

      {/* Section berikutnya */}
      <div className="container mx-auto mt-16 bg-white p-8 rounded-lg shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <figure>
              <img
                src="https://sunenergy.id/cfind/source/images/icon-contracted-projects.svg"
                alt="Contracted Projects Icon"
                className="mx-auto mb-4"
              />
            </figure>
            <h4 className="text-2xl font-bold text-green-600">350 MWp</h4>
            <span className="text-gray-500">Contracted Projects</span>
          </div>

          <div className="text-center">
            <figure>
              <img
                src="https://sunenergy.id/cfind/source/images/icon-emission.png"
                alt="Emission Icon"
                className="mx-auto mb-4"
              />
            </figure>
            <h4 className="text-2xl font-bold text-green-600">929 Kilo Tons</h4>
            <span className="text-gray-500">Carbon Emission Reduction</span>
          </div>

          <div className="text-center">
            <figure>
              <img
                src="https://sunenergy.id/cfind/source/images/icon-clean-energy.png"
                alt="Clean Energy Icon"
                className="mx-auto mb-4"
              />
            </figure>
            <h4 className="text-2xl font-bold text-green-600">815 GWh</h4>
            <span className="text-gray-500">Clean Energy Production</span>
          </div>

          <div className="text-center">
            <figure>
              <img
                src="https://sunenergy.id/cfind/source/images/icon-tree.png"
                alt="Tree Icon"
                className="mx-auto mb-4"
              />
            </figure>
            <h4 className="text-2xl font-bold text-green-600">13 Billions</h4>
            <span className="text-gray-500">Trees Planted per Year</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;
