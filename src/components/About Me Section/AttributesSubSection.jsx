import './AttributesSubSection.css'
import './AboutMeSection.css'
function AttributesSubSection()
{
    return(
        <div className="attributes-section">
            <div className="section-title-bar">Attributes</div>
            <div className="attributes-row">
                {[
                    { name: 'Strength', score: 12 },
                    { name: 'Dexterity', score: 8 },
                    { name: 'Constitution', score: 10 },
                    { name: 'Intelligence', score: 14 },
                    { name: 'Wisdom', score: 12 },
                    { name: 'Chrasma', score: 14 },
                    { name: 'Potential', score: 20 },
                ].map((attribute) => (
                    <div key={attribute.name} className="attribute-box">
                        <div className="attr-name">{attribute.name}</div>
                        <div className="attr-score">{attribute.score}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AttributesSubSection;