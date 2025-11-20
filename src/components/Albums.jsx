import React from 'react'
import Layout from './Layout'
import { SectionHeader, AlbumCard } from './Sections'

const filters = ['Trending','Latest','Regional','Brahui Folk','Pop','Mood']
const covers = [
  'https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=800&auto=format&fit=crop',
]

export default function Albums() {
  return (
    <Layout header={<Header />}> 
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
        {Array.from({ length: 16 }).map((_, i) => (
          <AlbumCard key={i} cover={covers[i%covers.length]} title={`Album ${i+1}`} artist={`Artist ${i+1}`} />
        ))}
      </div>
    </Layout>
  )
}

function Header() {
  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-zinc-100 text-lg font-semibold">Albums</h2>
        <button className="text-emerald-400 hover:text-emerald-300 text-sm">View All</button>
      </div>
      <div className="flex gap-2 overflow-x-auto no-scrollbar">
        {filters.map(f => (
          <button key={f} className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-zinc-300 hover:bg-white/10 hover:text-white whitespace-nowrap">
            {f}
          </button>
        ))}
      </div>
    </div>
  )
}
