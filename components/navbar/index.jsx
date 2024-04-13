import React, { useState } from 'react'

export default function Navbar() {

    const [links, setLinks] = useState(true)

    return (
        <>
            <nav className="main-navbar max-x-pad">
                <div className="navbar-wrapper">
                    <div className="navbar-links-group">
                        <div className='link_menu flex'>
                            <a href="/" className="nav-logo">TAPIN</a>
                            <a onClick={() => setLinks(!links)}  className='menu_btn text-white'>{links ? "=" : "x"}</a>
                        </div>
                        <div className={`nav-links`}>
                            <a href="/classic" className={`nav-link ${links ? "hidden" : ""}`}>Nos services</a>
                            <a href="/pro" className={`nav-link ${links ? "hidden" : ""}`}>Démo & Devis</a>
                            <a href="/about" className={`nav-link ${links ? "hidden" : ""}`}>A propos</a>
                        </div>
                    </div>
                    <div className="navbar-btn-group">
                        <a href="/demo" className={`nav-link ${links ? "hidden" : ""}`}>Commander</a>
                        <a href="#" className={`nav-link btn secondary-btn ${links ? "hidden" : ""}`}>Connexion</a>
                    </div>
                </div>
            </nav>
        </>
    )
}
