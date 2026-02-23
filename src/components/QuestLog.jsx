import { useState, useEffect } from 'react'
import { getAllQuests, getPlayer, updateXp, updateStateQuest, deleteQuests} from '../services/api'
import './AddQuestForm.css'


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

  function toggleQuest(id) {

    quests.forEach(q => {
      if (q.id == id) {
        const date = new Date().toISOString().split("T")[0];
        const playerxp = Number(p.xp);
        const questXp = Number(q.rewards.xp)
        //if quest done add xp if undone substract xp
        if (!q.done) {
          //update data in database
          updateStateQuest(q.id, true, date)
          updateXp(1, playerxp + questXp);

          //update data in component
          q.done = true;
          p.xp = playerxp + questXp;
        } else {
          updateStateQuest(q.id, false, date);
          updateXp(1, playerxp - questXp);
          q.done = false;
          p.xp = playerxp - questXp;
        }
      }
    });

    //rerender the component to see the changement (not sure if it actually works)
    setRender(prev => !prev);

  }

  function toggleDeleteQuest(id) {

    //create a new array to render
    setQuests(quest =>
      quest.filter(quest => quest.id !== id)
    );

    //delete the quest in the bdd
    deleteQuests(id);
  }

  function getDailyQuests() {
    return quests.filter(q => q.quest_type === "daily");
  }

  function getWeeklyQuests() {
    return quests.filter(q => q.quest_type === "weekly");
  }

  function getMainQuests() {
    return quests.filter(q => q.quest_type === "main");
  }

  function getSideQuests() {
    return quests.filter(q => q.quest_type === "side");
  }

  function getRestQuests() {
    return quests.filter(q => q.quest_type === "rest");
  }

  const daily = getDailyQuests();
  const weekly = getWeeklyQuests();
  const main = getMainQuests();
  const side = getSideQuests();
  const rest = getRestQuests();

  return (
    <div className="card">

      <ul>
        <h3>Daily</h3>
        {daily.map(d => (
          <li key={d.id}>
            <label>
              <input
                type="checkbox"
                checked={d.done}
                onChange={() => toggleQuest(d.id)}
              />
              {d.quest_name}
            </label>
            <p>{d.rewards.xp}</p>
            <button onClick={() => toggleDeleteQuest(d.id)}>DELETE</button>
          </li>
        ))}
      </ul>
      <ul>
        <h3>Weekly</h3>
        {weekly.map(d => (
          <li key={d.id}>
            <label>
              <input
                type="checkbox"
                checked={d.done}
                onChange={() => toggleQuest(d.id)}
              />
              {d.quest_name}
            </label>
            <p>{d.rewards.xp}</p>
            <button onClick={() => toggleDeleteQuest(d.id)}>DELETE</button>
          </li>
        ))}
      </ul>
      <ul>
        <h3>Main</h3>
        {main.map(d => (
          <li key={d.id}>
            <label>
              <input
                type="checkbox"
                checked={d.done}
                onChange={() => toggleQuest(d.id)}
              />
              {d.quest_name}
            </label>
            <p>{d.rewards.xp}</p>
            <button onClick={() => toggleDeleteQuest(d.id)}>DELETE</button>
          </li>
        ))}
      </ul>
      <ul>
        <h3>Side</h3>
        {side.map(d => (
          <li key={d.id}>
            <label>
              <input
                type="checkbox"
                checked={d.done}
                onChange={() => toggleQuest(d.id)}
              />
              {d.quest_name}
            </label>
            <p>{d.rewards.xp}</p>
            <button onClick={() => toggleDeleteQuest(d.id)}>DELETE</button>
          </li>
        ))}
      </ul>
      <ul>
        <h3>Rest</h3>
        {rest.map(d => (
          <li key={d.id}>
            <label>
              <input
                type="checkbox"
                checked={d.done}
                onChange={() => toggleQuest(d.id)}
              />
              {d.quest_name}
            </label>
            <p>{d.rewards.xp}</p>
            <button onClick={() => toggleDeleteQuest(d.id)}>DELETE</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
