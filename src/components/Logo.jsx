import React from 'react'

function Logo({ size = 28, className = '' }) {
  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      <div
        className="relative"
        style={{ width: size, height: size }}
        aria-hidden
      >
        <svg viewBox="0 0 64 64" className="w-full h-full">
          <defs>
            <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#22e58b" />
              <stop offset="50%" stopColor="#22d3ee" />
              <stop offset="100%" stopColor="#a78bfa" />
            </linearGradient>
          </defs>
          <rect x="0" y="0" width="64" height="64" rx="16" fill="url(#grad)" opacity="0.12" />
          <path d="M26 12c0 0 12 6 12 18 0 9-7 15-14 18-4 2-6 4-6 4 0 0 2-7 8-11 5-3 8-6 8-11 0-6-8-10-8-10z" fill="url(#grad)"/>
          <circle cx="44" cy="22" r="3.5" fill="url(#grad)" />
        </svg>
      </div>
      <span className="font-semibold tracking-wide text-zinc-100">Brahui Saaz</span>
    </div>
  )
}

export default Logo
