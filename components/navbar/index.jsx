import React, { useState } from 'react'

export default function Navbar() {

    const [links, setLinks] = useState(false)
    const [dropdown, setDropdown] = useState(false)

    return (
        <>
            <nav className={`main-navbar max-x-pad ${links ? "color-black" : ""}`}>
                {links ? <div className='nav-bg-white' /> : <></>}
                <div className="navbar-wrapper">
                    <div className="navbar-links-group">
                        <div className='link_menu flex'>
                            <a href="/" className="nav-logo">TAPIN</a>
                            <a onClick={() => setLinks(!links)} className='menu_btn'>{!links ? "=" : "x"}</a>
                        </div>
                        <div className={`nav-links`}>
                            <div className={`nav-link flex-col ${links ? "flex" : "hidden"}`}>
                                <div className="flex w-100 with-dropdown" onClick={() => {
                                    setDropdown(!dropdown)
                                }}>
                                    <span>Nos services</span>
                                    <span className='arrow' style={{
                                        transform: dropdown ? "rotateZ(180deg)" : "none"
                                    }}>
                                        <svg width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0.0834961 0.833328L8.00016 8.75L15.9168 0.833328H0.0834961Z" fill="#CBD6E2" />
                                        </svg>
                                    </span>
                                </div>
                                {dropdown ?
                                    <DropdownItems className={"mobile-menu"} />
                                    : ""
                                }
                            </div>
                            <a href="/demo" className={`nav-link ${links ? "flex" : "hidden"}`}>Démo & Devis</a>
                            <a href="/about" className={`nav-link ${links ? "flex" : "hidden"}`}>A propos</a>
                        </div>
                    </div>
                    <div className="navbar-btn-group">
                        <a href="#" className={`nav-link ${links ? "flex" : "hidden"}`}>Commander</a>
                        <a href="#" className={`nav-link btn secondary-btn ${links ? "flex" : "hidden"}`}>Connexion</a>
                    </div>
                </div>
                {dropdown ?
                    <DropdownItems className={"desktop-menu"} />
                    : ""
                }
            </nav>
        </>
    )
}

export function DropdownItems({ className }) {
    return (
        <div className={`dropdown-menu justify-between gap-20 ${className}`}>
            <a href='/classic' className="dropdown-link flex justify-between gap-10 bg-light-violet color-white">
                <div className="dropdown-link-text">
                    <div className="link-title bold">
                        Tapin classic card
                    </div>
                    <div className="main-paragraph">
                        Concu pour les particuliers
                    </div>
                </div>
                <div className="dropdown-link-img">
                    <img src="/images/classic-cards/Group 7.png" alt="" />
                </div>
            </a>
            <a href='/pro' className="dropdown-link flex justify-between gap-10 bg-dark-light color-white">
                <div className="dropdown-link-text">
                    <div className="link-title bold">
                        Tapin classic pro
                    </div>
                    <div className="main-paragraph">
                        Concu pour les professionnels
                    </div>
                </div>
                <div className="dropdown-link-img">
                    <img src="/images/classic-cards/image 78.png" alt="" />
                </div>
            </a>

        </div>
    )
}

