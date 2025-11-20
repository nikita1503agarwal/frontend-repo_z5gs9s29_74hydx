import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import Albums from './Albums'
import Artists from './Artists'
import Songs from './Songs'
import Radio from './Radio'
import Player from './Player'
import Profile from './Profile'

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/albums" element={<Albums />} />
      <Route path="/artists" element={<Artists />} />
      <Route path="/songs" element={<Songs />} />
      <Route path="/radio" element={<Radio />} />
      <Route path="/player" element={<Player />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  )
}
