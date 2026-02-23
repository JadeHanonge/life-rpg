import { useEffect, useState } from 'react'
import '../pages/AvatarPage.css'
import { getPlayerStats, updateStatPoint } from '../services/api';

export default function PlayerStats() {
  const [playerStats, setPlayerStats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [render, setRender] = useState(false);

  useEffect(() => {
    getPlayerStats()
      .then(setPlayerStats)
      .catch(console.error)
      .finally(() => setLoading(false));

  }, []);

  function togglePlus(id) {
    playerStats.forEach(stat => {
      if (stat.id == id) {
        if (stat.point < 10) {
          updateStatPoint(1, stat.point + 1, stat.id)
          stat.point++;


        }
      }
    })
    setRender(prev => !prev);
  }

  function toggleMinus(id) {
    playerStats.forEach(stat => {
      if (stat.id == id) {
        if (stat.point > 0) {
          updateStatPoint(1, stat.point - 1, stat.id)
          stat.point--;
        }
      }
    })
    setRender(prev => !prev);
  }

  if (loading) {
    return <div>Loading...</div>;
  }


  return (
    <div className="card player-stats">
      <h3>📊 Stats</h3>
      <ul>
        {playerStats.map(stat => (
          <li key={stat.name}>
            {stat.name}: {stat.point}
            <div>
              <input
                type="button"
                value='+'
                onClick={() => togglePlus(stat.id)}
              />
              <input
                type="button"
                value='-'
                onClick={() => toggleMinus(stat.id)}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
