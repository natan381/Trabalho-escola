let contador = 0;

function contar() {
    contador += 1;
    document.getElementById("contador").innerHTML = contador;
}

document.getElementById("biscoito").addEventListener("click", contar);
    