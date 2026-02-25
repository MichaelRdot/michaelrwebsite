import './ProjectsSection.css'

const projects = [
    {
        name: 'MTG Proxy App',
        role: 'Sole Designer',
        summary: 'Takes user input and breaks it down into a readable query for the Scryfall API, allowing users to change card art and print proxies.',
        github: 'https://github.com/MichaelRdot/MTGProxyApp',
        website: 'https://michaelproxies.monster/',
        progress: 'In Development',
        progressClass: 'progress-wip',
    },
    {
        name: 'Roll Call',
        role: 'Software Architect',
        summary: 'A Pathfinder 2e character creator and campaign manager using the Archives of Nethys API. Focuses on homebrew creation and user experience.',
        github: 'https://github.com/MichaelRdot/Roll-Call',
        website: null,
        progress: 'In Progress',
        progressClass: 'progress-wip',
    },
    {
        name: '[AI Generated Game Title]',
        role: 'Game Designer / Software Lead',
        summary: 'A pixelated top-down shooter where you play as a hero trying to rid the world of its AI Overlord. Features fun enemies and guns.',
        github: 'https://github.com/CSC-3380-Fall-2024/AI-Generated-Game-Title',
        website: null,
        progress: 'Complete',
        progressClass: 'progress-complete',
    },
]

function ProjectsSection() {
    return (
        <section id="projectsSection">
            <div className="about-title-bar">Quests &amp; Adventures</div>
            <div className="projects-grid">
                {projects.map((project) => (
                    <div key={project.name} className="project-card">
                        <div className="project-card-header">
                            <h3 className="project-name">{project.name}</h3>
                            <span className={`progress-badge ${project.progressClass}`}>
                                {project.progress}
                            </span>
                        </div>
                        <p className="project-role"><strong>Role:</strong> {project.role}</p>
                        <p className="project-summary">{project.summary}</p>
                        <div className="project-links">
                            <a href={project.github} target="_blank" rel="noreferrer">GitHub</a>
                            {project.website && (
                                <a href={project.website} target="_blank" rel="noreferrer">Live Site</a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default ProjectsSection;