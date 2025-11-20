import React from 'react'
import { Play, Heart, Share2, Download } from 'lucide-react'

export const SectionHeader = ({ title, action }) => (
  <div className="flex items-center justify-between mb-4">
    <h3 className="text-zinc-100 font-semibold tracking-wide">{title}</h3>
    {action && <button className="text-emerald-400 hover:text-emerald-300 text-sm">{action}</button>}
  </div>
)

export const HorizontalList = ({ children }) => (
  <div className="flex items-stretch gap-4 overflow-x-auto no-scrollbar pb-2 -mx-1 px-1">
    {children}
  </div>
)

export const SongCard = ({ cover, title, artist }) => (
  <div className="group relative w-44 shrink-0">
    <div className="aspect-square rounded-2xl overflow-hidden shadow-lg shadow-black/40 bg-white/5 border border-white/10">
      <img src={cover} alt="" className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform" />
    </div>
    <div className="mt-2">
      <p className="text-sm text-zinc-100 truncate">{title}</p>
      <p className="text-xs text-zinc-400 truncate">{artist}</p>
    </div>
    <button className="absolute bottom-10 right-3 p-3 rounded-full bg-emerald-500 text-black shadow-xl shadow-emerald-500/30 opacity-0 group-hover:opacity-100 transition-opacity">
      <Play size={18} />
    </button>
  </div>
)

export const AlbumCard = ({ cover, title, artist }) => (
  <div className="group relative">
    <div className="aspect-square rounded-2xl overflow-hidden shadow-lg shadow-black/40 bg-white/5 border border-white/10">
      <img src={cover} alt="" className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform" />
    </div>
    <div className="mt-2">
      <p className="text-sm text-zinc-100 truncate">{title}</p>
      <p className="text-xs text-zinc-400 truncate">{artist}</p>
    </div>
    <button className="absolute bottom-10 right-3 p-3 rounded-full bg-emerald-500 text-black shadow-xl shadow-emerald-500/30 opacity-0 group-hover:opacity-100 transition-opacity">
      <Play size={18} />
    </button>
  </div>
)

export const ArtistCard = ({ photo, name }) => (
  <div className="group relative w-40 shrink-0">
    <div className="aspect-square rounded-full overflow-hidden shadow-lg shadow-black/40 bg-white/5 border border-white/10">
      <img src={photo} alt="" className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform" />
    </div>
    <p className="mt-2 text-sm text-zinc-100 text-center truncate">{name}</p>
  </div>
)

export const PlayerBar = () => (
  <div className="fixed bottom-16 md:bottom-4 left-0 right-0">
    <div className="mx-auto max-w-3xl px-4">
      <div className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur shadow-lg shadow-black/30 p-3 flex items-center gap-3">
        <div className="w-12 h-12 rounded-lg overflow-hidden">
          <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?q=80&w=600&auto=format&fit=crop" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-xs text-zinc-300 truncate">Now Playing</p>
          <p className="text-sm text-zinc-100 truncate">Sahra Raat – Ustad Allah Bakhsh</p>
          <div className="mt-1 h-1 w-full bg-white/10 rounded">
            <div className="h-full w-1/3 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded"></div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-2 rounded-lg hover:bg-white/10 text-zinc-300"><Heart size={18} /></button>
          <button className="p-2 rounded-lg hover:bg-white/10 text-zinc-300"><Share2 size={18} /></button>
          <button className="p-2 rounded-lg hover:bg-white/10 text-zinc-300"><Download size={18} /></button>
        </div>
      </div>
    </div>
  </div>
)
