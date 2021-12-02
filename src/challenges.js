// Desafio 1
function compareTrue(param1, param2) {
  if (param1 === true && param2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(frase) {
  let resultado = frase.split(" ");
return resultado;
}

// Desafio 4
function concatName(array) {
  let firstName = array[0];
  let lastName = array[(array.length) -1];
  let result = lastName + ", " + firstName;
  return result;
}
let array = ["Lucas", "Fernando", "Alline"]
console.log(concatName(array))

// Desafio 5
function footballPoints(wins, ties) {
 return (wins * 3) + (ties * 1);
}

// Desafio 6
function highestCount(numeros) {
  let maiorNumero = numeros[0];
  let repeticoes = 0;
  for (index = 0; index < numeros.length; index += 1) {
    if (numeros[index] > maiorNumero) {
      maiorNumero = numeros[index]
      repeticoes = 1;
    } else if (numeros[index] === maiorNumero) {
      repeticoes +=1;
    }
  }
  return repeticoes;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distCat1 = ((cat1 - mouse) * (-1));
  let distCat2 = ((cat2 - mouse) * (-1));
  let result;
  if (distCat1 < distCat2) {
    result = "cat1"
  } else if (distCat1 > distCat2) {
    result = "cat2";
  } else if (distCat1 === distCat2) {
    result = "Os gatos trombam e o rato foge"
  }
  return result;
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
