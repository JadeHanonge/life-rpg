import { createContext, useState, useEffect } from 'react'
import { loadGame, saveGame } from '../data/saveGame'
import { defaultPlayer } from '../data/player'

export const PlayerContext = createContext()

export function PlayerProvider({ children }) {
  const saved = loadGame()
  const [player, setPlayer] = useState(saved?.player || defaultPlayer)

  useEffect(() => {
    saveGame({ ...(saved || {}), player })
  }, [player])

  return (
    <PlayerContext.Provider value={{ player, setPlayer }}>
      {children}
    </PlayerContext.Provider>
  )
}
