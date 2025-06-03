import React from "react";
import androidImg from "../assets/img/GooglePlay.png";
import iosImg from "../assets/img/App_Store.svg";

const CTAButtons = () => {
  return (<div classname> 

    <div className="flex flex-col sm:flex-row sm:justify-center gap-8 mt-8 text-center sm:text-left">
      {/* Android Button */}
      <div className="flex flex-col items-center sm:items-start">

        <a
          href="https://dummy-android-download-link.com"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer transform transition duration-300 ease-in-out
                     hover:scale-105 hover:shadow-lg hover:-translate-y-1"
        >
          <img
            src={androidImg}
            alt="Download Android App"
            className="w-48 sm:w-[240px] h-[70px] object-contain rounded-lg"
          />
        </a>
      </div>

      {/* iOS Button */}
      <div className="flex flex-col items-center sm:items-start">

        <a
          href="https://dummy-ios-portal-link.com"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer transform transition duration-300 ease-in-out
                     hover:scale-105 hover:shadow-lg hover:-translate-y-1"
        >
          <img
            src={iosImg}
            alt="Visit iOS Portal"
            className="w-48 sm:w-[240px] h-[70px] object-contain rounded-lg"
          />
        </a>
      </div>
    </div>
    </div>
  );
};

export default CTAButtons;
