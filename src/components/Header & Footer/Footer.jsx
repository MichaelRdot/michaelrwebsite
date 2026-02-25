import './Footer.css'

const lastUpdated = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
})

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-inner">
                <span>© {new Date().getFullYear()} Michael A. Russelburg</span>
                <span className="footer-divider">|</span>
                <span>Last Updated: {lastUpdated}</span>
            </div>
        </footer>
    )
}

export default Footer;