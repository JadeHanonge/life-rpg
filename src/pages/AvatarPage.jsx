import { useContext } from 'react'
import Avatar from '../components/Avatar'
import PlayerStats from '../components/PlayerStats'
import { PlayerContext } from '../context/PlayerContext'
import MainSkills from '../components/MainSkills'
import PassiveSkills from '../components/PassiveSkills'
import './AvatarPage.css'

export default function AvatarPage() {
  const {player} = useContext(PlayerContext)
  const skillTypes = ['main', 'passive']

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>🧍 Player Character</h2>
      
      <div className="avatar-container">
        <div className="stats-column">
          <PlayerStats stats={player.stats}/>
        </div>

        <div className="avatar-column">
          <Avatar xp={player.xp}/>
        </div>

        <div className="skills-column">
          <MainSkills main={player.mainSkills}/>
          <PassiveSkills passive={player.passiveSkills}/>
        </div>
      </div>
    </div>
  )
}
