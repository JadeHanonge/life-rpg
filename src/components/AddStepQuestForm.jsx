import { useState, useEffect } from 'react'
import { addStepQuest, getAllQuests } from '../services/api'
export default function AddStepQuestForm() {
    const [quests, setQuests] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getAllQuests()
            .then(setQuests)
            .catch(console.error)
            .finally(() => setLoading(false));
    }, []);


    function addStepQuestForm(formData){
        const quest = formData.get("quest");
        const step = formData.get("step");
        //console.log(`questid: ${quest}, step : ${step}`);
        addStepQuest(quest,step);
        
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <form action={addStepQuestForm}>
            <label>
                quest :
            </label>
            <select name='quest'>
                {quests.map(quest => (
                    <option key={quest.id} value={quest.id}>{quest.quest_name}</option>
                ))}
            </select>
            <label>
                Step :
                <input name='step'/>
            </label>
            <button type="submit">ADD</button>
        </form>
    )



}