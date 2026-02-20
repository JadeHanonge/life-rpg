import { useEffect, useState } from "react"
import { getQuestType, getPlayerStats, addQuest } from "../services/api";
import './AddQuestForm.css'

export default function AddQuestForm() {
    const [questType, setQuestType] = useState([]);
    const [playerStats, setPlayerStats] = useState([]);
    const [loading, setLoading] = useState(true);
    const [render, setRender] = useState(false);

    useEffect(() => {
        getQuestType()
            .then(setQuestType)
            .catch(console.error)
            .finally(() => setLoading(false));
    })

    useEffect(() => {
        getPlayerStats()
            .then(setPlayerStats)
            .catch(console.error)
            .finally(() => setLoading(false));
    }, []);

    //console.log("quest type: ", questType);


    function addQuestbdd(formData) {
        const name = formData.get("name");
        const type = formData.get("type");
        const xp = formData.get("xp");
        const stat = formData.get("stats");
        const statPoint = formData.get("statPoint")
        addQuest(name, type, {"xp":xp, "stats": {[stat]:statPoint}})
        setRender(prev => !prev);
    }



    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <form action={addQuestbdd}>
            <label>
                Name :
                <input name="name" />
            </label>
            <select name="type">
                {questType.map(type => (
                    <option key={type.id} value={type.id}>{type.name}</option>
                ))}
            </select>
            <label>
                Xp :
                <input name="xp" />
            </label>
            <div className="rewards">
                <select name="stats">
                    {playerStats.map(stat => (
                        <option key={stat.id} value={stat.name}>{stat.name}</option>
                    ))}
                </select>
                <input name="statPoint"/>
            </div>
            <button type="submit">ADD</button>
        </form>
    )

}