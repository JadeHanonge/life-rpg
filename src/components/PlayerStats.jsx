import { useEffect, useState } from 'react'
import { loadGame, saveGame } from '../data/saveGame'

const defaultStats = {
  EN: 70,
  FO: 60,
  ES: 65,
  CO: 50,
  LX: 0
}

export default function PlayerStats() {
  const saved = loadGame()
  const [stats, setStats] = useState(saved?.stats || defaultStats)

  useEffect(() => {
    saveGame({ ...(saved || {}), stats })
  }, [stats])

  return (
    <div className="card">
      <h2>🧍 Player Stats</h2>
      {Object.entries(stats).map(([key, value]) => (
        <div key={key}>
          <strong>{key}</strong>: {value}
        </div>
      ))}
    </div>
  )
}
