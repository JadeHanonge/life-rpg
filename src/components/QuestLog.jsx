import { useState, useContext } from 'react'



export default function QuestLog() {
  const { player, setPlayer } = useContext(PlayerContext)
  const [quests, setQuests] = useState((questsData)) 
  
  function toggleQuest(type, id) {
    // On clone les quests et on prépare les updates
    setQuests(prev => {
      const updatedType = prev[type].map(q => {
        if (q.id === id) {
          const newDone = !q.done
          const xpChange = newDone ? q.reward.xp : -q.reward.xp
          const statChange = {}
          Object.keys(q.reward.stat).forEach(stat => {
            statChange[stat] = newDone ? q.reward.stat[stat] : -q.reward.stat[stat]
          })
  
          // MAJ du player immédiatement **hors du closure de map**
          setPlayer(prevPlayer => {
            const newStats = { ...prevPlayer.stats }
              Object.keys(statChange).forEach(stat => {
                newStats[stat] += statChange[stat]/2
              })
              const newXp = Math.max(0, prevPlayer.xp + xpChange/2)
              return { ...prevPlayer, xp: newXp, stats: newStats }
          })
  
          return { ...q, done: newDone }
        }
        return q
      })
  
      return { ...prev, [type]: updatedType }
    })
  }
  
  const questTypes = ['daily', 'weekly', 'main', 'side', 'rest']

  return (
    <div className="card">
      {questTypes.map(type => (
        <div key={type} className="quest-section">
          <h3>{type.toUpperCase()}</h3>
          <ul>
            {quests[type].map(q => (
              <li key={q.id}>
                <label>
                  <input
                    type="checkbox"
                    checked={q.done}
                    onChange={() => toggleQuest(type, q.id)}
                  />
                  {q.text} ({q.reward.xp} XP)
                </label>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <p>✨ XP total : {player.xp}</p>
    </div>
  )
}
