import React from 'react'
import Layout from './Layout'
import Logo from './Logo'
import { SectionHeader, HorizontalList, SongCard, AlbumCard, ArtistCard, PlayerBar } from './Sections'

function Tag({ children }) {
  return <span className="px-3 py-1 rounded-full text-xs bg-white/5 border border-white/10 text-zinc-300">{children}</span>
}

const covers = [
  'https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=800&auto=format&fit=crop',
]

export default function Home() {
  return (
    <Layout
      header={
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <Logo />
            <div className="hidden md:block text-zinc-400">Modern Brahui music streaming</div>
          </div>
          <div className="flex items-center gap-2">
            <Tag>Premium</Tag>
            <Tag>Brahui</Tag>
            <Tag>Neon</Tag>
          </div>
        </div>
      }
    >
      <div className="rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-4 md:p-6 shadow-xl shadow-black/30 mb-6">
        <div className="flex items-center gap-4 overflow-x-auto no-scrollbar">
          {covers.map((c, i) => (
            <div key={i} className="relative shrink-0 w-[260px] h-[160px] rounded-xl overflow-hidden bg-white/5 border border-white/10">
              <img className="w-full h-full object-cover" src={c} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                <div>
                  <p className="text-zinc-100 font-medium">Trending</p>
                  <p className="text-zinc-300 text-xs">Handpicked weekly</p>
                </div>
                <button className="px-3 py-1.5 rounded-full bg-emerald-400 text-black text-xs font-semibold shadow-emerald-400/30 shadow-xl">Play</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <SectionHeader title="Recommended Playlists" action="View all" />
      <HorizontalList>
        {Array.from({ length: 10 }).map((_, i) => (
          <AlbumCard key={i} cover={covers[i % covers.length]} title={`Desert Vibes ${i+1}`} artist="Brahui Mix" />
        ))}
      </HorizontalList>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <SectionHeader title="Featured Brahui Albums" action="See more" />
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <AlbumCard key={i} cover={covers[(i+1) % covers.length]} title={`Saaz Collection ${i+1}`} artist="Various" />
            ))}
          </div>
        </div>
        <div>
          <SectionHeader title="Popular Weekly Songs" action="Charts" />
          <HorizontalList>
            {Array.from({ length: 10 }).map((_, i) => (
              <SongCard key={i} cover={covers[(i+2)%covers.length]} title={`Rohi ${i+1}`} artist="Ustad " />
            ))}
          </HorizontalList>
        </div>
      </div>

      <div className="mt-6">
        <SectionHeader title="Continue Listening" action="View history" />
        <HorizontalList>
          {Array.from({ length: 12 }).map((_, i) => (
            <SongCard key={i} cover={covers[(i+3)%covers.length]} title={`Dastaan ${i+1}`} artist="Classic" />
          ))}
        </HorizontalList>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <SectionHeader title="Genres" />
          <HorizontalList>
            {['Brahui Folk','Pop','Regional','Lo-Fi','Chill','Dance','Classical','Mood Booster'].map((g) => (
              <div key={g} className="shrink-0 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-zinc-200 shadow-lg shadow-black/30">
                {g}
              </div>
            ))}
          </HorizontalList>
        </div>
        <div>
          <SectionHeader title="Moods" />
          <HorizontalList>
            {['Calm','Energetic','Melancholy','Focus','Party','Sunset','Rainy'].map((g) => (
              <div key={g} className="shrink-0 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-zinc-200 shadow-lg shadow-black/30">
                {g}
              </div>
            ))}
          </HorizontalList>
        </div>
      </div>

      <PlayerBar />
    </Layout>
  )
}
