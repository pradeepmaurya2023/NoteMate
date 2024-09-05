import React from "react";
import ListExistingVideos from "./ListExistingVideos";
import { useSelector } from "react-redux";

const Home = () => {
  const theme = useSelector((state) => state.theme.value);

  return (
    <div className="home-page min-h-screen">
      <div className="welcome-box p-5 md:p-10 w-full">
        {/* Responsive text sizes */}
        <h1 className={`text-3xl sm:text-4xl md:text-6xl text-center ${theme ? "text-steelBlue" : "text-white"}`}>
          "A well-crafted <span className={`italic font-thin ${theme ? "text-yellow-600/90" : "text-yellow-300"}`}>&lt;Note&gt;</span> is a conversation with your future self, a
          reminder of the <span className={`italic font-thin ${theme ? "text-yellow-600/90" : "text-yellow-300"}`}>thoughts</span> that shaped your <span className={`italic font-thin ${theme ? "text-yellow-600/90" : "text-yellow-300"}`}>journey.</span>"
        </h1>
      </div>
      
      {/* Responsive container for videos */}
      <div className="p-3 sm:p-5 md:p-10">
        <ListExistingVideos />
      </div>
    </div>
  );
};

export default Home;
