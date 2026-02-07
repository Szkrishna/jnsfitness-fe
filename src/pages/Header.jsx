import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import jnsLogo from '../assets/jns_logo.jpeg';

const navItemBase =
  'relative flex items-center justify-center h-10 w-full md:w-[100px] lg:w-[120px] text-sm font-medium rounded-md transition-all duration-300';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const linkClasses = ({ isActive }) =>
    `${navItemBase} ${
      isActive
        ? `
          text-indigo-200
          bg-indigo-600/10
          ring-1 ring-indigo-400/20
          shadow-[0_0_15px_rgba(99,102,241,0.3)]
          after:absolute
          after:bottom-1
          after:h-[2px]
          after:w-2/5
          after:bg-indigo-400
          after:rounded-full
        `
        : `
          text-gray-300
          hover:text-white
          hover:bg-white/5
          after:absolute
          after:bottom-1
          after:h-[2px]
          after:w-0
          after:bg-transparent
          after:transition-all
          hover:after:w-2/5
          hover:after:bg-gray-500
        `
    }`;

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-zinc-950/80 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-4 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-3 group" onClick={closeMenu}>
          <div className="relative w-12 h-12 md:w-16 md:h-16 overflow-hidden rounded-3xl border border-white/10 group-hover:border-indigo-500/50 transition-colors">
            <img
              src={jnsLogo}
              alt="JNS Logo"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-1 lg:gap-3 bg-white/5 p-1 rounded-xl border border-white/5">
          <NavLink to="/" end className={linkClasses}>
            Home
          </NavLink>
          <NavLink to="/about" className={linkClasses}>
            About Us
          </NavLink>
          <NavLink to="/sports-academy" className={linkClasses}>
            Badminton
          </NavLink>
          <NavLink to="/fitness-club" className={linkClasses}>
            Fitness
          </NavLink>
          <NavLink to="/coliving" className={linkClasses}>
            Coliving
          </NavLink>
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden w-10 h-10 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center"
        >
          <div className="relative w-5 h-5">
            <span
              className={`absolute left-0 top-1/2 w-full h-[2px] bg-white transition-all ${
                isOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 w-full h-[2px] bg-white transition-all ${
                isOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 w-full h-[2px] bg-white transition-all ${
                isOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="px-6 pb-6 flex flex-col gap-2 bg-zinc-950/95 border-t border-white/10">
          <NavLink to="/" end className={linkClasses} onClick={closeMenu}>
            Home
          </NavLink>
          <NavLink to="/about" className={linkClasses} onClick={closeMenu}>
            About Us
          </NavLink>
          <NavLink to="/sports-academy" className={linkClasses} onClick={closeMenu}>
            Badminton
          </NavLink>
          <NavLink to="/fitness-club" className={linkClasses} onClick={closeMenu}>
            Gym
          </NavLink>
          <NavLink to="/coliving" className={linkClasses} onClick={closeMenu}>
            Coliving
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;