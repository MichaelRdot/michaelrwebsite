import './WorkSection.css'

const jobs = [
    {
        title: 'Student IT Software Engineer',
        employer: 'LSU CARTS',
        location: 'Baton Rouge, LA',
        dates: 'December 2025 – Present',
        bullets: [
            'Worked on frontend development using CSS libraries and frameworks to make web pages..',
            'Developed backend content using APIs and .Net.',
            'Transferred data from database to database in an organized fashion.',
        ],
    },
    {
        title: 'Laptop Repair Technician',
        employer: 'Verapro',
        location: 'Gonzales, LA',
        dates: 'April 2023 – December 2025',
        bullets: [
            'Repaired laptops as parts came in.',
            'Handled inventory for the warehouse.',
            'Organized laptop parts into multiple categories as needed.',
        ],
    },
    {
        title: 'Server',
        employer: 'Starlite Cafe',
        location: 'Gonzales, LA',
        dates: 'February 2023 – March 2023',
        bullets: [
            'Operated cash register and handled transactions.',
            'Bussed tables, cleaned, and ran food to customers.',
        ],
    },
    {
        title: 'Kitchen Worker / Server',
        employer: 'Rotolos',
        location: 'Prairieville, LA',
        dates: 'January 2022 – April 2023',
        bullets: [
            'Operated cash register and handled transactions.',
            'Prepared and served food items to customers.',
            'Assisted with inventory management and restocking.',
            'Bussed tables, cleaned, and ran food to customers.',
        ],
    },
    {
        title: 'Customer Service Associate',
        employer: 'Old Navy',
        location: 'Gonzales, LA',
        dates: 'May 2021 – October 2021',
        bullets: [
            'Maintained store tidiness through sweeping, folding, and mopping.',
            'Provided excellent customer service and received positive feedback.',
        ],
    },
]

function WorkSection() {
    return (
        <section id="workSection" className="work-section">
            <div className="about-title-bar">Guild Memberships</div>
            <div className="work-list">
                {jobs.map((job) => (
                    <div key={job.employer + job.dates} className="work-entry">
                        <div className="work-entry-header">
                            <div className="work-entry-left">
                                <span className="work-title">{job.title}</span>
                                <span className="work-employer">{job.employer}</span>
                            </div>
                            <div className="work-entry-right">
                                <span className="work-dates">{job.dates}</span>
                                <span className="work-location">{job.location}</span>
                            </div>
                        </div>
                        <ul className="work-bullets">
                            {job.bullets.map((bullet) => (
                                <li key={bullet}>{bullet}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default WorkSection;