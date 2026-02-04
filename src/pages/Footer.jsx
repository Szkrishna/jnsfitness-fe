/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import jnsLogo from "../assets/jns_logo.jpeg";
import {
  FaInstagram,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full border-t border-white/20 pt-8 pb-6 bg-zinc-950">
      {/* INNER CONTAINER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        {/* TOP SECTION */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10 text-center md:text-left">

          {/* 1. Brand Section */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center shadow-lg shadow-indigo-500/10">
                <img
                  src={jnsLogo}
                  alt="JNS Logo"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h2 className="text-lg font-bold tracking-tighter text-white">
                JNS <span className="text-indigo-400">FITNESS</span>
              </h2>
            </div>

            <p className="text-gray-400 text-[11px] sm:text-[12px] tracking-wide uppercase mt-1 max-w-xs">
              Discipline is the bridge to excellence.
            </p>
          </div>

          {/* 2. Contact Section */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <h3 className="text-xs uppercase tracking-[0.25em] text-gray-300 font-bold">
              Reach Us
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-center justify-center md:justify-start gap-3">
                <FaMapMarkerAlt className="text-indigo-400" />
                <span>Sector 51, Gurgaon</span>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3">
                <FaPhone className="text-indigo-400" />
                <span>+91 08460479473</span>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3">
                <FaEnvelope className="text-indigo-400" />
                <span>help@jnsfitness.com</span>
              </li>
            </ul>
          </div>

          {/* 3. Social Section */}
          <div className="flex flex-col items-center gap-3">
            <h3 className="text-xs uppercase tracking-[0.25em] text-gray-300 font-bold">
              Follow Us
            </h3>
            <SocialIcon
              icon={<FaInstagram size={22} />}
              link="https://www.instagram.com/jns_coliving?igsh=cXJ1eWpmZXg4ZTlr"
              hoverColor="hover:text-pink-500"
            />
          </div>
        </div>

        {/* DIVIDER */}
        <div className="mt-10 relative">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          {/* BOTTOM SECTION */}
          <div className="pt-6 flex flex-col items-center md:flex-row md:justify-between gap-4 text-[10px] sm:text-xs uppercase tracking-[0.15em] text-gray-500 font-medium text-center md:text-left">
            <p>© 2026 JNS Elite Stay. All rights reserved.</p>

            <div className="flex items-center gap-2">
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