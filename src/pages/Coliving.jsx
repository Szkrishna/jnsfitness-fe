/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaMapMarkerAlt, FaPhone, FaQuoteLeft, FaCheckCircle, FaHeartbeat, FaRocket, FaUsers, FaArrowRight } from "react-icons/fa";

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
        <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 mb-1">{title}</h4>
        <p className="text-gray-200 font-bold text-lg leading-tight">{detail}</p>
      </div>
    </div>
  );
}

function Coliving() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    interest: "Coliving Inquiry",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
          const response = await fetch("https://jnsfitness-be.onrender.com/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
          });

          if (!response.ok) throw new Error();

          const message = `*New Coliving Inquiry*\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Message:* ${formData.message}`;
          setTimeout(() => { window.open(`https://wa.me/8460479473?text=${encodeURIComponent(message)}`, "_blank"); }, 1200);
          setFormData({ name: "", phone: "", interest: "Coliving Inquiry", message: "" });
          resolve();
        } catch (err) {
          reject("Submission failed.");
        } finally {
          setLoading(false);
        }
      })();
    });

    toast.promise(inquiryPromise, {
      loading: 'Sending...',
      success: 'Opening WhatsApp...',
      error: 'Error occurred.',
    }, {
      style: { borderRadius: '12px', background: '#1a1a1a', color: '#fff', border: '1px solid rgba(255,255,255,0.1)' },
    });
  };

  return (
    <div className="bg-zinc-950 text-white px-6 md:px-16 lg:px-24 font-montserrat pb-20">
      <Toaster position="top-center" />

      {/* HERO SECTION - OUR STORY */}
      <section className="relative w-full pt-20 pb-12 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] z-0" />
        
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.span 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }}
            className="inline-block text-xs uppercase tracking-[0.4em] text-indigo-500 mb-6 font-black"
          >
            3 Years of Redefining Living
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-black tracking-tighter leading-none mb-8 uppercase"
          >
            Born from Experience, <br />
            <span className="text-indigo-600">Built for You.</span>
          </motion.h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-left mt-16 items-center">
            <motion.div variants={itemVariants} initial="hidden" animate="visible" className="space-y-6">
              <p className="text-xl md:text-2xl text-gray-300 font-medium leading-relaxed">
                Three years ago, our founder moved to the city to pursue a career. 
                Like many young professionals, they faced a frustrating reality: 
                <span className="text-white underline decoration-indigo-500 underline-offset-4"> finding a place to stay was easy, but finding a place to live was nearly impossible.</span>
              </p>
              <p className="text-gray-400 leading-relaxed">
                Between unresponsive landlords, hidden maintenance costs, cramped spaces, and the isolation of living in a new city, 
                the "ideal lifestyle" felt out of reach. JNS Co-living was created to bridge that gap.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} 
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white/5 border border-white/10 p-10 rounded-[3rem] relative"
            >
              <FaQuoteLeft className="absolute top-8 left-8 text-4xl text-indigo-500/20" />
              <h3 className="text-2xl font-black uppercase tracking-tight mb-4 pt-4">The Vision</h3>
              <p className="text-gray-300 leading-relaxed font-medium">
                We didn't just want to provide four walls and a bed. We wanted to build a sanctuary 
                where your living space works as hard as you do. By integrating our 10-year legacy 
                in sports excellence, we created a space where fitness, community, and comfort coexist.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHY WE ARE DIFFERENT GRID */}
      <section className="py-24 border-t border-white/5">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">
            Why We Are <span className="text-indigo-600">Different</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { 
              icon: <FaCheckCircle />, 
              title: "The Founders' Standard", 
              desc: "We only offer spaces we would live in ourselves. From high-speed Wi-Fi that never drops during a meeting to ergonomic furniture, every detail is inspired by the founder's own journey." 
            },
            { 
              icon: <FaHeartbeat />, 
              title: "Integrated Wellness", 
              desc: "Unlike traditional PGs, JNS residents have doorstep access to our Premium Badminton Academy and 3,600 sq. ft. Fitness Studio. We believe a healthy body leads to a productive life." 
            },
            { 
              icon: <FaRocket />, 
              title: "Zero-Hassle Living", 
              desc: "We took the 'difficulties' our founder faced—utility bills, cleaning, security—and automated them. You focus on your career; we’ll handle the rest." 
            },
            { 
              icon: <FaUsers />, 
              title: "A Built-in Community", 
              desc: "No more 'new city' loneliness. At JNS, you are part of an ecosystem of athletes, professionals, and dreamers working towards growth." 
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 p-8 rounded-[2rem] hover:border-indigo-500/40 transition-all group">
              <div className="text-indigo-500 text-3xl mb-6 group-hover:scale-110 transition-transform origin-left">{item.icon}</div>
              <h3 className="text-xl font-black uppercase tracking-tight mb-3">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed font-medium">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CALL TO ACTION / ENQUIRE */}
      <section className="mt-12 bg-indigo-600/5 rounded-[3rem] border border-indigo-500/20 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
          <div className="lg:col-span-5 p-8 md:p-12 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/10">
            <h2 className="text-4xl font-black uppercase tracking-tighter mb-6 leading-none">
              Skip the <br /><span className="text-indigo-500">Struggle.</span>
            </h2>
            <p className="text-gray-400 mb-10 font-medium">
              Join hundreds of professionals who have moved straight into a lifestyle of convenience and growth.
            </p>
            <div className="space-y-6">
              <ContactInfo icon={<FaMapMarkerAlt />} title="Region" detail="Premium Localities, Gurgaon" />
              <ContactInfo icon={<FaPhone />} title="Enquiry" detail="+91 84604 79473" />
            </div>
          </div>

          <div className="lg:col-span-7 p-8 md:p-12">
            <h3 className="text-2xl font-black uppercase tracking-tight mb-6">Request a Site Visit</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input required name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" className="w-full bg-zinc-950 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:border-indigo-500 outline-none transition-all" />
                <input required pattern="[0-9]{10}" name="phone" value={formData.phone} onChange={handleChange} placeholder="10-digit Phone" className="w-full bg-zinc-950 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:border-indigo-500 outline-none transition-all" />
              </div>
              <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Which location are you interested in?" rows="3" className="w-full bg-zinc-950 border border-white/10 rounded-2xl px-6 py-4 text-sm resize-none focus:border-indigo-500 outline-none" />
              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.01 }}
                className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 rounded-2xl uppercase tracking-[0.2em] text-xs flex justify-center items-center gap-3"
              >
                {loading ? "Sending..." : "Check Availability"} <FaArrowRight />
              </motion.button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Coliving;