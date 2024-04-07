import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <>
            <nav className="main-navbar max-x-pad">
                <div className="navbar-wrapper">
                    <div className="navbar-links-group">
                        <Link to="/" className="nav-logo">TAPIN</Link>
                        <div className="nav-links">
                            <Link to="/classic" className="nav-link">Nos services</Link>
                            <Link to="/pro" className="nav-link">Démo & Devis</Link>
                            <Link to="/about" className="nav-link">A propos</Link>
                        </div>
                    </div>
                    <div className="navbar-btn-group">
                        <Link to="/demo" className="nav-link">Commander</Link>
                        <Link to="#" className="nav-link btn secondary-btn">Connexion</Link>
                    </div>
                </div>
            </nav>
        </>
    )
}
