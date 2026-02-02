import { useState, useEffect } from 'react'
import { getAllQuests, getPlayer, updateXp, updateStateQuest } from '../services/api'



export default function QuestLog() {
  const [quests, setQuests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [player, setPlayer] = useState([]);
  const [render, setRender] = useState(false);

  useEffect(() => {
    getAllQuests()
      .then(setQuests)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    getPlayer()
      .then(setPlayer)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const p = player?.[0];

  console.log("quest: ", quests);

  if (loading) {
    return <div>Loading...</div>;
  }


  function toggleQuest(id) {
    
    quests.forEach(q => {
      if(q.id == id){
        let state = false;
        if(!q.done){
          updateStateQuest(q.id, true)
          state = true;
          updateXp(1, p.xp+q.rewards.xp);
        }else{
          updateStateQuest(q.id, false);
          state = false;
          updateXp(1, p.xp-q.rewards.xp);
        }

        q.done = state;
        
        
      }
    });
    
    //rereder the component to see the changement 
    setRender(prev => !prev);
      
  }

  return (
    <div className="card">

      <ul>
        {quests.map(q => (
          <li key={q.id}>
            <label>
              <input
                type="checkbox"
                checked={q.done}
                onChange={() => toggleQuest(q.id)}
              />
              {q.quest_name}
            </label>
            <p>{q.rewards.xp}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
