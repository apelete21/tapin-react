import { CardComparator } from '@/components/cardComparator'
import Navbar from '@/components/navbar'
import React, { useState } from 'react'

export default function Pro() {
    const [accordion1, setAccordion1] = useState(true)
    const [accordion2, setAccordion2] = useState(true)
    const [accordion3, setAccordion3] = useState(true)

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
                <div className="">
                    <div className="intro-title-group text-center">
                        <div className="md-text-box">
                            <h2 className="text-head text-white">
                                Votre carte
                                de visite réinventée
                            </h2>
                        </div>
                    </div>

                    <div className="cards-container max-x-pad">

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
                            <img className="show-case-img" src={("/images/classic-cards/image 78.png")} alt="" />
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

                    <div className="flex pro-app-feature-wrapper-container max-x-pad justify-center align-center">
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
            <div className=" pro-cards-use-display section section-wrapper inner-section inner-section-padding bg-black">

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

            <CardComparator />

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
