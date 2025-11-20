import React from 'react'
import Layout from './Layout'
import { SectionHeader } from './Sections'
import { Waves, Flame, Sun, Moon, CloudSun, Wind, Music2, BadgePercent, Trophy } from 'lucide-react'

const categories = ['Mood','Genre','Regional','Top Charts']
const stations = Array.from({ length: 12 }).map((_, i) => ({
  name: `Station ${i+1}`,
  color: ['from-emerald-400 to-lime-300','from-cyan-400 to-sky-300','from-fuchsia-400 to-violet-400'][i%3],
  icon: [Sun, Moon, CloudSun, Wind, Music2, Flame, Waves, BadgePercent, Trophy][i%9],
}))

export default function Radio(){
  return (
    <Layout header={<Header />}> 
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {stations.map((s, i)=> (
          <div key={i} className="rounded-2xl p-4 border border-white/10 bg-white/5 shadow-lg shadow-black/30">
            <div className={`h-28 rounded-xl bg-gradient-to-br ${s.color} relative overflow-hidden`}></div>
            <div className="-mt-6 flex items-center gap-3">
              <div className="p-3 rounded-xl bg-white/10 border border-white/10 backdrop-blur">
                {React.createElement(s.icon, { size: 18, className: 'text-white' })}
              </div>
              <div>
                <p className="text-zinc-100">{s.name}</p>
                <p className="text-zinc-400 text-xs">Curated for you</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  )
}

function Header(){
  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-zinc-100 text-lg font-semibold">Radio</h2>
        <div className="flex gap-2">
          {categories.map(c => (
            <button key={c} className="px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-zinc-300 hover:bg-white/10 hover:text-white text-sm">{c}</button>
          ))}
        </div>
      </div>
    </div>
  )
}
