/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaCheckCircle,
  FaHeartbeat,
  FaRocket,
  FaUsers,
  FaHistory,
  FaStar,
  FaHotel
} from "react-icons/fa";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";

// Images
import heroImg from "../assets/images/elite/elite_img1.jpeg";
import eliteImg from "../assets/images/elite/elite_img1.jpeg";
import roostImg from "../assets/images/roost/roost_img8.jpeg";
import sunriseImg from "../assets/images/sunrise/sunrise_img1.jpeg";

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function ContactInfo({ icon, title, detail }) {
  return (
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-xl bg-indigo-600/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 text-xl">
        {icon}
      </div>
      <div>
        <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-500">
          {title}
        </h4>
        <p className="text-gray-200 font-bold text-lg">{detail}</p>
      </div>
    </div>
  );
}

function PropertyCard({ name, image }) {
  return (
    <div className="group relative aspect-square rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
      <img
        src={image}
        alt={name}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      <div className="absolute bottom-0 p-6 w-full text-center">
        <h3 className="text-xl font-black tracking-widest uppercase text-white">
          {name}
        </h3>
      </div>
    </div>
  );
}

function Coliving() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    interest: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      toast.error("Please fill required fields");
      return;
    }

    const inquiryPromise = new Promise((resolve, reject) => {
      (async () => {
        try {
          setLoading(true);
          const response = await fetch("https://jnsfitness-be.onrender.com/api/colivingAddPage", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
          });

          if (!response.ok) {
            reject("Submission failed. Please try again.");
            return;
          }

          // const message = buildWhatsAppMessage(formData);
          // const whatsappNumber = "8460479473";
          // const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
          const message = `*New Coliving Inquiry*\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Message:* ${formData.message}`;
          window.open(
            `https://wa.me/8460479473?text=${encodeURIComponent(message)}`,
            "_blank"
          );


          // setTimeout(() => { window.open(whatsappURL, "_blank"); }, 1200);
          setFormData({ name: "", phone: "", interest: "GYM", message: "" });
          resolve("Success");
        } catch (err) {
          reject("Failed to connect. Please try again later.");
        } finally {
          setLoading(false);
        }
      })();
    });

    toast.promise(inquiryPromise, {
      loading: 'Sending your inquiry...',
      success: 'Inquiry sent! Opening WhatsApp...',
      error: (err) => `${err}`,
    }, {
      style: { borderRadius: '12px', background: '#1a1a1a', color: '#fff', border: '1px solid rgba(255,255,255,0.1)', fontSize: '14px' },
      success: { duration: 4000, iconTheme: { primary: '#4f46e5', secondary: '#fff' } },
      error: { duration: 5000, iconTheme: { primary: '#ef4444', secondary: '#fff' } },
    });
    
  };

  return (
    <div className="bg-zinc-950 text-white font-montserrat">
      <Toaster position="top-center" reverseOrder={false} />

      {/* HERO */}
      <section className="relative min-h-[45vh] md:min-h-[65vh] flex items-center justify-center overflow-hidden rounded-3xl mt-4">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            className="w-full h-full object-cover opacity-40 scale-105"
            alt="Coliving"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/80 via-zinc-950/40 to-zinc-950" />
        </div>

        {/* CONTENT */}
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <span className="text-indigo-400 font-black tracking-[0.5em] uppercase text-xs block mb-4">
            Modern Coliving
          </span>

          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-8xl font-black tracking-tighter leading-none"
          >
            <span className="bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent block">
              JNS Coliving.
            </span>

            <span className="block text-white text-2xl md:text-4xl font-extrabold tracking-widest mt-3 md:mt-4">
              Born from Experience, Built for You.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-gray-300 text-sm sm:text-lg max-w-2xl mx-auto font-medium mt-6 leading-relaxed"
          >
            We didn’t just want to provide four walls and a bed. We wanted to build a sanctuary
            where your living space works as hard as you do. By integrating our 10-year legacy
            in sports excellence, we created a space where fitness, community, and comfort coexist.
          </motion.p>
        </div>
      </section>

      {/* CORE BUSINESS STATS - Section header matched to Home "Ecosystem" */}
      <section className="pt-20 max-w-7xl mx-auto text-center">
        <div className="mb-8">
          <span className="font-bold tracking-widest uppercase text-xs">Our Legacy</span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight uppercase mt-2">The <span className="text-indigo-500">Standard</span></h2>
          <div className="h-[2px] w-20 bg-indigo-600 mt-4 mx-auto"></div>
          <p className="text-gray-400 text-sm mt-4">Trusted quality and professional hospitality since 2020.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ValueCard
            icon={<FaHistory className="text-indigo-400" />}
            title="6 Years"
            desc="Over six years of trusted business presence in the Gurugram community."
          />
          <ValueCard
            icon={<FaStar className="text-yellow-500" />}
            title="4.6 Rating"
            desc="Backed by 100+ positive ratings highlighting our service quality."
          />
          <ValueCard
            icon={<FaHotel className="text-indigo-400" />}
            title="Clean Rooms"
            desc="Consistently recognized for superior hygiene and well-maintained AC rooms."
          />
        </div>
      </section>

      {/* WHY JNS COLIVING */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="pt-20 max-w-7xl mx-auto"
      >
        <motion.div variants={itemVariants} className="mb-14 text-center">
          <div className="mb-8">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight uppercase mt-2">
              Why JNS <span className="text-indigo-500">Coliving</span>
            </h2>
            <div className="h-[2px] w-20 bg-indigo-600 mt-4 mx-auto"></div>
            <p className="text-gray-400 text-sm mt-4">Designed from lived experience, not business logic.</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              icon: <FaCheckCircle />,
              title: "Founder’s Standard",
              desc: "Every detail curated from real living experience.",
            },
            {
              icon: <FaHeartbeat />,
              title: "Integrated Wellness",
              desc: "Direct access to JNS fitness & sports ecosystem.",
            },
            {
              icon: <FaRocket />,
              title: "Zero-Hassle Living",
              desc: "Bills, cleaning & maintenance included.",
            },
            {
              icon: <FaUsers />,
              title: "Built-In Community",
              desc: "Live among professionals & athletes.",
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-indigo-500/40 transition-all"
            >
              <div className="flex gap-5">
                <div className="text-3xl text-indigo-500">{item.icon}</div>
                <div>
                  <h3 className="text-xl font-black uppercase mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* BROWSE ACCOMMODATION SECTION */}
      <section className="pt-20 max-w-7xl flex flex-col text-center">
        <div className="mb-8">
          <span className="font-bold tracking-widest uppercase text-xs">
            Premium Stays
          </span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight uppercase mt-2">
            Browse <span className="text-indigo-500">Accommodation</span>
          </h2>
          <div className="h-[2px] w-20 bg-indigo-600 mt-4 mx-auto"></div>
          <p className="text-gray-400 text-sm mt-4">
            Luxury living spaces curated for your comfort and lifestyle.
          </p>
        </div>

        <div className="relative group/swiper-container px-4 sm:px-8 md:px-20 lg:px-44">
          <button className="swiper-prev-button absolute left-2 md:left-[2px] top-1/2 -translate-y-1/2 z-20 w-16 h-10 rounded-full border border-white/20 bg-zinc-950/50 backdrop-blur-md flex items-center justify-center hover:bg-indigo-600 transition-all text-white opacity-0 group-hover/swiper-container:opacity-100">
            ←
          </button>
          <button className="swiper-next-button absolute right-2 md:right-[2px] top-1/2 -translate-y-1/2 z-20 w-16 h-10 rounded-full border border-white/20 bg-zinc-950/50 backdrop-blur-md flex items-center justify-center hover:bg-indigo-600 transition-all text-white opacity-0 group-hover/swiper-container:opacity-100">
            →
          </button>

          <Swiper
            effect="coverflow"
            grabCursor
            centeredSlides
            loop
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: "auto" },
            }}
            coverflowEffect={{
              rotate: 20,
              stretch: 0,
              depth: 120,
              modifier: 1,
              slideShadows: false,
            }}
            navigation={{
              nextEl: ".swiper-next-button",
              prevEl: ".swiper-prev-button",
            }}
            modules={[EffectCoverflow, Navigation, Autoplay]}
            className="w-full"
          >
            {[
              { name: "Elite Stay", img: eliteImg },
              { name: "Roost", img: roostImg },
              { name: "Sunrise", img: sunriseImg },
              { name: "Elite Stay", img: eliteImg },
              { name: "Roost", img: roostImg },
            ].map((item, index) => (
              <SwiperSlide
                key={index}
                className="w-[80vw] sm:w-[60vw] md:max-w-[320px]"
              >
                <PropertyCard name={item.name} image={item.img} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* ENQUIRE SECTION – COLIVING */}
      <section className="pt-20 max-w-7xl mx-auto">
        <div className="mb-8">
          <span className="font-bold tracking-widest uppercase text-xs">
            Enquire Now
          </span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight uppercase mt-2">
            Find Your <span className="text-indigo-500">Perfect Stay</span>
          </h2>
          <div className="h-[2px] w-20 bg-indigo-600 mt-4 mx-auto"></div>
          <p className="text-gray-400 text-sm mt-4">
            Explore premium coliving spaces designed for comfort, community, and
            convenience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* LEFT INFO */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-6 bg-white/5 backdrop-blur-lg border border-white/10 
                 p-8 md:p-12 rounded-[2.5rem] flex flex-col justify-between"
          >
            <div className="text-left">
              <span className="text-indigo-500 font-bold tracking-widest uppercase text-[10px] block mb-2">
                Locations
              </span>
              <h2 className="text-2xl md:text-3xl font-black tracking-tight uppercase mb-10">
                JNS <span className="text-indigo-500">Coliving</span>
              </h2>

              <div className="space-y-8">
                <ContactInfo
                  icon={<FaMapMarkerAlt />}
                  title="Region"
                  detail="Prime Localities, Gurgaon"
                />
                <ContactInfo
                  icon={<FaPhone />}
                  title="Enquiry"
                  detail="+91 84604 79473"
                />
                <ContactInfo
                  icon={<FaUsers />}
                  title="Residents"
                  detail="Unisex Accommodations (Facilities via Add-on)"
                />
              </div>
            </div>
          </motion.div>

          {/* RIGHT FORM */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-6 bg-white/5 backdrop-blur-lg border border-white/10 
              p-8 md:p-12 rounded-[2.5rem] shadow-2xl flex flex-col justify-center"
          >
            <h2 className="text-3xl font-black tracking-tight uppercase mb-6">
              Enquire <span className="text-indigo-500">Now</span>
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  required
                  minLength="3"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  type="text"
                  placeholder="Full Name"
                  className="w-full bg-zinc-950/50 border border-white/10 rounded-xl 
                    px-5 py-3 text-sm text-white focus:border-indigo-500 
                    outline-none transition-all"
                />
                <input
                  required
                  pattern="[0-9]{10}"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  type="tel"
                  placeholder="Phone (10-digit)"
                  className="w-full bg-zinc-950/50 border border-white/10 rounded-xl 
                    px-5 py-3 text-sm text-white focus:border-indigo-500 
                    outline-none transition-all"
                />
              </div>

              {/* ACCOMMODATION SELECT */}
              <select
                required
                name="interest"
                value={formData.interest}
                onChange={handleChange}
                className="w-full bg-zinc-950/50 border border-white/10 rounded-xl 
                  px-5 py-3 text-white text-sm appearance-none outline-none 
                  cursor-pointer focus:border-indigo-500 transition-all"
              >
                <option value="JNS Accommodation">JNS Accommodation</option>
                <option value="Elite Stay">Elite Stay</option>
                <option value="Roost">Roost</option>
                <option value="Sunrise">Sunrise</option>
              </select>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Preferred move-in date, or any questions..."
                rows="2"
                className="w-full bg-zinc-950/40 border border-white/10 rounded-xl 
                  px-5 py-3 text-sm text-white resize-none outline-none 
                  focus:border-indigo-500 transition-all"
              />

              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="w-full bg-indigo-600 hover:bg-indigo-500 text-white 
                  font-bold py-3 rounded-xl uppercase tracking-[0.2em] 
                  text-xs transition-all shadow-lg shadow-indigo-600/20 
                  flex justify-center items-center gap-2"
              >
                {loading ? (
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  "Submit Inquiry"
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function ValueCard({ icon, title, desc }) {
  return (
    <div className="bg-white/5 border border-white/10 p-8 rounded-[2rem] flex flex-col items-center text-center">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-black mb-2 uppercase tracking-tight">{title}</h3>
      <p className="text-gray-400 text-sm">{desc}</p>
    </div>
  );
}

export default Coliving;