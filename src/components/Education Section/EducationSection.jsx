import './EducationSection.css'

const education = [
    {
        degree: 'B.S. Computer Science, Game Design and Development',
        institution: 'Louisiana State University',
        location: 'Baton Rouge, LA',
        dates: 'August 2019 – December 2026',
        status: 'In Progress',
        statusClass: 'status-wip',
    },
    {
        degree: 'High School Diploma',
        institution: 'St. Amant High School',
        location: 'St. Amant, LA',
        dates: 'August 2018 – May 2022',
        status: 'Complete',
        statusClass: 'status-complete',
    },
]

function EducationSection() {
    return (
        <section id="educationSection" className="education-section">
            <div className="about-title-bar">Training &amp; Lore</div>
            <div className="education-list">
                {education.map((entry) => (
                    <div key={entry.institution} className="education-entry">
                        <div className="education-entry-header">
                            <div className="education-entry-left">
                                <span className="education-degree">{entry.degree}</span>
                                <span className="education-institution">{entry.institution} — {entry.location}</span>
                            </div>
                            <div className="education-entry-right">
                                <span className="education-dates">{entry.dates}</span>
                                <span className={`education-status ${entry.statusClass}`}>{entry.status}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default EducationSection;