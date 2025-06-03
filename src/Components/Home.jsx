// src/pages/Home.jsx
import React from "react";
import Button from "../Layouts/Button";
import TypingEffect from "./TypingEffect"; // 👈 Import the typing effect

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 text-white bg-[url('assets/img/home.jpeg')] bg-no-repeat bg-cover opacity-90">
      <div className="w-[40%] space-y-5 mt-10 text-left text-emerald-950">
        <h1 className="text-5xl font-bold leading-tight text-pretty mt-9">
          Your Trusted Partner in Medical & Surgical Supplies
        </h1>
        <p className="text-justify ">
          Delivering high-quality, certified medical and surgical goods to distributors,
          pharmacies, healthcare professionals, and individual customers — with reliability, speed, and care 24x7.
        </p>
        <TypingEffect />
      </div>
    </div>
  );
};

export default Home;
