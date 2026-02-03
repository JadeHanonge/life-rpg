import { useState, useEffect } from 'react'
import './Avatar.css'
import { getPlayer } from '../services/api';


export default function Avatar() {
    const [player, setPlayer] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        getPlayer()
            .then(setPlayer)
            .catch(console.error)
            .finally(() => setLoading(false));
    }, []);

    //console.log("player: ", player);

    const info = player?.[0];
    //console.log("info: ",info);

    if (loading) {
        return <div>Loading...</div>;
    }
    

    return (
        <div>
            <h2 style={{ textAlign: 'center' }}>🧍{info.pseudo} </h2>

            <div className="avatar-center">
                <div className="avatar-circle">🙂</div>

                <p className="avatar-level">Level {info.level} Adventurer</p>
                <div className="xp-bar-container">
                    <div
                        className="xp-bar-fill"
                        style={{ width: `${(info.xp / 100) * 100}%` }}
                    ></div>
                </div>
                <p>{info.xp} / 100 XP</p>


            </div>

        </div>
    )
}