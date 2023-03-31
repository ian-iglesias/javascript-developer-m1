
/* 
    1) Faça um algorítimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.

    Média = (nota 1 + nota 2 + nota 3) / 3;

    Classificação:
    - Média menor que 5, reprovação;
    - Média entre 5 e 7, recuperação;
    - Média acima de 7, passou de semestre;
*/
    // Entrada das notas
const nota1 = parseFloat(prompt("Digite a primeira nota:"));
const nota2 = parseFloat(prompt("Digite a segunda nota:"));
const nota3 = parseFloat(prompt("Digite a terceira nota:"));

// Cálculo da média
const media = (nota1 + nota2 + nota3) / 3;

// Classificação
if (media < 5) {
  console.log("Reprovado");
} else if (media >= 5 && media < 7) {
  console.log("Recuperação");
} else {
  console.log("Passou de semestre");
}

// Impressão da média
console.log("Média: " + media.toFixed(2));

/*
    2) O IMC – Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta. 

    Formula do IMC:
    IMC = peso / (altura * altura)

    Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

    IMC em adultos Condição:
    - Abaixo de 18.5 Abaixo do peso;
    - Entre 18.5 e 25 Peso normal;
    - Entre 25 e 30 Acima do peso;
    - Entre 30 e 40 Obeso;
    - Acima de 40 Obsesidade Grave;
*/
    // Entrada do peso e da altura
const peso = parseFloat(prompt("Digite o seu peso em kg:"));
const altura = parseFloat(prompt("Digite a sua altura em metros:"));

// Cálculo do IMC
const imc = peso / (altura * altura);

// Condição de acordo com o IMC
if (imc < 18.5) {
  console.log("Abaixo do peso");
} else if (imc >= 18.5 && imc < 25) {
  console.log("Peso normal");
} else if (imc >= 25 && imc < 30) {
  console.log("Acima do peso");
} else if (imc >= 30 && imc < 40) {
  console.log("Obeso");
} else {
  console.log("Obesidade Grave");
}

// Impressão do IMC
console.log("IMC: " + imc.toFixed(2));

/*
    3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
    Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

    Código Condição de pagamento:
    - À vista Débito, recebe 10% de desconto;
    - À vista no Dinheiro ou PIX, recebe 15% de desconto;
    - Em duas vezes, preço normal de etiqueta sem juros;
    - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/
    // Entrada do preço e da condição de pagamento
const precoEtiqueta = parseFloat(prompt("Digite o preço normal de etiqueta:"));
const condicaoPagamento = parseInt(prompt("Digite o código da condição de pagamento:\n1 - À vista Débito\n2 - À vista Dinheiro ou PIX\n3 - Em duas vezes\n4 - Acima de duas vezes"));

// Cálculo do preço final
let precoFinal;

switch (condicaoPagamento) {
  case 1:
    precoFinal = precoEtiqueta * 0.9;
    break;
  case 2:
    precoFinal = precoEtiqueta * 0.85;
    break;
  case 3:
    precoFinal = precoEtiqueta;
    break;
  case 4:
    precoFinal = precoEtiqueta * 1.1;
    break;
  default:
    console.log("Código inválido");
}

// Impressão do preço final
if (precoFinal) {
  console.log("Preço a ser pago: R$" + precoFinal.toFixed(2));
}
