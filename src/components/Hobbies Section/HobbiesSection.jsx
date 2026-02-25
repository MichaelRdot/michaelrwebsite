import './HobbiesSection.css'

const hobbies = [
    {
        name: 'Magic: The Gathering',
        traits: ['Social', 'Competitive', 'Creative'],
        description: '.',
    },
    {
        name: 'Board Games',
        traits: ['Social', 'Strategic'],
        description: '.',
    },
    {
        name: 'Video Games',
        traits: ['Solo', 'Competitive'],
        description: '.',
    },
    {
        name: 'Bass Guitar',
        traits: ['Creative', 'Solo'],
        description: '.',
    },
    {
        name: 'Gym',
        traits: ['Solo', 'Discipline'],
        description: '.',
    },
]

function HobbiesSection() {
    return (
        <section id="hobbiesSection" className="hobbies-section">
            <div className="about-title-bar">Hobbies</div>
            <div className="hobbies-grid">
                {hobbies.map((hobby) => (
                    <div key={hobby.name} className="hobby-card">
                        <div className="hobby-card-header">
                            <span className="hobby-name">{hobby.name}</span>
                        </div>
                        <div className="hobby-traits">
                            {hobby.traits.map((trait) => (
                                <span key={trait} className="hobby-trait">{trait}</span>
                            ))}
                        </div>
                        <div className="hobby-divider" />
                        <p className="hobby-description">{hobby.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default HobbiesSection;