import React, { useState, useEffect } from "react";

export const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleToggle = () => {
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("navMenu");
    hamburger.classList.toggle("hamburger-active");
    navMenu.classList.toggle("hidden");
  };

  return (
    <>
      <header
        className={`fixed left-0 top-0 z-[99999] w-full flex items-center transition-all duration-300 ${
          scrolling ? "backdrop-blur-md bg-white/60" : "bg-white"
        }`}
      >
        <div className="container">
          <div className="relative flex items-center justify-between">
            <div className="px-4">
              <a
                href="#"
                className="block py-6 font-poppins text-2xl font-bold tracking-wide text-primary lg:text-3xl"
              >
                Remeny
              </a>
            </div>
            <div className="flex items-center px-4">
              <button
                onClick={handleToggle}
                id="hamburger"
                name="hamburger"
                className="absolute right-4 block lg:hidden"
                aria-label="hamburger menu button"
              >
                <span className="hamburger-line origin-top-left transition duration-300 ease-in-out"></span>
                <span className="hamburger-line transition duration-300 ease-in-out"></span>
                <span className="hamburger-line origin-bottom-left transition duration-300 ease-in-out"></span>
              </button>

              <nav
                id="navMenu"
                className="absolute right-4 top-full hidden w-full max-w-[250px] rounded-lg bg-dark py-5 shadow-sm shadow-lightDark-100 lg:static lg:block lg:max-w-full lg:rounded-none lg:bg-transparent lg:shadow-none"
              >
                <ul className="block lg:flex">
                  <li className="group">
                    <a
                      href="#home"
                      className="mx-5 flex py-2 font-poppins text-base text-white md:text-black group-hover:text-primary"
                    >
                      Solar Panel
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#about"
                      className="mx-5 flex py-2 font-poppins text-base text-white md:text-black group-hover:text-primary"
                    >
                      Elevator
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#skills"
                      className="mx-5 flex py-2 font-poppins text-base text-white md:text-black group-hover:text-primary"
                    >
                      IoT
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
