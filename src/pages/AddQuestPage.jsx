import AddQuestForm from '../components/AddQuestForm'
import Navbar from '../components/Navbar'
import AddStepQuestForm from '../components/AddStepQuestForm'

export default function AddQuestPage() {

  return (
    <div className="quest-page">
      <h2> Add your Quest !</h2>
      <AddQuestForm/>
      <AddStepQuestForm/>
      
    </div>
  )
}