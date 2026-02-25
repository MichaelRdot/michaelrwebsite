import './Header.css'
import { useState, useEffect } from 'react'

function Header() {
    const [menuOpen, setMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header className="header">

            {/* Left - Name */}
            <div className="header-name">Michael Russelburg</div>

            {/* Center - Nav links (desktop) */}
            <nav className="header-nav">
                <a href="#careerGoalsSection" onClick={() => setMenuOpen(false)}>Goals</a>
                <a href="#aboutMeSection" onClick={() => setMenuOpen(false)}>About Me</a>
                <a href="#projectsSection" onClick={() => setMenuOpen(false)}>Projects</a>
                <a href="#educationSection" onClick={() => setMenuOpen(false)}>Education</a>
                <a href="#workSection" onClick={() => setMenuOpen(false)}>Work</a>
                <a href="#hobbiesSection" onClick={() => setMenuOpen(false)}>Hobbies</a>
            </nav>

            {/* Right - GitHub (hidden when scrolled) + Hamburger (mobile only) */}
            <div className="header-right">
                <a href="https://github.com/MichaelRdot" target="_blank" rel="noreferrer" className="header-github">GitHub</a>
                <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">☰</button>
            </div>

            {/* Mobile dropdown menu */}
            {menuOpen && (
                <div className="mobile-menu">
                    <a href="#aboutMeSection" onClick={() => setMenuOpen(false)}>About Me</a>
                    <a href="#projectsSection" onClick={() => setMenuOpen(false)}>Projects</a>
                    <a href="#educationSection" onClick={() => setMenuOpen(false)}>Education</a>
                    <a href="#workSection" onClick={() => setMenuOpen(false)}>Work</a>
                    <a href="#hobbiesSection" onClick={() => setMenuOpen(false)}>Hobbies</a>
                </div>
            )}

        </header>
    )
}

export default Header;