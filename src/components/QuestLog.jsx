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
      if (q.id == id) {
        //console.log("id quest: ", q.id, "quest xp: ", q.rewards.xp, "player xp: ", p.xp);

        //if quest done add xp if undone substract xp
        if (!q.done) {
          //update data in database
          updateStateQuest(q.id, true)
          updateXp(1, p.xp + q.rewards.xp);

          //update data in component
          q.done = true;
          p.xp += q.rewards.xp;
        } else {
          updateStateQuest(q.id, false);
          updateXp(1, p.xp - q.rewards.xp);
          q.done = false;
          p.xp -= q.rewards.xp;
        }

      }
    });

    //rerender the component to see the changement 
    setRender(prev => !prev);

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
          </li>
        ))}
      </ul>
    </div>
  )
}
