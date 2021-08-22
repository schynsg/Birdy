import React from 'react'

const NewCatchSuccess = props => {

    return (
        <div>
            <h2 className="new-catch_title">Merci pour votre contribution</h2>
            <p className="intro">Vos informations ont bien été enregistrées.</p>
            <a href="/home" title="Retourner à la page Home" className="links">Retour au menu</a>
            <a href="/new-catch" title="Entrer une nouvelle capture" className="links secondary">Signaler une autre capture</a>
        </div>
    )
}

export default NewCatchSuccess