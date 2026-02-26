import './HobbiesSection.css'

const hobbies = [
    {
        name: 'Bass Guitar',
        traits: ['Creative', 'Solo'],
        description: 'I really only just started this one. Do not ask me about it.',
    },
    {
        name: 'Board Games',
        traits: ['Social', 'Competitive', 'Strategic'],
        description: 'My current favorite board game is this cute war game called Root. Each player commands a faction ' +
            'forces players to each score victory points in a unique and interesting way.',
    },
    {
        name: 'Gym',
        traits: ['Social', 'Discipline'],
        description: 'I have been going to the gym less and less recently, but is that not true for all of us?'
    },
    {
        name: 'Magic: The Gathering',
        traits: ['Social', 'Competitive', 'Creative', 'Strategic'],
        description: 'Magic: the Gathering is a card game that I picked up when I was 7. Since then it has been a thing ' +
            'that I play on and off. Currently, I enjoy playing Commander with my friends either online or in person.',
    },

    {
        name: 'Video Games',
        traits: ['Social', 'Solo', 'Competitive', 'Creative', 'Strategic'],
        description: 'This one is an obvious since I am a male in computer science, but my favorites include Terraria, ' +
            'Slay the Princess, and Stardew Valley',
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