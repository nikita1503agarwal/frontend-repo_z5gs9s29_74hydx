import React from 'react'
import Layout from './Layout'
import { Heart, Share2, Download, SkipBack, SkipForward, PlayCircle, PauseCircle, Shuffle, Repeat } from 'lucide-react'

export default function Player(){
  return (
    <Layout header={<Header />}> 
      <div className="max-w-md mx-auto text-center">
        <div className="rounded-3xl overflow-hidden shadow-2xl shadow-emerald-500/20 border border-white/10 bg-white/5">
          <div className="relative">
            <img className="w-full aspect-square object-cover" src="https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?q=80&w=1200&auto=format&fit=crop" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
          <div className="p-5">
            <p className="text-zinc-100 text-lg">Sahra Raat</p>
            <p className="text-zinc-400 text-sm">Ustad Allah Bakhsh</p>

            <div className="mt-4 h-2 bg-white/10 rounded-full">
              <div className="h-full w-1/3 rounded-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-fuchsia-400 transition-all"></div>
            </div>

            <div className="mt-4 flex items-center justify-center gap-4">
              <button className="p-2 rounded-lg hover:bg-white/10 text-zinc-300"><Shuffle /></button>
              <button className="p-2 rounded-lg hover:bg-white/10 text-zinc-300"><SkipBack /></button>
              <button className="p-1 rounded-full bg-white/5 border border-white/10 text-white"><PlayCircle size={56} /></button>
              <button className="p-2 rounded-lg hover:bg-white/10 text-zinc-300"><SkipForward /></button>
              <button className="p-2 rounded-lg hover:bg-white/10 text-zinc-300"><Repeat /></button>
            </div>

            <div className="mt-4 flex items-center justify-center gap-3">
              <button className="p-2 rounded-lg hover:bg-white/10 text-zinc-300"><Heart /></button>
              <button className="p-2 rounded-lg hover:bg-white/10 text-zinc-300"><Share2 /></button>
              <button className="p-2 rounded-lg hover:bg-white/10 text-zinc-300"><Download /></button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

function Header(){
  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-zinc-100 text-lg font-semibold">Now Playing</h2>
        <div className="flex gap-2">
          <span className="px-3 py-1 rounded-full text-xs bg-white/5 border border-white/10 text-zinc-300">Smooth Animation</span>
          <span className="px-3 py-1 rounded-full text-xs bg-white/5 border border-white/10 text-zinc-300">Neon Accents</span>
        </div>
      </div>
    </div>
  )
}
