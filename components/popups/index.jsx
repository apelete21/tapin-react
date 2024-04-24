import React from 'react'

export function PopForm({ closeForm }) {
    const noScroll = () => {
        document.body.addEventListener('scroll', (e) => {
            e.preventDefault()
        })
    }
    return (
        <div className='popups w-screen h-screen '>
            <div className="closeBtn" onClick={closeForm}>
                <span>x</span>
            </div>
            <div className="grid-col-7 quotation-form">
                <div className=" ">
                    <div className="form rounded">
                    <p className="text-second text-center mb-10">
                        Formulaire de demande de Demo
                    </p>
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
    )
}

export function PopVideo({ closeVideo }) {
    return (
        <div className='popups w-screen h-screen '>
            <div className="closeBtn" onClick={closeVideo}>
                <span>x</span>
            </div>
            <iframe className='demo-video' style={{
                width: "100%",
                height: "80%",
                border: "2px solid #b565ce",
                borderRadius: 15,
            }} src="https://www.youtube.com/embed/kRu8JkdoF0o?si=zzu2Cj6bUJHC816R" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
    )
}

