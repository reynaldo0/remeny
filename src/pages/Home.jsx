import { useEffect, useRef, useState } from "react";

const Home = () => {
  const [transition, setTransition] = useState("fade-in");
  const videoRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  useEffect(() => {
    const videoElement = videoRef.current;

    const handleTimeUpdate = () => {
      if (videoElement.currentTime >= 60) {
        console.log("Video reached 60 seconds");
        videoElement.currentTime = 60;
      }
    };

    if (videoElement) {
      videoElement.addEventListener("timeupdate", handleTimeUpdate);
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener("timeupdate", handleTimeUpdate);
      }
    };
  }, []);

  const handleClick = () => {
    setTransition("fade-out");

    setTimeout(() => {
      setOpen(true);
    }, 500);
  };

  return (
    <section
      className={`fixed inset-0 overflow-hidden transition ${transition}`}>
      <div className="container">
        <div className="page-container absolute inset-0 transition-all duration-500">
          <div className="absolute -z-10 inset-0 bg-black/30 w-screen h-screen"></div>

          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            className="absolute -z-20 inset-0 w-full h-full object-cover">
            <source src="https://sunenergy.id/cfind/source/video/sun-video-banner-v5.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className="px-4 mx-auto max-w-screen-xl text-center py-40 md:py-24 md:pt-52">
            <h1 className="mb-4 text-3xl text-white font-extrabold tracking-tight font-poppins leading-none md:text-5xl lg:text-6xl md:px-32">
             Lorem, ipsum{" "}
              <span className="text-yellow">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis error quas.</span>
            </h1>
            <p className="mb-8 text-sm font-normal text-gray-300 lg:text-base sm:px-16 lg:px-48 md:scale-110 pt-2 md:pt-5">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium, earum.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
              <button
                onClick={handleClick}
                className="inline-flex justify-center items-center text-white bg-yellow/80 hover:bg-secondary/90 font-medium rounded-lg text-2xl px-8 py-2 text-center">
                01/01
                
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
