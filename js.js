let nome = prompt("Seja bem vindo, digite seu nome: ")
let peso = parseFloat (prompt("Digite seu peso (Kg): "))
let altura = parseFloat (prompt("Digite sua altura (m): "))
gerarRelatorio(peso, altura);

let resultado = calcularIMC(peso, altura)
alert(resultado)

function calcularIMC(peso, altura){
    return peso / (altura * altura)
}
function classificarIMC (imc){
    if (imc >= 40){
    alert ("obesidade grau 3")
    }else if(imc >= 35){
        alert("obesidade grau 2")
    } else if(imc >= 30){
    alert("obesidade grau 1")
    } else if(imc >= 25){
    alert("sobrepeso")
    } else if(imc >= 18.5){
    alert("peso normal")
    }else{
        alert ("abaixo do peso")
    }
    
    function gerarRelatorio(peso, altura){
        let imc = calcularIMC(peso, altura)
        classificarIMC(imc)
    }

}

    
        
