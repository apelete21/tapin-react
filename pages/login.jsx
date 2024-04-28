import Link from 'next/link'
import React from 'react'

export default function Login() {
    return (
        <div className='login-page w-screen h-screen bg-img-section login-bg-image max-x-pad'>
            <div className="user-form-container">
                <form className="user-form">
                    <div className="form-title bold">
                        <Link href={"/"}>TAPIN</Link>
                    </div>
                    <div className="form-subtitle bold mb-10 w-70">
                        Heureux de vous revoir
                    </div>
                    <div className="form-input-element-container">
                        <input type="tel" className="form-input-element" placeholder='Telephone' />
                    </div>
                    <div className="form-input-element-container">
                        <input type="password" className="form-input-element" placeholder='Mot de passe' />
                    </div>
                    <div className="passwd-retrieve-link">
                        <Link href={"#"}>
                            Mot de passe oublié ?
                        </Link>
                    </div>
                    <div className="form-input-element-container">
                        <input type="submit" className="form-submit-element bg-violet" value={"Se connecter"} />
                    </div>
                </form>
                <div className="other-option flex items-center gap-20">
                    <span className="line-bars bg-gray-light-100" />
                    <p className="other-option-text color-gray-light">ou</p>
                    <span className="line-bars bg-gray-light-100" />
                </div>
                <div className="form-input-element-container">
                    <input type="submit" className="form-submit-element" value={"Continuer avec l'addresse e-mail"} />
                </div>
                <div className="go-register-btn-container flex items-center justify-between mt-2">
                    <div className="go-register-text">Pas de compte ?</div>
                    <Link href={"/register"} className='go-register-btn bg-light-green'>
                        S'inscrire
                    </Link>
                </div>
            </div>
        </div>
    )
}
