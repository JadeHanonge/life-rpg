import { useState, useEffect } from 'react'
import './Avatar.css'
import { getPlayer, updateLevel } from '../services/api';


export default function Avatar() {
    const [player, setPlayer] = useState([]);
    const [loading, setLoading] = useState(true);
    const [render, setRender] = useState(false);
    


    useEffect(() => {
        getPlayer()
            .then(setPlayer)
            .catch(console.error)
            .finally(() => setLoading(false));
    }, []);

    //console.log("player: ", player);

    //met le player dans un objet (recus dans 1 tableau de 1 seul element)
    const info = player?.[0];
    //console.log("info: ",info);

    function levelUp(){
        if(info.xp> info.max_xp){
            updateLevel(1, info.level+1, info.max_xp+100);
            info.max_xp += 100;
            info.level++;
        }
        

    }

    if (loading) {
        return <div>Loading...</div>;
    }

    levelUp();
    

    return (
        <div>
            <h2 style={{ textAlign: 'center' }}>🧍{info.pseudo} </h2>

            <div className="avatar-center">
                <div className="avatar-circle">🙂</div>

                <p className="avatar-level">Level {info.level} Adventurer</p>
                <div className="xp-bar-container">
                    <div
                        className="xp-bar-fill"
                        style={{ width: `${(info.xp / info.max_xp) * 100}%` }}
                    ></div>
                </div>
                <p>{info.xp} / {info.max_xp} XP</p>


            </div>

        </div>
    )
}