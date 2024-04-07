import React from 'react'
import Head from '../head'
import Navbar from '../navbar'

export default function Home() {
    return (
        <>
            
            <div className="section text-white bg-img-section home-hero">
                <Navbar />
                <div className="max-x-pad section-container">
                    <div className="text-container">
                        <h1 className="text-head">
                            Faites un saut vers le futur
                        </h1>
                        <p className="white-paragraph banner__subheadline">
                            Pour ceux qui veulent bien plus qu’une simple carte de visite, il
                            y’a TAP’IN
                        </p>
                        <a href="#" className="btn white-btn">Découvrir</a>
                    </div>
                    {/* <div className="full-img-illustrator">
                      <img src="./images/bg1.png" alt="" />
                  </div>  */}
                </div>
            </div>
            <div className="section-wrapper inner-section-padding inner-section">
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
                    <div className="virtual-card-img">
                        <img src={require("../images/img1.png")} alt="" />
                    </div>
                </div>
            </div>
            <div className="section-wrapper md-section-padding  bg-img-section user-preview-section">
                <div className="section-content-wrapper">
                    <div className="md-text-box">
                        <h2 className="text-head text-center text-white">
                            un geste, une échange
                        </h2>
                    </div>
                    <div className="sm-text-box">
                        <div className="main-paragraph white-p text-center">
                            Partagez votre univers avec ceux qui vous entourent d'un simple
                            mouvement, simplifiez la connexion avec votre monde grâce à votre
                            Tap'in
                        </div>
                    </div>
                </div>
            </div>
            <div className="section-wrapper bg-img-section inner-section card-demo-section">
                <div className="section-content-wrapper flex-col card-tap-section  inner-section-padding">
                    <div className="flex flex-col align-center">
                        <div className="w-80">
                            <h2 className="text-head text-center text-white">
                                créez des liens d'un simple mouvement
                            </h2>
                        </div>
                        <div className="md-text-box">
                            <p className="main-paragraph white-p text-center">
                                Compatibles avec tous les smartphones avec aucune application ou
                                installation nécessaire, il vous suffit juste de rapprocher votre
                                Tapin Card d'un smartphone ou scannez son QR pour échanger vos
                                informations professionnelles instantanément. C'est aussi simple
                                que cela!
                            </p>
                        </div>
                    </div>

                    <img className="card-demo-img" src={require("../images/bg3.png")} alt="" srcset="" />
                    <div className="row sharing-methods-wrapper text-white">
                        <div className="col2">
                            <div className="square-icon-wrapper">
                                <svg className="instantLinks__infoIconSVG" width="82" height="82" viewBox="0 0 82 82" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_1_71)"><path d="M61.5 0H20.5C9.17816 0 0 9.17816 0 20.5V61.5C0 72.8218 9.17816 82 20.5 82H61.5C72.8218 82 82 72.8218 82 61.5V20.5C82 9.17816 72.8218 0 61.5 0Z" fill="#C8F169"></path><mask id="mask0_1_71" maskUnits="userSpaceOnUse" x="23" y="23" width="36" height="36" style={{ "mask-type": "luminance" }}><path d="M58.4349 23.4279H23.4294V58.4506H58.4349V23.4279Z" fill="white"></path></mask><g mask="url(#mask0_1_71)"><path d="M31.9578 42.7857C31.2714 42.7857 30.7567 42.2709 30.7567 41.5844C30.7567 40.9152 31.2714 40.4005 31.9578 40.4005H39.731V30.0189C39.731 29.3496 40.2459 28.8349 40.9151 28.8349C41.5842 28.8349 42.1162 29.3496 42.1162 30.0189V41.5844C42.1162 42.2709 41.5842 42.7857 40.9151 42.7857H31.9578ZM40.9323 58.4352C50.5074 58.4352 58.4351 50.4904 58.4351 40.9325C58.4351 31.3574 50.4903 23.4296 40.9151 23.4296C31.3573 23.4296 23.4294 31.3574 23.4294 40.9325C23.4294 50.4904 31.3744 58.4352 40.9323 58.4352Z" fill="black"></path></g></g><defs><clipPath id="clip0_1_71"><rect width="82" height="82" fill="white"></rect></clipPath></defs></svg>
                            </div>
                            <div className="row-body">
                                <h3>Sans contact</h3>
                                <p className="main-paragraph p-16 white-p">
                                    La technologie NFC (ou sans contact) est
                                    directement intégrée dans votre carte grâce à une puce haute
                                    qualité et sécurisée.
                                </p>
                            </div>
                        </div>
                        <div className="col2">
                            <div className="square-icon-wrapper">
                                <svg className="instantLinks__infoIconSVG" width="82" height="82" viewBox="0 0 82 82" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_1_81)"><path d="M61.5 0H20.5C9.17816 0 0 9.17816 0 20.5V61.5C0 72.8218 9.17816 82 20.5 82H61.5C72.8218 82 82 72.8218 82 61.5V20.5C82 9.17816 72.8218 0 61.5 0Z" fill="#C8F169"></path><mask id="mask0_1_81" maskUnits="userSpaceOnUse" x="21" y="23" width="39" height="35" style={{ "mask-type": "luminance" }}><path d="M59.3137 23.4279H21.9615V57.9015H59.3137V23.4279Z" fill="white"></path></mask><g mask="url(#mask0_1_81)"><path d="M56.1514 57.2685C56.872 58.0065 58.1074 58.0065 58.7938 57.2685C59.4973 56.5136 59.4973 55.3466 58.7938 54.626L42.475 38.2558C41.7542 37.535 40.5189 37.535 39.8324 38.2558C39.1118 39.0107 39.129 40.1947 39.8324 40.9155L56.1514 57.2685ZM46.1643 45.48L41.1365 40.4349C40.8276 40.1261 40.7248 39.783 41.0337 39.4912C41.2909 39.2165 41.6514 39.2852 41.9775 39.6113L47.0224 44.6562L46.1643 45.48Z" fill="black"></path><path d="M34.9923 57.5428C35.3012 57.5428 35.5241 57.3197 35.5757 56.9938C36.1248 52.4122 36.3479 52.2919 41.0152 51.537C41.3757 51.4683 41.5986 51.2966 41.5986 50.9536C41.5986 50.6275 41.3757 50.4216 41.0839 50.37C36.3822 49.4778 36.1248 49.495 35.5757 44.9134C35.5241 44.5873 35.3012 44.3642 34.9923 44.3642C34.6662 44.3642 34.4431 44.5873 34.4088 44.8962C33.8083 49.5464 33.6538 49.7009 28.9006 50.37C28.609 50.4044 28.3859 50.6275 28.3859 50.9536C28.3859 51.2795 28.609 51.4683 28.9006 51.537C33.6538 52.4463 33.791 52.4463 34.4088 57.0279C34.4431 57.3197 34.6662 57.5428 34.9923 57.5428ZM26.8413 42.5968C27.0817 42.5968 27.2189 42.4253 27.2705 42.2021C27.8539 38.9418 27.871 38.7358 31.3201 38.1525C31.5432 38.101 31.7147 37.9638 31.7147 37.7234C31.7147 37.4832 31.5432 37.3288 31.3201 37.2944C27.871 36.6938 27.8539 36.4879 27.2705 33.2276C27.2189 33.0047 27.0817 32.85 26.8413 32.85C26.6012 32.85 26.464 33.0047 26.4124 33.2276C25.829 36.4879 25.8119 36.6938 22.3628 37.2944C22.1397 37.3288 21.9682 37.4832 21.9682 37.7234C21.9682 37.9638 22.1397 38.101 22.3628 38.1525C25.8119 38.7358 25.829 38.9418 26.4124 42.2021C26.464 42.4253 26.6012 42.5968 26.8413 42.5968ZM36.2449 31.6146C36.4507 31.6146 36.5537 31.4945 36.5881 31.3057C37.1715 28.5603 37.1373 28.4572 40.0199 27.8738C40.2087 27.8395 40.3461 27.7194 40.3461 27.5306C40.3461 27.3248 40.2087 27.2047 40.0199 27.1704C37.1373 26.587 37.1715 26.4839 36.5881 23.7556C36.5537 23.5668 36.4507 23.4294 36.2449 23.4294C36.039 23.4294 35.936 23.5668 35.9017 23.7556C35.3183 26.4839 35.3526 26.587 32.4698 27.1704C32.281 27.2047 32.1437 27.3248 32.1437 27.5306C32.1437 27.7194 32.281 27.8395 32.4698 27.8738C35.3526 28.4572 35.3183 28.5603 35.9017 31.3057C35.936 31.4945 36.039 31.6146 36.2449 31.6146ZM50.4187 37.672C50.6591 37.672 50.7963 37.5176 50.8477 37.2944C51.4311 34.0341 51.4484 33.8282 54.8975 33.2276C55.1375 33.1933 55.2921 33.0388 55.2921 32.7986C55.2921 32.5584 55.1375 32.4211 54.8975 32.3697C51.4484 31.7863 51.4311 31.5804 50.8477 28.3201C50.7963 28.097 50.6591 27.9253 50.4187 27.9253C50.1784 27.9253 50.0412 28.097 49.9898 28.3201C49.4064 31.5804 49.3891 31.7863 45.94 32.3697C45.7171 32.4211 45.5454 32.5584 45.5454 32.7986C45.5454 33.0388 45.7171 33.1933 45.94 33.2276C49.3891 33.8282 49.4064 34.0341 49.9898 37.2944C50.0412 37.5176 50.1784 37.672 50.4187 37.672Z" fill="black"></path></g></g><defs><clipPath id="clip0_1_81"><rect width="82" height="82" fill="white"></rect></clipPath></defs></svg>
                            </div>
                            <div className="row-body">
                                <h3>QR Code</h3>
                                <p className="main-paragraph white-p p-16">
                                    Grâce au QR Code, partagez simplement vos
                                    informations depuis votre carte à vos interlocuteurs avec un
                                    smartphone ancien.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="linkaard-benefits">
                <div className="text-container section-y-pad linkaard-benefits-intro">
                    <h1 className="text-head">Aller à l'éssentiel</h1>
                    <p className="sm-text-box main-paragraph">
                        Oubliez les cartes de visite traditionnelles en papier.
                        Démarquez-vous en offrant bien plus qu'une simple information de
                        contact et enrichissez vos échanges en partageant instantanément
                        votre présence en ligne, vos projets actuels, votre agenda et bien
                        plus encore
                    </p>
                </div>

                <div className="linkaard-benefits-features">
                    <div className="md-text-box linkaard-benefits-list">
                        <div className="circles-container">
                            <span className="circle text-second">1</span>
                            <span className="circle text-second">2</span>
                            <span className="circle text-second">3</span>
                        </div>
                        <p className="main-paragraph mt-2">
                            C'est le nombre de carte de visite Tap'in dont vous avez besoin
                        </p>
                    </div>
                    <div className="img-wrapper">
                        <img className="linkaard-benefits-img" src={require("../images/bg4.png")} alt="" srcset="" />
                    </div>
                </div>
            </div>
            <div className="card-choices">

                <div className="text-container section-y-pad index-5">
                    <h2 className="text-head index-5">adapté à votre style</h2>
                    <p className="sm-text-box main-paragraph dark-font ">
                        Il existe une carte pour chaque style, chaque personnalité. Que
                        vous recherchiez la simplicité élégante, l'audace moderne ou un
                        design intemporel, choisissez votre modèle et personnalisez-le
                        selon votre identité
                    </p>
                    <div className="color-options">
                        <span className="color-picker green"></span>
                        <span className="color-picker black"></span>
                        <span className="color-picker bamboo"></span>
                    </div>
                </div>

                <div className="card-choices-content section-y-pad">
                    <div className="description-wrapper">
                        <h4 className="subtitle">Carte PVC Coloris Vert</h4>
                        <p className="main-paragraph dark-font md-text-box">
                            Soleo saepe ante oculos ponere, idque libenter crebris usurpare
                            sermonibus
                        </p>
                    </div>

                    <div className="img-wrapper">
                        <img src={require("../images/img3.png")} alt="" />

                        <div className="selection-group">
                            <p className="main-paragraph dark-font  w-80">
                                Ce modèle vous intéeresse? personnalisez-le davantage
                            </p>
                            <a href="" className="btn secondary-btn">Personnaliser</a>
                        </div>

                    </div>

                </div>
            </div>
            <div className="section-wrapper inner-section-padding bg-img-section linkaard-team">
                <div className="max-x-pad relative">
                    <div className="flex-space-betwen">
                        <div className="text-container max-y-pad index-5">
                            <h2 className="text-head">connectez votre équipe</h2>
                            <p className="main-paragraph sm-text-box">
                                Optez pour les TapinCard pour votre équipe et propulsez la dans
                                une nouvelle ère de networking avec une carte de visite repensée
                                pour s'adapter à aux besoins actuels
                            </p>
                        </div>


                        <div className="sm-text-box">

                            <p className="main-paragraph sm-text-box">
                                Soleo saepe ante oculos ponere, idque libenter crebris usurpare
                                sermonibus
                            </p>

                            <div className="btn-wrapper mt-3">
                                <a href="" className="btn secondary-btn">Commander</a>
                                <a href="" className="btn light-btn">Demander un devis pro</a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="section-wrapper inner-section inner-section-padding bg-img-section bg-dark-light ma">

                <div className="flex flex-col align-center">
                    <div className="w-80">
                        <h2 className="text-head text-center text-white">
                            personnalisable et modifiable en temps réel
                        </h2>
                    </div>
                    <div className="md-text-box">
                        <p className="main-paragraph white-p text-center">
                            Mettez à jour vos données en temps réel et changez aussi souvent
                            de profil que vous en avez envi et depuis n'importe où via votre
                            tableau de board. Fini les commandes répétées de nouvelles cartes
                            à chaque changement.
                        </p>
                    </div>
                </div>


                <div className="img-illustrator w-100 h-100">
                    <img src={require("../images/img4.png")} alt="" />
                </div>

            </div>
            <div className="section-wrapper inner-section md-section-padding bg-img-section bg data-privacy relative max-y-pad">




                <div className="flex flex-col align-center intro-title-group">
                    <div className="w-80">
                        <h2 className="text-head text-center text-white">
                            Vos données, notre engagement
                        </h2>
                    </div>
                    <div className="md-text-box">
                        <p className="main-paragraph white-p text-center">
                            Nous accordons une attention particulière à la protection de vos
                            informations, qu'elles soient personnelles ou professionnelles.
                            Vos données sont soigneusement chiffrées et sécurisées sur nos
                            serveurs en France, ainsi que sur vos cartes de visite NFC. Grâce
                            à notre technologie de pointe,
                        </p>
                    </div>
                </div>

                <div className="max-y-pad btn-group">
                    <a href="" className="btn secondary-btn"
                    >Politique de confidentialitées</a>
                </div>
            </div>
        </>
    )
}
