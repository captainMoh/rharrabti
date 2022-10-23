const nom = document.getElementById('nom');
const email = document.getElementById('email');
const message = document.getElementById('message');
const form = document.getElementById('formulaire');
const button = document.getElementById('envoyer');

form.addEventListener('submit', e => {
    
    e.preventDefault();
    let init = {
        method: 'POST',
        body: JSON.stringify({
            nom: nom.value,
            email: email.value,
            message: message.value
        }),
        headers: {'Content-Type': 'application/json; charset=UTF-8'}
    }

    fetch('/message', init)

    nom.value = '';
    email.value = '';
    message.value = '';
    
    button.innerText = 'message envoyé !'
    setTimeout(() => button.innerText = 'Me contacter', 1000)
})