// src/components/SwapModal.jsx

export default function SwapSkills({skill, main}) {
  function onSwap(ms){
    ms.id = skill.id
    ms.name = skill.name
  } 
    
  return (
    <div className="swap-modal">
      <div className="swap-content">
        <h3>Slots pleins! Choisis un skill à remplacer :</h3>
        {main.map(ms => (
          <button key={ms.id} onClick={() => onSwap(ms)}>
            {ms.name}
          </button>
        ))}
        <button onClick={onCancel} style={{ marginTop: "1rem" }}>
          Annuler
        </button>
      </div>
    </div>
  )
}
