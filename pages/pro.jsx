import Navbar from '@/components/navbar'
import React from 'react'

export default function Pro() {
    return (
        <>
            <div className="section bg linkaard-pro-intro h-screen home-intro">
                <Navbar />
                <div className="section-container max-x-pad">
                    <div className="text-container">
                        <h2 className="text-head md-text-box">
                            Faites un saut de visite réinventée vers le futur
                        </h2>
                        <p className="main-paragraph w-35 dark-font">
                            Pour ceux qui veulent bien plus qu’une simple carte de visite, il
                            y’a TAP’IN
                        </p>
                        <a href="#" className="btn black-btn">Découvrir</a>
                    </div>
                </div>
            </div>
            <div className="pro-cards-showcase sectionsection-wrapper inner-section sm-bottom-padding inner-section-padding bg-black ">
                <div className="max-x-pad">
                    <div className="intro-title-group text-center">
                        <div className="md-text-box">
                            <h2 className="text-head text-white">
                                Votre carte
                                de visite réinventée
                            </h2>
                        </div>
                    </div>

                    <div className="cards-container">

                        <div className="card-wrapper">
                            <img className="show-case-img" src={"/images/classic-cards/Group 2.png"} alt="" />
                        </div>
                        <div className="card-wrapper">
                            <img className="show-case-img" src={"/images/classic-cards/Group 4.png"} alt="" />
                        </div>
                        <div className="card-wrapper">
                            <img className="show-case-img" src={"/images/classic-cards/Group 5.png"} alt="" />
                        </div>
                        <div className="card-wrapper">
                            <img className="show-case-img" src={"/images/classic-cards/Group 7.png"} alt="" />
                        </div>
                        <div className="card-wrapper">
                            <img className="show-case-img" src={require("../images/classic-cards/image 78.png")} alt="" />
                        </div>
                    </div>
                </div>
            </div>


            <div className="pro-app-features sectionsection-wrapper inner-section inner-section-padding bg-black">
                <div className="max-x-pad">
                    <div className="intro-title-group text-center">
                        <div className="sm-text-box">
                            <h2 className="text-head text-white">
                                Votre carte
                                de visite réinventée
                            </h2>
                        </div>
                        <div className="md-text-box">
                            <p className="main-paragraph text-center">
                                une nouvelle dimension d'interactions professionnelles,
                                conçue
                            </p>
                        </div>
                    </div>

                    <div className="flex max-x-pad justify-center align-center">
                        <div className="flex pro-app-feature-wrapper flex-col w-25 ">
                            <div className="type-option pro-app-feature-box bg-little-white rounded flex flex-col items-center justify-center h-45" >
                                <div className="img-wrapper">
                                    <img src={("./images/interaction1.png")} alt="" className="w-100" />
                                </div>
                                <p className="main-paragraph text-center">
                                    Explorez une nouvelle dimension d'interactions
                                </p>
                            </div>
                            <div className="type-option pro-app-feature-box bg-little-white rounded flex flex-col items-center justify-center h-45" >
                                <div className="img-wrapper">
                                    <img src={("./images/interaction1.png")} alt="" className="w-100" />
                                </div>
                                <p className="main-paragraph text-center">
                                    Explorez une nouvelle dimension d'interactions
                                </p>
                            </div>
                        </div>


                        <div className="-mx-70 relative index-5">
                            <img src={("./images/iphone-card.png")} alt="" />
                        </div>

                        <div className="flex pro-app-feature-wrapper flex-col w-25 gap-10">
                            <div className="type-option pro-app-feature-box bg-little-white rounded flex flex-col items-center justify-center h-45" >
                                <div className="img-wrapper">
                                    <img src={("../images/interaction1.png")} alt="" className="w-100" />
                                </div>
                                <p className="main-paragraph text-center">
                                    Explorez une nouvelle dimension d'interactions
                                </p>
                            </div>
                            <div className="type-option pro-app-feature-box bg-little-white rounded flex flex-col items-center justify-center h-45" >
                                <div className="img-wrapper">
                                    <img src={("./images/interaction1.png")} alt="" className="w-100" />
                                </div>
                                <p className="main-paragraph text-center">
                                    Explorez une nouvelle dimension d'interactions
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className=" pro-cards-use-display sectionsection-wrapper inner-section inner-section-padding bg-black">

                <div className="flex justify-between max-x-pad">

                    <div className="w-35 text-white intro-title-group">
                        <h2 className="text-head text-white">
                            Votre carte
                            de visite réinventée
                        </h2>
                        <div className="">
                            <p className="main-paragraph">
                                Explorez une nouvelle dimension d'interactions professionnelles, conçue pour simplifier et amplifier vos opportunités de connexion
                            </p>
                        </div>
                    </div>

                    <div className="empty-cards flex justify-center gap-10 max-y-pad">
                        <img src={("/images/empty-card.png")} alt="" />
                        <img src={("/images/empty-card.png")} alt="" />
                        <img src={("/images/empty-card.png")} alt="" />
                    </div>
                </div>
            </div>
            <div className="pro-cards-showcase sectionsection-wrapper inner-section  inner-section-padding bg-black">
                <div className="max-x-pad">
                    <div className="intro-title-group text-white text-center">
                        <div className="md-text-box">
                            <h2 className="text-head">
                                Votre carte
                                de visite réinventée
                            </h2>
                        </div>
                        <div className="md-text-box">
                            <p className="main-paragraph text-center">
                                Explorez une nouvelle dimension d'interactions professionnelles,
                                conçue pour simplifier et amplifier vos opportunités de connexion
                            </p>
                        </div>
                    </div>
                </div>
                <div className="">
                    <img src={("./images/iphone-preview.png")} alt="" className="w-100" />
                </div>


            </div>



            <div className="section-wrapper inner-section inner-section-padding card-comparator">
                <div className="listed-card-wrapper">
                    <div className="text-container">
                        <div className="text-head text-center">Vos Données, Notre Engagement</div>
                        <span className="paragraph text-center w-70">
                            Nous accordons une attention particulière à la protection de vos
                            informations, qu'elles soient personnelles ou professionnelles. Vos
                            données sont soigneusement chiffrées et sécurisées sur nos serveurs
                            en France, ainsi que sur vos cartes de visite NFC. Grâce à notre
                            technologie de pointe
                        </span>
                    </div>


                    <div className="listed-card flex">
                        <div className="flex">
                            <div className="active-card-features w-60">
                                <div className="">
                                    <h3 className="active-card-title w-50 mb-30">
                                        Votre carte de visite réinventée
                                    </h3>
                                    <div className="card-number">
                                        <span className="bold">Model No:</span>
                                        <span className="paragraph">ZAE054</span>
                                    </div>
                                </div>
                                <div className="card-feature-box flex">
                                    <div className="card-feature">
                                        <div className="item-icon">
                                            <svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clipRule="evenodd" d="M32.6454 25.7129C35.3283 27.5342 37.2083 30.0017 37.2083 33.2917V39.1667H45.0417V33.2917C45.0417 29.0225 38.0504 26.4962 32.6454 25.7129Z" fill="#C3AEF8" />
                                                <path d="M17.625 23.5C21.9512 23.5 25.4583 19.9929 25.4583 15.6667C25.4583 11.3404 21.9512 7.83334 17.625 7.83334C13.2988 7.83334 9.79167 11.3404 9.79167 15.6667C9.79167 19.9929 13.2988 23.5 17.625 23.5Z" fill="#C3AEF8" />
                                                <path fillRule="evenodd" clipRule="evenodd" d="M29.375 23.5C33.7029 23.5 37.2083 19.9946 37.2083 15.6667C37.2083 11.3388 33.7029 7.83334 29.375 7.83334C28.4546 7.83334 27.5929 8.02917 26.7704 8.30334C28.4556 10.3874 29.3749 12.9865 29.3749 15.6667C29.3749 18.3468 28.4556 20.9459 26.7704 23.03C27.5929 23.3042 28.4546 23.5 29.375 23.5ZM17.625 25.4583C12.3962 25.4583 1.95833 28.0825 1.95833 33.2917V39.1667H33.2917V33.2917C33.2917 28.0825 22.8537 25.4583 17.625 25.4583Z" fill="#C3AEF8" />
                                            </svg>

                                        </div>
                                        <p className="item-text paragraph text-center">
                                            Live group sessions. Minus the tabs.
                                        </p>
                                    </div>
                                    <div className="card-feature">
                                        <div className="item-icon">
                                            <svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.79168 15.6667L19.5833 31.3333M36.6639 40.1458C39.5859 35.0849 41.1242 29.3439 41.1242 23.5C41.1242 17.6561 39.5859 11.9151 36.6639 6.85416M28.1843 35.25C30.2469 31.6775 31.3327 27.6251 31.3327 23.5C31.3327 19.3749 30.2469 15.3224 28.1843 11.75M19.4423 31.3333C20.8174 28.9517 21.5413 26.2501 21.5413 23.5C21.5413 20.7499 20.8174 18.0483 19.4423 15.6667M9.93268 31.3333C8.55764 28.9517 7.83374 26.2501 7.83374 23.5C7.83374 20.7499 8.55764 18.0483 9.93268 15.6667" stroke="#C3AEF8" strokeWidth="4" strokeLinecap="round" />
                                            </svg>

                                        </div>
                                        <p className="item-text paragraph text-center">
                                            Live group sessions. Minus the tabs.
                                        </p>
                                    </div>
                                    <div className="card-feature">
                                        <div className="item-icon">
                                            <svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M23.5 3.91666C12.6841 3.91666 3.91666 12.6841 3.91666 23.5C3.91666 34.3159 12.6841 43.0833 23.5 43.0833C34.3159 43.0833 43.0833 34.3159 43.0833 23.5C43.0833 12.6841 34.3159 3.91666 23.5 3.91666ZM23.5 39.1667L27.4167 35.25L29.375 33.2917V29.375H25.4583V27.4167L23.5 25.4583H17.625V31.3333L21.5417 35.25V39.0315C13.8258 38.0622 7.83332 31.4743 7.83332 23.5L9.79166 25.4583H13.7083V21.5417H17.625L23.5 15.6667V11.75H19.5833L17.625 9.79166V8.98679C21.3911 7.45103 25.6089 7.45103 29.375 8.98679V11.75L27.4167 13.7083V17.625L29.375 19.5833L35.5046 13.4537C36.9957 15.2376 38.0701 17.3317 38.6497 19.5833H35.25L31.3333 23.5V27.4167L33.2917 29.375H37.2083L37.7684 29.9351C35.3068 35.3695 29.843 39.1667 23.5 39.1667Z" fill="#C3AEF8" />
                                            </svg>

                                        </div>
                                        <p className="item-text paragraph text-center">
                                            Live group sessions. Minus the tabs.
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="card-preview w-25">
                            <div className="w-100">
                                <img
                                    src={("./images/classic-cards/image 78.png")}
                                    className="w-100 h-100"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                    <div className="listed-card card-services-details flex">
                        <div className="card-color-selector flex item-center">
                            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="40" cy="40.0014" r="40" fill="#5E67B4" />
                                <path d="M40.002 0.00128174C34.7492 0.00128174 29.5477 1.03591 24.6947 3.0461C19.8417 5.05629 15.4321 8.00267 11.7178 11.717C8.00341 15.4314 5.05704 19.8409 3.04685 24.6939C1.03666 29.547 0.00202919 34.7484 0.00202942 40.0013C0.00202965 45.2542 1.03666 50.4556 3.04685 55.3086C5.05704 60.1616 8.00342 64.5712 11.7178 68.2856C15.4321 71.9999 19.8417 74.9463 24.6947 76.9565C29.5477 78.9667 34.7492 80.0013 40.002 80.0013L40.002 40.0013L40.002 0.00128174Z" fill="#272727" />
                            </svg>

                            <p className="bold ml-15">Tapin classic Bleu</p>
                        </div>
                        <div className="card-composition">
                            <p className="text-third mb-10">Matière</p>
                            <p className="paragraph">PVC</p>
                        </div>
                        <div className="out-link">
                            <div className="link-icon">
                                <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_249_232)">
                                        <path d="M13.3884 9.45999C13.1688 9.46157 12.9517 9.50698 12.7499 9.59355C12.5481 9.68011 12.3656 9.8061 12.2131 9.96412C12.0606 10.1221 11.9411 10.309 11.8618 10.5138C11.7824 10.7186 11.7448 10.9371 11.751 11.1566C11.7572 11.3761 11.8072 11.5922 11.898 11.7922C11.9888 11.9921 12.1186 12.172 12.2798 12.3211C12.441 12.4702 12.6303 12.5857 12.8367 12.6607C13.0431 12.7357 13.2624 12.7688 13.4818 12.7579L29.3399 12.3161L9.54601 32.11C9.23657 32.4195 9.06273 32.8392 9.06274 33.2768C9.06273 33.7144 9.23658 34.1341 9.54601 34.4435C9.85545 34.7529 10.2751 34.9268 10.7127 34.9268C11.1503 34.9268 11.57 34.7529 11.8795 34.4435L31.6765 14.6465L31.2347 30.5108C31.2238 30.7302 31.2569 30.9495 31.3319 31.1559C31.4069 31.3623 31.5224 31.5516 31.6715 31.7128C31.8207 31.874 32.0005 32.0038 32.2004 32.0946C32.4004 32.1854 32.6165 32.2354 32.836 32.2416C33.0555 32.2478 33.2741 32.2102 33.4788 32.1308C33.6836 32.0515 33.8705 31.932 34.0285 31.7795C34.1865 31.627 34.3125 31.4445 34.3991 31.2427C34.4856 31.0409 34.531 30.8238 34.5326 30.6042L35.074 11.1774C35.0883 10.695 34.9428 10.2214 34.6602 9.83023C34.5284 9.62552 34.3531 9.45237 34.1468 9.3231C33.7588 9.04701 33.2912 8.905 32.8152 8.91863L13.3884 9.45999Z" fill="#75808A" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_249_232">
                                            <rect width="44" height="44" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                        <div className="card-diagonal">
                            <img src={("./images/card-diagonal-blue.png")} alt="" />
                        </div>
                    </div>
                    <div className="listed-card card-services-details flex">
                        <div className="card-color-selector flex item-center">
                            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="40" cy="40" r="40" fill="#B48E56" />
                                <path d="M40 0C29.3913 -1.26507e-07 19.2172 4.21427 11.7157 11.7157C4.21427 19.2172 9.27439e-07 29.3913 0 40C-9.27438e-07 50.6087 4.21427 60.7828 11.7157 68.2843C19.2172 75.7857 29.3913 80 40 80L40 40V0Z" fill="#0E0E0E" />
                            </svg>
                            <p className="bold ml-15">Tapin classic Blanc</p>
                        </div>
                        <div className="card-composition">
                            <p className="text-third mb-10">Matière</p>
                            <p className="paragraph">PVC</p>
                        </div>
                        <div className="out-link">
                            <div className="link-icon">
                                <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_249_232)">
                                        <path d="M13.3884 9.45999C13.1688 9.46157 12.9517 9.50698 12.7499 9.59355C12.5481 9.68011 12.3656 9.8061 12.2131 9.96412C12.0606 10.1221 11.9411 10.309 11.8618 10.5138C11.7824 10.7186 11.7448 10.9371 11.751 11.1566C11.7572 11.3761 11.8072 11.5922 11.898 11.7922C11.9888 11.9921 12.1186 12.172 12.2798 12.3211C12.441 12.4702 12.6303 12.5857 12.8367 12.6607C13.0431 12.7357 13.2624 12.7688 13.4818 12.7579L29.3399 12.3161L9.54601 32.11C9.23657 32.4195 9.06273 32.8392 9.06274 33.2768C9.06273 33.7144 9.23658 34.1341 9.54601 34.4435C9.85545 34.7529 10.2751 34.9268 10.7127 34.9268C11.1503 34.9268 11.57 34.7529 11.8795 34.4435L31.6765 14.6465L31.2347 30.5108C31.2238 30.7302 31.2569 30.9495 31.3319 31.1559C31.4069 31.3623 31.5224 31.5516 31.6715 31.7128C31.8207 31.874 32.0005 32.0038 32.2004 32.0946C32.4004 32.1854 32.6165 32.2354 32.836 32.2416C33.0555 32.2478 33.2741 32.2102 33.4788 32.1308C33.6836 32.0515 33.8705 31.932 34.0285 31.7795C34.1865 31.627 34.3125 31.4445 34.3991 31.2427C34.4856 31.0409 34.531 30.8238 34.5326 30.6042L35.074 11.1774C35.0883 10.695 34.9428 10.2214 34.6602 9.83023C34.5284 9.62552 34.3531 9.45237 34.1468 9.3231C33.7588 9.04701 33.2912 8.905 32.8152 8.91863L13.3884 9.45999Z" fill="#75808A" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_249_232">
                                            <rect width="44" height="44" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                        <div className="card-diagonal">
                            <img src={("./images/card-diagonal.png")} alt="" />
                        </div>
                    </div>
                </div>
            </div>



            <div className="section-wrapper inner-section inner-section-padding classic-feature-02">

                <div className="intro-title-group text-center">
                    <div className="sm-text-box">
                        <h2 className="text-head ">
                            Votre carte
                            de visite réinventée
                        </h2>
                    </div>
                    <div className="md-text-box">
                        <p className="main-paragraph text-center">
                            Explorez une nouvelle dimension d'interactions professionnelles,
                            conçue
                        </p>
                    </div>
                </div>

                <div className="features-wrapper max-x-pad">
                    <div className="features-box">
                        <img src={("./images/card-options.png")} className="mb-10" alt="" />
                        <div className="paragraph text-center bold">
                            Add up to 5 cardholders
                        </div>
                    </div>
                    <div className="features-box">
                        <img src={("./images/card-options-2.png")} className="mb-10" alt="" />
                        <div className="paragraph text-center bold">
                            Add up to 5 cardholders
                        </div>
                    </div>
                    <div className="features-box">
                        <img src={("./images/card-options-3.png")} className="mb-10" alt="" />
                        <div className="paragraph text-center bold">
                            Add up to 5 cardholders
                        </div>
                    </div>
                </div>


                <p className="text-center bottom-p">
                    Explorez une nouvelle dimension d'interactions professionnelles,
                    conçue pour simplifier et amplifier vos opportunités
                </p>

            </div>



            <div className="section-wrapper inner-section md-section-padding inner-configurator sm-bottom-padding bg-slate">


                <div className="intro-title-group  md-title-box text-center">
                    <div className="title-wrapper">
                        <h2 className="text-head "> Votre carte
                            de visite réinventée
                        </h2>
                        <p className="main-paragraph w-50">
                            Explorez une nouvelle dimension d'interactions professionnelles,
                            conçue pour simplifier et amplifier vos opportunités de connexion
                        </p>
                    </div>

                    <div className="choice-links flex">
                        <a href="#" className="link selected">Lorem Ipsum</a>
                        <a href="#" className="link">Lorem Ipsum</a>
                        <a href="#" className="link">Lorem Ipsum</a>
                    </div>

                </div>

                <div className="img-wrapper">
                    <img src={("./images/petalcard.png")} className="config-preview" alt="" />
                </div>
            </div>



            <div className="section-wrapper go-to-pro inner-section md-section-padding">
                <div className="">
                    <h2 className="text-head text-center text-white">
                        Besoin de + de fonctionnalités?
                    </h2>
                </div>

                <div className="text-center flex justify-center">
                    <p className="main-paragraph white-p w-70">
                        Nous accordons une attention particulière à la protection de vos
                        informations, qu'elles soient personnelles ou professionnelles. Vos
                        données sont soigneusement chiffrées et sécurisées sur nos serveurs
                        en France, ainsi que sur vos cartes de visite NFC. Grâce à notre
                        technologie de pointe,
                    </p>
                </div>

                <div className="switch-card  mb-10">
                    <img src={("./images/classic-cards/image 78.png")} className="" alt="" />
                </div>
                <div className="flex justify-center">
                    <a href="#" className="discoverLink">Découvrir</a>
                </div>
            </div>
        </>
    )
}
