var peso;
var altura;
var imc;
var resultado;
var buttonClear;

function calcular(event) {
    event.preventDefault();

    peso = document.getElementById("peso").value;
    altura = document.getElementById("altura").value;

    imc = peso / (altura * altura);

    resultado = document.getElementById("resultado");
    buttonClear = document.getElementById("buttonClear");

    if (imc < 17) {
        mostrarResultado(`<p>Seu resultado foi: ${imc.toFixed(2)}, cuidado você está muito abaixo do peso!</p>`);
    } else if (imc >= 17 && imc <= 18.49) {
        mostrarResultado(`<p>Seu resultado foi: ${imc.toFixed(2)}, abaixo do peso!</p>`);
    } else if (imc >= 18.5 && imc <= 24.99) {
        mostrarResultado(`<p>Seu resultado foi: ${imc.toFixed(2)}, você está no peso ideal!</p>`);
    } else if (imc > 25 && imc <= 29.99) {
        mostrarResultado(`<p>Seu resultado foi: ${imc.toFixed(2)}, você está acima do peso!</p>`);
    } else if (imc >= 30) {
        mostrarResultado(`<p>Seu resultado foi: ${imc.toFixed(2)}, cuidado, obesidade!</p>`);
    }
}

function mostrarResultado(mensagem) {
    resultadoContainer.style.display = "inline-block";
    resultado.innerHTML = mensagem;
}

function limpar() {
    // Acessa os elementos diretamente dentro da função para evitar problemas de escopo
    const pesoInput = document.getElementById("peso");
    const alturaInput = document.getElementById("altura");
    const resultadoContainer = document.getElementById("resultadoContainer");
    const buttonClear = document.getElementById("buttonClear");

    // Limpa os campos de entrada
    pesoInput.value = "";
    alturaInput.value = "";

    // Esconde o container de resultado e o botão
    resultadoContainer.style.display = "none";
}

