import './QuestLogPage.css'
import QuestLog from '../components/QuestLog'
import AddQuestForm from '../components/AddQuestForm'
import Navbar from '../components/Navbar'
import AddStepQuestForm from '../components/AddStepQuestForm'

export default function QuestLogPage() {

  return (
    <div className="quest-page">
      <h2>🏆 Quests</h2>
      <QuestLog/>
      <AddQuestForm/>
      <AddStepQuestForm/>
      
    </div>
  )
}
