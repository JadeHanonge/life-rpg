import { Routes, Route, Link } from 'react-router-dom'
import AvatarPage from './pages/AvatarPage'
import QuestLogPage from './pages/QuestLogPage'
import SkillsListPage from './pages/SkillsListPage'

export default function App() {
  return (
    <div className="app">
      <nav className="nav">
        <Link to="/">🧍 Avatar</Link>
        <Link to="/quests">🏆 Quests</Link>
        <Link to="/skills"> Skills</Link>
      </nav>

      <Routes>
        <Route path="/" element={<AvatarPage />} />
        <Route path="/quests" element={<QuestLogPage />} />
        <Route path="/skills" element={<SkillsListPage />} />
      </Routes>
    </div>
  )
}
