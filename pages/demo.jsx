import Navbar from '@/components/navbar'
import { PopForm, PopVideo } from '@/components/popups'
import React, { useState } from 'react'
import { createPortal } from 'react-dom'

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

export default function Demo() {

    const [popVideo, setPopVideo] = useState(false)
    const [popForm, setPopForm] = useState(false)

    const openForm = (e) => {
        e.preventDefault()
        setPopForm(true)
    }

    const closeForm = (e) => {
        e.preventDefault()
        setPopForm(false)
    }

    const openVideo = (e) => {
        e.preventDefault()
        setPopVideo(true)
    }

    const closeVideo = (e) => {
        e.preventDefault()
        setPopVideo(false)
    }

    return (
        <>
            {
                popForm ? createPortal(<PopForm closeForm={closeForm} />, document.body) : <></>
            }
            {
                popVideo ? createPortal(<PopVideo closeVideo={closeVideo} />, document.body) : <></>
            }
            <Navbar />
            <div className="section-wrapper demo-intro inner-section inner-section-padding ">
                <div className="max-x-pad">
                    <div className="intro-title-group text-center">
                        <div className="w-100">
                            <h2 className="text-head ">
                                Votre carte
                                de visite réinventée
                            </h2>
                        </div>
                        <div className="flex">
                            <p className="main-paragraph text-center">
                                Explorez une nouvelle dimension d'interactions professionnelles, conçue pour simplifier et amplifier vos opportunités
                            </p>
                        </div>
                    </div>

                    <div className="demo-imgs flex justify-center gap-40">
                        <img src={("./images/demo/img1.png")} alt="" />
                        <img src={("./images/demo/img2.png")} alt="" />
                    </div>
                </div>
            </div>
            <div className="section-wrapper demo-intro inner-section inner-section-padding">
                <div className="max-x-pad">

                    <div className="intro-title-group text-center">
                        <div className="w-50 tittle-text-wrapper">
                            <h2 className="text-head ">
                                Votre carte
                                de visite réinventée
                            </h2>
                        </div>
                        <div className="w-30 tittle-text-wrapper">
                            <p className="main-paragraph text-center">
                                Explorez une nouvelle dimension d'interactions professionnelles, conçue pour simplifier et amplifier vos opportunités de connexion
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-20 quotation-wrapper">

                        <div className="grid-col-5 quotation-form-aside">
                            <div className="card h-100 bg-black rounded">
                                <div className=" h-100 flex flex-col content-between items-between">
                                    <div className="card-head flex align-center relative">
                                        <div className="circle">
                                            <img src={("./images/demo/profile.png")} alt="profile photo" />
                                        </div>
                                        <span className="profile-info flex justify-center align-center">
                                            24/6
                                        </span>
                                    </div>
                                    <div>
                                        <div className="text-intro">Pour ceux qui veulent</div>
                                        <h4 className="main-text">
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                            Quis, earum.
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid-col-7 quotation-form">
                            <div className=" ">
                                <div className="form rounded">
                                    <form action="" className="default-form flex flex-col content-between align-between">
                                        <div className="input-wrapper">
                                            <input type="text" placeholder="Nom complet" />
                                        </div>
                                        <div className="input-wrapper">
                                            <input type="text" placeholder="Email" />
                                        </div>
                                        <div className="input-wrapper">
                                            <input type="text" placeholder="Telephone" />
                                        </div>
                                        <div className="input-wrapper">
                                            <input type="text" placeholder="Motif" />
                                        </div>
                                        <div className="textarea">
                                            <textarea name="" id="" placeholder="Message"></textarea>
                                        </div>
                                        <div className="submit-btn-group">
                                            <button className="btn btn-purple white-paragraph">
                                                Soumettre
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section-wrapper demo-request-section inner-section md-section-padding">
                <div className="max-x-pad">
                    <div className="text-container max-y-pad text-white">
                        <h1 className="text-head">vos données, notre engagement</h1>
                        <p className="white-p">
                            Nous accordons une attention particulière à la protection de vos
                            informations qu'elle
                        </p>
                    </div>

                    <div className="btn-wrapper mt-3">
                        <a href="#" onClick={openVideo} className="btn secondary-btn">Voir la video de demo</a>
                        <a href="#" onClick={openForm} className="btn light-btn">Demander une demo personnalisée</a>
                    </div>
                </div>
            </div>
            <div className="section-wrapper faq-section inner-section inner-section-padding bg-little-white">
                <div className="max-x-pad">
                    <div className="flex gap-50 faq-intro">
                        <div className="text-head col-2">Votre caret lorem B ipsum do</div>
                        <div className="col-2 flex">
                            <span className="w-20"></span>
                            <div className="w-80">
                                <p className="main-paragraph w-80">
                                    Pour ceux qui veulent bien plus qu'une simple carte de visite,
                                    il
                                </p>
                                <div className="card-head flex align-center relative">
                                    <div
                                        className="circle index-5 bg-black flex justify-center align-center text-white"
                                    >
                                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3.64966 0.525006C3.47498 0.526266 3.3023 0.562385 3.14176 0.631244C2.98121 0.700104 2.83603 0.80032 2.71472 0.926017C2.59341 1.05171 2.49841 1.20036 2.43529 1.36325C2.37217 1.52614 2.34221 1.69999 2.34715 1.8746C2.35209 2.04922 2.39184 2.2211 2.46407 2.38015C2.5363 2.53921 2.63955 2.68225 2.76778 2.80088C2.89601 2.91952 3.04663 3.01136 3.21081 3.07103C3.37499 3.1307 3.54943 3.157 3.72391 3.14837L16.3383 2.79694L0.593192 18.5421C0.34705 18.7882 0.208767 19.1221 0.208767 19.4702C0.208767 19.8183 0.347051 20.1521 0.593193 20.3982C0.839335 20.6444 1.17317 20.7827 1.52127 20.7827C1.86936 20.7827 2.20321 20.6444 2.44935 20.3982L18.197 4.65062L17.8455 17.27C17.8369 17.4445 17.8632 17.6189 17.9229 17.7831C17.9825 17.9473 18.0744 18.0979 18.193 18.2261C18.3117 18.3544 18.4547 18.4576 18.6138 18.5298C18.7728 18.6021 18.9447 18.6418 19.1193 18.6468C19.2939 18.6517 19.4678 18.6217 19.6307 18.5586C19.7935 18.4955 19.9422 18.4005 20.0679 18.2792C20.1936 18.1579 20.2938 18.0127 20.3627 17.8522C20.4315 17.6916 20.4676 17.5189 20.4689 17.3442L20.8995 1.89114C20.9109 1.50741 20.7952 1.13067 20.5704 0.819516C20.4655 0.656675 20.3261 0.518941 20.162 0.416113C19.8533 0.196496 19.4815 0.0835406 19.1028 0.0943789L3.64966 0.525006Z" fill="#D9D9D9" />
                                        </svg>

                                    </div>
                                    <div className="absolute flex info align-center">
                                        +228 90 58 58 88
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="faq-elements flex gap-20 max-y-pad">
                            <div className="accordions-container flex gap-20">
                                {array.map((e, i) => {
                                    return <FaQCard key={i} data={e} />
                                })}
                            </div>
                    </div>
                </div>
            </div>

        </>
    )
}


function FaQCard({ data }) {
    const [accordion, setAccordion] = useState(false)
    return (
        <>
            <div className="accordion-box pointer" onClick={() => { setAccordion(!accordion) }}>
                <div className="accordion-header flex content-between">
                    <div className="accordion-title">
                        Comment sont protégés mes données ?
                    </div>
                    <span className="accordion-arrow">
                        <svg width="16" height="9" className={!accordion ? 'rotate-45' : ""}  viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.0834961 8.16666L8.00016 0.249997L15.9168 8.16666H0.0834961Z" fill="#CBD6E2" />
                        </svg>
                    </span>
                </div>
                {accordion ? <p className="main-paragraph w-80 mt-2">
                    Pour ceux qui veulent bien plus qu'une simple carte de visite,
                    il y'a TAP'IN
                </p> : <></>}
            </div>
        </>
    )
}