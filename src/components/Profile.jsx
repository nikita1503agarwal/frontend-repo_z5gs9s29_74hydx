import React from 'react'
import Layout from './Layout'
import { SectionHeader, HorizontalList, SongCard, AlbumCard } from './Sections'

export default function Profile(){
  return (
    <Layout header={<Header />}> 
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <div className="rounded-2xl p-5 bg-white/5 border border-white/10">
            <div className="flex items-center gap-4">
              <img className="w-16 h-16 rounded-full object-cover" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=400&auto=format&fit=crop" />
              <div>
                <p className="text-zinc-100 text-lg">Zehra B.</p>
                <p className="text-zinc-400 text-sm">Premium Listener</p>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3 text-center">
              {[
                { label: 'Liked', value: '124' },
                { label: 'Albums', value: '37' },
                { label: 'Played', value: '2.1k' },
              ].map((x)=> (
                <div key={x.label} className="rounded-xl p-3 bg-white/5 border border-white/10">
                  <p className="text-zinc-100 text-lg">{x.value}</p>
                  <p className="text-zinc-400 text-xs">{x.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="md:col-span-2">
          <SectionHeader title="Liked Songs" action="View all" />
          <HorizontalList>
            {Array.from({ length: 10 }).map((_, i)=> (
              <SongCard key={i} cover={`https://picsum.photos/seed/like${i}/400/400`} title={`Liked ${i+1}`} artist="Various" />
            ))}
          </HorizontalList>

          <div className="mt-6">
            <SectionHeader title="Visited Albums" action="View history" />
            <HorizontalList>
              {Array.from({ length: 8 }).map((_, i)=> (
                <AlbumCard key={i} cover={`https://picsum.photos/seed/album${i}/400/400`} title={`Album ${i+1}`} artist="Artist" />
              ))}
            </HorizontalList>
          </div>

          <div className="mt-6">
            <SectionHeader title="Recently Played" action="View all" />
            <HorizontalList>
              {Array.from({ length: 8 }).map((_, i)=> (
                <SongCard key={i} cover={`https://picsum.photos/seed/recent${i}/400/400`} title={`Track ${i+1}`} artist="Artist" />
              ))}
            </HorizontalList>
          </div>

          <div className="mt-6">
            <SectionHeader title="Playlists" action="Create new" />
            <HorizontalList>
              {Array.from({ length: 6 }).map((_, i)=> (
                <AlbumCard key={i} cover={`https://picsum.photos/seed/pl${i}/400/400`} title={`Playlist ${i+1}`} artist="Mix" />
              ))}
            </HorizontalList>
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
        <h2 className="text-zinc-100 text-lg font-semibold">Profile</h2>
        <div className="flex gap-2">
          <span className="px-3 py-1 rounded-full text-xs bg-white/5 border border-white/10 text-zinc-300">Culturally Rich</span>
          <span className="px-3 py-1 rounded-full text-xs bg-white/5 border border-white/10 text-zinc-300">Minimal Typography</span>
        </div>
      </div>
    </div>
  )
}
