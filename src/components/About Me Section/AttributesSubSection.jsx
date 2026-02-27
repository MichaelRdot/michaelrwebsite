import './AttributesSubSection.css'
import './AboutMeSection.css'

const attributes = [
    {
        name: 'Bad Vibes',
        score: 0
    },
    {
        name: 'Creativity',
        score: 14
    },
    {
        name: 'Experience',
        score: 12
    },
    {
        name: 'Intelligence',
        score: 14
    },
    {
        name: 'Potential',
        score: 20
    },
    {
        name: 'Team Work',
        score: 16
    },
]
function AttributesSubSection()
{
    return(
        <div className="attributes-section">
            <div className="section-title-bar">Attributes</div>
            <div className="attributes-row">
                {attributes.map((attribute) => (
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