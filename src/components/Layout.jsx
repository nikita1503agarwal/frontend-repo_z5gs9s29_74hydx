import React from 'react'
import Navbar from './Navbar'

function Layout({ children, header }) {
  return (
    <div className="min-h-screen bg-[#0b0f14]">
      <div className="pointer-events-none fixed inset-0" aria-hidden>
        <div className="absolute inset-0 [background:radial-gradient(1200px_600px_at_50%_-10%,rgba(34,229,139,0.08),transparent),radial-gradient(900px_500px_at_80%_10%,rgba(34,211,238,0.06),transparent),radial-gradient(800px_400px_at_20%_0%,rgba(167,139,250,0.08),transparent)]" />
      </div>
      <div className="relative">
        <div className="mx-auto max-w-6xl px-4 pt-6 pb-28 md:pb-24">
          {header}
          {children}
        </div>
      </div>
      <Navbar />
    </div>
  )
}

export default Layout
