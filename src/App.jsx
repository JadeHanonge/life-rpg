import { Routes, Route, Link } from 'react-router-dom'
import AvatarPage from './pages/AvatarPage'
import QuestLogPage from './pages/QuestLogPage'

export default function App() {
  return (
    <div className="app">
      <nav className="nav">
        <Link to="/">🧍 Avatar</Link>
        <Link to="/quests">🏆 Quests</Link>
      </nav>

      <Routes>
        <Route path="/" element={<AvatarPage />} />
        <Route path="/quests" element={<QuestLogPage />} />
      </Routes>
    </div>
  )
}
