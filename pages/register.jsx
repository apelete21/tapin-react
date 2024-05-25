import Link from 'next/link'
import React from 'react'

export default function Login() {
    return (
        <div className='register-page w-screen h-screen bg-img-section bg-white max-x-pad'>
            <div className="register-nav-bar flex items-center justify-between flex-wrap">
                <Link href={"/"} className='navlink mb-10'>TAPIN</Link>
                <div className="go-register-btn-container flex items-center justify-between flex-wrap mb-10">
                    <div className="go-register-text">Vous avez déjà un compte ?</div>
                    <Link href={"/login"} className='go-register-btn bg-light-green'>
                        Se connecter
                    </Link>
                </div>
            </div>
            <div className="register-form-container flex justify-center">
                <form className="user-form flex flex-wrap">
                    <div className="form-subtitle bold mb-10 w-70 flex-full">
                        Créez votre compte.
                    </div>
                    <div className="form-input-element-container flex-full">
                        <input type="email" className="form-input-element" placeholder='Addresse e-mail*' />
                    </div>
                    <div className="form-input-element-container flex-half">
                        <input type="text" className="form-input-element" placeholder='Nom*' />
                    </div>
                    <div className="form-input-element-container flex-half">
                        <input type="text" className="form-input-element" placeholder='Prénom*' />
                    </div>
                    <div className="form-input-element-container flex-half">
                        <input type="text" className="form-input-element" placeholder='Société' />
                    </div>
                    <div className="form-input-element-container flex-half">
                        <input type="tel" className="form-input-element" placeholder='Telephone' />
                    </div>
                    <div className="form-input-element-container flex-half">
                        <input type="password" className="form-input-element" placeholder='TestLinkaard' disabled />
                    </div>
                    <div className="form-input-element-container flex-half">
                        <input type="password" className="form-input-element" placeholder='TestLinkaard' disabled />
                    </div>
                    <div className="confidentiality-paragraph flex-full text-center">
                        <p className='main-paragraph'>En vous inscrivant, vous acceptez de vous conformer à la <Link href={"/"}>politique de confidentialité</Link> et aux <Link href={"/"}>conditions générales</Link> de TAPIN</p>
                    </div>
                    <div className="form-input-element-container flex flex-full">
                        <input type="submit" className="form-submit-element bg-violet" value={"Rejoingnez-nous"} />
                    </div>
                </form>
            </div>
        </div>
    )
}
