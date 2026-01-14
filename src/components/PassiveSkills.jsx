import './PassiveSkills.css'

export default function PassiveSkills({passive}) {
    if(!passive) return null
    return ( 
        <div className="card">
            <h3>🌱 Passive Skills</h3>
            <ul>
                {passive.map(skill => (
                    <li key={skill.id}>{skill.name}</li>
                ))}   
            </ul>
        </div>
        
    )
}