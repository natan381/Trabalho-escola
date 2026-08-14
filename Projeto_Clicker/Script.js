let contador = 0; //valor do contador

let x = 1; //Valor de biscoitos por click

let preco = 10; //preço do primeiro Upgrade

let preço2 = 200; //preço do segundo Upgrade

let preço3 = 1000; //preço do terceiro Upgrade

let t = 0; //valor de biscoitos por segundo

function autoClick() {
    if (contador >= preço3) {
        contador -= preço3;
        t += 1;
        preço3 *= 2;
        document.getElementById("contador").innerHTML = contador;
        document.getElementById("preço3").innerHTML = preço3;
        document.getElementById("t").innerHTML = t;
        setInterval(() => {
        
        contador += t;
        
        document.getElementById("contador").innerHTML = contador;
        document.getElementById("t").innerHTML = t;
    }, 1500);
}else{
    alert("Você não tem saldo suficiente para comprar o upgrade!");
}

    }

    


//Função de contador para adicionar cookies por click
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
        document.getElementById("x").innerHTML = x;
    }
    else {
        alert("Você não tem saldo suficientes para comprar o upgrade!");
    }




}

function upgrade2 () {
    if (contador >= preço2) {
        contador -= preço2;
        x *= 2;
        preço2 *= 3;
        document.getElementById("contador").innerHTML = contador;
        document.getElementById("preço2").innerHTML = preço2;
        document.getElementById("x").innerHTML = x;


    
    }else{
        alert("Você não tem saldo suficiente para comprar o upgrade!");
    }


}

function som_clik(){

    var som = document.getElementById("somclique");
    som.ariaCurrent = 0;
    som.play();


}
function toggleMenu(id) {
  const conteudos = document.querySelectorAll('.menu-content');
  conteudos.forEach(menu => {
    if (menu.id === id) {
      menu.classList.toggle('ativo');
    } else {
      menu.classList.remove('ativo');
    }
  });
}




