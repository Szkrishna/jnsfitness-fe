/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaMapMarkerAlt, FaUserCheck, FaPeopleArrows, FaSnowflake, FaPhone, FaDumbbell, FaClock, FaHeartbeat, FaRunning, FaBolt, FaUserNinja, FaLayerGroup, FaUsers } from "react-icons/fa";
// Importing the requested background image
import gymHero from "../assets/images/fitness_studio/gym_img2.jpeg";
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
        <h4 className="text-[12px] font-black uppercase tracking-[0.2em] text-gray-500 mb-1">{title}</h4>
        <p className="text-gray-200 font-bold text-lg leading-tight">{detail}</p>
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

function FitnessClub() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    membership: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const buildWhatsAppMessage = (data) => {
    return `*New Gym Inquiry*\n\n*Name:* ${data.name}\n*Phone:* ${data.phone}\n*Gym Membership:* ${data.membership}\n*Message:* ${data.message}`;
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
          const response = await fetch("https://jnsfitness-be.onrender.com/api/gymPage", {
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
      <section className="relative min-h-[40vh] md:min-h-[65vh] w-full flex items-center justify-center overflow-hidden bg-zinc-950 rounded-3xl shadow-2xl mt-4">
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


        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-center max-w-4xl"
        >
          <span className="text-indigo-300 font-bold tracking-[0.5em] uppercase text-xs block mb-4">
            Strength Meets Heritage
          </span>

          <h1 className="text-3xl sm:text-5xl md:text-7xl font-black tracking-tighter leading-tight mb-6">
            JNS FITNESS STUDIO 🏋️‍♂️
          </h1>

          <p className="text-gray-300 text-sm sm:text-lg max-w-2xl mx-auto font-medium">
            At JNS, fitness is not just a routine; it is part of our DNA. Building on our decade-long legacy as North India’s premier badminton academy, we have expanded to provide a high-energy, premium gym experience in the heart of Sector 51, Gurugram.
            We don't just offer machines; we offer a transformation journey backed by the same discipline and professional standards that have produced champion athletes for over 10 years.
            Our Specialized Zones
          </p>
        </motion.div>
      </section>

      {/* QUICK INFO SECTION */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="pt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        <FeatureCard
          icon={<FaDumbbell className="text-3xl" />}
          title="The Power Floor"
          desc="Dedicated strength and weight-lifting zones equipped with premium machines to build raw power and endurance."
        />

        <FeatureCard
          icon={<FaRunning className="text-3xl" />}
          title="Cardio & Stamina Zone"
          desc="Advanced treadmills and ellipticals engineered for heart health, stamina improvement, and fat loss."
        />

        <FeatureCard
          icon={<FaBolt className="text-3xl" />}
          title="CrossFit & Functional Arena"
          desc="A high-energy open-plan arena designed for functional training, agility drills, and HIIT workouts."
        />

        <FeatureCard
          icon={<FaUserNinja className="text-3xl" />}
          title="Martial Arts Studio"
          desc="Train under T.L. Rao, a Seoul-trained Grandmaster with 40+ years of Taekwondo and discipline-based combat training."
        />
      </motion.section>

      {/* this section for further text  */}

      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="pt-20 max-w-7xl mx-auto px-4 md:px-0"
      >
        {/* Section Header */}
        <motion.div
          variants={itemVariants}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-black tracking-tight uppercase mt-2">
            Why Train <span className="text-indigo-500">at JNS?</span>
          </h2>
          <div className="h-[2px] w-20 bg-indigo-600 mt-4 mx-auto"></div>
          <p className="text-gray-400 text-sm mt-4">
            More than a gym — a complete performance-driven sports ecosystem.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              icon: <FaUserCheck />,
              title: "Certified Guidance",
              desc: "Work with expert trainers who provide personalized fitness plans tailored to your specific body goals."
            },
            {
              icon: <FaPeopleArrows />,
              title: "Diverse Group Classes",
              desc: "Break the monotony with high-energy sessions including Zumba, Yoga, and Aerobics."
            },
            {
              icon: <FaLayerGroup />,
              title: "A Holistic Ecosystem",
              desc: "As a JNS member, combine your gym workouts with access to 12 elite badminton courts and recovery spaces including seating and café areas."
            },
            {
              icon: <FaSnowflake />,
              title: "Prime Comfort",
              desc: "Our 3,600 sq. ft. fully air-conditioned facility is hygienic, spacious, and equipped with clean washrooms and ample parking."
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="relative p-6 md:p-8 bg-white/5 border border-white/10 
                rounded-[1.75rem] hover:border-indigo-500/50 transition-all duration-300 group">
              {/* Accent Line */}
              <div className="absolute left-0 top-8 bottom-8 w-1 bg-indigo-500/60 rounded-full" />

              <div className="flex gap-5 items-center pl-4 ">
                <div className="text-3xl text-indigo-500 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>

                <div>
                  <h3 className="text-lg font-bold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ENQUIRE SECTION */}
      <section className="pt-20 max-w-7xl mx-auto">
        <div className="mb-8">
          <span className="font-bold tracking-widest uppercase text-xs">Join The Club</span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight uppercase mt-2">Get In <span className="text-indigo-500">Touch</span></h2>
          <div className="h-[2px] w-20 bg-indigo-600 mt-4 mx-auto"></div>
          <p className="text-gray-400 text-sm mt-4">Start your fitness journey today. Drop us a message for membership plans,
            personal training sessions, or a free day-pass.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
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
              <select required name="membership" value={formData.membership} onChange={handleChange} className="w-full bg-zinc-950/50 border border-white/10 rounded-xl px-5 py-3 text-white text-sm appearance-none outline-none cursor-pointer focus:border-indigo-500 transition-all">
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