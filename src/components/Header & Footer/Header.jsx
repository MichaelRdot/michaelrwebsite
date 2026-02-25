import './Header.css'
import { useState, useEffect, useRef } from 'react'

function Header() {
    const [menuOpen, setMenuOpen] = useState(false)
    const [headerVisible, setHeaderVisible] = useState(true)
    const lastScrollY = useRef(0)

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY

            if (currentScrollY < lastScrollY.current || currentScrollY < 50) {
                setHeaderVisible(true)
                const content = document.getElementById('page-content')
                if (content) content.style.paddingTop = '56px'
            } else if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
                setHeaderVisible(false)
                const content = document.getElementById('page-content')
                if (content) content.style.paddingTop = '0px'
            }

            lastScrollY.current = currentScrollY
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <>
            {/* The main header bar */}
            <header className={`header ${headerVisible ? 'header-visible' : 'header-hidden'}`}>
                <div className="header-name">Michael Russelburg</div>

                <nav className="header-nav">
                    <a href="#careerGoalsSection">Goals</a>
                    <a href="#aboutMeSection">About Me</a>
                    <a href="#projectsSection">Projects</a>
                    <a href="#educationSection">Education</a>
                    <a href="#workSection">Work</a>
                    <a href="#hobbiesSection">Hobbies</a>
                </nav>

                <div className="header-right">
                    <a href="https://github.com/MichaelRdot" target="_blank" rel="noreferrer" className="header-github">
                        GitHub
                    </a>
                </div>
            </header>

            {/* Hamburger - always fixed */}
            <button
                className="hamburger-fixed"
                onClick={() => {
                    if (window.innerWidth <= 768) {
                        setMenuOpen(!menuOpen)
                    } else {
                        const newVisible = !headerVisible
                        setHeaderVisible(newVisible)
                        const content = document.getElementById('page-content')
                        if (content) content.style.paddingTop = newVisible ? '56px' : '0px'
                    }
                }}
                aria-label="Toggle navigation"
            >
                {menuOpen ? '✕' : '☰'}
            </button>

            {/* Mobile dropdown only */}
            {menuOpen && (
                <div className="mobile-menu-fixed">
                    <a href="#careerGoalsSection" onClick={() => setMenuOpen(false)}>Goals</a>
                    <a href="#aboutMeSection" onClick={() => setMenuOpen(false)}>About Me</a>
                    <a href="#projectsSection" onClick={() => setMenuOpen(false)}>Projects</a>
                    <a href="#educationSection" onClick={() => setMenuOpen(false)}>Education</a>
                    <a href="#workSection" onClick={() => setMenuOpen(false)}>Work</a>
                    <a href="#hobbiesSection" onClick={() => setMenuOpen(false)}>Hobbies</a>
                </div>
            )}
        </>
    )
}

export default Header;