const element = document.querySelector('h1');

function digitaTexto(elemento) {
    const textArray = elemento.innerHTML.split('');
    elemento.innerHTML = "";
    textArray.forEach((letra,i) => {
        setTimeout(() => elemento.innerHTML += letra, 75 * i);
    });

    }
    setTimeout(digitaTexto(element), 5000)


