import { useEffect, useState } from 'react'
import '../pages/AvatarPage.css'
import { getPlayerStats } from '../services/api';

export default function PlayerStats() {
  const [playerStats, setPlayerStats] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPlayerStats()
      .then(setPlayerStats)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Chargement...</p>
  

  return (
    <div className="card player-stats">
      <h3>📊 Stats</h3>

      <ul>
        {playerStats.map(stat => (
          <li key={stat.name}>
            {stat.name}: {stat.point}
          </li>
        ))}
      </ul>
    </div>
  )
}
