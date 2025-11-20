import React from 'react'
import Layout from './Layout'
import { ArtistCard, SectionHeader, AlbumCard } from './Sections'

const filters = ['Top Artists','Brahui Artists','International Artists']
const photos = [
  'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1493106641515-6b5631de4bb9?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1521312707765-4f96fbe4d02f?q=80&w=800&auto=format&fit=crop',
]

export default function Artists() {
  return (
    <Layout header={<Header />}> 
      <SectionHeader title="Featured Artists" />
      <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
        {Array.from({ length: 12 }).map((_, i) => (
          <ArtistCard key={i} photo={photos[i%photos.length]} name={`Artist ${i+1}`} />
        ))}
      </div>

      <SectionHeader title="Artist Highlights" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="rounded-2xl p-4 bg-white/5 border border-white/10">
            <div className="flex items-center gap-4">
              <img src={photos[i%photos.length]} className="w-16 h-16 rounded-full object-cover" />
              <div>
                <p className="text-zinc-100">Artist {i+1}</p>
                <p className="text-zinc-400 text-sm">Top Songs & Albums</p>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3">
              {Array.from({ length: 3 }).map((_, j) => (
                <AlbumCard key={j} cover={photos[(i+j)%photos.length]} title={`Hit ${j+1}`} artist={`Artist ${i+1}`} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Layout>
  )
}

function Header() {
  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-zinc-100 text-lg font-semibold">Artists</h2>
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
