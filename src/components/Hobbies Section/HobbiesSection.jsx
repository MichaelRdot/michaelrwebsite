import './HobbiesSection.css'

const hobbies = [
    {
        name: `Bass Guitar`,
        traits: [`Creative`, `Solo`, `Beginner`],
        description: `I have not played much of the Bass Guitar, but it has been nice to use it as an alternative 
            creative outlet. In addition, I believe that the little time that I have spent playing the Bass has 
            overall improved my hand-eye coordination and music comprehension skills.`,
    },
    {
        name: `Board Games`,
        traits: [`Social`, `Competitive`, `Strategic`],
        description: `Board games have always been a huge hobby of mine since it is one that my family does often. My 
            current favorite board game is this cute war game called Root. Each player commands a faction forces
            players to each score victory points in a unique and interesting way.`,
    },
    {
        name: `Gym`,
        traits: [`Social`, `Discipline`],
        description: `I have been going to the gym less and less recently, but is that not true for all of us?`
    },
    {
        name: `Magic: The Gathering`,
        traits: [`Social`, `Competitive`, `Creative`, `Strategic`],
        description: `Magic: the Gathering is a card game that I picked up when I was 7. Since then, Magic has been 
        one of the few things that I have truly been playing on and off over the course of most of my life. Currently, 
        I enjoy playing the Commander and premodern formats with my friends either online or in person.`,
    },
    {
        name: `Table Top Role Playing Games`,
        traits: [`Social`, `Creative`, `Strategic`],
        description: `Table Top Role Playing Games (TTRPGs) has quickly evolved into becoming the highlight 
        of each of my weeks. I have spent countless hours sitting around the table with my friends creating characters 
        and stories that are so deeply thought out, fun, and creative that we all lose track of time. Playing a TTRPG 
        for me and my friend group has become this rich group story telling experience and art form that each of us love 
        and enjoy. I try, as often as I can, to share that message as to hopefully encourage other people to share with 
        me this thing that I love so much.`,
    },
    {
        name: `Video Games`,
        traits: [`Social`, `Solo`, `Competitive`, `Creative`, `Strategic`],
        description: `It is nearly impossible to run into someone in the field of Computer Science today that does not
        enjoy a video game or two from time to time. While I have still not gotten close to finishing a lot of the games 
        I would like to play though, I have still played so many games over the years that I can not list all of them 
        out here (even if I could remember all of them), but my top two at the current moment are probably Terraria and 
        Slay the Princess.`,
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