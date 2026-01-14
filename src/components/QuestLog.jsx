import { useEffect, useState } from 'react'
import { loadGame, saveGame } from '../data/saveGame'

const defaultQuest = {
  title: 'Live a Richer Life',
  description: 'Focus on experiences, growth, and meaning.',
  miniQuests: [
    { id: 1, text: 'Define my values', done: false, xp: 10 },
    { id: 2, text: 'Start a creative habit', done: false, xp: 10 },
    { id: 3, text: 'Plan one meaningful experience', done: false, xp: 10 }
  ]
}

export default function QuestLog() {
  const saved = loadGame()
  const [quest, setQuest] = useState(saved?.quest || defaultQuest)
  const [xp, setXp] = useState(saved?.xp || 0)

  useEffect(() => {
    saveGame({ ...(saved || {}), quest, xp })
  }, [quest, xp])

  function toggleMiniQuest(id) {
    let xpChange = 0

    setQuest(q => {
      const updated = q.miniQuests.map(mq => {
        if (mq.id === id) {
          const newDone = !mq.done
          xpChange = newDone ? mq.xp : -mq.xp
          return { ...mq, done: newDone }
        }
        return mq
      })

      return { ...q, miniQuests: updated }
    })

    setXp(prevXp => Math.max(0, prevXp + xpChange))
  }

  function resetXp() {
    setXp(0)
  }

  return (
    <div className="card">
      <h2>🏆 Main Quest (Year)</h2>
      <p><strong>{quest.title}</strong></p>
      <p>{quest.description}</p>

      <ul>
        {quest.miniQuests.map(mq => (
          <li key={mq.id}>
            <label>
              <input
                type="checkbox"
                checked={mq.done}
                onChange={() => toggleMiniQuest(mq.id)}
              />
              {mq.text}
            </label>
          </li>
        ))}
      </ul>

      <p>✨ XP: {xp}</p>

      <button
        onClick={resetXp}
        style={{
          marginTop: '1rem',
          background: '#ffe3e3',
          border: 'none',
          borderRadius: '8px',
          padding: '0.5rem 1rem',
          cursor: 'pointer'
        }}
      >
        🧪 Reset XP (test)
      </button>
    </div>
  )
}
