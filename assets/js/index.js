// constantes para clases
const containerNav = document.querySelector('.container-nav');

// constantes para id
const open = document.getElementById('open');
const nav = document.getElementById('nav');




// esta funcion remueve el display none
const removeHide = () => {

    containerNav.classList.remove('hide');

}

// esta funcion agrega el display none
const addHide = () => {

    containerNav.classList.add('hide');

}


// funcion de menu de hamburguesa

open.addEventListener('click', () => {

    if (document.querySelector('.hide')) {
        removeHide();

    } else {
        addHide();

    }

})