
import './MainSkills.css'


export default function MainSkills({main}) {
    if(!main) return null;
    return ( 
        <div className="card">
            <h3>⚔️ Main Skills</h3>
            <ul>
                {main.map(skill => (
                    
                    <li key={skill.id}>{skill.name}</li>
                    
                ))}
            </ul>
            
        </div>  
    )
}