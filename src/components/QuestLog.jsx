import { useState, useEffect } from 'react'
import { getAllQuests, getPlayer, updateXp, updateStateQuest, deleteQuests, getStepQuest } from '../services/api'
import styles from './QuestLog.module.css'


export default function QuestLog() {
  const [quests, setQuests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [player, setPlayer] = useState([]);
  const [render, setRender] = useState(false);
  const [stepQuest, setStepQuest] = useState({});
  const [questId, setQuestId] = useState(null);

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

  useEffect(() => {
    if (!questId) return;

    getStepQuest(questId)
      .then(steps => {
        setStepQuest(prev => ({
          ...prev,
          [questId]: steps,
        }));
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [questId]);

  //what is this even doing ??
  function ToggleGetStepQuest(quest) {
    setQuestId(prev => (prev === quest ? null : quest));
    // console.log("questId : ", quest);

  }

  const p = player?.[0];

  // console.log("quest: ", quests);

  if (loading) {
    return <div>Loading...</div>;
  }


  function toggleQuest(id) {

    quests.forEach(q => {
      if (q.id == id) {
        // console.log("id quest: ", q.id, "quest xp: ", q.rewards.xp, "player xp: ", p.xp);
        const date = new Date().toISOString().split("T")[0];
        // console.log("date: ", date);
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
        console.log("player xp after thing : ", p.xp);


      }
    });

    //rerender the component to see the changement
    setRender(prev => !prev);

  }

  function toggleDeleteQuest(id) {

    //create a new array to render
    setQuests(quest =>
      quest.filter(quest => quest.id !== id)
    );

    //delete the quest in the bdd
    deleteQuests(id);
    //console.log(`quest ${id} is delete`);

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

  // console.log(`daily: ${daily}, weekly: ${weekly}, main: ${main}, side: ${side}, rest: ${rest}`);




  return (
    <div>
      <div className={styles.card}>
        <ul>
          <h3>Daily</h3>
          {daily.map(d => (
            <li key={d.id}>
              <input
                type="checkbox"
                checked={d.done}
                onChange={() => toggleQuest(d.id)}
              />
              <label>
                {d.quest_name}
              </label>
              <p>{d.rewards.xp}</p>
              {/* <button onClick={() => ToggleGetStepQuest(d.id)}>
              +
            </button>
            {questId === d.id && (
              <div className='steps'>
                {loading && <p>loading...</p>}

                {stepQuest[d.id]?.map(step => (
                  <p key={step.id}>{step.step}</p>
                ))}
              </div>
            )} */}
              <button onClick={() => toggleDeleteQuest(d.id)}>DELETE</button>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.card}>
        <ul>
          <h3>Weekly</h3>
          {weekly.map(d => (
            <li key={d.id}>
              <input
                type="checkbox"
                checked={d.done}
                onChange={() => toggleQuest(d.id)}
              />
              <label>
                {d.quest_name}
              </label>
              <p>{d.rewards.xp}</p>
              <button onClick={() => toggleDeleteQuest(d.id)}>DELETE</button>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.card}>
        <ul>
          <h3>Main</h3>
          {main.map(d => (
            <li key={d.id}>
              <input
                type="checkbox"
                checked={d.done}
                onChange={() => toggleQuest(d.id)}
              />
              <label>
                {d.quest_name}
              </label>
              <p>{d.rewards.xp}</p>
              <button onClick={() => toggleDeleteQuest(d.id)}>DELETE</button>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.card}>
        <ul>
          <h3>Side</h3>
          {side.map(d => (
            <li key={d.id}>
              <input
                type="checkbox"
                checked={d.done}
                onChange={() => toggleQuest(d.id)}
              />
              <label>
                {d.quest_name}
              </label>
              <p>{d.rewards.xp}</p>
              <button onClick={() => toggleDeleteQuest(d.id)}>DELETE</button>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.card}>
        <ul>
          <h3>Rest</h3>
          {rest.map(d => (
            <li key={d.id}>
              <input
                type="checkbox"
                checked={d.done}
                onChange={() => toggleQuest(d.id)}
              />
              <label>
                {d.quest_name}
              </label>
              <p>{d.rewards.xp}</p>
              <button onClick={() => toggleDeleteQuest(d.id)}>DELETE</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
