import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (
        <>
            <footer class="main-footer max-x-pad">
                <div class="footer-head flex justify-between">
                    <div class="contact-us w-50">
                        <div class="logo"><Link href="/">TAPIN</Link></div>
                        <div class="email-us">
                            <p class="email-title">Email</p>
                            <p class="our-email paragraph">hello@tapin.com</p>
                        </div>
                        <div class="phone-us">
                            <p class="phone-title">Tel</p>
                            <p class="our-tel paragraph">+228 90 20 23 23</p>
                        </div>
                        <div class="location-link-container">
                            <Link href="#" class="location-link"> Trouver sur Google map </Link>
                        </div>
                    </div>
                    <div class="links-social-description w-50">
                        <div class="links-container flex justify-between">
                            <div class="navigation w-50">
                                <div class="navigation-title">Navigation</div>
                                <ul class="navigation-links">
                                    <li class="navigation-link-item">
                                        <Link href="/classic" class="">Tapin Classic</Link>
                                    </li>
                                    <li class="navigation-link-item">
                                        <Link href="/pro" class="">Tapin Pro</Link>
                                    </li>
                                    <li class="navigation-link-item">
                                        <Link href="/demo" class="">Demo & devis Pro</Link>
                                    </li>
                                    <li class="navigation-link-item">
                                        <Link href="/about" class="">A propos</Link>
                                    </li>
                                </ul>
                            </div>
                            <div class="socials w-50">
                                <div class="socials-title">Nos actualités</div>
                                <ul class="socials-links">
                                    <li class="social-link-item flex">
                                        <Link href="#" class="social-link-item">Facebook</Link>
                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2.01522 11.4116L9.95262 3.54188L9.92152 10.8025L11.7594 10.8039L11.8039 0.413013L1.41308 0.368507L1.40523 2.1999L8.65932 2.23746L0.721924 10.1072L2.01522 11.4116Z" fill="white" fillOpacity="0.65" />
                                        </svg>

                                    </li>
                                    <li class="social-link-item flex">
                                        <Link href="#" class="social-link-item">Instagram</Link>
                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2.01522 11.4116L9.95262 3.54188L9.92152 10.8025L11.7594 10.8039L11.8039 0.413013L1.41308 0.368507L1.40523 2.1999L8.65932 2.23746L0.721924 10.1072L2.01522 11.4116Z" fill="white" fillOpacity="0.65" />
                                        </svg>

                                    </li>
                                    <li class="social-link-item flex">
                                        <Link href="#" class="social-link-item">Youtube</Link>
                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2.01522 11.4116L9.95262 3.54188L9.92152 10.8025L11.7594 10.8039L11.8039 0.413013L1.41308 0.368507L1.40523 2.1999L8.65932 2.23746L0.721924 10.1072L2.01522 11.4116Z" fill="white" fillOpacity="0.65" />
                                        </svg>

                                    </li>
                                    <li class="social-link-item flex">
                                        <Link href="#" class="social-link-item">TikTok</Link>
                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2.01522 11.4116L9.95262 3.54188L9.92152 10.8025L11.7594 10.8039L11.8039 0.413013L1.41308 0.368507L1.40523 2.1999L8.65932 2.23746L0.721924 10.1072L2.01522 11.4116Z" fill="white" fillOpacity="0.65" />
                                        </svg>

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
                <div class="copyright flex justify-between padding-top-100">
                    <div class="paragraph"> &copy; 2023 Tapin Tous droits reservés</div>
                    <div class="copy-links flex">
                        <Link href='#' class="paragraph">Mentions Légales</Link>
                        <Link href='#' class="paragraph ml-15">CGU</Link>
                        <Link href='#' class="paragraph ml-15">Confidentialité</Link>
                    </div>
                </div>
            </footer>

        </>
    )
}
