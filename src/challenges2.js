// Desafio 10
function techList(tech, name) {
  let objectList = [];
  let techOrdenada = tech.sort();
  if (tech.length === 0) {
    return ('Vazio!');
  }
  for (let index = 0; index < techOrdenada.length; index += 1) {
    let object = {
      tech: '',
      name: name,
    };
    object.tech = techOrdenada[index];
    objectList.push(object);
  }
  return (objectList);
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
