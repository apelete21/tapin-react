import React from 'react'
import Navbar from '../navbar'

export default function Classic() {
    return (
        <>
            <Navbar />
            <div className="section max-x-pad bg linkaard-classic-intro h-screen home-intro">
                <div className="section-container">
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

            <div className="classic-cards-showcase max-x-pad inner-section-padding inner-section sm-bottom-padding">
                <div className="text-container">
                    <p className="main-paragraph">Pour ceux qui veulent bien</p>
                </div>
                <div className="classic-models">
                    <div className="text-container">
                        <div className="sm-text-box">
                            <h1 className="text-head">Votre carte lorem ipsum do</h1>
                        </div>
                        <div className="sm-text-box">
                            <span className="main-paragraph"
                            >Pour ceux qui veulent bien plus qu’une simple carte de
                                visite, il y’a TAP’IN bien plus qu’une simple carte de visite,
                                il y’a TAP’IN
                            </span>
                        </div>
                    </div>
                    <div className="cards-container">
                        <div className="card-element">
                            <div className="card">
                                <img src="./images/classic-cards/Group 2.png" alt="" />
                            </div>
                            <span className="card-title text-center paragraph">
                                Nom du modèle
                            </span>
                        </div>
                        <div className="card-element">
                            <div className="card">
                                <img src="./images/classic-cards/Group 4.png" alt="" />
                            </div>
                            <span className="card-title text-center paragraph">
                                Nom du modèle
                            </span>
                        </div>
                        <div className="card-element">
                            <div className="card">
                                <img src="./images/classic-cards/Group 5.png" alt="" />
                            </div>
                            <span className="card-title text-center paragraph">
                                Nom du modèle
                            </span>
                        </div>
                        <div className="card-element">
                            <div className="card">
                                <img src="./images/classic-cards/Group 7.png" alt="" />
                            </div>
                            <span className="card-title text-center paragraph">
                                Nom du modèle
                            </span>
                        </div>
                        <div className="card-element">
                            <div className="card">
                                <img src="./images/classic-cards/image 78.png" alt="" />
                            </div>
                            <span className="card-title text-center paragraph">
                                Nom du modèle
                            </span>
                        </div>
                    </div>
                </div>
            </div>



            <div className="section-wrapper inner-section-padding inner-section sm-bottom-padding">
                <div className="section-content-wrapper">
                    <div className="md-text-box">
                        <h2 className="text-head text-center">
                            Votre carte de visite réinventée
                        </h2>
                    </div>
                    <div className="sm-text-box">
                        <p className="main-paragraph text-center">
                            Explorez une nouvelle dimension d'interactions professionnelles,
                            conçue pour simplifier et amplifier vos opportunités de connexion
                        </p>
                    </div>
                    <div className="classic-demo-cover">
                        <img src="./images/virtual-cards.png" alt="" />
                    </div>
                </div>
            </div>

            <div className="share-options section-wrapper inner-section inner-section-padding section-y-pad">

                <div className="text-center sm-text-box">
                    <h2 className="h3-subtitle">
                        Explorez une nouvelle dimension d'interactions professionnelles
                    </h2>
                </div>
                <div className="options-container ">
                    <div className="option-element">
                        <div className="option-img">
                            <img src="./images/interaction1.png" alt="" />
                        </div>
                        <div className="option-text text-second">
                            Explorez une nouvelle dimension d'interactions professionnelles
                        </div>
                    </div>
                    <div className="option-element">
                        <div className="option-img">
                            <img src="./images/interaction2.png" alt="" />
                        </div>
                        <div className="option-text text-second">
                            Explorez une nouvelle dimension d'interactions professionnelles
                        </div>
                    </div>
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
                                <div className=" card-feature-box flex">
                                    <div className="card-feature">
                                        <div className="item-icon">
                                            <img src="./images//icons/people.svg" alt="" />
                                        </div>
                                        <p className="item-text paragraph text-center">
                                            Live group sessions. Minus the tabs.
                                        </p>
                                    </div>
                                    <div className="card-feature">
                                        <div className="item-icon">
                                            <img src="./images//icons/nfc.svg" alt="" />
                                        </div>
                                        <div className="item-text paragraph text-center">
                                            Live group sessions. Minus the tabs.
                                        </div>
                                    </div>
                                    <div className="card-feature">
                                        <div className="item-icon">
                                            <img src="./images//icons/globe.svg" alt="" />
                                        </div>
                                        <div className="item-text paragraph text-center">
                                            Live group sessions. Minus the tabs.
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="card-preview w-25">
                            <div className="w-100">
                                <img
                                    src="./images/classic-cards/image 78.png"
                                    className="w-100 h-100"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                    <div className="listed-card card-services-details flex">
                        <div className="card-color-selector flex item-center">
                            <img src="./images/selector-blue.svg" alt="" />
                            <p className="bold ml-15">Tapin classic Bleu</p>
                        </div>
                        <div className="card-composition">
                            <p className="text-third mb-10">Matière</p>
                            <p className="paragraph">PVC</p>
                        </div>
                        <div className="out-link">
                            <div className="link-icon">
                                <img src="./images/icons/arrow-up-dark.svg" alt="" />
                            </div>
                        </div>
                        <div className="card-diagonal">
                            <img src="./images/card-diagonal-blue.png" alt="" />
                        </div>
                    </div>
                    <div className="listed-card card-services-details flex">
                        <div className="card-color-selector flex item-center">
                            <img src="./images/selector-marron.svg" alt="" />
                            <p className="bold ml-15">Tapin classic Blanc</p>
                        </div>
                        <div className="card-composition">
                            <p className="text-third mb-10">Matière</p>
                            <p className="paragraph">PVC</p>
                        </div>
                        <div className="out-link">
                            <div className="link-icon">
                                <img src="./images/icons/arrow-up-dark.svg" alt="" />
                            </div>
                        </div>
                        <div className="card-diagonal">
                            <img src="./images/card-diagonal.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>




            <div className="section-wrapper inner-section inner-section-padding card-preview">

                <div className="intro-title-group">

                    <h2 className="text-head">
                        Votre carte de visite réinventée
                    </h2>
                    <p className="main-paragraph">
                        Explorez une nouvelle dimension d'interactions professionnelles,
                        conçue pour simplifier et amplifier vos opportunités de connexion
                    </p>
                </div>


                <div className="empty-cards flex justify-center gap-10">
                    <img src="./images/empty-card.png" alt="" />
                    <img src="./images/empty-card.png" alt="" />
                    <img src="./images/empty-card.png" alt="" />
                    <img src="./images/empty-card.png" alt="" />
                    <img src="./images/empty-card.png" alt="" />
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
                        <img src="./images/card-options.png" className="mb-10" alt="" />
                        <div className="paragraph text-center bold">
                            Add up to 5 cardholders
                        </div>
                    </div>
                    <div className="features-box">
                        <img src="./images/card-options-2.png" className="mb-10" alt="" />
                        <div className="paragraph text-center bold">
                            Add up to 5 cardholders
                        </div>
                    </div>
                    <div className="features-box">
                        <img src="./images/card-options-3.png" className="mb-10" alt="" />
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
                    <img src="./images/petalcard.png" className="config-preview" alt="" />
                </div>
            </div>


            <div className="section-wrapper classic-feature-03 inner-section inner-section-padding">

                <div className="intro-title-group text-center">
                    <div className="sm-text-box">
                        <h2 className="text-head ">
                            Votre carte
                            de visite réinventée
                        </h2>
                    </div>
                    <div className="sm-text-box">
                        <p className="main-paragraph text-center">
                            Explorez une nouvelle dimension d'interactions professionnelles, conçue pour simplifier et amplifier vos opportunités
                        </p>
                    </div>
                </div>


                <div className="features-wrapper">


                    <div className="features-box">
                        <div className="features-img">
                            <img src="./images/exploring.png" alt="" />
                        </div>
                        <div className="features-text-wrapper">
                            <h5 className="bold mb-10">Explorez une nouvelle dimension</h5>
                            <p className="main-paragraph">
                                Explorez une nouvelle dimension d'interactions professionnelles,
                                conçue pour simplifier et amplifier vos opportunités
                            </p>
                        </div>
                    </div>


                    <div className="features-box">
                        <div className="features-img">
                            <img src="./images/exploring2.png" alt="" />
                        </div>
                        <div className="features-text-wrapper">
                            <h5 className="bold mb-10">Explorez une nouvelle dimension</h5>
                            <p className="main-paragraph">
                                Explorez une nouvelle dimension d'interactions professionnelles,
                                conçue pour simplifier et amplifier vos opportunités
                            </p>
                        </div>
                    </div>

                </div>


            </div>
            <div className="section-wrapper go-to-classic inner-section md-section-padding">
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
                    <img src="./images/classic-cards/image 78.png" className="" alt="" />
                </div>
                <div className="flex justify-center">
                    <a href="#" className="discoverLink">Découvrir</a>
                </div>
            </div>

        </>
    )
}
