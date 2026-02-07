/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import toast, { Toaster } from "react-hot-toast";
import {
  FaMapMarkerAlt, FaPhone, FaHistory, FaHotel, FaUsers, FaStar
} from "react-icons/fa";
import jnsLogo from "../assets/jns_logo.jpeg";

// Leaflet Marker Fix
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import { useState } from "react";

const DefaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
};

function About() {
  const position = [28.4255, 77.0650];
  const [formData, setFormData] = useState({
    name: "", gender: "", phone: "", email: "", interest: "", message: ""
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const buildWhatsAppMessage = (data) => {
    return `*New Inquiry Received*\n\n*Name:* ${data.name}\n*Gender:* ${data.gender}\n*Phone:* ${data.phone}\n*Email:* ${data.email}\n*Interest:* ${data.interest}\n*Message:* ${data.message}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.interest) {
      toast.error("Please fill all required fields", {
        style: { borderRadius: '12px', background: '#1a1a1a', color: '#fff', border: '1px solid rgba(255,255,255,0.1)' },
      });
      return;
    }

    // eslint-disable-next-line no-async-promise-executor
    const inquiryPromise = new Promise(async (resolve, reject) => {
      try {
        setLoading(true);
        const response = await fetch("https://jnsfitness-be.onrender.com/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData)
        });

        if (!response.ok) {
          reject("Failed to submit request. Please try again after some time.");
          return;
        }

        const message = buildWhatsAppMessage(formData);
        const whatsappNumber = "8460479473";
        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

        setTimeout(() => { window.open(whatsappURL, "_blank"); }, 1200);
        setFormData({ name: "", gender: "", phone: "", email: "", interest: "", message: "" });
        resolve("Success");
      } catch (err) {
        reject("Failed to submit request. Please try again after some time.");
      } finally {
        setLoading(false);
      }
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

      {/* 1. HERO SECTION - Uses the exact same rounded corners and gradient logic as Home */}
      <section className="relative min-h-[55vh] md:min-h-[60vh] w-full flex items-center justify-center overflow-hidden bg-zinc-600 rounded-3xl shadow-lg">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src={jnsLogo}
            alt="JNS Fitness Background"
            className="absolute inset-0 w-full h-full object-cover object-center opacity-40 scale-105"
          />
          <div className="absolute inset-0 bg-zinc-950/60 z-[1]" />
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/40 to-black z-[1]" />
          <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] animate-pulse z-[2]" />
          <div className="absolute bottom-20 -right-20 w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-[100px] z-[2]" />
        </div>

        <div className="relative z-10 text-center max-w-4xl px-6 py-12">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-indigo-300 font-bold tracking-[0.3em] uppercase text-xs mb-4 block"
          >
            Integrated Lifestyle Destination
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-8xl font-black tracking-tighter leading-none"
          >
            <span className="bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent block">
              JNS ECOSYSTEM.
            </span>
            <span className="block text-white text-2xl md:text-4xl font-extrabold tracking-widest mt-2 md:mt-4">
              LIVE • TRAIN • CONNECT.
            </span>

          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-6 text-gray-200 text-base md:text-xl max-w-2xl mx-auto leading-relaxed font-medium drop-shadow-lg"
          >
            JNS is a unique, integrated lifestyle destination in Sector 51, Gurugram,
            bringing together sports, fitness, and community living within a single,
            self-contained ecosystem designed for modern urban life.
          </motion.p>
        </div>

      </section>

      {/* 2. CORE BUSINESS STATS - Section header matched to Home "Ecosystem" */}
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

      {/* 3. CONTACT & FORM SECTION */}
      <section className="pt-20 max-w-7xl flex flex-col text-center">
        <div className="mb-8">
          <span className="font-bold tracking-widest uppercase text-xs">Neighborhood</span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight uppercase mt-2">Connect <span className="text-indigo-500">JNS</span></h2>
          <div className="h-[2px] w-20 bg-indigo-600 mt-4 mx-auto"></div>
          <p className="text-gray-400 text-sm mt-4">Reach out to JNS to explore an integrated lifestyle experience built around fitness, sports, and a like-minded community in Sector 51, Gurugram.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-6 bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-[2rem] flex flex-col justify-between"
          >
            <div className="text-left"> {/* Ensures text starts at the left */}
              <span className="text-indigo-500 font-bold tracking-widest uppercase text-[10px] block mt-1">
                Reach Out
              </span>
              <h2 className="text-2xl md:text-3xl font-black tracking-tight uppercase mt-2 mb-10">
                Connect <span className="text-indigo-500">JNS</span>
              </h2>

              {/* Contact List aligned to start */}
              <div className="space-y-8">
                <ContactInfo icon={<FaMapMarkerAlt />} title="Location" detail="Sector 51, Gurgaon" />
                <ContactInfo icon={<FaPhone />} title="Phone" detail="08460479473" />
                <ContactInfo
                  icon={<FaUsers />}
                  title="Residents"
                  detail="Unisex Accommodations (Facilities via Add-on)"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-6 bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-[2rem] shadow-2xl flex flex-col justify-center"
          >
            <h2 className="text-3xl font-black tracking-tight uppercase mb-6 text-center md:text-left">
              Book a <span className="text-indigo-500">Visit</span>
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Name with validation */}
                <input
                  type="text"
                  name="name"
                  required
                  minLength="3"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="w-full bg-zinc-950/50 border border-white/10 rounded-xl px-5 py-3 text-sm text-white focus:border-indigo-500 outline-none transition-all"
                />
                {/* Phone with pattern validation (10 digits) */}
                <input
                  type="tel"
                  name="phone"
                  required
                  pattern="[0-9]{10}"
                  title="Please enter a valid 10-digit phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone (10-digit)"
                  className="w-full bg-zinc-950/50 border border-white/10 rounded-xl px-5 py-3 text-sm text-white focus:border-indigo-500 outline-none transition-all"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full bg-zinc-950/50 border border-white/10 rounded-xl px-5 py-3 text-sm text-white focus:border-indigo-500 outline-none transition-all"
                />
                <div className="relative group">
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="w-full bg-zinc-950/50 border border-white/10 rounded-xl px-5 py-3 text-white text-sm appearance-none outline-none cursor-pointer focus:border-indigo-500 transition-all"
                  >
                    <option value="">Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
              </div>

              {/* Interest with required validation */}
              <select
                name="interest"
                required
                value={formData.interest}
                onChange={handleChange}
                className="w-full bg-zinc-950/50 border border-white/10 rounded-xl px-5 py-3 text-white text-sm appearance-none outline-none cursor-pointer focus:border-indigo-500 transition-all"
              >
                <option value="">Select Interest (Required)</option>
                <option value="Badminton">Badminton</option>
                <option value="GYM">GYM</option>
                <option value="Coliving">Coliving</option>
              </select>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Special Requirements..."
                rows="2"
                className="w-full bg-zinc-950/40 border border-white/10 rounded-xl px-5 py-3 text-sm text-white resize-none focus:border-indigo-500 outline-none transition-all"
              />

              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 rounded-xl uppercase tracking-[0.2em] text-xs flex justify-center items-center gap-2 transition-colors"
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

      {/* 4. MAP SECTION */}
      <section className="pt-20 max-w-7xl flex flex-col text-center">
        <div className="mb-8">
          <span className="font-bold tracking-widest uppercase text-xs">Location Guide</span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight uppercase mt-2">Find <span className="text-indigo-500">Us</span></h2>
          <div className="h-[2px] w-20 bg-indigo-600 mt-4 mx-auto"></div>
          <p className="text-gray-400 text-sm mt-4">
            Located in the prime residential hub of <strong>Sector 51, Gurgaon</strong>.
            JNS is a thoughtfully designed lifestyle destination that brings together fitness, sports, and community living in one well-connected environment.
          </p>
        </div>

        <div className="rounded-[2rem] overflow-hidden border border-white/10 h-[350px] relative z-0">
          <MapContainer center={position} zoom={15} scrollWheelZoom={false} style={{ height: "100%", width: "100%", filter: "invert(100%) hue-rotate(180deg) brightness(0.95)" }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={position}><Popup>JNS Elite Stay</Popup></Marker>
          </MapContainer>
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

function ContactInfo({ icon, title, detail }) {
  return (
    <div className="flex items-center justify-start gap-4">
      <div className="w-20 h-12 shrink-0 rounded-xl bg-indigo-600/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 text-xl">{icon}</div>
      <div className="flex flex-col">
        <h4 className="text-[12px] font-black uppercase tracking-[0.2em] text-gray-500 mb-1">{title}</h4>
        <p className="text-gray-200 font-bold text-lg leading-tight">{detail}</p>
      </div>
    </div>
  );
}

export default About;