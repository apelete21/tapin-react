import { Alert } from '@/components/messages'
import Link from 'next/link'
import React, { useState } from 'react'

export default function Register() {

    const [email, setEmail] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [password, setPassword] = useState("")
    const [org, setOrg] = useState("")
    const [phone, setPhone] = useState("")
    const [confirmPwd, setConfirmPwd] = useState("")

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
        email, firstName, lastName, org, password, phone
    })
    const registerUser = async (e) => {
        e.preventDefault()

        setLoading(true)

        const headersList = {
            Accept: "*/*",
            "User-Agent": "TAPIN (http://www.tapin.com)",
            "Content-Type": "application/json",
        };
        const response = await fetch("/api/register", {
            method: "POST",
            body: bodyContent,
            headers: headersList,
        })
        const { status, email } = await response.json()
        if (status === 200) {
            setAlertData({
                message: {
                    title: "Félicitations !!!",
                    text: `Votre inscription est effectuée avec succès. Rendez-vous dans votre boîte mail pour activer votre compte.`
                },
                status: "success"
                })
            setAlert(true)
            setLoading(false)
        } else {
            setAlertData({
                message: {
                    title: "Echec",
                    text: `Veuillez verifier si le formulaire est bien rempli avec les bonnes coordonnées.`
                },
                status: "error"
            })
            setAlert(true)
            setLoading(false)
        }
    }

    const close = () => {
        setAlert(false)
    }

    return (
        <>
            {loading ? <div className='loading-alert'><div>loading...</div></div> : <></>}
            {alert ? <Alert message={alertData.message} close={close} status={alertData.status} /> : <></>}
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
                    <form className="user-form flex flex-wrap" onSubmit={registerUser}>
                        <div className="form-subtitle bold mb-10 w-70 flex-full">
                            Créez votre compte.
                        </div>
                        <div className="form-input-element-container flex-full">
                            <InputField type="email" className="" placeholder='Addresse e-mail*' value={email} setValue={setEmail} />
                        </div>
                        <div className="form-input-element-container flex-half">
                            <InputField type="text" className="" placeholder='Nom*' value={firstName} setValue={setFirstName} />
                        </div>
                        <div className="form-input-element-container flex-half">
                            <InputField type="text" className="" placeholder='Prénom*' value={lastName} setValue={setLastName} />
                        </div>
                        <div className="form-input-element-container flex-half">
                            <InputField type="text" className="" placeholder='Société, Entreprise ou Organisation' value={org} setValue={setOrg} />
                        </div>
                        <div className="form-input-element-container flex-half">
                            <InputField type="tel" className="" placeholder='Telephone' value={phone} setValue={setPhone} />
                        </div>
                        <div className="form-input-element-container flex-half">
                            <InputField type="password" className="" placeholder='TestLinkaard' value={password} setValue={setPassword} />
                        </div>
                        <div className="form-input-element-container flex-half">
                            <InputField type="password" className="" placeholder='TestLinkaard' value={confirmPwd} setValue={setConfirmPwd} />
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

