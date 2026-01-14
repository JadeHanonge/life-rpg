import React from 'react'
import '../pages/AvatarPage.css'

export default function PlayerStats({ stats }) {
  return (
    <div className="card player-stats">
      <h3>📊 Stats</h3>

      <ul>
        {Object.entries(stats).map(([key, value]) => (
          <li key={key}>
            {key.charAt(0).toUpperCase() + key.slice(1)}: {value}
          </li>
        ))}
      </ul>
    </div>
  )
}
