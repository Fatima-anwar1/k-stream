import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation,Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const dramaSlides = [
  { 
    id: 1, 
    image: "/assets/my-demon3.jpg", 
    title: "My Demon",  
    desc: "A gorgeous demon loses his powers and must rely on a cynical heiress to recover them.", 
    genres: ["Fantasy", "Romance"]
  },
  { 
    id: 2, 
    image: "/assets/etarnal-monarch.jpg", 
    title: "King Of Eternal Monarch", 
    desc: "A Korean Emperor discovers a parallel world and joins forces with a detective." ,
    genres: ["Sci-Fi", "Drama"]
  },
  { 
    id: 3, 
    image: "/assets/w-two-.jpg", 
    title: "W Two Worlds", 
    desc: "A woman gets pulled into the webtoon world of her father's creation and saves a man's life.",
    genres: ["Fantasy", "Thriller"],
  
  },
  { 
    id: 4, 
    image: "/assets/bussines-proposal.jpg", 
    title: "Bussines Proposal", 
   desc: "An employee goes on a blind date disguised as her friend, only to find her boss on the other side."  , 
    genres: ["Comedy", "Romance"],
  },
  { 
    id: 5, 
    image: "/assets/something-in-rain.jpg", 
    title: "Something In The Rain", 
    desc:  "A woman who works in a coffee company rekindles her relationship with her best friend's younger brother." ,
    genres: ["Romance", "Melodrama"],
  },
  { 
    id: 6, 
    image: "/assets/sweet-home.jpg", 
    title: "Sweet Home", 
    desc: "A troubled teenager and his neighbors fight for survival against humans turning into monsters.",
    genres: ["Horror", "Action"],
  },
  { 
    id: 7, 
    image: "/assets/queen-of.jpg", 
    title: "Queen Of Tears", 
    desc: "A married couple facing a major crisis discovers love amidst their complicated lives." ,
    genres: ["Romance", "Drama"],
  },
  { 
    id: 8, 
    image: "/assets/never.jpg", 
    title: "Never Ending Summer", 
    desc: "A heartwarming tale of love, growth, and the lingering memories of a summer.",
    genres: ["Melodrama", "Slice of Life"], 
  },
];
const Features = () => {
  return (
    // Navbar ke liye 'pt-20' hata diya taake slider top se start ho (MovieBox style)
    <div className="relative z-10 w-full h-[500px]"> 
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
      navigation={{ nextEl: '.custom-next', prevEl: '.custom-prev' }}
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{ delay: 5000 }}
        className="mySwiper w-full h-full"
      >
        {dramaSlides.map((item) => (
  <SwiperSlide key={item.id} className="relative w-full h-[500px] bg-black">
    
    {/* FIX: inset-0 kiya aur object-center + object-cover (taake space na bache) */}
    <img 
      src={item.image} 
      alt={item.title} 
      className="absolute inset-0 w-full h-full object-cover object-center" 
      style={{ objectPosition: item.id === 5 || item.id === 6 || item.id === 3 ? 'center top' : 'center' }}
    />
    
    {/* Gradient Overlay wapis le aaye taake text dikhe */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>

    {/* Content */}
    <div className="absolute bottom-10 left-10 md:left-20 z-10 text-white max-w-2xl">
      <h1 className="text-3xl md:text-4xl font-extrabold mb-4">{item.title}</h1>
      
     {/* Yeh code tumhare Features.jsx mein hona chahiye */}
<div className="flex gap-3 mb-6">
  {item.genres?.map((g, i) => ( // '?' lagaya hai taake error na aaye
    <span key={i} className="bg-white/20 px-4 py-1 rounded-full text-sm backdrop-blur-md text-white">
      {g}
    </span>
  ))}
</div>
      <div className="flex gap-4">
        <button className="bg-white text-black px-6 py-3 font-bold rounded-lg hover:bg-gray-200 transition">
          ▶ Watch Now
        </button>
        <button className="bg-white/20 backdrop-blur-md text-white px-10 py-3 font-bold rounded-lg hover:bg-white/30 transition">
          + My List
        </button>
      </div>
    </div>

  </SwiperSlide>
))}

      </Swiper>

     <div className="absolute bottom-25 right-10 z-20 flex gap-3">
        <button className="custom-prev bg-white/20 p-4 rounded-full text-white w-12 h-12 flex items-center justify-center border border-white/20">❮</button>
        <button className="custom-next bg-white/20 p-4 rounded-full text-white w-12 h-12 flex items-center justify-center border border-white/20">❯</button>
      </div>

    </div>

  );

};

export default Features;