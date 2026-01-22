import React from "react";
import { TESTIMONIALS } from "../../constants/data";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const Testimonials = () => {
  return (
    <section className="py-20 px-4 bg-white" id="testimonials">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">My Clients Say</h2>
            <span className="text-slate-500">Testimonials</span>
        </div>

        <Swiper
          className="pb-16"
          loop={true}
          grabCursor={true}
          spaceBetween={24}
          pagination={{
            clickable: true,
            bulletActiveClass: 'swiper-pagination-bullet-active bg-slate-900',
          }}
          breakpoints={{
            576: {
              slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 48,
            },
          }}
          modules={[Pagination]}
        >
          {TESTIMONIALS.map(({ id, image, title, description }) => (
            <SwiperSlide key={id} className="h-auto">
                <div className="bg-slate-50 border border-slate-100 p-8 rounded-[2rem] h-full flex flex-col items-center text-center">
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed max-w-sm italic">"{description}"</p>
                </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
