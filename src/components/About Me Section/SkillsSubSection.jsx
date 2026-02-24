import './SkillsSubSection.css'
import './AboutMeSection.css'
function SkillsSubSection() {
    return (
        <div className="skills-section">
            <div className="section-title-bar">Skills</div>
            <div className="skills-grid">
                {[
                    { attr: 'Int', name: 'C', rank: 'Trained', rankClass: 'trained' },
                    { attr: 'Int', name: 'C#', rank: 'Expert', rankClass: 'expert' },
                    { attr: 'Int', name: 'React', rank: 'Trained', rankClass: 'trained' },
                    { attr: 'Int', name: 'Java', rank: 'Expert', rankClass: 'expert' },
                    { attr: 'Wis', name: 'Problem Solving', rank: 'Expert', rankClass: 'expert' },
                    { attr: 'Cha', name: 'Collaboration', rank: 'Master', rankClass: 'master' },
                    { attr: 'Cha', name: 'Creativity', rank: 'Expert', rankClass: 'expert' },
                    { attr: 'Pot', name: 'Willingness to Learn', rank: 'Legendary', rankClass: 'legendary' },
                ].map((skill) => (
                    <div key={skill.name} className="skill-box">
                        <span className="skill-attr">({skill.attr})</span>
                        <span className="skill-name">{skill.name}</span>
                        <span className={`skill-rank ${skill.rankClass}`}>{skill.rank}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SkillsSubSection;