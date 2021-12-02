// Desafio 10
function techList(tech, name) {
  if (tech.length > 0) {
    tech.sort();
    for (index = 0; index < tech.length; index += 1) {
      tech[index] = {
        tech: tech[index],
        name: name,
      };
    }
  } else {
    tech = 'Vazio!';
  }
  return tech;
}

// Desafio 11
function generatePhoneNumber(numeros) {
  // seu código aqui
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let somaAB = Math.abs(A + B);
  let somaAC = Math.abs(A + C);
  let somaBC = math.abs(B + C);
  let diferencaAB = Math.abs(A - B);
  if (lineA < somaBC && lineA > diferencaBC)
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
