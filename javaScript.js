const peso = documento.getElementById ("peso")
const altura = documento.getElementById ("altura")
const calcular = documento.getElementById ("calcular")
const resultado = documento.getElementById ("resultado")

function calcularImc ( ) {
   const imc = parseFloat(peso.value) / (parseFloat(altura.value)) ** 2
   resultado.textContent = imc
}

calcular.addEventListener("click", calcularImc)
