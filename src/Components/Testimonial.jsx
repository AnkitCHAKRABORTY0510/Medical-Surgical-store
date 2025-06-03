import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "Dr. Arvind Menon",
    role: "Cardiologist, Mumbai",
    quote:
      "Reliable, fast, and professional. Their medical supplies have never let us down. Highly recommended!",
  },
  {
    name: "PharmaWell Distributors",
    role: "Pharmacy Chain",
    quote:
      "Outstanding quality and customer support. Our inventory is always on time and well-packaged.",
  },
  {
    name: "Sarah Thomas",
    role: "Direct Customer, Bengaluru",
    quote:
      "Ordered surgical masks and wound care kits for home use — great quality and fast delivery!",
  },
  {
    name: "MediConnect Pvt. Ltd.",
    role: "Hospital Supplier",
    quote:
      "Seamless bulk ordering process and responsive customer care. We trust them with all our surgical needs.",
  },
  {
    name: "Dr. Shreya Patel",
    role: "Pediatrician, Delhi",
    quote:
      "Exceptional quality in diagnostic tools. Always ships quickly and safely packaged.",
  },
  {
    name: "CityCare Pharmacy",
    role: "Local Pharmacy",
    quote:
      "A reliable source for medical disposables. Great pricing and consistent quality.",
  },
];

const TestimonialsCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024, // tablets
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640, // mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
<div className="bg-white py-16 px-4 sm:px-8 lg:px-20">
  <h2 className="text-3xl font-bold text-center text-emerald-800 mb-10">
    What Our Clients Say
  </h2>
  <Slider {...settings}>
    {testimonials.map((t, i) => (
      <div key={i} className="px-3">
        <div className="bg-white border rounded-xl p-6 shadow-md hover:shadow-lg transition duration-500 
                        h-[300px] flex flex-col justify-between">
          <p className="text-gray-700 italic mb-4 line-clamp-4">“{t.quote}”</p>
          <div>
            <h4 className="font-semibold text-emerald-900">{t.name}</h4>
            <p className="text-sm text-gray-500">{t.role}</p>
          </div>
        </div>
      </div>
    ))}
  </Slider>
</div>
  );
};

export default TestimonialsCarousel;
