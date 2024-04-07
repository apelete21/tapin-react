import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <>
            <footer class="main-footer max-x-pad">
                <div class="footer-head flex justify-between">
                    <div class="contact-us w-50">
                        <div class="logo"><Link to="/">TAPIN</Link></div>
                        <div class="email-us">
                            <p class="email-title">Email</p>
                            <p class="our-email paragraph">hello@tapin.com</p>
                        </div>
                        <div class="phone-us">
                            <p class="phone-title">Tel</p>
                            <p class="our-tel paragraph">+228 90 20 23 23</p>
                        </div>
                        <div class="location-link-container">
                            <Link to="#" class="location-link"> Trouver sur Google map </Link>
                        </div>
                    </div>
                    <div class="links-social-description w-50">
                        <div class="flex justify-between">
                            <div class="navigation w-50">
                                <div class="navigation-title">Navigation</div>
                                <ul class="navigation-links">
                                    <li class="navigation-link-item">
                                        <Link to="/classic" class="">Tapin Classic</Link>
                                    </li>
                                    <li class="navigation-link-item">
                                        <Link to="/pro" class="">Tapin Pro</Link>
                                    </li>
                                    <li class="navigation-link-item">
                                        <Link to="/demo" class="">Demo & devis Pro</Link>
                                    </li>
                                    <li class="navigation-link-item">
                                        <Link to="/about" class="">Link propos</Link>
                                    </li>
                                </ul>
                            </div>
                            <div class="socials w-50">
                                <div class="socials-title">Nos actualités</div>
                                <ul class="socials-links">
                                    <li class="social-link-item flex">
                                        <Link to="#" class="social-link-item">Facebook</Link>
                                        <img src="./images/icons/arrow-top-right.svg" alt="" />
                                    </li>
                                    <li class="social-link-item flex">
                                        <Link to="#" class="social-link-item">Instagram</Link>
                                        <img src="./images/icons/arrow-top-right.svg" alt="" />
                                    </li>
                                    <li class="social-link-item flex">
                                        <Link to="#" class="social-link-item">Youtube</Link>
                                        <img src="./images/icons/arrow-top-right.svg" alt="" />
                                    </li>
                                    <li class="social-link-item flex">
                                        <Link to="#" class="social-link-item">TikTok</Link>
                                        <img src="./images/icons/arrow-top-right.svg" alt="" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="description">
                            <p class="paragraph mb-30">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
                                optio! Veniam totam alias ipsam ullam!
                            </p>
                            <p class="paragraph mb-30">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
                                ea vero odit nulla. Laudantium, quia accusamus? Blanditiis quae ut
                                magnam officiis incidunt iure voluptate dolores saepe minima vitae
                                quasi numquam, voluptatem eum.
                            </p>
                            <p class="paragraph">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="flex justify-between padding-top-100">
                    <div class="paragraph"> &copy; 2023 Tapin Tous droits reservés</div>
                    <div class="flex">
                        <Link to='#' class="paragraph">Mentions Légales</Link>
                        <Link to='#' class="paragraph ml-15">CGU</Link>
                        <Link to='#' class="paragraph ml-15">Confidentialité</Link>
                    </div>
                </div>
            </footer>
            
        </>
    )
}
