import { useContext } from 'react'
import Avatar from '../components/Avatar'
import PlayerStats from '../components/PlayerStats'
import './AvatarPage.css'

export default function AvatarPage() {

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>🧍 Player Character</h2>
      
      <div className="avatar-container">
        <div className="stats-column">
          <PlayerStats/>
        </div>

        <div className="avatar-column">
          <Avatar/>
        </div>

      </div>
    </div>
  )
}
