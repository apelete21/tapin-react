import React from 'react'

export default function Footer() {
    return (
        <>
            <footer class="main-footer max-x-pad">
                <div class="footer-head flex justify-between">
                    <div class="contact-us w-50">
                        <div class="logo"><a href="/">TAPIN</a></div>
                        <div class="email-us">
                            <p class="email-title">Email</p>
                            <p class="our-email paragraph">hello@tapin.com</p>
                        </div>
                        <div class="phone-us">
                            <p class="phone-title">Tel</p>
                            <p class="our-tel paragraph">+228 90 20 23 23</p>
                        </div>
                        <div class="location-link-container">
                            <a href="#" class="location-link"> Trouver sur Google map </a>
                        </div>
                    </div>
                    <div class="links-social-description w-50">
                        <div class="flex justify-between">
                            <div class="navigation w-50">
                                <div class="navigation-title">Navigation</div>
                                <ul class="navigation-links">
                                    <li class="navigation-link-item">
                                        <a href="/classic.html" class="">Tapin Classic</a>
                                    </li>
                                    <li class="navigation-link-item">
                                        <a href="/pro.html" class="">Tapin Pro</a>
                                    </li>
                                    <li class="navigation-link-item">
                                        <a href="/demo.html" class="">Demo & devis Pro</a>
                                    </li>
                                    <li class="navigation-link-item">
                                        <a href="/about.html" class="">A propos</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="socials w-50">
                                <div class="socials-title">Nos actualités</div>
                                <ul class="socials-links">
                                    <li class="social-link-item flex">
                                        <a href="#" class="social-link-item">Facebook</a>
                                        <img src="./images/icons/arrow-top-right.svg" alt="" />
                                    </li>
                                    <li class="social-link-item flex">
                                        <a href="#" class="social-link-item">Instagram</a>
                                        <img src="./images/icons/arrow-top-right.svg" alt="" />
                                    </li>
                                    <li class="social-link-item flex">
                                        <a href="#" class="social-link-item">Youtube</a>
                                        <img src="./images/icons/arrow-top-right.svg" alt="" />
                                    </li>
                                    <li class="social-link-item flex">
                                        <a href="#" class="social-link-item">TikTok</a>
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
                    <div class="paragraph">&COPY; 2023 Tapin Tous droits reservés</div>
                    <div class="flex">
                        <div class="paragraph">Mentions Légales</div>
                        <div class="paragraph ml-15">CGU</div>
                        <div class="paragraph ml-15">Confidentialité</div>
                    </div>
                </div>
            </footer>
            
        </>
    )
}
