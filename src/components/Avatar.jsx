import { useContext } from 'react'
import { PlayerContext } from '../context/PlayerContext'
import './Avatar.css'


export default function Avatar({xp}){
    const { setPlayer } = useContext(PlayerContext)
    
    function resetXp() {
        setPlayer(prev => ({ ...prev, xp: 0 })) 
    }


    return(
        <div>
            <h2 style={{ textAlign: 'center' }}>🧍 Player Character</h2>     
            
            <div className="avatar-center">
                <div className="avatar-circle">🙂</div>
                <p className="avatar-level">Level 1 Adventurer</p>

                <div className="xp-bar-container">
                    <div
                        className="xp-bar-fill"
                        style={{ width: `${(xp / 100) * 100}%` }}
                    ></div>
                </div>
                <p>{xp} / 100 XP</p>
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
            
        </div>
    )
}