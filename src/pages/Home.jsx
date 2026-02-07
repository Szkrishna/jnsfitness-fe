/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { useEffect, useRef } from "react";

// Swiper Imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

import heroVideo from "../assets/videos/elite/elite_video.mp4";
import gymImg from '../assets/images/fitness_studio/gym_img2.jpeg';
import badmintonImg from '../assets/images/academy/badminton_1.avif';
import colivingImg from '../assets/images/roost/roost_img9.jpeg';

// Import Accommodation Images
import { jnsMemoriesMedia } from "../utils/jnsMemoriesMedia";


const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
};

function Home() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8;
    }
  }, []);

  return (
    <div className="bg-zinc-950 text-white px-0 font-montserrat">
      {/* HERO SECTION */}
      <section className="relative min-h-[35vh] max-h-[45vh] md:min-h-[65vh] md:max-h-[75vh] w-full flex items-center justify-center overflow-hidden bg-zinc-600 rounded-3xl shadow-lg">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover scale-105"
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-zinc-950/60 z-[1]" />
          <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] animate-pulse z-[2]" />
          <div className="absolute bottom-20 -right-20 w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-[100px] z-[2]" />
        </div>

        <div className="relative z-10 text-center max-w-4xl px-6 py-12">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-indigo-300 font-bold tracking-[0.3em] uppercase text-xs mb-4 block"
          >
            Gurugram's Ultimate Fitness Destination
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-8xl font-black tracking-tighter bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent leading-none"
          >
            TRAIN. LIVE. <br /> <span className="text-white">EVOLVE.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-6 text-gray-200 text-base md:text-xl max-w-2xl mx-auto leading-relaxed font-medium drop-shadow-lg"
          >
            A premium ecosystem for elite sports training, professional fitness, and modern co-living.
          </motion.p>
        </div>
      </section>

      {/* THE ECOSYSTEM SECTION */}
      <section className="pt-20 max-w-7xl mx-auto text-center">
        <div className="mb-8">
          <span className="font-bold tracking-widest uppercase text-xs">Our Core</span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight uppercase mt-2">The <span className="text-indigo-500">Ecosystem</span></h2>
          <div className="h-[2px] w-20 bg-indigo-600 mt-4 mx-auto"></div>
          <p className="text-gray-400 text-sm mt-4">Everything you need to reach your peak performance.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <EcoCard to="/sports-academy" title="Academy" bgImage={badmintonImg} status="Operating" statusColor="text-green-400" />
          <EcoCard to="/fitness-club" title="Fitness Club" bgImage={gymImg} status="Operating" statusColor="text-green-400" />
          <EcoCard to="/coliving" title="Co-Living" bgImage={colivingImg} status="Operating" statusColor="text-green-400" />
        </div>
      </section>

      {/* EXPLORE JNS SECTION */}
      <section className="pt-20 max-w-7xl mx-auto flex flex-col text-center">
        <div className="mb-12">
          <span className="font-bold tracking-widest uppercase text-xs">
            Explore JNS
          </span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight uppercase mt-2">
            Choose Your <span className="text-indigo-500">Experience</span>
          </h2>
          <div className="h-[2px] w-20 bg-indigo-600 mt-4 mx-auto"></div>
          <p className="text-gray-400 text-sm mt-4">
            One ecosystem. Three powerful experiences designed for performance and lifestyle.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* BADMINTON */}
          <div className="group cursor-pointer bg-white/5 border border-white/10 
                          rounded-[2.5rem] p-10 hover:border-indigo-500/50 
                          transition-all text-center">
            <div className="text-indigo-500 text-4xl mb-6">🏸</div>
            <h3 className="text-2xl font-black uppercase mb-3">
              Badminton
            </h3>
            <p className="text-gray-400 text-sm font-medium">
              Professional courts & elite academy training.
            </p>
          </div>

          {/* GYM */}
          <div className="group cursor-pointer bg-white/5 border border-white/10 
                          rounded-[2.5rem] p-10 hover:border-indigo-500/50 
                          transition-all text-center">
            <div className="text-indigo-500 text-4xl mb-6">🏋️‍♂️</div>
            <h3 className="text-2xl font-black uppercase mb-3">
              Gym
            </h3>
            <p className="text-gray-400 text-sm font-medium">
              Strength, cardio & performance-driven fitness.
            </p>
          </div>

          {/* COLIVING */}
          <div className="group cursor-pointer bg-white/5 border border-white/10 
                          rounded-[2.5rem] p-10 hover:border-indigo-500/50 
                          transition-all text-center">
            <div className="text-indigo-500 text-4xl mb-6">🏠</div>
            <h3 className="text-2xl font-black uppercase mb-3">
              Co-Living
            </h3>
            <p className="text-gray-400 text-sm font-medium">
              Premium stays built for comfort & community.
            </p>
          </div>
        </div>
      </section>

      {/* CUSTOMER REVIEWS SECTION */}
      <section className="pt-20 max-w-7xl flex flex-col text-center">
        <div className="mb-8">
          <span className="font-bold tracking-widest uppercase text-xs">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight uppercase mt-2">
            How Our <span className="text-indigo-500">Community Feels</span>
          </h2>
          <div className="h-[2px] w-20 bg-indigo-600 mt-4 mx-auto"></div>
          <div className="flex items-center gap-4 mt-4 justify-center">
            <span className="text-green-400 font-bold">Excellent</span>
            <div className="flex text-green-400 text-lg">★★★★★</div>
            <span className="text-gray-400 text-sm mt-4">8,738 Verified Reviews</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ReviewCard title="It was helpful" text="The trainers provided excellent guidance for my fitness journey. Truly elite experience." author="Melek" time="18 hours ago" />
          <ReviewCard title="Professional Service" text="Top-notch facilities. My badminton technique improved significantly in just a month." author="Mahathy" time="19 hours ago" />
          <ReviewCard title="Clear and stress-free" text="The co-living spaces are modern, clean, and provide a great community atmosphere." author="Greeshma" time="22 hours ago" />
        </div>
      </section>

      {/* JNS MEMORIES SECTION */}
      <section className="pt-20 max-w-7xl flex flex-col text-center">
        <div className="mb-8">
          <span className="font-bold tracking-widest uppercase text-xs">Life at JNS</span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight uppercase mt-2">
            At JNS We <span className="text-indigo-500">Create Memories</span>
          </h2>
          <div className="h-[2px] w-20 bg-indigo-600 mt-4 mx-auto"></div>
          <p className="text-gray-400 text-sm mt-4">
            Spark while you stay by enjoying events, festivals, and celebrations.
          </p>
        </div>

        <div className="relative group/memories">
          <Swiper
            modules={[Navigation, Autoplay, Pagination, Mousewheel]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            mousewheel={{
              forceToAxis: true,
              sensitivity: 1,
              releaseOnEdges: true,
            }}
            loop
            className="pb-16"
          >
            {jnsMemoriesMedia.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="relative aspect-square rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">

                  {/* IMAGE */}
                  {item.type === "image" && (
                    <img
                      loading="lazy"
                      src={item.src}
                      alt="JNS Memory"
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                    />
                  )}

                  {/* VIDEO */}
                  {item.type === "video" && (
                    <video
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      className="w-full h-full object-cover"
                    >
                      <source src={item.src} />
                    </video>
                  )}

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent opacity-0 group-hover:opacity-100 transition" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
}

// --- Sub-components (Unchanged logic, just styled for consistency) ---
function EcoCard({ to, title, bgImage, status, statusColor }) {
  return (
    <motion.div variants={itemVariants}>
      <NavLink to={to} className="group relative block overflow-hidden rounded-3xl min-h-[350px] border border-white/10 transition-all duration-500">
        <div className="absolute inset-0 z-0">
          <img src={bgImage} alt={title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        </div>

        <div className="relative z-10 p-8 flex flex-col justify-between items-start text-left min-h-[350px]">
          <div>
            <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 bg-zinc-950/60 border border-white/20 rounded-full ${statusColor}`}>
              {status}
            </span>
            <h3 className="text-3xl font-bold text-white mt-4 group-hover:text-indigo-400 transition-colors">
              {title}
            </h3>
          </div>

          {/* New Bottom Navigation Button */}
          <div className="w-full flex justify-end">
            <div className="flex items-center gap-2 px-4 py-2 bg-indigo-600/20 backdrop-blur-sm border border-indigo-500/50 rounded-full group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
              <span className="text-xs font-bold uppercase tracking-wider">Explore More</span>
              <span className="text-lg leading-none transition-transform group-hover:translate-x-1">→</span>
            </div>
          </div>
        </div>
      </NavLink>
    </motion.div>
  );
}

function PropertyCard({ name, image }) {
  return (
    <div className="group relative w-full aspect-square cursor-pointer rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
      <img src={image} alt={name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90" />
      <div className="absolute bottom-0 left-0 p-6 w-full text-center">
        <h3 className="text-xl font-medium text-white tracking-[0.25em] uppercase mb-1 drop-shadow-lg transition-colors group-hover:text-indigo-400">{name}</h3>
        <div className="h-[1px] w-0 bg-indigo-500 group-hover:w-16 transition-all duration-700 mx-auto" />
      </div>
    </div>
  );
}

function ReviewCard({ title, text, author, time }) {
  return (
    <motion.div whileHover={{ y: -10 }} className="bg-white/5 border border-white/10 p-8 rounded-[2rem] hover:border-indigo-500/50 transition-all duration-300">
      <div className="flex text-green-400 mb-4 text-sm">★★★★★ <span className="ml-2 text-white/40 text-xs uppercase tracking-widest">• Verified</span></div>
      <h4 className="text-xl font-bold mb-3">{title}</h4>
      <p className="text-gray-400 text-sm leading-relaxed mb-6 italic">"{text}"</p>
      <div className="flex flex-col">
        <span className="font-bold text-indigo-400 uppercase tracking-tighter">{author}</span>
        <span className="text-[10px] text-gray-500 uppercase">{time}</span>
      </div>
    </motion.div>
  );
}

export default Home;