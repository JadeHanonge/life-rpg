import { Routes, Route, Link } from 'react-router-dom'
import AvatarPage from './pages/AvatarPage'
import QuestLogPage from './pages/QuestLogPage'
import {useState } from "react"

export default function App() {

  const [isAuth, setIsAUth] = useState(false);


  function testAuth(formData) {
    const pseudo = formData.get("pseudo");
    const password = formData.get("password");
    if (pseudo == import.meta.env.VITE_ADMIN_PSEUDO && password == import.meta.env.VITE_ADMIN_PASSWORD) {
      setIsAUth(true);
    }
  }


  if (!isAuth) {
    return (
      <form action={testAuth}>
        <label>
          Pseudo :
          <input name="pseudo" />
        </label>
        <label>
          Password :
          <input type="password" name="password" />
        </label>
        <button type='submit'>Log in</button>
      </form>
    )
  }

  if (isAuth) {
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
}
