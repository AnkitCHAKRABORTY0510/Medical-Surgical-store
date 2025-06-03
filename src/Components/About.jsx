import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules"; // ✅ include Autoplay
import "swiper/css";
import "swiper/css/pagination";

import aboutImg from "../assets/img/about.jpg";

// Team images
import doc1 from "../assets/img/teams/doc1.jpg";
import doc2 from "../assets/img/teams/doc2.jpg";
import doc3 from "../assets/img/teams/doc3.jpg";
import doc4 from "../assets/img/teams/doc4.jpg";
import doc5 from "../assets/img/teams/doc5.jpg";

const team = [
  { name: "Dr. Rishab Mehta", role: "Chief Surgeon", image: doc3 },
  { name: "Dr. Rajat Verma", role: "Head of Operations", image: doc1 },
  { name: "Dr. Neha Iyer", role: "Quality Manager", image: doc5 },
  { name: "Dr. Aarav Kapoor", role: "Customer Experience Lead", image: doc2 },
  { name: "Dr. zoya Agarwal", role: "Service Experience Lead", image: doc4 },
];

const About = () => {
  return (
    <div className="min-h-screen px-5 lg:px-32 pt-24 lg:pt-16 space-y-20">
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center"
      >
        About FedMed Rx
      </motion.h1>

      {/* History Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="flex flex-col lg:flex-row items-center gap-10"
      >
        <div className="w-full lg:w-1/2 space-y-5">
          <p className="text-justify text-gray-700">
            <strong>FedMed Rx</strong> was founded in 2025 with the mission to
            deliver reliable, affordable, and high-quality medical and surgical
            supplies to hospitals and clinics across India. Our journey started
            in Delhi and has grown into a trusted national brand.
          </p>
          <p className="text-justify text-gray-700">
            Our <strong>vision</strong> is to become India’s most accessible
            provider of surgical equipment, while our <strong>mission</strong> is to
            support better healthcare by simplifying access to essential medical
            tools.
          </p>
        </div>
        <img
          src={aboutImg}
          alt="About FedMed"
          className="w-full lg:w-1/2 rounded-lg shadow-lg"
        />
      </motion.div>

      {/* Mission & Values */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="bg-blue-50 rounded-xl p-6 space-y-4"
      >
        <h2 className="text-2xl font-semibold text-blue-900">Our Mission</h2>
        <p className="text-gray-700">
          To empower healthcare professionals with the best tools and resources
          so they can deliver timely and efficient care.
        </p>

        <h2 className="text-2xl font-semibold text-blue-900">Core Values</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li><strong>Trust:</strong> Built over a decade with consistency.</li>
          <li><strong>Commitment:</strong> We always deliver on time.</li>
          <li><strong>Professionalism:</strong> Ethics, care, and expertise at every level.</li>
        </ul>
      </motion.div>

      {/* Team Carousel */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="space-y-6"
      >
        <h2 className="text-3xl font-semibold text-center">Meet Our Team</h2>
        <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{
          delay: 2000, // slide every 3 seconds
          disableOnInteraction: false, // keep autoplay after manual swipe
        }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        pagination={{ clickable: true }}
        className="pb-10"
      >
          {team.map((member, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-28 h-28 mx-auto rounded-full mb-4 object-cover"
                />
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-sm text-gray-600">{member.role}</p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </div>
  );
};

export default About;

