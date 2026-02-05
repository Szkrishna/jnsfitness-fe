/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import {
  FaGraduationCap,
  FaWind,
  FaUsers,
  FaAward,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";
import badmintonHero from "../assets/images/academy/badminton_1.avif";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function ContactInfo({ icon, title, detail }) {
  return (
    <div className="flex items-center justify-start gap-4">
      <div className="w-12 h-12 shrink-0 rounded-xl bg-indigo-600/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 text-xl">
        {icon}
      </div>
      <div className="flex flex-col text-left">
        <h4 className="text-[12px] font-black uppercase tracking-[0.2em] text-gray-500 mb-1">
          {title}
        </h4>
        <p className="text-gray-200 font-bold text-lg leading-tight">
          {detail}
        </p>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, desc }) {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -10 }}
      className="p-4 bg-white/5 border border-white/10 rounded-3xl hover:border-indigo-500/50 transition-all group flex flex-col items-center text-center"
    >
      <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300 flex justify-center text-indigo-500">
        {icon}
      </div>
      <h3 className="text-lg font-bold mb-3 uppercase tracking-tight">
        {title}
      </h3>
      <p className="text-gray-500 text-sm leading-relaxed max-w-[200px]">
        {desc}
      </p>
    </motion.div>
  );
}

function SportsAcademy() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    plan: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const buildWhatsAppMessage = (data) => {
    return `*New Sports Academy Inquiry*\n\n*Name:* ${data.name}\n*Phone:* ${data.phone}\n*Program:* ${data.program}\n*Message:* ${data.message}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.plan) {
      toast.error("Please fill all required fields", {
        style: {
          borderRadius: "12px",
          background: "#1a1a1a",
          color: "#fff",
          border: "1px solid rgba(255,255,255,0.1)",
        },
      });
      return;
    }

    const inquiryPromise = new Promise((resolve, reject) => {
      (async () => {
        try {
          setLoading(true);
          const response = await fetch(
            "https://jnsfitness-be.onrender.com/api/badmintonPage",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                ...formData,
                interest: `Badminton Academy: ${formData.program}`,
              }),
            }
          );

          if (!response.ok) {
            reject("Submission failed. Please try again.");
            return;
          }

          const message = buildWhatsAppMessage(formData);
          const whatsappNumber = "8460479473";
          const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
            message
          )}`;

          setTimeout(() => {
            window.open(whatsappURL, "_blank");
          }, 1200);

          setFormData({ name: "", phone: "", program: "", message: "" });
          resolve("Success");
        } catch (err) {
          reject("Failed to connect. Please try again later.");
        } finally {
          setLoading(false);
        }
      })();
    });

    toast.promise(
      inquiryPromise,
      {
        loading: "Sending your inquiry...",
        success: "Inquiry sent! Opening WhatsApp...",
        error: (err) => `${err}`,
      },
      {
        style: {
          borderRadius: "12px",
          background: "#1a1a1a",
          color: "#fff",
          border: "1px solid rgba(255,255,255,0.1)",
          fontSize: "14px",
        },
      }
    );
  };

  return (
    <div className="bg-zinc-950 text-white px-0 lg:px-0 font-montserrat">
      <Toaster position="top-center" reverseOrder={false} />

      {/* HERO SECTION */}
      <section className="relative min-h-[30vh] md:h-[70vh] flex items-center justify-center overflow-hidden bg-zinc-950 rounded-3xl shadow-2xl mt-2 md:mt-4 px-4">
        <div className="absolute inset-0">
          <img
            src={badmintonHero}
            className="w-full h-full object-cover opacity-40 scale-105"
            alt="Badminton Court"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/80 via-zinc-950/40 to-zinc-950" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-center max-w-4xl"
        >
          <span className="text-indigo-400 font-bold tracking-[0.3em] uppercase text-xs block mb-4">
            11 Years of Excellence
          </span>

          <h1 className="text-3xl sm:text-5xl md:text-7xl font-black tracking-tighter leading-tight mb-6">
            JNS SPORTS & BADMINTON ACADEMY
          </h1>

          <p className="text-gray-300 text-sm sm:text-lg max-w-2xl mx-auto font-medium">
            With over 11 years of excellence, JNS Sports & Badminton Academy is
            recognized as one of North India’s most elite badminton training
            facilities, offering professional coaching and world-class
            infrastructure.
          </p>
        </motion.div>
      </section>

      {/* FEATURES SECTION */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-8 md:py-16 lg:py-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        <FeatureCard
          icon={<FaAward className="text-3xl" />}
          title="12 Elite Courts"
          desc="12 state-of-the-art synthetic and wooden courts built for high-performance training and competitive play."
        />
        <FeatureCard
          icon={<FaWind className="text-3xl" />}
          title="Fully Air-Conditioned"
          desc="A completely climate-controlled facility ensuring year-round comfort for players."
        />
        <FeatureCard
          icon={<FaGraduationCap className="text-3xl" />}
          title="Tailored Coaching"
          desc="Structured coaching for children and flexible professional training programs for adults."
        />
        <FeatureCard
          icon={<FaUsers className="text-3xl" />}
          title="Professional Affiliations"
          desc="Recognized Khelo India centre and official Fitso partner for elite sports access."
        />
      </motion.section>

      {/* CONNECT SECTION */}
      <section className="max-w-7xl pb-20 flex flex-col text-center">
        <div className="mb-4 md:mb-8">
          <span className="font-bold tracking-widest uppercase text-xs">Admission Open</span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight uppercase mt-2">
            Connect <span className="text-indigo-500">Academy</span>
          </h2>
          <div className="h-[2px] w-20 bg-indigo-600 mt-4 mx-auto"></div>
          <p className="text-gray-400 text-sm mt-4">Get in touch with JNS Sports & Badminton Academy for professional
            coaching, trial sessions, and court bookings in a world-class training environment.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-6 bg-white/5 backdrop-blur-lg border border-white/10 p-8 md:p-12 rounded-[2.5rem]"
          >
            <span className="text-indigo-500 font-bold tracking-widest uppercase text-[10px] block mb-2">
              Office Hours: 6AM - 10PM
            </span>
            <h2 className="text-2xl md:text-3xl font-black tracking-tight uppercase mb-10">
              Badminton <span className="text-indigo-500">HQ</span>
            </h2>

            <div className="space-y-8">
              <ContactInfo
                icon={<FaMapMarkerAlt />}
                title="Location"
                detail="Sector 51, Near Artemis, Gurgaon"
              />
              <ContactInfo
                icon={<FaPhone />}
                title="Phone"
                detail="+91 84604 79473"
              />
              <ContactInfo
                icon={<FaUsers />}
                title="Training Programs"
                detail="Structured Kids Coaching & Flexible Adult Training"
              />
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-6 bg-white/5 backdrop-blur-lg border border-white/10 p-8 md:p-12 rounded-[2.5rem]"
          >
            <h2 className="text-3xl font-black tracking-tight uppercase mb-6">
              Enquire for <span className="text-indigo-500">Training</span>
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input required minLength="3" name="name" value={formData.name} onChange={handleChange} type="text" placeholder="Full Name" className="w-full bg-zinc-950/50 border border-white/10 rounded-xl px-5 py-3 text-sm text-white focus:border-indigo-500 outline-none transition-all" />
                <input required pattern="[0-9]{10}" name="phone" value={formData.phone} onChange={handleChange} type="tel" placeholder="Phone (10-digit)" className="w-full bg-zinc-950/50 border border-white/10 rounded-xl px-5 py-3 text-sm text-white focus:border-indigo-500 outline-none transition-all" />
              </div>
              <select required name="plan" value={formData.plan} onChange={handleChange} className="w-full bg-zinc-950/50 border border-white/10 rounded-xl px-5 py-3 text-white text-sm appearance-none outline-none cursor-pointer focus:border-indigo-500 transition-all">
                <option value="">Select Program (Required)</option>
                <option value="Kids Coaching">Kids Coaching</option>
                <option value="Adult Training">Adult Training</option>
                <option value="Court Booking">Court Booking</option>
              </select>
              <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Share your requirements with us..." rows="2" className="w-full bg-zinc-950/40 border border-white/10 rounded-xl px-5 py-3 text-sm text-white resize-none outline-none focus:border-indigo-500 transition-all" />

              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 rounded-xl uppercase tracking-[0.2em] text-xs transition-all shadow-lg shadow-indigo-600/20 flex justify-center items-center gap-2"
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

export default SportsAcademy;