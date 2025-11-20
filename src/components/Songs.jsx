import React from 'react'
import Layout from './Layout'
import { SectionHeader } from './Sections'
import { Waveform, ArrowUpDown } from 'lucide-react'

const songs = Array.from({ length: 20 }).map((_, i) => ({
  title: `Song ${i+1}`,
  artist: `Artist ${i+1}`,
  mood: ['Calm','Energetic','Melancholy','Focus'][i%4],
  popularity: Math.floor(Math.random()*100),
  date: `202${i%4}-0${(i%9)+1}-1${i%9}`,
}))

export default function Songs() {
  return (
    <Layout header={<Header />}> 
      <div className="rounded-2xl bg-white/5 border border-white/10 overflow-hidden">
        <div className="grid grid-cols-12 px-4 py-3 text-xs uppercase tracking-wide text-zinc-400">
          <div className="col-span-6">Title</div>
          <div className="col-span-2">Artist</div>
          <div className="col-span-2">Mood</div>
          <div className="col-span-2 text-right">Popularity</div>
        </div>
        <div>
          {songs.map((s, i) => (
            <div key={i} className="grid grid-cols-12 items-center px-4 py-3 border-t border-white/5 hover:bg-white/5">
              <div className="col-span-6 flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 rounded-lg bg-white/10 grid place-items-center text-emerald-400"><Waveform size={18} /></div>
                <div className="min-w-0">
                  <p className="text-zinc-100 truncate">{s.title}</p>
                  <p className="text-zinc-400 text-xs truncate">Weekly Trending • Top Brahui</p>
                </div>
              </div>
              <div className="col-span-2 text-zinc-300 truncate">{s.artist}</div>
              <div className="col-span-2 text-zinc-300 truncate">{s.mood}</div>
              <div className="col-span-2 text-zinc-300 text-right">{s.popularity}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <SectionHeader title="Weekly Trending" />
          <ul className="space-y-2">
            {songs.slice(0,8).map((s,i)=>(
              <li key={i} className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-3">
                  <span className="text-zinc-400 w-6">{i+1}</span>
                  <span className="text-zinc-100">{s.title}</span>
                </div>
                <span className="text-zinc-400 text-sm">{s.artist}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <SectionHeader title="Top Brahui Songs" />
          <ul className="space-y-2">
            {songs.slice(8,16).map((s,i)=>(
              <li key={i} className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10">
                <span className="text-zinc-100">{s.title}</span>
                <span className="text-zinc-400 text-sm">{s.artist}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  )
}

function Header(){
  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-zinc-100 text-lg font-semibold">Songs</h2>
        <div className="flex gap-2">
          {['Popularity','Release Date','Mood'].map(x=> (
            <button key={x} className="px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-zinc-300 hover:bg-white/10 hover:text-white text-sm flex items-center gap-2">
              <ArrowUpDown size={16} /> {x}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
