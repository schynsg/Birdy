import React from 'react'

const Welcome = () => {
    return (
        <div>
            <div className="menu">
                <a href="/report" className="links" title="Ajouter une capture">Signaler une capture</a>
                <a href="/encyclopedia" className="links" title="Parcourir l'encyclopédie">Encyclopédie</a>
                <a href="/users" className="links" title="Rechercher un utilisateur">Liste des utilisateurs</a>
            </div>
        </div>
    )
}

export default Welcome