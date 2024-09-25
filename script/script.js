function calcular() {
  const valor1 = parseFloat(document.getElementsByClassName("valor1").value);
  const valor2 = parseFloat(document.getElementById("valor2").value);
  const operacao = document.getElementById("operacao").value;
  let resultado = 0;

  if(isNaN(valor1) || isNaN(valor2)){
    alert("Por favor digite um valor válido")
    return;
  }

  switch (operacao) {
    case "+":
      resultado = valor1 + valor2;
      break;
    case "-":
      resultado = valor1 - valor2;
      break;
    case "*":
      resultado = valor1 * valor2;
      break;
    case "/":
      resultado = valor1 / valor2;
      break;
  }
  alert(resultado)
}

function limpar() {
    const valor1 = document.getElementById("valor1").value = '';
    const valor2 = document.getElementById("valor2").value = '';
    const operacao = document.getElementById("operacao").value = '';
}
