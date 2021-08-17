const calcular = document.getElementById("calcular");

function calcularImc() {
   const altura = document.getElementById("altura");
   const peso = document.getElementById("peso");
   const resultado = document.getElementById("resultado");
   const nome = document.getElementById("nome");
 
    const imc = parseFloat(peso.value) / ( parseFloat(altura.value) ** 2)
    
    if (imc < 18.5) {
        resultado.textContent = nome.value + ", seu IMC é " + imc.toFixed(1) + ". Você está abaixo do peso.";
    } else if (imc >= 18.5 && imc < 24.9) {
        resultado.textContent = nome.value + ", seu IMC é " + imc.toFixed(1) + ". Você está com o peso ideal. Parabéns!";
    } else if (imc >= 24.9 && imc < 29.9) {
        resultado.textContent = nome.value + ", seu IMC é " + imc.toFixed(1) + ". Você está acima do peso.";
    } else if (imc >= 29.9 && imc < 34.9) {
        resultado.textContent = nome.value + ", seu IMC é " + imc.toFixed(1) + ". Você está com obesidade grau I.";
    } else if (imc >= 34.9 && imc < 39.9) {
        resultado.textContent = nome.value + ", seu IMC é " + imc.toFixed(1) + ". Você está com obesidade grau II.";
    } else {
        resultado.textContent = nome.value + ", seu IMC é " + imc.toFixed(1) + ". Você está com obesidade grau III.";
    }
 
}
 
calcular.addEventListener("click", calcularImc);