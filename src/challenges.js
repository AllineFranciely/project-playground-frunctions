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
  let distCat1 = Math.abs(cat1 - mouse);
  let distCat2 = Math.abs(cat2 - mouse);
  let resultado;
  if (distCat1 < distCat2) {
    resultado = "cat1";
  } else if (distCat1 > distCat2) {
    resultado = "cat2";
  } else if (distCat1 === distCat2) {
    resultado = "Os gatos trombam e o rato foge";
  }
  return resultado;
}
let test = 2;
let test2 = 3;
let test3 = 3;
console.log(catAndMouse(test, test2, test3));

// Desafio 8
function fizzBuzz(numeros) {
  let answer = [];
  for (index = 0; index < numeros.length; index += 1) {
    if (numeros[index] % 3 === 0 && numeros[index] % 5 !== 0) {
      answer[index] = "fizz"; 
    } else if (numeros[index] % 3 !== 3 && numeros[index] % 5 === 0) {
      answer[index] = "buzz";
    } else if (numeros[index] % 3 === 0 && numeros[index] % 5 === 0) {
      answer[index] = "fizzBuzz";
    } else if ( numeros[index] % 3 !== 0 && numeros[index] % 5 !== 0) {
      answer[index] = "bug!";
    }
  }
  return answer;
}
let numeros = [15, 3, 5, 7];
console.log(fizzBuzz(numeros));

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
