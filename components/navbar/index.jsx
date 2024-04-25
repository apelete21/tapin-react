import Link from 'next/link'
import React, { useState } from 'react'

export default function Navbar() {

    const [links, setLinks] = useState(false)
    const [dropdown, setDropdown] = useState(false)

    return (
        <> {
            links || dropdown ? <ReplacementElement />
                : <></>
        }
            <nav className={`main-navbar max-x-pad ${links ? "color-black fixed" : ""} ${dropdown ? "color-black fixed" : ""}`} 
            onMouseLeave={() => { if (!links) setDropdown(false) }}>
                {links ? <div className='nav-bg-white links' /> : <></>}
                {dropdown ? <div className='nav-bg-white dropdown' /> : <></>}
                <div className="navbar-wrapper">
                    <div className="navbar-links-group">
                        <div className='link_menu flex'>
                            <Link href="/" className="nav-logo">TAPIN</Link>
                            <span onClick={() => setLinks(!links)} className='menu_btn' style={{ cursor: "pointer" }}>{!links ? "=" : "x"}</span>
                        </div>
                        <div className={`nav-links`}>
                            <div className={`nav-link flex-col ${links ? "flex" : "hidden"}`} onMouseLeave={() => {
                                if (links) { setDropdown(false) }
                            }}>
                                <div className="flex w-100 with-dropdown" onMouseEnter={() => {
                                    setDropdown(true)
                                }}
                                    onClick={() => { setDropdown(!dropdown) }}
                                >
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
                            <Link href="/demo" className={`nav-link ${links ? "flex" : "hidden"}`}>Démo & Devis</Link>
                            <Link href="/about" className={`nav-link ${links ? "flex" : "hidden"}`}>A propos</Link>
                        </div>
                    </div>
                    <div className="navbar-btn-group">
                        <Link href="#" className={`nav-link ${links ? "flex" : "hidden"}`}>Commander</Link>
                        <Link href="/login" className={`nav-link btn secondary-btn ${links ? "flex" : "hidden"}`}>Connexion</Link>
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

function DropdownItems({ className }) {
    return (
        <div className={`dropdown-menu justify-between gap-20 ${className}`}>
            <Link href='/classic' className="dropdown-link flex justify-between gap-10 bg-light-violet color-white">
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
            </Link>
            <Link href='/pro' className="dropdown-link flex justify-between gap-10 bg-dark-light color-white">
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
            </Link>

        </div>
    )
}

function ReplacementElement() {
    return (
        <div style={{
            height: 90,
            width: "100%"
        }} />
    )
}
