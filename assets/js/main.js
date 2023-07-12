
const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e) {
  e.preventDefault()

  const pesoForm = form.querySelector('#peso')
  const alturaForm = form.querySelector('#altura')

  const peso = Number(pesoForm.value);
  const altura = Number(alturaForm.value);

  const ImcCalculo = peso / altura ** 2;
  const Imc = ImcCalculo;


  if (!peso | !altura) {
    const erro = document.querySelector('#resultado');
    erro.innerHTML = 'Valores invalidos.';
    erro.classList.add('erro');
  };

  if (Imc >= 17  && Imc <= 18.49) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = `Você está abaixo do peso e seu Imc é de ${Imc.toFixed(1)}`;

  } else if (Imc >= 18.5 && Imc <= 24.99) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = `Você está com o peso normal e seu Imc é de ${Imc.toFixed(1)}`; 

  } else if (Imc >= 25 && Imc <= 29.99) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = `Você está acima do peso e seu Imc é de ${Imc.toFixed(1)}`;

  } else if (Imc >= 30 && Imc <= 34.99) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = `Você está obeso e seu Imc é de ${Imc.toFixed(1)}`;
  }

  console.log(Imc)


  console
})










// A função resultado recebe o argumento e adiciona esse argumento
// no html com o innerHTML. 
