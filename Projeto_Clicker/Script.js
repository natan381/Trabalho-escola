let contador = 0;
let x = 1;
let preco = 10;
function contar() {
    contador += x;
    document.getElementById("contador").innerHTML = contador;
}

document.getElementById("biscoito").addEventListener("click", contar);
    
function upgrade() {
    if (contador >= preco) {
        contador -= preco;
        x += 1;
        preco *= 2;
        document.getElementById("contador").innerHTML = contador;
        document.getElementById("preco").innerHTML = preco;
    }
    else {
        alert("Você não tem biscoitos suficientes para comprar o upgrade!");
    }




}