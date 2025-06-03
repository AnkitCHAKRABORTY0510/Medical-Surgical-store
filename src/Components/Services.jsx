import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { RiMicroscopeLine } from "react-icons/ri";
import { MdHealthAndSafety } from "react-icons/md";
import { FaHeartbeat, FaNotesMedical } from "react-icons/fa";
import { GiMedicinePills } from "react-icons/gi";
import { TbTruckDelivery } from "react-icons/tb";

const services = [
  {
    icon: <RiMicroscopeLine size={28} className="text-blue-600" />,
    title: "Lab Test",
    description: "Accurate diagnostic tests and reports.",
  },
  {
    icon: <MdHealthAndSafety size={28} className="text-green-600" />,
    title: "Health Check",
    description: "Routine and specialized health packages.",
  },
  {
    icon: <FaHeartbeat size={28} className="text-red-600" />,
    title: "Heart Health",
    description: "Monitoring tools and cardiac care items.",
  },
  {
    icon: <GiMedicinePills size={28} className="text-purple-600" />,
    title: "Medicines",
    description: "Essential drugs and health supplements.",
  },
  {
    icon: <TbTruckDelivery size={28} className="text-orange-600" />,
    title: "Fast Delivery",
    description: "Same-day delivery in most metro cities.",
  },
  {
    icon: <FaNotesMedical size={28} className="text-pink-600" />,
    title: "Medical Advice",
    description: "Guidance on prescriptions and care.",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center lg:px-32 px-5 pt-24 lg:pt-16">
      <div className="text-center space-y-2 mb-8">
        <h1 className="text-3xl text-green-900 font-bold">Our Services</h1>
        <p className="text-green-900 font-semibold text-sm max-w-xl mx-auto">
          We provide a range of medical services to support health facilities and individuals with trust and efficiency.
        </p>
      </div>

      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={15}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="w-full pb-10"
    
      >
        {services.map((service, index) => (
          <SwiperSlide key={index}>
            <div className="bg-green-100 border-gray-200 shadow-sm hover:shadow-md transition duration-300 rounded-lg p-4 w-72 h-30 mx-auto flex flex-col justify-between text-center">
              <div className="flex flex-col items-center space-y-2">
                <div>{service.icon}</div>
                <h2 className="text-base font-semibold">{service.title}</h2>
              </div>
              <p className="text-xs font-semibold text-green-800 ">{service.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Services;
