import './Header.css'

function Header() {
    return (
        <header className="header">
            <div className="header-name">Michael Russelburg</div>
            <nav>
                <a href="#aboutMeSection">About Me </a>
                <a href="#projectsSection">Projects </a>
                <a href="#educationSection">Education </a>
                <a href="#workSection">Work </a>
                <a href="#hobbiesSection">Hobbies </a>
            </nav>
            <a href="https://github.com/MichaelRdot" target="_blank" rel="noreferrer" className="header-github">
                GitHub
            </a>
        </header>
    )
}

export default Header;