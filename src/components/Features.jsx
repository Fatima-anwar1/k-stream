import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const dramaSlides = [
  { id: 1, image: "/assets/demon.jpg", title: "My Demon" },
  { id: 2, image: "/assets/etarnal-monarch.jpg", title: "King Of Etarnal Monarch" },
  { id: 3, image: "/assets/teach.jpg", title: "Teach u a Lesson" },
  { id: 4, image: "/assets/goblin.jpg", title: "Goblin" },
  { id: 5, image: "/assets/when-the.jpg", title: "When The Phone Ring" },
  { id: 6, image: "/assets/vincenzo-1.jpg", title: "Vincenzo" },
  { id: 7, image: "/assets/queen-of.jpg", title: "Queen Of Tears" },
  { id: 8, image: "/assets/never.jpg", title: "Never Ending Summer" },
];

const Features = () => {
  return (
    <div className=" relative w-full z-10">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        navigation={true}
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{ delay: 3000 }}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 10 },
          1024: { slidesPerView: 1, spaceBetween: 20 },
        }}
        className="mySwiper px-4"
      >
        {dramaSlides.map((item) => (
         <SwiperSlide key={item.id}>
  {/* 1. Container: Rounding yahan apply karo, overflow-hidden zaroori hai */}
  <div className="relative rounded-[2rem] overflow-hidden h-[450px] w-full bg-black">
    
    {/* 2. Background Blur Image: Ye image poore box ko cover karegi (absolute inset-0) */}
    <img 
      src={item.image} 
      alt={item.title} 
      className="absolute inset-0 w-full h-full object-cover blur-xl scale-110 opacity-70" 
    />
    
    {/* 3. Main Image: Ye image top aur bottom se touch karegi (h-full) */}
    {/* Aur width mein stretch hogi (object-fill) taake sides par gap na rahe */}
    <img 
      src={item.image} 
      alt={item.title} 
      className="relative z-10 w-full h-full object-fill" 
    />

    {/* 4. Title Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-10">
      <h3 className="text-white text-3xl font-bold">{item.title}</h3>
    </div>
  </div>
</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Features;