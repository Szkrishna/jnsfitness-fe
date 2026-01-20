/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import jnsLogo from "../assets/jns_logo.jpeg";
import {
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full mt-12 border-t border-white/20 pt-10 pb-8 bg-zinc-950">
      {/* INNER CONTAINER */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
        {/* TOP SECTION */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 text-left">
          {/* 1. Brand Section */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              {/* Minimalist Logo container */}
              <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center shadow-lg shadow-indigo-500/10">
                <img
                  src={jnsLogo}
                  alt="JNS Logo"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              {/* Renamed to JNS FITNESS */}
              <h2 className="text-lg font-bold tracking-tighter text-white">
                JNS <span className="text-indigo-400">FITNESS</span>
              </h2>
            </div>

            {/* Description reduced to a minimal quote */}
            <p className="text-gray-300 text-[12px] tracking-wide uppercase mt-1">
              Discipline is the bridge to excellence.
            </p>
          </div>

          {/* 2. Contact Details Section - Updated Email */}
          <div className="flex flex-col gap-3 text-left">
            <h3 className="text-xs uppercase tracking-[0.2em] text-gray-300 font-bold">
              Reach Us
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-center gap-3 group">
                <FaMapMarkerAlt className="text-indigo-400 group-hover:scale-110 transition-transform" />
                <span>Sector 51, Gurgaon (Open 24 Hours)</span>
              </li>
              <li className="flex items-center gap-3 group">
                <FaPhone className="text-indigo-400 group-hover:scale-110 transition-transform" />
                <span>+91 08460479473</span>
              </li>
              <li className="flex items-center gap-3 group">
                <FaEnvelope className="text-indigo-400 group-hover:scale-110 transition-transform" />
                {/* Updated Email Address */}
                <span>help@jnsfitness.com</span>
              </li>
            </ul>
          </div>

          {/* 3. Follow Us Section - Updated Instagram Link */}
          <div className="flex flex-col gap-4 text-left">
            <h3 className="text-xs uppercase tracking-[0.2em] text-gray-300 font-bold">
              Follow Us
            </h3>
            <div className="flex justify-center">
              <SocialIcon
                icon={<FaInstagram size={24} />}
                link="https://www.instagram.com/jns_coliving?igsh=cXJ1eWpmZXg4ZTlr"
                hoverColor="hover:text-pink-500"
              />
            </div>
          </div>
        </div>

        {/* DIVIDER + BOTTOM SECTION */}
        <div className="mt-10 relative">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          <div className="pt-8 pb-4 flex flex-col md:flex-row justify-between items-start gap-4 text-xs uppercase tracking-[0.15em] text-gray-500 font-medium text-left">
            <p className="hover:text-gray-300 transition-colors cursor-default">
              © 2026 JNS Elite Stay. All rights reserved.
            </p>

            <div className="flex items-center gap-3 self-start">
              <span className="w-1 h-1 rounded-full bg-indigo-500 animate-pulse" />
              <p className="text-indigo-400/80 tracking-[0.2em]">
                Premium Living & Professional Hospitality
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// SOCIAL ICON COMPONENT
const SocialIcon = ({ icon, link, hoverColor }) => (
  <motion.a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ y: -3, scale: 1.1 }}
    className={`w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-gray-400 transition-all duration-300 ${hoverColor} border border-white/10 shadow-lg cursor-pointer`}
  >
    {icon}
  </motion.a>
);

export default Footer;