/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaMapMarkerAlt, FaPhone, FaQuoteLeft, FaCheckCircle, FaHeartbeat, FaRocket, FaUsers, FaArrowRight } from "react-icons/fa";
import gymHero from "../assets/images/elite_stay/elite_img1.jpeg";
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
    <div className="bg-zinc-950 text-white px-0 lg:px-0 font-montserrat">
      <Toaster position="top-center" reverseOrder={false} />

      {/* HERO SECTION - OUR STORY */}
      {/* <section className="relative w-full pt-20 pb-12 overflow-hidden">
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
      </section> */}

      <section className="relative min-h-[70vh] w-full flex items-center justify-center overflow-hidden bg-zinc-950 rounded-3xl shadow-2xl mt-4">
        
        <div className="absolute inset-0 z-0">
          <img
            src={gymHero} 
            alt="JNS Living Background"
            className="w-full h-full object-cover object-center opacity-35 scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/90 via-zinc-950/60 to-zinc-950 z-[1]" />
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] z-[2]" />
        </div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-center max-w-4xl"
        >
          <span className="text-indigo-400 font-black tracking-[0.5em] uppercase text-xs block mb-2 mt-8">
            3 Years of Redefining Living
          </span>

          <h1 className="text-3xl sm:text-5xl md:text-7xl font-black tracking-tighter leading-tight mb-4 uppercase">
            Born from Experience,
            <span className="text-indigo-500">Built for You.</span>
          </h1>

          <p className="text-gray-300 text-sm sm:text-lg max-w-2xl mx-auto font-medium mb-4">
            Three years ago, our founder moved to the city to pursue a career. Like many young professionals, they faced a frustrating reality: finding a place to stay was easy, but finding a place to live was nearly impossible.
            Between unresponsive landlords, hidden maintenance costs, cramped spaces, and the isolation of living in a new city, the "ideal lifestyle" felt out of reach. There was a clear gap between basic accommodation and a home that actually supported a busy, modern life.
            JNS Co-living was created to bridge that gap.
          </p>
        </motion.div>
      </section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="pt-12 md:pt-16 lg:pt-20 pb-6 md:pb-8"
      >
        <div className="max-w-6xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Text */}
          <motion.div variants={itemVariants} className="space-y-6">
            <span className="text-indigo-500 font-black uppercase tracking-[0.35em] text-xs">
              The Vision
            </span>

            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">
              More Than <span className="text-indigo-600">Just Living</span>
            </h2>

            <p className="text-gray-300 text-lg font-medium leading-relaxed">
              We didn’t want to provide just four walls and a bed.
              We wanted to design a sanctuary where your space works as hard as you do.
            </p>

            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
              By integrating our decade-long legacy in sports excellence,
              JNS Co-Living blends comfort, community, and performance —
              creating a lifestyle built for ambition, balance, and growth.
            </p>
          </motion.div>

          {/* Visual Card */}
          <motion.div
            variants={itemVariants}
            className="relative bg-white/5 border border-white/10 rounded-[3rem] p-10 backdrop-blur"
          >
            <FaQuoteLeft className="absolute top-8 left-8 text-4xl text-indigo-500/20" />

            <p className="text-gray-300 font-medium leading-relaxed pt-6">
              “Your home should fuel your growth, not slow it down.
              That belief drives every decision we make at JNS.”
            </p>

            <div className="mt-6 text-sm uppercase tracking-widest text-indigo-400 font-black">
              — JNS Philosophy
            </div>
          </motion.div>

        </div>
      </motion.section>
      
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="pt-6 md:pt-8 lg:pt-12 pb-20"
      >
        {/* Header */}
        <motion.div
          variants={itemVariants}
          className="mb-14 text-center flex flex-col items-center"
        >
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">
            Why <span className="text-indigo-600">JNS Co-Living</span>
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl font-medium text-center">
            Designed from lived experience, not just business logic.
          </p>
        </motion.div>


        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              icon: <FaCheckCircle />,
              title: "The Founders’ Standard",
              desc: "Every room, service, and amenity is something the founder personally wished for while starting out — ergonomic furniture, reliable Wi-Fi, and zero compromise on quality."
            },
            {
              icon: <FaHeartbeat />,
              title: "Integrated Wellness",
              desc: "Residents get direct access to JNS’s sports ecosystem — premium badminton courts and a professional fitness studio — because physical health drives mental performance."
            },
            {
              icon: <FaRocket />,
              title: "Zero-Hassle Living",
              desc: "Bills, maintenance, cleaning, and security are handled seamlessly so you can focus on growth, not daily friction."
            },
            {
              icon: <FaUsers />,
              title: "Built-In Community",
              desc: "Live among professionals, athletes, and founders — not strangers. JNS is an ecosystem, not just accommodation."
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="relative bg-white/5 border border-white/10 
                   rounded-[2.25rem] p-8 md:p-10 
                   hover:border-indigo-500/40 transition-all"
            >
              {/* Accent */}
              <div className="absolute left-0 top-8 bottom-8 w-1 bg-indigo-500/60 rounded-full" />

              <div className="flex gap-6 pl-4">
                <div className="text-3xl text-indigo-500 mt-1">
                  {item.icon}
                </div>

                <div>
                  <h3 className="text-xl font-black uppercase tracking-tight mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

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