const nome = document.getElementById('nome').value;
   const peso = document.getElementById ('peso').value;
   const altura = document.getElementById ('altura').value;
   const resultado = document.getElementById ('resultado');
const calcular = document.getElementById('calcular');

function calcularImc () {
      
     const valorImc = (peso / (altura * altura)).toFixed(2);

     if (valorImc < 18.5) {
     
      resultado.textContent = nome.value + ", seu IMC é " + valorImc + ". Você está abaixo do peso.";
   } else if (imc >= 18.5 && imc < 24.9) {
       resultado.textContent = nome.value + ", seu IMC é " + valorImc + ". Você está com o peso ideal. Parabéns!";
   } else if (imc >= 24.9 && imc < 29.9) {
       resultado.textContent = nome.value + ", seu IMC é " + valorImc + ". Você está acima do peso.";
   } else if (imc >= 29.9 && imc < 34.9) {
       resultado.textContent = nome.value + ", seu IMC é " + valorImc + ". Você está com obesidade grau I.";
   } else if (imc >= 34.9 && imc < 39.9) {
       resultado.textContent = nome.value + ", seu IMC é " + valorImc + ". Você está com obesidade grau II.";
   } else {
       resultado.textContent = nome.value + ", seu IMC é " + valorImc + ". Você está com obesidade grau III.";
   }
}

calcular.addEventListener("click", calcularImc);
