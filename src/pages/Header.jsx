import { NavLink } from 'react-router-dom';
import jnsLogo from '../assets/jns_logo.jpeg';

const navItemBase =
  'relative flex items-center justify-center h-10 w-[100px] lg:w-[120px] text-xs lg:text-sm font-medium rounded-md transition-all duration-300';

function Header() {
  const linkClasses = ({ isActive }) =>
    `${navItemBase} ${isActive
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

  return (
    /* Changed bg-zinc-950/95 to a slightly more transparent black for better blur effect */
    <header className="sticky top-0 z-50 bg-zinc-950/80 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-4 flex items-center justify-between">
        {/* Logo Section */}
        <NavLink to="/" className="flex items-center gap-3 group">
          <div className="relative w-12 h-12 md:w-16 md:h-16 flex items-center justify-center overflow-hidden rounded-3xl border border-white/10 group-hover:border-indigo-500/50 transition-colors">
            <img
              src={jnsLogo}
              alt="JNS Logo"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>

          {/* Optional: Keeping the text brand next to the logo for SEO and clarity */}
          {/* <span className="text-xl font-black tracking-tighter bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent hidden sm:block">
            JNS <span className="text-indigo-400">FITNESS</span>
          </span> */}
        </NavLink>

        {/* Navigation - Hidden on very small screens, or add overflow-x-auto */}
        <nav className="hidden md:flex gap-1 lg:gap-3 bg-white/5 p-1 rounded-xl border border-white/5">
          <NavLink to="/" end className={linkClasses}>
            Home
          </NavLink>
          <NavLink to="/about" className={linkClasses}>
            About
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

        {/* Mobile Call to Action (Optional) */}
        <div className="md:hidden">
          <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
            <div className="w-4 h-[2px] bg-white shadow-[0_4px_0_white,-0_8px_0_white]" />
          </div>
        </div>

      </div>
    </header>
  );
}

export default Header;