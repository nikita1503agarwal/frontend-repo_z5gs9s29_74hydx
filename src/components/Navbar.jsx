import React from 'react'
import { Home, Disc3, User, Radio, ListMusic, Library, Search, Settings } from 'lucide-react'
import Logo from './Logo'
import { Link, NavLink } from 'react-router-dom'

const navItems = [
  { to: '/', icon: Home, label: 'Home' },
  { to: '/albums', icon: Disc3, label: 'Albums' },
  { to: '/artists', icon: User, label: 'Artists' },
  { to: '/songs', icon: ListMusic, label: 'Songs' },
  { to: '/radio', icon: Radio, label: 'Radio' },
  { to: '/profile', icon: Library, label: 'Profile' },
]

function Navbar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:top-0 md:bottom-auto">
      <div className="mx-auto max-w-6xl px-4">
        <div className="md:mt-4 mb-4 md:mb-0 rounded-2xl backdrop-blur supports-[backdrop-filter]:bg-white/5 bg-white/10 border border-white/10 shadow-lg shadow-black/30">
          <div className="hidden md:flex items-center justify-between px-4 py-3">
            <Link to="/" className="flex items-center gap-3">
              <Logo size={24} />
            </Link>
            <div className="flex items-center gap-1">
              {navItems.map(({ to, icon: Icon, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  className={({ isActive }) => `flex items-center gap-2 px-3 py-2 rounded-xl transition-colors text-sm ${isActive ? 'bg-white/10 text-white' : 'text-zinc-300 hover:text-white hover:bg-white/5'}`}
                >
                  <Icon size={18} />
                  <span>{label}</span>
                </NavLink>
              ))}
              <button className="ml-2 px-3 py-2 rounded-xl text-zinc-300 hover:text-white hover:bg-white/5">
                <Search size={18} />
              </button>
              <button className="px-3 py-2 rounded-xl text-zinc-300 hover:text-white hover:bg-white/5">
                <Settings size={18} />
              </button>
            </div>
          </div>

          <div className="md:hidden grid grid-cols-6 gap-1 px-2 py-2">
            {navItems.map(({ to, icon: Icon, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) => `flex flex-col items-center gap-1 py-2 rounded-xl text-[11px] ${isActive ? 'bg-white/10 text-white' : 'text-zinc-300'}`}
              >
                <Icon size={18} />
                {label}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
