import React from 'react'

export default function Navbar() {
    return (
        <>
            <nav className="main-navbar max-x-pad">
                <div className="navbar-wrapper">
                    <div className="navbar-links-group">
                        <a href="/" className="nav-logo">TAPIN</a>
                        <div className="nav-links">
                            <a href="/classic" className="nav-link">Nos services</a>
                            <a href="/pro" className="nav-link">Démo & Devis</a>
                            <a href="/about" className="nav-link">A propos</a>
                        </div>
                    </div>
                    <div className="navbar-btn-group">
                        <a href="/demo" className="nav-link">Commander</a>
                        <a href="#" className="nav-link btn secondary-btn">Connexion</a>
                    </div>
                </div>
            </nav>
        </>
    )
}
