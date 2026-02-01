/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaMapMarkerAlt, FaPhone, FaDumbbell, FaClock, FaHeartbeat, FaUsers } from "react-icons/fa";
// Importing the requested background image
import gymHero from "../assets/images/fitness_studio/gym_img2.jpeg";

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
        <h4 className="text-[12px] font-black uppercase tracking-[0.2em] text-gray-500 mb-1">{title}</h4>
        <p className="text-gray-200 font-bold text-lg leading-tight">{detail}</p>
      </div>
    </div>
  );
}

function FitnessClub() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    interest: "GYM",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const buildWhatsAppMessage = (data) => {
    return `*New Gym Inquiry*\n\n*Name:* ${data.name}\n*Phone:* ${data.phone}\n*Interest:* ${data.interest}\n*Message:* ${data.message}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.phone) {
      toast.error("Please fill all required fields", {
        style: { borderRadius: '12px', background: '#1a1a1a', color: '#fff', border: '1px solid rgba(255,255,255,0.1)' },
      });
      return;
    }

    const inquiryPromise = new Promise((resolve, reject) => {
      (async () => {
        try {
          setLoading(true);
          const response = await fetch("https://jnsfitness-be.onrender.com/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
          });

          if (!response.ok) {
            reject("Submission failed. Please try again.");
            return;
          }

          const message = buildWhatsAppMessage(formData);
          const whatsappNumber = "8460479473";
          const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

          setTimeout(() => { window.open(whatsappURL, "_blank"); }, 1200);
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
    <div className="bg-zinc-950 text-white px-0 lg:px-0 font-montserrat">
      <Toaster position="top-center" reverseOrder={false} />

      {/* HERO SECTION WITH BACKGROUND IMAGE */}
      <section className="relative h-[70vh] w-full flex items-center justify-center overflow-hidden bg-zinc-950 rounded-3xl shadow-2xl mt-4">
        <div className="absolute inset-0 z-0">
          <img
            src={gymHero}
            className="w-full h-full object-cover object-center opacity-40 scale-105"
            alt="Gym Background"
          />
          {/* Gradients to ensure text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/80 via-zinc-950/40 to-zinc-950 z-[1]" />
          <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] z-[2]" />
        </div>

        <div className="relative z-10 flex flex-col justify-center items-center px-6 text-center">
          <motion.span 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }}
            className="inline-block text-xs uppercase tracking-[0.3em] text-indigo-400 mb-4 font-bold"
          >
            Elite Fitness Club
          </motion.span>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black tracking-tighter bg-gradient-to-r from-indigo-400 via-indigo-200 to-white bg-clip-text text-transparent uppercase leading-none"
          >
            Gym Is <span className="text-white">Open 💪</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-gray-300 text-sm md:text-lg leading-relaxed max-w-xl mx-auto font-medium"
          >
            Experience premium facilities in Sector 51, Gurgaon. 
            Our fitness hub is fully operational and welcoming new members.
          </motion.p>

          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <span className="px-6 py-2 text-xs font-bold uppercase tracking-widest rounded-full bg-green-500/10 text-green-400 border border-green-500/30 backdrop-blur-md">
              Currently Operating
            </span>
            <span className="px-6 py-2 text-xs font-bold uppercase tracking-widest rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/30 animate-pulse backdrop-blur-md">
              Join Today
            </span>
          </div>
        </div>
      </section>

      {/* QUICK INFO SECTION */}
      <section className="py-24 grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { icon: <FaDumbbell />, title: "Modern Gear", desc: "Top-tier strength and cardio equipment." },
          { icon: <FaClock />, title: "Flexible Hours", desc: "Open early to late for your convenience." },
          { icon: <FaHeartbeat />, title: "Health First", desc: "Clean, hygienic and safe workout space." }
        ].map((item, i) => (
          <div key={i} className="p-8 bg-white/5 border border-white/10 rounded-[2rem] text-center hover:border-indigo-500/50 transition-all group">
            <div className="text-3xl text-indigo-500 mb-4 flex justify-center group-hover:scale-110 transition-transform">{item.icon}</div>
            <h3 className="text-lg font-black uppercase tracking-tight mb-2">{item.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* ENQUIRE SECTION */}
      <section className="max-w-7xl mx-auto">
        <div className="mb-12">
          <span className="text-indigo-500 font-bold tracking-widest uppercase text-[10px] block mb-2">Join The Club</span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-none">
            Get In <span className="text-indigo-500">Touch</span>
          </h2>
          <p className="text-gray-400 mt-4 text-base md:text-lg font-medium leading-relaxed">
            Start your fitness journey today. Drop us a message for membership plans, 
            personal training sessions, or a free day-pass.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pb-20">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-6 bg-white/5 backdrop-blur-lg border border-white/10 p-8 md:p-12 rounded-[2.5rem] flex flex-col justify-between"
          >
            <div className="text-left">
              <span className="text-indigo-500 font-bold tracking-widest uppercase text-[10px] block mb-2">Location & Timings</span>
              <h2 className="text-2xl md:text-3xl font-black tracking-tight uppercase mb-10">
                Fitness <span className="text-indigo-500">HQ</span>
              </h2>
              <div className="space-y-8">
                <ContactInfo icon={<FaMapMarkerAlt />} title="Location" detail="Sector 51, Gurgaon" />
                <ContactInfo icon={<FaPhone />} title="Phone" detail="+91 84604 79473" />
                <ContactInfo icon={<FaClock />} title="Timing" detail="5 AM - 10 PM (Daily)" />
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-6 bg-white/5 backdrop-blur-lg border border-white/10 p-8 md:p-12 rounded-[2.5rem] shadow-2xl flex flex-col justify-center"
          >
            <h2 className="text-3xl font-black tracking-tight uppercase mb-6">
              Claim a <span className="text-indigo-500">Pass</span>
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input required minLength="3" name="name" value={formData.name} onChange={handleChange} type="text" placeholder="Full Name" className="w-full bg-zinc-950/50 border border-white/10 rounded-xl px-5 py-3 text-sm text-white focus:border-indigo-500 outline-none transition-all" />
                <input required pattern="[0-9]{10}" name="phone" value={formData.phone} onChange={handleChange} type="tel" placeholder="Phone (10-digit)" className="w-full bg-zinc-950/50 border border-white/10 rounded-xl px-5 py-3 text-sm text-white focus:border-indigo-500 outline-none transition-all" />
              </div>
              <select required name="interest" value={formData.interest} onChange={handleChange} className="w-full bg-zinc-950/50 border border-white/10 rounded-xl px-5 py-3 text-white text-sm appearance-none outline-none cursor-pointer focus:border-indigo-500 transition-all">
                <option value="GYM">Gym Membership</option>
                <option value="Personal Training">Personal Training</option>
                <option value="General Inquiry">General Inquiry</option>
              </select>
              <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Tell us about your fitness goals..." rows="2" className="w-full bg-zinc-950/40 border border-white/10 rounded-xl px-5 py-3 text-sm text-white resize-none outline-none focus:border-indigo-500 transition-all" />
              
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

export default FitnessClub;