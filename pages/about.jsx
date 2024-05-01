import Navbar from '@/components/navbar'
import Link from 'next/link'
import React from 'react'

export default function About() {
  return (
    <>
          <div className="about">
            <Navbar />
              <div className="section-wrapper about-intro inner-section md-section-padding ">
                  <div className="max-x-pad">

                      <div className="intro-title-group text-center">
                          <div className="w-100 tittle-text-wrapper">
                              <h2 className="text-head ">
                                  Votre carte
                                  de visite réinventée
                              </h2>
                          </div>
                          <div className="md-text-box tittle-text-wrapper">
                              <p className="main-paragraph text-center">
                                  Explorez une nouvelle dimension d'interactions professionnelles, conçue pour simplifier et amplifier vos opportunités de connexion
                              </p>
                              <Link href="" className="btn black-btn">Notre misson</Link>
                          </div>
                      </div>

                      <div className="about-intro-boxed-data-wrapper">
                          <img src={("./images/about/img1.png")} alt="" />
                      </div>
                  </div>
              </div>
              <div className="section-wrapper mission-section inner-section md-section-padding">

                  <div className="max-x-pad">
                      <div className="text-container">
                          <h2 className="text-head w-70">
                              Explorez une nouvelle dimension d'interactions professionnelles,
                              conçue pour simplifier et
                          </h2>
                          <div className="btn-wrapper">
                              <Link href="" className="btn black-btn">Vision</Link>
                              <Link href="#" className="btn light-btn">Mission</Link>
                          </div>
                      </div>

                      <div className="mission-img-wrapper w-100">
                          <img className="w-100" src={("./images/about/img-3.png")} alt="" />
                      </div>
                  </div>

              </div>
              <div className="section-wrapper vision-section inner-section md-section-padding">
                  <div className="max-x-pad">

                      <div className="intro-title-group text-center">
                          <div className="md-text-box tittle-text-wrapper">
                              <h2 className="text-head ">
                                  Votre carte
                                  de visite réinventée
                              </h2>
                          </div>
                          <div className="sm-text-box tittle-text-wrapper">
                              <p className="main-paragraph text-center">
                                  Explorez une nouvelle dimension d'interactions professionnelles, conçue pour simplifier et amplifier vos opportunités de connexion
                              </p>
                          </div>
                      </div>


                      <div className="flex justify-center fadeIn-img-wrapper mt-2">
                          <img src={("./images/about/img-4.png")} alt="" className="w-100" />
                      </div>
                  </div>
              </div>
              <div className="section-wrapper vision-transition-section inner-section">
                  <div className="max-x-pad ">

                      <div className="intro-title-group text-center text-white">
                          <div className="tittle-text-wrapper">
                              <h2 className="text-head "> Votre carte de visite réinventée
                              </h2>
                          </div>
                          <div className="tittle-text-wrapper">
                              <p className="main-paragraph text-center text-white">
                                  Explorez une nouvelle dimension d'interactions professionnelles, conçue pour simplifier et amplifier vos opportunités de connexion
                              </p>
                          </div>
                      </div>


                  </div>
              </div>
              <div className="section-wrapper inner-section inner-section-padding classic-feature-02 product-features">
                  <div className="max-x-pad">

                      <div className=" flex intro-title-group col-2-title">
                          <div className="grid-col-6">
                              <h1 className="text-head">Votre carte lorem ipsum de visite </h1>
                          </div>
                          <div className="grid-col-6">
                              <p className="main-paragraph"
                              >Pour ceux qui veulent bien plus qu’une simple carte de visite, il
                                  y’a TAP’IN bien plus qu’une simple carte de visitequi veulent bien plus qu’une simple carte de visite, il
                                  y’a TAP’IN bien plus qu’une simple carte de visite,, il y’a TAP’IN
                              </p>
                          </div>
                      </div>



                      <div className="features-wrapper ">
                          <div className="features-box">
                              <img src={("./images/card-options.png")} className="mb-10" alt="" />
                              <h5 className="paragraph text-center bold">
                                  Add up to 5 cardholders
                              </h5>
                              <p className="white-paragraph text-center">
                                  explorez une nouvelle dimension d'interactions
                                  professionnelles
                              </p>
                          </div>
                          <div className="features-box purple-box">
                              <img src={("./images/card-options-2.png")} className="mb-10" alt="" />
                              <h5 className="paragraph text-center bold">
                                  Add up to 5 cardholders
                              </h5>
                              <p className="white-paragraph text-center">
                                  explorez une nouvelle dimension d'interactions
                                  professionnelles
                              </p>
                          </div>
                          <div className="features-box">
                              <img src={("./images/card-options-3.png")} className="mb-10" alt="" />
                              <h5 className="paragraph text-center bold">
                                  Add up to 5 cardholders
                              </h5>
                              <p className="white-paragraph text-center">
                                  explorez une nouvelle dimension d'interactions
                                  professionnelles
                              </p>
                          </div>
                      </div>
                  </div>
              </div>

              <div className="section-wrapper inner-section md-section-padding inner-configurator sm-bottom-padding bg-clay">
                  <div className="max-x-pad">
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
                              <Link href="#" className="btn black-btn">Lorem Ipsum</Link>
                          </div>

                      </div>

                      <div className="img-wrapper flex">
                          <div className="grid-col-6">
                              <img src={("./images/about/Vector.png")} className="config-preview" alt="" />
                          </div>
                          <div className="grid-col-6">
                              <img src={("./images/about/Vector-1.png")} className="config-preview" alt="" />
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          </>
  )
}
