import { Alert } from '@/components/messages'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

export default function Login() {

    const router = useRouter()

    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState("")

    const [loading, setLoading] = useState(false)
    const [alert, setAlert] = useState(false)
    const [alertData, setAlertData] = useState({
        message: {
            title: "",
            text: "",
        },
        status: "none"
    })

    const bodyContent = JSON.stringify({
        password, phone
    })

    const loginUser = async (e) => {
        e.preventDefault()

        setLoading(true)

        const headersList = {
            Accept: "*/*",
            "User-Agent": "TAPIN (http://www.tapin.com)",
            "Content-Type": "application/json",
        };
        const response = await fetch("/api/login", {
            method: "POST",
            body: bodyContent,
            headers: headersList,
        })
        const { status, redirect_link } = await response.json()
        if (status !== 200) {
            setAlertData({
                message: {
                    title: "Echec",
                    text: `Veuillez verifier si le formulaire est bien rempli avec les bonnes coordonnées.`
                },
                status: "error"
            })
            setAlert(true)
            setLoading(false)
            return            
        }
        setLoading(false)
        router.push(`/redirect?url=${redirect_link}`)
    }

    const close = () => {
        setAlert(false)
    }

    return (
        <>
            {loading ? <div className='loading-alert'><div>loading...</div></div> : <></>}
            {alert ? <Alert message={alertData.message} close={close} status={alertData.status} /> : <></>}
            <div className='login-page w-screen h-screen bg-img-section login-bg-image max-x-pad'>
                <div className="user-form-container">
                    <form className="user-form" onSubmit={loginUser}>
                        <div className="form-title bold">
                            <Link href={"/"}>TAPIN</Link>
                        </div>
                        <div className="form-subtitle bold mb-10 w-70">
                            Heureux de vous revoir
                        </div>
                        <div className="form-input-element-container">
                            <InputField type="tel" className="" placeholder='Telephone' value={phone} setValue={setPhone} />
                        </div>
                        <div className="form-input-element-container">
                            <InputField type="password" className="" placeholder='TestLinkaard' value={password} setValue={setPassword} />
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
                    <div className="go-register-btn-container flex items-center justify-between mt-2">
                        <div className="go-register-text">Pas de compte ?</div>
                        <Link href={"/register"} className='go-register-btn bg-light-green'>
                            S'inscrire
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}


function InputField({ type, className, placeholder, value, setValue }) {
    return (
        <>
            <input type={type} className={`form-input-element ${className}`} placeholder={placeholder} value={value} onChange={(e) => { setValue(e.target.value) }} />
        </>
    )
}
