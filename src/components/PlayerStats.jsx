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
        {playerStats.map(([key, value]) => (
          <li key={key}>
            {key.charAt(0).toUpperCase() + key.slice(1)}: {value}
          </li>
        ))}
      </ul>
    </div>
  )
}
