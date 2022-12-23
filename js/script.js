// Je récupère mon bouton dans une variable btn
let btn = document.querySelector('.btn')



// Au click sur le bouton je déclanche une fonction onclick
btn.addEventListener('click', onclick)

function onclick(evenement){
    // Stop la propagation de l'évenement
    evenement.stopPropagation()
    // Je récupère la modal
    let modal = document.querySelector('.modal')
    // Je change le style de la modal pour la faire apparaitre
    modal.style.display = 'block' 
    // Je récupère mon body
    let body = document.querySelector('body')
    // Je change le style de du body pour le mettre en gris
    body.style.backgroundColor = 'gray'
}




// Au click sur la page je déclanche une fonction closeModal
document.addEventListener('click', closeModal)



function closeModal(){
    // Je récupère la modal
    let modal = document.querySelector('.modal')

    // Je change le style de la modal pour la faire disparaitre 
    modal.style.display = 'none' 

    // Je récupère mon body
    let body = document.querySelector('body')

    // Je change le style du body pour le remettre en blanc
    body.style.backgroundColor = 'white'
}
