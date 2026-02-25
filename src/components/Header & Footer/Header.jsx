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
                document.body.classList.remove('header-is-hidden')
                const content = document.getElementById('page-content')
                if (content) content.style.paddingTop = '56px'
            } else if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
                setHeaderVisible(false)
                document.body.classList.add('header-is-hidden')
                const content = document.getElementById('page-content')
                if (content) content.style.paddingTop = '0px'
            }

            lastScrollY.current = currentScrollY
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToSection = (id) => {
        const target = document.getElementById(id)
        if (!target) return
        const offset = target.getBoundingClientRect().top + window.scrollY - (headerVisible ? 56 : 0)
        window.scrollTo({ top: offset, behavior: 'smooth' })
        setMenuOpen(false)
    }

    const navLinks = [
        { label: 'Goals', id: 'careerGoalsSection' },
        { label: 'About Me', id: 'aboutMeSection' },
        { label: 'Projects', id: 'projectsSection' },
        { label: 'Education', id: 'educationSection' },
        { label: 'Work', id: 'workSection' },
        { label: 'Hobbies', id: 'hobbiesSection' },
    ]

    return (
        <>
            <header className={`header ${headerVisible ? 'header-visible' : 'header-hidden'}`}>
                <div className="header-name">Michael Russelburg</div>

                <nav className="header-nav">
                    {navLinks.map((link) => (
                        <button key={link.id} className="nav-btn" onClick={() => scrollToSection(link.id)}>
                            {link.label}
                        </button>
                    ))}
                </nav>

                <div className="header-right">
                    <a href="https://github.com/MichaelRdot" target="_blank" rel="noreferrer" className="header-github">
                        GitHub
                    </a>
                </div>
            </header>

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

            {menuOpen && (
                <div className="mobile-menu-fixed">
                    {navLinks.map((link) => (
                        <button key={link.id} className="nav-btn" onClick={() => scrollToSection(link.id)}>
                            {link.label}
                        </button>
                    ))}
                </div>
            )}
        </>
    )
}

export default Header;